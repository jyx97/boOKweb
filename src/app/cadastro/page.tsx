"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Headers";
import NavBar from "@/components/nav-bar";

export default function Cadastro() {
  const router = useRouter();
<<<<<<< HEAD
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

=======

  // Estados para armazenar os valores do formulário
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    email: "",
    senha: "",
  });

  // Atualiza os estados quando o usuário digita
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      const response = await fetch("http://localhost:8080/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        // Se o backend retorna um erro de validação, ele geralmente vem como um array de mensagens
        if (responseData.errors) {
          const errorMessages = responseData.errors.map((err: any) => err.defaultMessage).join("\n");
          throw new Error(errorMessages);
        }
  
        // Se for outro tipo de erro, pega a mensagem padrão
        throw new Error(responseData.message || "Erro desconhecido ao cadastrar.");
      }
  
      alert("Cadastro realizado com sucesso!");
      router.push("/"); // Redireciona para a home
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <div className="flex">
      <NavBar />

=======
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
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
      <div className="flex-1 bg-[#f0e8e2] p-10">
        <Header />

        <div className="flex justify-center mt-10">
          <div className="bg-[#d3d9e3] p-10 rounded-2xl text-center w-96 shadow-lg">
<<<<<<< HEAD
            <h2 className="text-xl font-semibold">Cadastro</h2>

            {error && <p className="text-red-500">{error}</p>}

=======
            {/* Título */}
            <h2 className="text-xl font-semibold">Cadastro</h2>

            {/* Formulário */}
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
            <form onSubmit={handleSubmit} className="mt-4 text-left">
              <label className="block text-sm font-medium">Nome</label>
              <input
                type="text"
<<<<<<< HEAD
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#7b3b4e] mt-1"
=======
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
              />

              <label className="block text-sm font-medium mt-3">Nome de Usuário</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
<<<<<<< HEAD
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#7b3b4e] mt-1"
=======
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
              />

              <label className="block text-sm font-medium mt-3">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
<<<<<<< HEAD
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#7b3b4e] mt-1"
=======
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#7b3b4e] mt-1"
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
              />

              <label className="block text-sm font-medium mt-3">Senha</label>
              <input
                type="password"
<<<<<<< HEAD
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-[#7b3b4e] mt-1"
              />

              <button
                type="submit"
                disabled={loading}
                className="border-[#7b3b4e] text-[#7b3b4e] px-4 py-2 rounded-md mt-4 w-full border-2 hover:bg-[#7b3b4e] hover:text-white transition"
              >
                {loading ? "Enviando..." : "Enviar"}
=======
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
>>>>>>> cbc20a272bf6cbc11ff81815d6945530f0a35af8
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
