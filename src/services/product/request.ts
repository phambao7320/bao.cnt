import { axiosInstance } from "@/libs/axios";
import { FetchDashboardProductsProps } from ".";
import { ProductType } from "@/models/product";

type DashboardProductType = {
  success: boolean;
  products: ProductType[];
  totalPages: number;
};

export const fetchDashboardProducts = async ({
  limit,
  offset,
  q,
}: FetchDashboardProductsProps): Promise<DashboardProductType> => {
  try {
    const response = await axiosInstance.get("/apis/product/dashboard-list", {
      params: {
        limit,
        offset,
        q,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
