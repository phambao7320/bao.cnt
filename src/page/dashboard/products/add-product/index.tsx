"use client";
import React from "react";
import { useCreateProduct } from "@/hooks/useCreateProduct";
import ProductForm from "@/components/ui/forms/product";

const AddProductPage = () => {
  const methods = useCreateProduct();
  return (
    <div className="flex-1 min-h-screen flex flex-col justify-between">
      <ProductForm {...methods} />
    </div>
  );
};

export default AddProductPage;
