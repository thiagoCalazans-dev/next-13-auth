import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/[...nextauth]";

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}
