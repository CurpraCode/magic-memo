import { getServerSession } from "next-auth";
import Header from "@/components/header";
import { Hero } from "@/components/ui/hero";
import { authOptions } from "./api/auth/utils/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <Header session={session} />
      <Hero />
    </div>
  );
}
