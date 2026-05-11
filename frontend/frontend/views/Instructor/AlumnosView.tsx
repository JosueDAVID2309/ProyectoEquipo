"use client";
import React from "react";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Grid2X2, UsersRound, ToyBrick } from "lucide-react";
import { columns, AlumnoEj } from "@/components/shared/AlumnosColumns";
import { DataTable } from "@/components/shared/DataTable";

function AlumnosView() {
  const alumnosEjemplo: AlumnoEj[] = [
    {
      id: 1,
      nombres: "Carlos",
      apellidos: "Ramirez Soto",
      correo: "carlos.ramirez@correo.com",
      pea_avance: 78,
      tareas_avance: 65,
      operaciones_avance: 82,
    },
    {
      id: 2,
      nombres: "Lucia",
      apellidos: "Fernandez Ruiz",
      correo: "lucia.fernandez@correo.com",
      pea_avance: 92,
      tareas_avance: 88,
      operaciones_avance: 95,
    },
    {
      id: 3,
      nombres: "Andres",
      apellidos: "Torres Medina",
      correo: "andres.torres@correo.com",
      pea_avance: 45,
      tareas_avance: 50,
      operaciones_avance: 40,
    },
    {
      id: 4,
      nombres: "Valeria",
      apellidos: "Mendoza Castro",
      correo: "valeria.mendoza@correo.com",
      pea_avance: 84,
      tareas_avance: 79,
      operaciones_avance: 90,
    },
    {
      id: 5,
      nombres: "Diego",
      apellidos: "Salazar Paredes",
      correo: "diego.salazar@correo.com",
      pea_avance: 60,
      tareas_avance: 72,
      operaciones_avance: 68,
    }
  ];

  const [container, setContainer] = useState("bloque");
  return (
    <div className="flex flex-col">
      <div className="space-y-2">
        <Label className="text-2xl">Alumnos</Label>
        <p className="text-gray-400">
          Aqui puedes ver y gestionar a sus alumnos asignados a tu curso.
        </p>
      </div>
      <div className="flex flex-col mt-20 ">
        <Label className="text-gray-400 text-1xl">Sugerido</Label>
        <div className="flex flex-col space-y-1">
          <button
            className="flex items-center justify-between rounded-sm p-2 transition-colors hover:bg-blue-900"
            onClick={() => setContainer("bloque")}
          >
            <div className="flex items-center gap-2">
              <ToyBrick />
              <span>Bloques (0)</span>
            </div>
            <Grid2X2 />
          </button>
          <button
            className="flex items-center justify-between rounded-sm p-2 transition-colors hover:bg-blue-900"
            onClick={() => setContainer("alumnos")}
          >
            <div className="flex items-center gap-2">
              <UsersRound />
              <span>Aprendices ({alumnosEjemplo.length})</span>
            </div>
            <Grid2X2 />
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-10 space-y-2">
        {container === "bloque" && <BloqueContainer />}

        {container === "alumnos" && <AlumnosContainer data={alumnosEjemplo} />}
      </div>
    </div>
  );
}

function BloqueContainer() {
  return (
    <>
      <div className="flex justify-between">
        <Label className="text-2xl">Bloques Asignados</Label>
        <Button>
          <ToyBrick /> Crear Bloque
        </Button>
      </div>
      <Label className="text-1xl font-normal">0 Bloques activos</Label>
      <div id="contenedor" className="flex justify-center items-end">
        <Label className="font-normal text-gray-400">
          No hay bloques asignados...
        </Label>
      </div>
    </>
  );
}

type AlumnosProps = {
  data: AlumnoEj[]
}

function AlumnosContainer({data}:AlumnosProps) {
  return (
    <>
      <Label className="text-2xl">Lista de aprendices</Label>
      <div className="flex flex-row space-x-4">
        <Label className="text-1xl font-normal">0 Bloques activos</Label>
        <Label className="text-1xl font-normal">({data.length}) Aprendices registrados</Label>
      </div>
      <DataTable columns={columns} data={data} />
    </>
  );
}

export default AlumnosView;
