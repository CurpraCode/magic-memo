import MemoContainer from "@/components/memocontainer";
import prisma from "@/lib/prisma";

export default async function Home() {
  const data = await prisma.memo.findMany();
  return (
    <div>
      <MemoContainer memoViewData={data} />
    </div>
  );
}
