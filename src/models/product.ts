import { InferSchemaType, Schema, model, models } from "mongoose";

const ProductSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
      ref: "users",
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    offerPrice: {
      type: String,
      required: true,
    },
  },
  { minimize: false }
);

const Product = models?.Product || model("Product", ProductSchema);

export type ProductType = InferSchemaType<typeof ProductSchema> & {
  _id: string;
};

export default Product;
