"use client";

import React from "react";
import Link from "next/link";
import NavBar from "@/components/nav-bar";

export default function MainPage() {

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar active="main" />

      {/* Main Content */}
      <div className="flex-1 bg-rose-50 p-8">
        {/* Barra de Pesquisa e Notificação */}
        <div className="flex justify-between items-center mb-8">
          <div className="relative flex items-center bg-gray-100 rounded-full p-2 w-96 shadow-sm">
            <span className="text-gray-500 ml-3">🔍</span>
            <input
              type="text"
              placeholder="Digite o nome do livro, autor, gênero..."
              className="bg-transparent outline-none flex-1 text-gray-700 ml-2"
            />
          </div>
          <span className="text-rose-900 text-2xl">🔔</span>
        </div>

        {/* Mensagem de Boas-vindas */}
        <div className="bg-gray-400 text-center p-12 rounded-lg text-gray-800 mb-8">
          <h2 className="text-2xl font-semibold">---Mensagem de olá---</h2>
          <p className="mt-2">texto de boas-vindas de última leitura</p>
        </div>

        {/* Seção de Recomendações */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recomendações para você
        </h3>

        <div className="flex justify-center space-x-4">
           {/* Lista de Livros */}
           {books.map((book, index) => (
            <Link 
              key={index} 
              href={`/books`}
              className="flex flex-col items-center cursor-pointer"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-32 h-48 rounded-lg shadow-md"
              />
              <p className="text-xs text-gray-700 mt-2 text-center w-32">
                {book.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Dados dos livros (simulação de um banco de dados)
const books = [
  {
    title: "As Vantagens de ser Invisível",
    image: "https://m.media-amazon.com/images/I/61WvSMKRBfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Os dois morrem no final",
    image: "https://m.media-amazon.com/images/I/61QhNRjycfL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "O Senhor dos Anéis: A Sociedade do Anel",
    image: "https://m.media-amazon.com/images/I/81SWBRKfExL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    title: "Admirável Mundo Novo",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrN3OPcFnkvz2lef0B0hV6U9avfEw2lPXTIQ&s",
  },
  {
    title: "A Hora da Estrela",
    image: "https://m.media-amazon.com/images/I/61TaHURu27L._AC_UF894,1000_QL80_.jpg",
  },
];
