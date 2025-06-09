"use client";

import React from "react";
import { useDashboardProducts } from "@/hooks/use-dashboard-products";
import { DataTable } from "@/components/ui/modules/data-table";
import { DataTableSkeleton } from "@/components/ui/table/data-table-skeleton";
import { Suspense } from "react";
import { AlertModal } from "@/components/ui/modals/alert.dialog";

export const ProductDataTable = () => {
  const {
    products,
    columns,
    searchValue,
    onSearch,
    isPending,
    totalPages,
    pageCurrent,
    openDeleteDialog,
    handleDeleteDialog,
    handleCloseDeleteDialog,
  } = useDashboardProducts();

  return (
    <Suspense
      fallback={
        <DataTableSkeleton columnCount={5} rowCount={8} filterCount={2} />
      }
    >
      <DataTable
        data={products}
        columns={columns}
        search={{
          placeholder: "Search product name",
          onChange: onSearch,
          value: searchValue,
        }}
        loading={isPending}
        pagination={{
          pageCurrent: pageCurrent,
          totalPage: totalPages,
        }}
      />
      <AlertModal
        open={openDeleteDialog}
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your products and remove your data from our servers."
        onCancel={handleCloseDeleteDialog}
        onConfirm={handleDeleteDialog}
      />
    </Suspense>
  );
};
