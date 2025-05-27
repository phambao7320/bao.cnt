"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type SideBarItemProps = {
  url: string;
  label: string;
  icon: StaticImport | string;
};

const SideBarItem = ({ url, label, icon }: SideBarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === url;

  return (
    <Link href={url} key={label} passHref>
      <div
        className={`flex items-center py-3 px-4 gap-3 ${
          isActive
            ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90"
            : "hover:bg-gray-100/90 border-white"
        }`}
      >
        <Image
          src={icon}
          alt={`${label.toLowerCase()}_icon`}
          className="w-7 h-7"
        />
        <p className="md:block hidden text-center">{label}</p>
      </div>
    </Link>
  );
};

export default SideBarItem;
