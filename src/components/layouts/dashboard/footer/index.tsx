import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const FooterDashboard = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <Image className="hidden md:block" src={assets.logo} alt="logo" />
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          Copyright 2025 © baopn.cnt All Right Reserved.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Link href="#">
          <Image src={assets.facebook_icon} alt="facebook_icon" />
        </Link>
        <Link href="#">
          <Image src={assets.twitter_icon} alt="twitter_icon" />
        </Link>
        <Link href="#">
          <Image src={assets.instagram_icon} alt="instagram_icon" />
        </Link>
      </div>
    </div>
  );
};

export default FooterDashboard;
