import { Appbar } from "@/app/components/appbar";
import { NEXT_AUTH_CONFIG } from "@/app/lib/auth";
import { getServerSession } from "next-auth"
import { signIn } from "next-auth/react";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function Home() {
  const session = await getUser();

  return (
    <div>
      <Appbar />
      {JSON.stringify(session)}
    </div>
  );
}