import CreateMemo from "@/components/creatememo";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth");
  }
  return (
    <div>
      <CreateMemo />
    </div>
  );
}
