import React from "react";
import {
  HeaderDashboard,
  SideBarDashboard,
  FooterDashboard,
} from "@/components/layouts/dashboard";

type DashBoardLayoutProps = {
  children: React.ReactNode;
};

const DashBoardLayout = ({ children }: DashBoardLayoutProps) => {
  return (
    <main className="w-full flex">
      <div>
        <SideBarDashboard />
      </div>
      <div className="flex flex-col flex-1">
        <HeaderDashboard />
        {children}
        {/* <FooterDashboard /> */}
      </div>
    </main>
  );
};

export default DashBoardLayout;
