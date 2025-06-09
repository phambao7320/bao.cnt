import React from "react";
import { PageContainer } from "@/components/layouts";
import { Heading } from "@/components/ui/heading";
import EditProductForm from "./edit-product-form";

const EditProductPage = () => {
  return (
    <PageContainer scrollable={true} className="flex flex-col w-full px-4">
      <div className="flex items-center justify-between">
        <Heading title="Edit product page" />
      </div>
      <EditProductForm />
    </PageContainer>
  );
};

export default EditProductPage;
