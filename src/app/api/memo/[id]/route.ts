import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const user = getCurrentUser();
    const body = await req.json();

    const { title, content, colorId } = body;

    if (!user) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!title) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.id) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prisma.memo.updateMany({
      where: {
        id: params.id,
        user,
      },
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
