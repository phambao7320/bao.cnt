"use client";

import { axiosInstance } from "@/libs/axios";
import {
  defaultValues,
  ProductFormData,
  ProductFormSchema,
} from "@/schemas/product.schema";
import { useFetchProductDetail } from "@/services/product";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useForm, UseFormReturn } from "react-hook-form";

type AddProductFormReturn = {
  form: UseFormReturn<ProductFormData>;
  onSubmit: (data: ProductFormData) => Promise<void>;
};

export const useEditProduct = (): AddProductFormReturn => {
  const { productId = "" } = useParams();

  const { data, isPending } = useFetchProductDetail(productId as string);

  console.log(data, isPending);

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
    const result = await axiosInstance.post("/apis/product/edit", formData, {
      params: {
        id: productId,
      },
    });

    console.log("result", result);
  };

  useEffect(() => {
    if (productId && data?.product) {
      form.reset({
        ...data.product,
        images: data.product.photos,
      });
    }
  }, [data, productId]);

  return {
    form,
    onSubmit,
  };
};
