"use client";

import React, { Suspense } from "react";
import { useDashboardProducts } from "@/hooks/useDashboardProducts";
import Pagination from "@/components/ui/modules/pagination";
import { DataTable } from "@/components/ui/modules/data-table";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { PageContainer } from "@/components/layouts";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/libs/utils";
import { buttonVariants } from "@/components/ui/button";

const DashboardProductsPage = () => {
  const {
    products,
    columns,
    searchValue,
    onSearch,
    isPending,
    totalPages,
    pageCurrent,
    onPageChange,
  } = useDashboardProducts();

  return (
    <PageContainer scrollable={false} className="flex flex-col rounded-3xl">
      <div className="flex items-center justify-between">
        <Heading title="Product list" />
        <div className="flex items-center justify-between gap-5">
          <Input
            value={searchValue}
            onChange={onSearch}
            placeholder={"Search products...."}
            className="w-60"
          />

          <Link
            href={"/dashboard/product/add"}
            className={cn(buttonVariants(), "text-xs md:text-sm")}
          >
            <CirclePlus /> Add Product
          </Link>
        </div>
      </div>
      <Suspense
        fallback={
          <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
        }
      >
        <DataTable data={products} columns={columns} />
        <div className="flex items-center justify-end space-x-2 py-4">
          <Pagination page={pageCurrent} totalPages={totalPages} />
        </div>
      </Suspense>
    </PageContainer>
  );
};

export default DashboardProductsPage;
