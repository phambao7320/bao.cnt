import { connectDB } from "@/config/db";
import Product from "@/models/product";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const productId = searchParams.get("id") ?? "";
    console.log("debug product ID from server", productId);

    if (!productId) {
      return NextResponse.json({ success: false, message: "Bad Request" });
    }

    await connectDB();

    const productDetail = await Product.findById(productId);

    console.log("debug productDetail from server", productDetail);

    if (!productDetail) {
      // Not found
    }

    return NextResponse.json({ success: true, product: productDetail });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message });
  }
}
