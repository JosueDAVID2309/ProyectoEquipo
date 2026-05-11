import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { User, Mail, Phone, Fingerprint, Edit, Lock } from "lucide-react"

function PerfilView() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-white">
      {/*Cabeza*/}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-white">Mi Perfil</h1>
          <p className="text-sm text-gray-300">Gestiona tu informacion Personal</p>
        </div>
        <Button variant="outline">
          <Edit/> Editar perfil
        </Button>
      </div>

      {/*Cuerpo*/}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/*Columna Izquierda*/}
        <div className="md:col-span-4 flex flex-col items-center space-y-4">
          <Avatar className="w-40 h-40">
            <AvatarImage src="" />
            <AvatarFallback>
              <User size={80} />
            </AvatarFallback>
          </Avatar>
          <Badge className="px-4">
            Instructor
          </Badge>
          <Button variant="link" className="text-gray-500 text-xs">
            <Lock size={12} /> Cambiar Contraseña
          </Button>
        </div>

        {/*Columna Derecha*/}
        <div className="md:col-span-8 space-y-8">
          <div className="flex items-center border-b pb-2 text-gray-400 gap-3">
            <User size={18}></User>
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm">Información Personal</span>
              <p className="text-xs text-gray-500">Datos de contacto y ubicación</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/*Nombre*/}
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold">Nombre y Apellidos</label>
              <Input placeholder="Nombre y apellidos" value="Instructor" readOnly className="bg-transparent" />
            </div>

            {/*Telefono*/}
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Phone size={14}/>Teléfono Móvil</label>
              <Input placeholder="Teléfono Móvil" value="999999999" readOnly className="bg-transparent" />
            </div>

            {/*DNI*/}
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Fingerprint size={14}/># DNI</label>
              <Input placeholder="DNI" value="—" readOnly className="bg-transparent" />
            </div>

            {/*Correo Institucional*/}
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Mail size={14}/>Correo Institucional</label>
              <Input placeholder="Correo Institucional" value="instructor@senati.edu.pe" readOnly className="bg-transparent" />
            </div>

            {/*Correo Personal*/}
            <div className="space-y-2">
              <label className="text-xs text-gray-500 uppercase font-bold flex gap-2 items-center">
                <Mail size={14}/>Correo Personal</label>
              <Input placeholder="Correo Personal" value="instructor@gmail.com" readOnly className="bg-transparent" />
            </div>
          </div>
        </div> 
      </div> 
    </div>
  )
}

export default PerfilView;