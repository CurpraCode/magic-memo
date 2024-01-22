import Header from "@/components/header";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/utils/auth";
import Login from "@/components/login";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }

  return (
    <div>
      <Header session={session} />
      <Login />
    </div>
  );
}
