import { ProductType } from "@/models/product";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardProducts } from "./request";

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
