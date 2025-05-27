"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { assets } from "@/assets/assets";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      className="w-28 lg:w-32 cursor-pointer"
      src={assets.logo}
      alt="Logo"
    />
  );
};

export default Logo;
