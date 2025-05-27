"use client";

import { clientAxios } from "@/libs/axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export type ProductFormData = {
  name: string;
  description: string;
  category:
    | "Earphone"
    | "Headphone"
    | "Watch"
    | "Smartphone"
    | "Laptop"
    | "Camera"
    | "Accessories";
  price: number;
  offerPrice: number;
  images: File[];
};

type AddProductFormReturn = {
  control: any;
  handleSubmit: any;
  errors: any;
  imagePreviews: string[];
  handleImageChange: (index: number, file: File | undefined) => void;
  onSubmit: (data: ProductFormData) => Promise<void>;
};

export const useCreateProduct = (): AddProductFormReturn => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    defaultValues: {
      name: "",
      description: "",
      category: "Earphone",
      price: 0,
      offerPrice: 0,
      images: [],
    },
  });

  const [imagePreviews, setImagePreviews] = useState<string[]>(
    Array(4).fill("")
  );

  const handleImageChange = (index: number, file: File | undefined) => {
    if (file) {
      const updatedPreviews = [...imagePreviews];
      updatedPreviews[index] = URL.createObjectURL(file);
      setImagePreviews(updatedPreviews);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price.toString());
    formData.append("offerPrice", data.offerPrice.toString());
    data.images.forEach((file) => {
      if (file) formData.append("images", file);
    });

    console.log("Form data:", data);
    const result = await clientAxios.post("/apis/product/add", formData);

    console.log("result", result);
  };

  useEffect(() => {
    return () => {
      imagePreviews.forEach((preview) => {
        if (preview) URL.revokeObjectURL(preview);
      });
    };
  }, [imagePreviews]);

  return {
    control,
    handleSubmit,
    errors,
    imagePreviews,
    handleImageChange,
    onSubmit,
  };
};
