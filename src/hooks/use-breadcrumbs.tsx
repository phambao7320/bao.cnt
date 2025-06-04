"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type BreadcrumbItem = {
  label: string;
  url: string;
};

const routeMapping: Record<string, BreadcrumbItem[]> = {
  "/dashboard": [{ label: "Dashboard", url: "/dashboard" }],
  "/dashboard/products": [
    { label: "Dashboard", url: "/dashboard" },
    { label: "Products", url: "/dashboard/products" },
  ],
  "/dashboard/products/add": [
    { label: "Dashboard", url: "/dashboard" },
    { label: "Products", url: "/dashboard/products" },
    { label: "Add product", url: "/dashboard/products/add" },
  ],
  "/dashboard/orders": [
    { label: "Dashboard", url: "/dashboard" },
    { label: "Orders", url: "/dashboard/orders" },
  ],
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        url: path,
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
