"use client";
import React from "react";
import { useDashboardProducts } from "@/hooks/useDashboardProducts";

const DashboardProductsPage = () => {
  const { products } = useDashboardProducts();

  return <div>This is dashboard product page</div>;
};

export default DashboardProductsPage;
