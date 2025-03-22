"use client";
import { useSession } from "next-auth/react";
import AuthButton from "./components/AuthButton";

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Carregando...</p>;
  }

  if (!session) {
    return (
      <>
        <AuthButton />
        <p>Acesso negado. Faça login primeiro.</p>
      </>
    );
  }

  return (
    <>
        <p>Bem-vindo, {session.user.name}!</p>
        <AuthButton />
    </>

  );
}
