import Botao from "./Botao";

function Card({bg, name, text, link}){
    return(
        <div className="flex flex-col items-center w-1/3 p-4 text-primary-100">
            <div className="bgTec bg-blend-multiply hover:shadow-2xl hover:ease-in-out bg-primary-900 hover:bg-primary-300 hover:bg-opacity-50 hover:cursor-pointer duration-200 rounded-2xl w-full flex flex-col items-center p-8">
                <h2 className="text-3xl mb-3">{name}</h2>
                <p className="text-xl mb-3">{text}</p>
                <Botao content="Veja mais" link={link} target="_blank"/>
            </div>
        </div>
    )
}
export default Card;