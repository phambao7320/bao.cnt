import { connectDB } from "@/config/db";
import authSeller from "@/libs/authSeller";
import Product from "@/models/product";
import { getAuth } from "@clerk/nextjs/server";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

export async function POST(request: NextRequest) {
  try {
    console.log("debug request", request);
    const searchParams = request.nextUrl.searchParams;
    const productId = searchParams.get("id") ?? "";

    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);
    if (!isSeller) {
      return NextResponse.json({ success: false, message: "Not Authorized" });
    }

    const formData = await request.formData();

    console.log("debug it", Object.fromEntries(formData));

    const name = formData.get("name");
    const description = formData.get("description");
    const category = formData.get("category");
    const price = formData.get("price");
    const offerPrice = formData.get("offerPrice");

    const files = formData.getAll("images");

    console.log("debug files", files);

    if (!files || !files.length) {
      // TODO
      return NextResponse.json({
        success: false,
        message: "Image is required",
      });
    }

    const uploadFiles = files
      .filter((each) => typeof each !== "string")
      .map(async (file) => {
        const arrayBuffer = await (file as File).arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              resource_type: "auto",
            },
            (error, result) => {
              if (error) return reject(error);
              return resolve(result);
            }
          );

          stream.end(buffer);
        });
      });

    const result = await Promise.all(uploadFiles);
    console.log("results photos", result);
    const urlExits = files.filter((each) => typeof each === "string");
    const photos: string[] = urlExits.concat(
      result.map((each: any) => each.secure_url)
    );

    if (!Array.isArray(photos)) {
      console.log("this is not type arrays");
    } else {
      console.log("this is array string");
    }

    await connectDB();

    const payload = {
      userId,
      name,
      description,
      category,
      price,
      offerPrice,
      photos,
    };

    console.log("payload", payload, productId);

    const newProduct = await Product.findByIdAndUpdate(productId, payload, {
      new: true,
      runValidators: true,
    });

    return NextResponse.json({ success: true, product: newProduct });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message });
  }
}
