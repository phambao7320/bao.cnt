import { connectDB } from "@/config/db";
import authSeller from "@/libs/authSeller";
import Product from "@/models/product";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);
    if (!isSeller) {
      return NextResponse.json({ success: false, message: "Not Authorized" });
    }

    await connectDB();
    const products = await Product.find({});

    return NextResponse.json({ success: true, products });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message });
  }
}
