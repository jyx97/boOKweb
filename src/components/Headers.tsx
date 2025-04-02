import NavBar from "./nav-bar";

export default function Header(){
    return(
        <>
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
        </>


    )
}