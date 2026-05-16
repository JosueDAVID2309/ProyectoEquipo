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
import Link from "next/link";
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
            <Link href="/instructor/dashboard">
              <SidebarMenuButton>
                <ChartArea /> Dashboard
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="/instructor/alumnos">
              <SidebarMenuButton>
                <User2 /> Alumnos
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="/instructor/tareas-seminario">
              <SidebarMenuButton>
                <BookText /> Tareas para Seminario
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <Link href="/instructor/perfil">
              <SidebarMenuButton>
                <User2 /> Perfil
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
