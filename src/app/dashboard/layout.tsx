import React from "react";
import { SideBarDashboard, HeaderDashboard } from "@/components/layouts";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="drop-shadow-2xl shadow">
        <SideBarDashboard />
      </div>
      <SidebarInset>
        <HeaderDashboard />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashBoardLayout;
