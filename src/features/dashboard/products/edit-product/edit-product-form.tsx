"use client";

import ProductForm from "@/components/ui/forms/product";
import { useEditProduct } from "@/hooks/use-edit-product";
import React from "react";

const EditProductForm = () => {
  const { form, onSubmit } = useEditProduct();

  return <ProductForm form={form} onSubmit={onSubmit} type="edit" />;
};

export default EditProductForm;
