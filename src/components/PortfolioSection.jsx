import Card from "./Card"

function PortfolioSection() {
    return (
        <section className="bg-primary-500 py-16 flex justify-center flex-col items-center">
            <div>
                <h1 id="portfolio" className="flex justify-center text-6xl pt-16 font-semibold text-primary-900 hover:text-teal-300">Portfólio</h1>
                <div className="flex flex-wrap  justify-center items-center text-center pt-16">
                    <Card name="Saúde e Bem-estar" text="Meu primeiro projeto do curso de Desenvolvimento Web." link="https://github.com/MateusBT3/Saude-e-bem-estar" />
                    <Card name="Projeto" text="Desenvolvi o projeto bla bla bla" link="https://www.google.com/" />
                    <Card name="Projeto" text="Desenvolvi o projeto bla bla bla" link="https://www.google.com/" />
                    <Card name="Projeto" text="Desenvolvi o projeto bla bla bla" link="https://www.google.com/" />
                    <Card name="Projeto" text="Desenvolvi o projeto bla bla bla" link="https://www.google.com/" />
                    <Card name="Projeto" text="Desenvolvi o projeto bla bla bla" link="https://www.google.com/" />
                </div>
            </div>

        </section>
    )
}

export default PortfolioSection;