function Header() {
    return (
        <header className="sec flex justify-center py-5">
            <div className="container flex justify-between items-center">
                <h1 className="text-3xl font-semibold hover:text-teal-200 text-white ease-in duration-200 font-kanit">$MBT3$</h1>
            <div>
                <input type="text" placeholder="Procure aqui..." className="px-1.5 border-2 border-primary-500 rounded-lg hover:bg-primary-300 placeholder-white bg-primary-700 hover:placeholder-primary-100"/>
                <button className="border-2 bg-primary-500 border-primary-500 rounded-lg hover:bg-primary-700 hover:text-teal-300">Buscar</button>
            </div>
                <nav className= "font-ox text-slate-400">
                    <a href="#sobre" className="p-6 hover:text-teal-300">Sobre</a>
                    <a href="#portfolio" className="p-6 hover:text-teal-300">Portfólio</a>
                    <a href="#contato" className="p-6 hover:text-teal-300">Contato</a>
                </nav>
            </div>
        </header>
    )
}
export default Header;
