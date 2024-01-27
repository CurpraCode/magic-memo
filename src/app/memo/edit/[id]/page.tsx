import EditMemo from "@/components/editmemo";
import prisma from "@/lib/prisma";

export default async function Home({ params }: { params: { id: string } }) {
  const data = await prisma.memo.findUnique({
    where: { id: params.id },
  });
  return (
    <div>
      <EditMemo memoData={data} />
    </div>
  );
}
