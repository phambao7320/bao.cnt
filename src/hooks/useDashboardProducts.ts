"use client";

import React, { useCallback, useEffect, useState } from "react";
import { ProductType } from "@/models/product";
import { clientAxios } from "@/libs/axios";
import { useAppContext } from "@/components/providers/AppProvider";

const LIMIT = 5;

export const useDashboardProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [pagination, setPagination] = useState(1);

  const { user } = useAppContext();

  const fetchDashboardProducts = useCallback(async () => {
    const result = await clientAxios.get("/apis/product/dashboard-list");
    console.log(result);
  }, []);

  useEffect(() => {
    if (!!user) {
      fetchDashboardProducts();
    }
  }, [user, fetchDashboardProducts]);

  return {
    products,
  };
};
