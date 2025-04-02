"use client";
import NavBar from "@/components/nav-bar";
import Header from "@/components/Headers";
import BookList from "./ContentHome/BookList";

export default function HomePage() {

  return (
    <>
    <div className="flex">
      {/* Sidebar */}
      <NavBar />
      {/* Main Content */}
      <div className="flex-1 bg-rose-50 p-8">
        {/* Barra de Pesquisa e Notificação */}
        <Header/>
        {/* Mensagem de Boas-vindas */}
        <div className="bg-gray-400 text-center p-12 rounded-lg text-gray-800 mb-8">
          <h2 className="text-2xl font-semibold">---Mensagem de olá---</h2>
          <p className="mt-2">texto de boas-vindas de última leitura</p>
        </div>
        {/* Seção de Recomendações */}
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Recomendações para você
        </h3>
        <BookList/>
      </div>
    </div>
    </>
  );
}

