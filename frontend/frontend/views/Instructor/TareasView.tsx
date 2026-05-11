import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// Se añade 'Settings' a la importación
import { Users, Calendar, LayoutGrid, Settings } from "lucide-react"

const bloquesSeminario = [
  { id: 'PDSDS601', carrera: 'Desarrollo de Software', semestre: 'VI Semestre', bloque: '01', tareas: 13, mensajes: 2 },
  { id: 'PDSDS602', carrera: 'Desarrollo de Software', semestre: 'VI Semestre', bloque: '02', tareas: 0, mensajes: 2 },
  { id: 'PDSDS501', carrera: 'Desarrollo de Software', semestre: 'V Semestre', bloque: '01', tareas: 0, mensajes: 1 },
  { id: 'PDSRS601', carrera: 'Redes y Seguridad', semestre: 'V Semestre', bloque: '01', tareas: 0, mensajes: 1 },
];

export default function TareasView() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6">
      {/*Cabecera*/}
      <header>
        <h1 className="text-2xl font-bold tracking-tight text-white">Tareas del Seminario</h1>
        <p className="text-zinc-400">
          Aquí podrás gestionar las tareas del seminario asignadas a los alumnos. Puedes ver el progreso de cada tarea, calificar y proporcionar retroalimentación.
        </p>
        
        <h2 className="text-xl font-semibold text-white mt-5 tracking-tight">
          Selecciona uno de los bloques para gestionar las tareas del seminario.
        </h2>
      </header>

      <hr className="border-zinc-800"/>

      {/*Bloques*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bloquesSeminario.map((item) => (
          <Card key={item.id} className="relative overflow-hidden border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-colors">
            
            {/*Indicadores superiores*/}
            <div className="absolute top-3 right-3 flex gap-2">
               <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span className="text-xs text-blue-400 font-medium">{item.tareas}</span>
               </div>
               <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span className="text-xs text-orange-400 font-medium">{item.mensajes}</span>
               </div>
            </div>

            <CardHeader className="pb-2">
              <CardTitle className="text-blue-400 text-lg flex items-center gap-2">
                <span className="bg-blue-500/20 p-1.5 rounded">
                  <LayoutGrid className="w-4 h-4 text-blue-500"/>
                </span>
                {item.id}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-zinc-300">
                <Users className="w-4 h-4 text-zinc-500"/>
                <span className="text-zinc-500">Carrera:</span> {item.carrera}
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-4 h-4 text-zinc-500"/>
                <span className="text-zinc-500">Semestre:</span> {item.semestre}
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <LayoutGrid className="w-4 h-4 text-zinc-500"/>
                <span className="text-zinc-500">Bloque:</span> {item.bloque}
              </div>
            </CardContent>

            <CardFooter>
              <Button className="w-full bg-white hover:bg-zinc-100 text-black font-semibold transition-all gap-2">
                <Settings className="w-4 h-4"/>
                Gestionar
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}