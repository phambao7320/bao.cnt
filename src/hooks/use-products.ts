"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ProductType } from "@/models/product";
import { axiosInstance } from "@/libs/axios";

const LIMIT = 5;

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [pagination, setPagination] = useState(1);

  const fetchProducts = useCallback(async () => {
    const { data } = await axiosInstance.get("/apis/product/list");
    if (data.success) {
      setProducts(data.products);
    }
  }, [axiosInstance]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
  };
};
