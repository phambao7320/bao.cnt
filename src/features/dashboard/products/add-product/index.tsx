"use client";
import React from "react";
import { PageContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import CreateProductForm from "./create-product-form";

const AddProductPage = () => {
  return (
    <PageContainer scrollable={true} className="flex flex-col w-full px-4">
      <div className="flex items-center justify-between">
        <Heading title="Add product page" />
      </div>
      <CreateProductForm />
    </PageContainer>
  );
};

export default AddProductPage;
