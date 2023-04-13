"use client";
import { SessionProvider } from "next-auth/react";
import { getSession } from "@/libs/session";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = getSession();

  return <SessionProvider session={session}>{children}</SessionProvider>;
}
