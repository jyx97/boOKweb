"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Headers";
import NavBar from "@/components/nav-bar";

export default function Cadastro() {
  const router = useRouter();

  // Estados para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    email: "",
    senha: "",
  });

  // Atualiza os estados quando o usuário digita
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Salva os dados no localStorage ao enviar o formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("userData", JSON.stringify(formData));
    alert("Cadastro realizado com sucesso!");
    router.push("/"); // Redireciona para a página inicial (Home)
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar />

      {/* Conteúdo Principal */}
      <div className="flex-1 bg-[#f0e8e2] p-10">
        <Header />

        <div className="flex justify-center mt-10">
          <div className="bg-[#d3d9e3] p-10 rounded-2xl text-center w-96 shadow-lg">
            {/* Título */}
            <h2 className="text-xl font-semibold">Cadastro</h2>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="mt-4 text-left">
              <label className="block text-sm font-medium">Nome</label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
              />

              <label className="block text-sm font-medium mt-3">Nome de Usuário</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
              />

              <label className="block text-sm font-medium mt-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
              />

              <label className="block text-sm font-medium mt-3">Senha</label>
              <input
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
              />

              {/* Botão de Envio */}
              <button
                type="submit"
                className="border-[#7b3b4e] text-[#7b3b4e] px-4 py-2 rounded-md mt-4 w-full border-2 hover:bg-[#7b3b4e] hover:text-white transition"
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
