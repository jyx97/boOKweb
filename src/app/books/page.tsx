"use client";
import Header from "@/components/Headers";
import NavBar from "@/components/nav-bar";
import BookContent from "./BookContent";

// Componente principal
export default function BookPage() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <NavBar/>
      {/* Conteúdo Principal */}
      <div className="flex-1 bg-rose-50 p-10">
        <Header/>
        {/* Detalhes do Livro */}
        <BookContent/>
      </div>
    </div>
  );
}
