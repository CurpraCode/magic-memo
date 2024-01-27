import { authOptions } from "@/app/api/auth/utils/auth";
import EditMemo from "@/components/editmemo";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
  const data = await prisma.memo.findUnique({
    where: { id: params.id },
  });
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth");
  }
  return (
    <div>
      <EditMemo memoData={data} />
    </div>
  );
}
