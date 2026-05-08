import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { Label } from "../ui/label";
import { BookText, ChartArea, User2 } from "lucide-react";
export function AppSideBar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex justify-center p-5">
          <Image
            src="/Senati-Symbol.png"
            width={80}
            height={80}
            alt="Logo Senati"
            className="object-contain"
          />
          <Label className="text-xl font-bold tracking-wide">SENATI</Label>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <a href="/instructor/dashboard">
              <SidebarMenuButton><ChartArea/> Dashboard</SidebarMenuButton>
            </a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="/instructor/alumnos">
              <SidebarMenuButton><User2/>Alumnos</SidebarMenuButton>
            </a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="/instructor/tareas-seminario">
              <SidebarMenuButton><BookText/>Tareas para Seminario</SidebarMenuButton>
            </a>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <a href="/instructor/perfil">
              <SidebarMenuButton><User2/>Perfil</SidebarMenuButton>
            </a>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
