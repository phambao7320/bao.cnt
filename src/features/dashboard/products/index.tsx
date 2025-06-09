import React from "react";
import { Heading } from "@/components/ui/heading";
import { PageContainer } from "@/components/layouts";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProductDataTable } from "./product-data-table";

const DashboardProductsPage = () => {
  return (
    <PageContainer scrollable={false} className="flex flex-col rounded-3xl">
      <div className="flex items-center justify-between">
        <Heading title="Product list" />
        <div className="flex items-center justify-between gap-5">
          <Link
            href={"/dashboard/products/add"}
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <CirclePlus /> Add Product
          </Link>
        </div>
      </div>
      <ProductDataTable />
    </PageContainer>
  );
};

export default DashboardProductsPage;
