"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "@/api/auth.api";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Login() {
  const router = useRouter();
  
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await authApi.login(correo, clave);

      if (res.success) {
        localStorage.setItem("instructor", JSON.stringify(res.data));
        
        router.push("/instructor");
      } else {
        setErrorMsg(res.message);
      }
    } catch (error) {
      console.error("Error al conectar con el servidor:", error);
      setErrorMsg("No se pudo conectar con el servidor. Revisa si el backend está encendido.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black-100 px-4">
      <Card className="w-full max-w-md shadow-xl border-0">
        <form onSubmit={handleSubmit}>
          <CardHeader className="space-y-4 text-center">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/Senati-Symbol.png"
                width={80}
                height={80}
                alt="Logo Senati"
                className="object-contain"
              />
              <Label className="text-xl font-bold tracking-wide">SENATI</Label>
            </div>
            <div className="space-y-1 mb-10">
              <CardTitle className="text-2xl">Bienvenido</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                Inicia sesión para continuar con tu cuenta de Senati
              </CardDescription>
            </div>
          </CardHeader>

          <CardContent className="space-y-5">
            {errorMsg && (
              <div className="p-3 text-sm text-red-500 bg-red-100/10 border border-red-500/20 rounded-lg text-center font-medium">
                {errorMsg}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="user">Correo Institucional</Label>
              <Input
                id="user"
                type="text"
                placeholder="usuario@senati.pe"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Contraseña</Label>
                <Button
                  variant="link"
                  type="button"
                  className="h-auto p-0 text-sm"
                >
                  ¿Olvidaste tu contraseña?
                </Button>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="123456"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                required
              />
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Input id="remember" type="checkbox" className="h-4 w-4" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Recordarme
              </Label>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default Login;