import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function POST(req: Request) {
  try {
    const user = getCurrentUser();
    const body = await req.json();

    const { title, content, colorId } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    if (!title) {
      return new NextResponse("Name is required", { status: 400 });
    }

    const store = await prisma.memo.create({
      data: {
        title,
        content,
        colorId,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET() {
  try {
    const user = getCurrentUser();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const memos = await prisma.memo.findMany();

    return NextResponse.json(memos);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
