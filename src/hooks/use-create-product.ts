"use client";

import { axiosInstance } from "@/libs/axios";
import {
  defaultValues,
  ProductFormData,
  ProductFormSchema,
} from "@/schemas/product.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormReturn } from "react-hook-form";

type AddProductFormReturn = {
  form: UseFormReturn<ProductFormData>;
  onSubmit: (data: ProductFormData) => Promise<void>;
};

export const useCreateProduct = (): AddProductFormReturn => {
  const form = useForm<ProductFormData>({
    defaultValues,
    resolver: zodResolver(ProductFormSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    formData.append("offerPrice", (data?.offerPrice || 0).toString());
    data.images.forEach((file: File) => {
      if (file) formData.append("images", file);
    });

    console.log("Form data:", data);
    const result = await axiosInstance.post("/apis/product/add", formData);

    console.log("result", result);
  };

  return {
    form,
    onSubmit,
  };
};
