"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react"; // Ícone de pessoa
import Header from "@/components/Headers";
import NavBar from "@/components/nav-bar";

export default function Profile() {
  const [userData, setUserData] = useState<{ nome: string; username: string; email: string } | null>(null);
  const router = useRouter();

  // Carrega os dados do localStorage ao montar o componente
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar />

      {/* Conteúdo Principal */}
      <div className="flex-1 bg-[#f0e8e2] p-10">
        <Header />

        {/* Card de Perfil */}
        <div className="flex justify-center mt-10">
          <div className="bg-[#d3d9e3] p-10 rounded-2xl w-96 shadow-lg text-center relative">
            {/* Ícone do usuário */}
            <div className="w-24 h-24 bg-[#710627] rounded-full absolute -top-12 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
              <User size={48} color="white" />
            </div>

            {/* Informações do Usuário */}
            <h2 className="text-xl font-semibold mt-14">Perfil</h2>

            <div className="mt-4 text-left text-lg">
              <p><strong>Nome:</strong> {userData?.nome || "Não informado"}</p>
              <p className="mt-2"><strong>Nome de Usuário:</strong> {userData?.username || "Não informado"}</p>
              <p className="mt-2"><strong>Email:</strong> {userData?.email || "Não informado"}</p>
            </div>

            {/* Botões de Ação */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => router.push("/login")}
                className="w-full bg-[#710627] text-white px-4 py-2 rounded-md hover:bg-[#59051f] transition"
              >
                Fazer Login
              </button>
              <button
                onClick={() => router.push("/cadastro")}
                className="w-full border-2 border-[#710627] text-[#710627] px-4 py-2 rounded-md hover:bg-[#710627] hover:text-white transition"
              >
                Criar Conta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
