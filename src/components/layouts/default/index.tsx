import React from "react";
import Footer from "../footer";
import Header from "../header";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <main className="w-full flex flex-col items-center">
      <div className="w-[90%] max-w-[1280px]">
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default DefaultLayout;
