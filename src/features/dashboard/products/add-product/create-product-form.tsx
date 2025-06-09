"use client";

import ProductForm from "@/components/ui/forms/product";
import { useCreateProduct } from "@/hooks/use-create-product";
import React from "react";

const CreateProductForm = () => {
  const { form, onSubmit } = useCreateProduct();

  return <ProductForm form={form} onSubmit={onSubmit} type="create" />;
};

export default CreateProductForm;
