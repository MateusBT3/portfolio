import Botao from "./Botao";
import Eu from "../assets/eu.png"

function HeroSection() {
    return (
        <section className="bg-primary-500 flex justify-center h-hvm">
            <div className="container flex items-center">
                <div className="w-1/2 text-primary-100">
                    <h1 className="text-4xl mb-2">Olá! Me chamo <span className="text-4xl text-primary-900 font-bold hover:text-teal-300">Mateus Toledo</span></h1>
                    <h2 className="text-2xl mb-5">Sou Desenvolvedor de Sites e pretendo fazer Sistemas da Informação.</h2>
                    <Botao link="#contato" content="Fale comigo!"/>
                </div>
                <div className="w-1/2 flex justify-end">
                    <img src={Eu} width="500px" />
                </div>
            </div>
        </section>
    )
}
export default HeroSection;