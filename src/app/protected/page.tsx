"use client";
import { Button } from "@/components/ui/Button";
import { signOut, useSession } from "next-auth/react";

export default function Protected() {
  const session = useSession();
  console.log(session);

  return (
    <div>
      <Button onClick={() => signOut({ redirect: true, callbackUrl: "/" })}>
        Sign Out
      </Button>
      <h1>Hi,</h1>
      <strong>{session.data?.user?.name}</strong>
    </div>
  );
}
