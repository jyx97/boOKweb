"use client";

import NavBar from "@/components/nav-bar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

// Interface para o modelo do livro
interface Book {
  id: number;
  nome: string;
  autor: string;
  sinopse: string;
  imagem: string; // URL da imagem
}

// Componente principal
export default function BookPage() {
  const searchParams = useSearchParams();
  const bookId = searchParams.get("id"); // Obtém o ID do livro pela URL

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (bookId) {
      fetch(`http://localhost:8080/books/listed/${bookId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Livro não encontrado");
          }
          return response.json();
        })
        .then((data) => {
          setBook(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setError(error.message);
          setLoading(false);
        });
    }
  }, [bookId]);

  if (loading) {
    return <div className="text-center mt-10 text-gray-700">Carregando livro...</div>;
  }

  if (error || !book) {
    return <div className="text-center mt-10 text-red-600">Erro ao carregar livro: {error}</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar active="books" />

      {/* Conteúdo Principal */}
      <div className="flex-1 bg-rose-50 p-10">
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

        {/* Detalhes do Livro */}
        <div className="flex bg-white p-8 rounded-xl shadow-md">
          {/* Imagem do Livro */}
          <img
            src={book.imagem}
            alt={book.nome}
            className="w-64 h-auto rounded-lg shadow-lg"
          />

          {/* Informações do Livro */}
          <div className="ml-8 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{book.nome}</h1>
              <p className="text-gray-600 text-lg mt-2">Autor: {book.autor}</p>
              <p className="text-gray-800 mt-4">{book.sinopse}</p>
            </div>

            {/* Botão de Ação */}
            <Link href="/read">
              <button className="mt-6 bg-rose-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-rose-800 transition">
                📖 Quero ler
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
