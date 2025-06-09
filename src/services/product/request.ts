import { axiosInstance } from "@/libs/axios";
import { FetchDashboardProductsProps } from ".";
import { ProductType } from "@/models/product";
import { Base } from "@/interfaces/base";

type DashboardProductType = Base & {
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

type ProductDetail = Base & {
  product: ProductType;
};

export const fetchProductDetail = async (
  productId: string
): Promise<ProductDetail> => {
  try {
    const response = await axiosInstance.get("/apis/product/detail", {
      params: {
        id: productId,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error();
  }
};
