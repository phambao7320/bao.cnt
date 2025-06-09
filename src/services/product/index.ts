import { ProductType } from "@/models/product";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardProducts, fetchProductDetail } from "./request";

export type FetchDashboardProductsProps = {
  limit: number;
  offset: number;
  q: string;
};

export const useDashboardFetchProducts = ({
  limit,
  offset,
  q,
}: FetchDashboardProductsProps) => {
  return useQuery({
    queryKey: ["dashboard", limit, offset, q],
    queryFn: () => fetchDashboardProducts({ limit, offset, q }),
  });
};

export const useFetchProductDetail = (id: string) => {
  return useQuery({
    queryKey: ["product-detail", id],
    queryFn: () => fetchProductDetail(id),
    enabled: !!id,
  });
};
