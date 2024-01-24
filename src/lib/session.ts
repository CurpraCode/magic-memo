import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/utils/auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  return session?.user;
}
