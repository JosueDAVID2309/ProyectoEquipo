"use client";
import React, { useEffect, useState } from "react";
import { authApi } from "@/api/auth.api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { User, Mail, Phone, Fingerprint, Edit, Lock, Check, X, ShieldAlert } from "lucide-react";

function PerfilView() {
  const [instructor, setInstructor] = useState<any>(null);
  const [editando, setEditando] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState({ tipo: "", texto: "" });

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correoPersonal, setCorreoPersonal] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [imageurl, setImageurl] = useState("");

  const [mostrandoClave, setMostrandoClave] = useState(false);
  const [nuevaClave, setNuevaClave] = useState("");

  useEffect(() => {
    const userStorage = localStorage.getItem("instructor");
    if (userStorage) {
      const data = JSON.parse(userStorage);
      setInstructor(data);
      setNombre(data.nombre || "");
      setApellido(data.apellido || "");
      setTelefono(data.telefono || "");
      setCorreoPersonal(data.correoPersonal || "");
      setEspecialidad(data.especialidad || "");
      setImageurl(data.imageurl || "");
    }
  }, []);

  if (!instructor) {
    return <div className="text-center p-10 text-white">Cargando perfil del instructor...</div>;
  }

  const handleGuardarPerfil = async () => {
    setLoading(true);
    setMensaje({ tipo: "", texto: "" });

    try {
      const res = await authApi.editarPerfil({
        id: instructor.id,
        nombre,
        apellido,
        telefono,
        correoPersonal,
        especialidad,
        imageurl,
      });

      if (res.success) {
        const actualizado = { 
          ...instructor, 
          nombre, 
          apellido, 
          telefono, 
          correoPersonal, 
          especialidad, 
          imageurl 
        };
        setInstructor(actualizado);
        localStorage.setItem("instructor", JSON.stringify(actualizado));
        
        setMensaje({ tipo: "success", texto: res.message });
        setEditando(false);
      } else {
        setMensaje({ tipo: "error", texto: res.message });
      }
    } catch (error) {
      setMensaje({ tipo: "error", texto: "Error de conexión con el servidor." });
    } finally {
      setLoading(false);
    }
  };

  const handleCambiarClave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevaClave.trim()) return;
    setLoading(true);

    try {
      const res = await authApi.cambiarClave(instructor.id, nuevaClave);
      if (res.success) {
        setMensaje({ tipo: "success", texto: res.message });
        setNuevaClave("");
        setMostrandoClave(false);
      } else {
        setMensaje({ tipo: "error", texto: res.message });
      }
    } catch (error) {
      setMensaje({ tipo: "error", texto: "Error al cambiar la contraseña." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      {mensaje.texto && (
        <div className={`p-4 mb-6 rounded-lg text-sm border text-center font-medium flex justify-center items-center gap-2 ${
          mensaje.tipo === "success" 
            ? "bg-green-500/10 border-green-500/30 text-green-400" 
            : "bg-red-500/10 border-red-500/30 text-red-400"
        }`}>
          {mensaje.tipo === "success" ? <Check size={16}/> : <ShieldAlert size={16}/>}
          {mensaje.texto}
        </div>
      )}

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white">Mi Perfil</h1>
          <p className="text-sm text-gray-300">Gestiona tu información Personal</p>
        </div>
        
        {!editando ? (
          <Button variant="outline" className="text-black bg-white hover:bg-gray-200" onClick={() => setEditando(true)}>
            <Edit size={16} className="mr-2"/> Editar perfil
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="destructive" onClick={() => setEditando(false)} disabled={loading}>
              <X size={16} className="mr-2"/> Cancelar
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleGuardarPerfil} disabled={loading}>
              <Check size={16} className="mr-2"/> {loading ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        <div className="md:col-span-4 flex flex-col items-center space-y-4">
          <div className="relative group">
            <Avatar className="w-40 h-40 border-2 border-gray-700">
              <AvatarImage src={imageurl} className="object-cover" />
              <AvatarFallback className="bg-gray-800">
                <User size={80} className="text-gray-400" />
              </AvatarFallback>
            </Avatar>

            {editando && (
              <label className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Edit size={24} className="text-white mb-1" />
                <span className="text-[10px] text-white font-medium">Subir Foto</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        setImageurl(reader.result as string);
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            )}
          </div>

          <Badge className="px-4 py-1 bg-blue-600 text-white">
            Instructor
          </Badge>
          <Badge variant="outline" className="border-gray-600 text-gray-300">
            {especialidad || "Sin especialidad"}
          </Badge>
          
          <Button 
            variant="link" 
            className="text-gray-400 text-xs hover:text-white mt-2"
            onClick={() => setMostrandoClave(!mostrandoClave)}
          >
            <Lock size={12} className="mr-1" /> {mostrandoClave ? "Cerrar opción" : "Cambiar Contraseña"}
          </Button>

          {mostrandoClave && (
            <form onSubmit={handleCambiarClave} className="w-full bg-gray-900/50 p-4 rounded-xl border border-gray-800 space-y-3 mt-2">
              <div className="space-y-1">
                <label className="text-[10px] text-gray-400 uppercase font-bold">Nueva Contraseña</label>
                <Input 
                  type="password" 
                  placeholder="Mínimo 6 caracteres" 
                  value={nuevaClave}
                  onChange={(e) => setNuevaClave(e.target.value)}
                  className="bg-transparent text-sm"
                  required
                />
              </div>
              <Button type="submit" size="sm" className="w-full bg-white text-black hover:bg-gray-200" disabled={loading}>
                Actualizar Clave
              </Button>
            </form>
          )}
        </div>

        <div className="md:col-span-8 space-y-8">
          <div className="flex items-center border-b border-gray-800 pb-2 text-gray-400 gap-3">
            <User size={18}></User>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">Información Personal</span>
              <p className="text-xs text-gray-500">Datos registrados en el sistema académico</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Nombres</label>
              <Input 
                value={nombre} 
                onChange={(e) => setNombre(e.target.value)}
                readOnly={!editando} 
                className={`bg-transparent ${editando ? "border-blue-500 focus:ring-1" : "border-gray-800"}`} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Apellidos</label>
              <Input 
                value={apellido} 
                onChange={(e) => setApellido(e.target.value)}
                readOnly={!editando} 
                className={`bg-transparent ${editando ? "border-blue-500 focus:ring-1" : "border-gray-800"}`} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Phone size={14}/>Teléfono Móvil
              </label>
              <Input 
                value={telefono} 
                onChange={(e) => setTelefono(e.target.value)}
                readOnly={!editando} 
                className={`bg-transparent ${editando ? "border-blue-500 focus:ring-1" : "border-gray-800"}`} 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Fingerprint size={14}/># DNI (No editable)
              </label>
              <Input 
                value={instructor.dni} 
                readOnly 
                className="bg-transparent border-gray-800 text-gray-500 cursor-not-allowed" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Mail size={14}/>Correo Institucional (No editable)
              </label>
              <Input 
                value={instructor.correoInstitucional} 
                readOnly 
                className="bg-transparent border-gray-800 text-gray-500 cursor-not-allowed" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Mail size={14}/>Correo Personal
              </label>
              <Input 
                value={correoPersonal} 
                onChange={(e) => setCorreoPersonal(e.target.value)}
                readOnly={!editando} 
                className={`bg-transparent ${editando ? "border-blue-500 focus:ring-1" : "border-gray-800"}`} 
              />
            </div>
          </div>
        </div> 
      </div> 
    </div>
  );
}

export default PerfilView;