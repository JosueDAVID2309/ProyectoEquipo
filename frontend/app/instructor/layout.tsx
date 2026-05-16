import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSideBar } from "@/components/shared/AppSideBar";
import { DropdownMenuIcons } from "@/components/shared/MenuIcon";
export default function InstructorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSideBar />
        <main className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-2 border-b">
            <SidebarTrigger />
            <DropdownMenuIcons />
          </div>
          <div className="flex-1 overflow-auto p-4">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
