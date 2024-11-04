function Botao({content, link, target}) {
    return (
        <a href = {link} className="border-2 rounded-md border-primary-900 text-xl text-teal-300 bg-primary-700 p-2
         hover:bg-primary-900 hover:text-primary-100 hover:border-primary-100 ease-in duration-200" target={target}>{content}</a>
    )
}
export default Botao;