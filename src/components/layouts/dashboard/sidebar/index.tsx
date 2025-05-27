import React from "react";
import { assets } from "@/assets/assets";
import SideBarItem from "./sidebar-item";
import Logo from "@/components/ui/logo";

const SideBar = () => {
  const menuItems = [
    {
      label: "Product List",
      url: "/dashboard/products",
      icon: assets.product_list_icon,
    },
    { label: "Orders", url: "/dashboard/orders", icon: assets.order_icon },
  ];

  return (
    <div className="md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col">
      <div className="h-15 flex items-center">
        <Logo />
      </div>
      {menuItems.map((item) => (
        <SideBarItem {...item} key={item.url} />
      ))}
    </div>
  );
};

export default SideBar;
