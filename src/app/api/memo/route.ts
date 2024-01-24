import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function POST(req: Request) {
  try {
    // const { userId } = auth();
    const user = getCurrentUser();
    const body = await req.json();

    const { name } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prisma.memo.create({
      data: {
        name,
        user,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
