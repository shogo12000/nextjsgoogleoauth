"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (!session) {
    return <p>Acesso negado. Faça login primeiro.</p>;
  }

  return <p>Bem-vindo, {session.user.name}!</p>;
}
