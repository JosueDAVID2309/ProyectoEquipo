"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { day: "Lun", searches: 120 },
  { day: "Mar", searches: 145 },
  { day: "Mie", searches: 138 },
  { day: "Jue", searches: 170 },
  { day: "Vie", searches: 195 },
  { day: "Sab", searches: 110 },
  { day: "Dom", searches: 80 },
]

const chartConfig = {
  searches: {
    label: "Búsquedas",
    color: "#8b5cf6",
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 w-full">
      
      {/* SECCIÓN DEL GRÁFICO (Izquierda) */}
      <Card className="lg:col-span-3 bg-[#1c1d21] border-gray-800 shadow-none p-6">
        <CardHeader className="p-0 mb-6">
          <CardTitle className="text-sm font-medium text-gray-400 uppercase tracking-wider">
            Monitoreo PEA
          </CardTitle>
          <p className="text-xs text-gray-500 font-light">Día</p>
        </CardHeader>
        <CardContent className="p-0">
          <ChartContainer config={chartConfig} className="h-[250px] w-full">
            <AreaChart data={chartData} margin={{ left: -20, right: 10 }}>
              <defs>
                <linearGradient id="fillPurple" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical stroke="#262626" strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={10}
                tick={{ fill: '#636363', fontSize: 11 }}
              />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#636363', fontSize: 11 }} />
              <ChartTooltip
                cursor={{ stroke: '#404040', strokeWidth: 1 }}
                content={<ChartTooltipContent hideLabel />}
              />
              <Area
                dataKey="searches"
                type="monotone"
                fill="url(#fillPurple)"
                stroke="#8b5cf6"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>

      {/* SECCIÓN DE LA LISTA (Derecha) */}
      <Card className="lg:col-span-2 bg-[#1c1d21] border-gray-800 shadow-none p-6 flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">
              Top 10 Más Vistos
            </h3>
            <p className="text-[10px] text-gray-500 mt-1">Listado por mayor número de visitas</p>
          </div>
        </div>

        <div className="flex-1 overflow-auto space-y-1">
          {/* Cabecera de la tabla interna */}
          <div className="grid grid-cols-3 text-[10px] text-gray-500 uppercase pb-2 border-b border-gray-800">
            <span>Empresa / Puesto</span>
            <span className="text-center">Fecha</span>
            <span className="text-right">Visitas</span>
          </div>
          
          {/* Filas de datos */}
          <ListRow name="SoftwareX" role="Dev Full Stack" date="05/05/2026" val="231" />
          <ListRow name="TechInnovate" role="UI/UX Designer" date="03/05/2026" val="218" />
          <ListRow name="CloudSys" role="Arquitecto Cloud" date="01/05/2026" val="205" />
          <ListRow name="SecureNet" role="Ciberseguridad" date="29/04/2026" val="197" />
          <ListRow name="AI Labs" role="ML Engineer" date="27/04/2026" val="186" />
        </div>
      </Card>
    </div>
  )
}

// Sub-componente para las filas de la lista
function ListRow({ name, role, date, val }: { name: string, role: string, date: string, val: string }) {
  return (
    <div className="grid grid-cols-3 items-center py-3 border-b border-gray-800/40 last:border-0 hover:bg-white/5 transition-colors px-1 rounded-sm">
      <div className="flex flex-col">
        <span className="text-[12px] font-medium text-gray-200">{name}</span>
        <span className="text-[10px] text-gray-500 truncate">{role}</span>
      </div>
      <span className="text-[10px] text-gray-400 text-center">{date}</span>
      <span className="text-[12px] font-semibold text-blue-400 text-right">{val}</span>
    </div>
  )
}