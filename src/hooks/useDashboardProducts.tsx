"use client";

import React, { useMemo, useState } from "react";
import { ProductType } from "@/models/product";
import { Column, ColumnDef } from "@tanstack/react-table";
import { useDebounce } from "./useDebounce";
import { useDashboardFetchProducts } from "@/services/product";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from "next/navigation";
import { DataTableColumnHeader } from "@/components/ui/table/data-table-column-header";

const LIMIT_RECORD = 5;

export const useDashboardProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchQuery = useDebounce(searchValue, 500);

  const searchParams = useSearchParams();
  const pageCurrent = Number.parseInt(searchParams.get("page") || "1");

  const { data, error, isPending } = useDashboardFetchProducts({
    limit: LIMIT_RECORD,
    offset: (pageCurrent - 1) * LIMIT_RECORD,
    q: searchQuery,
  });

  console.log("data", data);

  const columns = useMemo<ColumnDef<ProductType>[]>(
    () => [
      {
        id: "select",
        size: 35,
        enableResizing: true,
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) =>
              table.toggleAllPageRowsSelected(!!value)
            }
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
      },
      {
        accessorKey: "name",
        size: 200,
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: ({ column }: { column: Column<ProductType, unknown> }) => (
          <DataTableColumnHeader column={column} title="Product name" />
        ),
      },
      {
        accessorKey: "category",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: () => "Categories",
      },
      {
        accessorKey: "price",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: () => "Price",
      },
      {
        accessorKey: "userId",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
        header: () => "UserID upload",
      },
    ],
    []
  );

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onPageChange = (page: number) => {
    // setPageCurrent(page);
  };

  return {
    products: data?.products || [],
    columns,
    searchValue,
    onSearch,
    pageCurrent,
    onPageChange,
    isPending,
    totalPages: data?.totalPages ?? 0,
  };
};
