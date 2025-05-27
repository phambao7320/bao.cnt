import { clerkClient } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const authSeller = async (userId: string | null) => {
  if (!userId) return false;
  try {
    const client = await clerkClient();
    const user = await client.users.getUser(userId);

    if (user.publicMetadata.role === "seller") {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message });
  }
};

export default authSeller;
