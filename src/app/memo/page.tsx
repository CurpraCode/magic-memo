import MemoContainer from "@/components/memocontainer";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const data = await prisma.memo.findMany();
  if (!session) {
    return redirect("/auth");
  }
  return <div>{session ? <MemoContainer memoViewData={data} /> : null}</div>;
}
