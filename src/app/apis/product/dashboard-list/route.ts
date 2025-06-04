import { connectDB } from "@/config/db";
import authSeller from "@/libs/authSeller";
import Product from "@/models/product";
import { getAuth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;

    const limit = Number(searchParams.get("limit") ?? 10);
    const offset = Number(searchParams.get("offset") ?? 0);
    const q = searchParams.get("q") ?? "";

    const { userId } = getAuth(request);
    const isSeller = await authSeller(userId);
    if (!isSeller) {
      return NextResponse.json({ success: false, message: "Not Authorized" });
    }

    await connectDB();

    const query = q ? { name: { $regex: q, $options: "i" } } : {};

    const aggregateResult = await Product.aggregate([
      { $match: query },
      {
        $facet: {
          products: [{ $skip: offset }, { $limit: limit }],
          total: [{ $count: "count" }],
        },
      },
    ]);

    const products = aggregateResult[0]?.products || [];
    const totalProducts = aggregateResult[0]?.total[0]?.count || 0;
    const totalPages = Math.ceil(totalProducts / limit);

    return NextResponse.json({ success: true, products, totalPages });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message });
  }
}
