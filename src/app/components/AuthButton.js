"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Olá, {session.user.name}!</p>
        <img src={session.user.image} alt="Foto de perfil" width="50" height="50" />
        <button onClick={() => signOut()}>Sair</button>
      </div>
    );
  }

  return <button onClick={() => signIn("google")}>Entrar com Google</button>;
}
