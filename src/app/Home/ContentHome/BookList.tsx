import Link from "next/link";

export default function BookList(){
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
    return(
        <>
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
        </>
    )
}