import z from "zod";

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ProductFormSchema = z.object({
  images: z
    .any()
    .refine((files) => files?.length, "Image is required.")
    .refine(
      (files) =>
        files.every((file: File | string) =>
          file instanceof File ? file.size <= MAX_FILE_SIZE : true
        ),
      `Max file size is 5MB.`
    )
    .refine(
      (files) =>
        files.every((file: File | string) =>
          file instanceof File ? ACCEPTED_IMAGE_TYPES.includes(file.type) : true
        ),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  category: z.string(),
  price: z.coerce.number(),
  offerPrice: z.coerce.number().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
});

export const defaultValues = {
  name: "",
  description: "",
  category: "Earphone",
  price: 0,
  offerPrice: 0,
  images: [],
};

export type ProductFormData = z.infer<typeof ProductFormSchema>;
