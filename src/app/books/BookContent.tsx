import Link from "next/link";

export default function BookContent(){
    return(
        <>
            <div className="flex bg-white p-8 rounded-xl shadow-md">
                {/* Imagem do Livro */}
                <img
                    src="Imagem.png"
                    alt="Nome"
                    className="w-64 h-auto rounded-lg shadow-lg"
                />

                {/* Informações do Livro */}
                <div className="ml-8 flex flex-col justify-between">
                    <div>
                    <h1 className="text-3xl font-bold text-gray-900">Nome</h1>
                    <p className="text-gray-600 text-lg mt-2">Autor: Autor</p>
                    <p className="text-gray-800 mt-4">Sinopse</p>
                    </div>
                    {/* Botão de Ação */}
                    <Link href="/read">
                    <button className="mt-6 bg-rose-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-rose-800 transition">
                        📖 Quero ler
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}