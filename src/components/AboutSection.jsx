import Technology from "./Technology"

function AboutSection() {
    return (
        <section  className="bg-teal-700 flex justify-center items-center flex-col text-primary-100">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 id="sobre" className="flex justify-center text-6xl font-semibold text-primary-900 hover:text-teal-300">Sobre mim</h1>
                <p className="text-xl pt-8 w-1/2">Olá! Meu nome é Mateus, tenho 17 anos e sou um desenvolvedor web em início de carreira. Tenho experiência em <span className="text-orange-600 hover:text-orange-800 duration-200">HTML</span>, 
                <span className="text-blue-400 hover:text-blue-600 duration-200"> CSS</span> e 
                <span className="text-yellow-400 hover:text-yellow-600 duration-200"> JavaScript</span>, 
                e atualmente estou aprendendo React. Além da programação, tenho uma grande paixão por Educação Física.</p>
                <p className="text-xl pb-3 w-1/2">Acredito que a conexão entre tecnologia e saúde é extremamente valiosa, e estou empolgado para explorar como posso usar minhas habilidades de programação para impactar positivamente o mundo do esporte e da saúde.</p>
            </div>

            <h1 className="text-3xl pt-8 text-primary-900 hover:text-teal-300">Habilidades</h1>
            <ul className="flex flex-col justify-center text-center text-xl w-1/2">
                <li><strong>HTML:</strong> Sólidos conhecimentos na construção de páginas web estruturadas e semânticas.</li>
                <li><strong>CSS:</strong> Experiência em estilização de interfaces, incluindo layouts responsivos e design atraente.</li>
                <li><strong>JavaScript:</strong> Habilidade em criar interatividade e dinamismo nas páginas web.</li>
                <li><strong>React:</strong> Em aprendizado, buscando dominar esta biblioteca para desenvolver aplicações mais complexas e eficientes.</li>
            </ul>
            <h3 className="text-xl flex flex-col justify-center items-center text-center w-1/2 p-6 pb-0">Estou sempre aberto a novas oportunidades e colaborações! Se você deseja discutir projetos, trocas de ideias ou apenas bater um papo, não hesite em me contatar. Você pode me encontrar nas redes sociais ou enviar um e-mail.</h3>

            <div className="container text-center flex flex-col py-16">
                <h1 className=" text-5xl pb-4 font-semibold text-primary-900 hover:text-teal-300">Tecnologias</h1>
                <div className="flex items-center justify-center">
                    <Technology img={"devicon-html5-plain-wordmark colored"} />
                    <Technology img={"devicon-css3-plain-wordmark colored"} />
                    <Technology img={"devicon-javascript-plain colored"} />
                </div>
                <div className="flex items-center justify-center">
                    <Technology img={"devicon-nodejs-plain-wordmark colored"} />
                    <Technology img={"devicon-react-original-wordmark colored"} />
                    <Technology img={"devicon-tailwindcss-plain-wordmark colored"} />
                </div>
                <div className="flex items-center justify-center">
                    <Technology img={"devicon-canva-original colored"} />
                    <Technology img={"devicon-vscode-plain-wordmark colored"} />
                    <Technology img={"devicon-windows11-original-wordmark colored"} />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;