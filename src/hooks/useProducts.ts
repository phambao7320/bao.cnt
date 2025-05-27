"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ProductType } from "@/models/product";
import { clientAxios } from "@/libs/axios";

const LIMIT = 5;

export const useProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [pagination, setPagination] = useState(1);

  const fetchProducts = useCallback(async () => {
    const { data } = await clientAxios.get("/apis/product/list");
    if (data.success) {
      setProducts(data.products);
    }
  }, [clientAxios]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return {
    products,
  };
};
