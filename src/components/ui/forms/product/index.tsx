import { ProductFormData } from "@/hooks/useCreateProduct";
import React from "react";
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
} from "react-hook-form";
import Image from "next/image";
import { assets } from "@/assets/assets";
import Button from "@/components/ui/button";
import { InputField, InputArea, InputSelect } from "@/components/ui/forms";

type ProductFormProps = {
  type?: "create" | "edit";
  control: Control<ProductFormData>;
  handleSubmit: UseFormHandleSubmit<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  imagePreviews: string[];
  handleImageChange: (index: number, file: File | undefined) => void;
  onSubmit: (data: ProductFormData) => Promise<void>;
  submitButtonText?: string;
};

const ProductForm = ({
  type = "create",
  control,
  handleSubmit,
  onSubmit,
  errors,
  imagePreviews,
  handleImageChange,
}: ProductFormProps) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="md:p-10 p-4 space-y-5">
      <div className="flex justify-between items-center">
        <h2>Add new product</h2>
        <div className="flex items-center gap-5">
          <Button className="border-gray-300 text-gray-700 hover:bg-gray-200">
            Save Draft
          </Button>
          <Button
            className="bg-orange-600 text-white hover:bg-orange-700"
            type="submit"
          >
            Add Product
          </Button>
        </div>
      </div>

      <div className="flex items-start gap-5">
        <div className="flex flex-col basis-3/5 gap-5">
          <div className="flex flex-col gap-3 bg-[#f8faf9] p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              General Information
            </h2>
            {/* Product Name */}
            <Controller
              name="name"
              control={control}
              rules={{ required: "Product name is required" }}
              render={({ field }) => (
                <InputField
                  label="Product Name"
                  id="product-name"
                  placeholder="Type here"
                  className="bg-[#EFEFEF]"
                  {...field}
                />
              )}
            />

            {/* Product Description */}
            <Controller
              name="description"
              control={control}
              rules={{ required: "Product description is required" }}
              render={({ field }) => (
                <InputArea
                  label="Product Description"
                  {...field}
                  className="bg-[#EFEFEF]"
                />
              )}
            />
          </div>

          <div className="bg-[#f8faf9] p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              PRICING AND STOCK
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="price"
                control={control}
                rules={{ required: "Price is required" }}
                render={({ field }) => (
                  <InputField
                    label="Product Price"
                    {...field}
                    className="bg-[#EFEFEF]"
                  />
                )}
              />
              <InputField
                label="Stock"
                name="stock"
                value={99}
                onChange={() => {}}
                className="bg-[#EFEFEF]"
              />
              <Controller
                name="offerPrice"
                control={control}
                rules={{ required: "Price is required" }}
                render={({ field }) => (
                  <InputField
                    label="Offer Price"
                    {...field}
                    className="bg-[#EFEFEF]"
                  />
                )}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-5">
          <div className="shadow p-5 rounded-lg bg-[#f8faf9]">
            <p className="text-lg font-semibold text-gray-800 mb-4">
              Product Image
            </p>
            <div className="flex flex-col gap-4">
              <Controller
                name={`images.0`}
                control={control}
                render={({ field }) => (
                  <label htmlFor={`image0`}>
                    <input
                      type="file"
                      id={`image0`}
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        field.onChange(file);
                        handleImageChange(0, file);
                      }}
                    />
                    <div className="relative w-full h-52 bg-[#EFEFEF]">
                      <Image
                        className="object-contain object-center"
                        src={imagePreviews[0] || assets.upload_area}
                        alt={`Product image ${0 + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    {errors.images?.[0] && (
                      <p className="text-red-500 text-sm">
                        {errors.images[0]?.message}
                      </p>
                    )}
                  </label>
                )}
              />
              <div className="grid grid-cols-3 gap-2">
                {[...Array(3)].map((_, index) => (
                  <Controller
                    key={index + 1}
                    name={`images.${index + 1}`}
                    control={control}
                    render={({ field }) => (
                      <label htmlFor={`image${index + 1}`}>
                        <input
                          type="file"
                          id={`image${index + 1}`}
                          accept="image/*"
                          hidden
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            field.onChange(file);
                            handleImageChange(index + 1, file);
                          }}
                        />
                        <div className="relative w-full h-20 bg-[#EFEFEF]">
                          <Image
                            className="object-contain object-center"
                            src={imagePreviews[index + 1] || assets.upload_area}
                            alt={`Product image ${index + 2}`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        </div>
                        {errors.images?.[index + 1] && (
                          <p className="text-red-500 text-sm">
                            {errors.images[index + 1]?.message}
                          </p>
                        )}
                      </label>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow bg-[#f8faf9]">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Category
            </h2>
            <div className="space-y-4">
              <Controller
                name="category"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <InputSelect
                    label="Product Category"
                    options={[
                      { label: "Earphone", value: "Earphone" },
                      { label: "Headphone", value: "Headphone" },
                      { label: "Smartphone", value: "Smartphone" },
                      { label: "Accessories", value: "Accessories" },
                      { label: "Camera", value: "Camera" },
                      { label: "Laptop", value: "Laptop" },
                    ]}
                    className="bg-[#EFEFEF]"
                    {...field}
                  />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
