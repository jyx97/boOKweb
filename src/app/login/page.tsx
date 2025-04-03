"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/components/nav-bar"; 
import Header from "@/components/Headers"; 
import { User } from "lucide-react"; 

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === "teste@email.com" && password === "123456") {
      alert("Login bem-sucedido!");
      router.push("/perfil"); // Redireciona para a página de perfil
    } else {
      alert("Email ou senha inválidos!");
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar />

      {/* Conteúdo Principal */}
            <div className="flex-1 bg-[#f0e8e2] p-10">
              <Header />

        {/* Área do Login (Centralizada) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="bg-[#d3d9e3] p-10 rounded-2xl text-center w-96 shadow-lg">
            {/* Ícone de usuário */}
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-[#710627] rounded-full flex items-center justify-center">
                <User size={40} color="white" />
              </div>
            </div>

            {/* Título */}
            <h2 className="text-xl font-semibold mt-4">Login</h2>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="mt-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-2"
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-2"
              />

              <p className="mt-3 text-sm">
                Não tem uma conta?{" "}
                <a href="/cadastro" className="text-[#7b3b4e] font-bold">
                  Faça seu cadastro
                </a>
              </p>

              <button
                type="submit"
                className="bg-[#710627] text-white px-4 py-2 rounded-md mt-4 w-full hover:bg-[#5a283b] transition"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
