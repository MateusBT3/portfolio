import ContactForm from "./ContactForm";
import git from "../assets/git.png"
import insta from "../assets/insta.png"

function ContactSection() {
    return (
        <section className="flex flex-col items-center bg-primary-500 pt-16">
            <div className="container pb-8">
                <h1 id="contato" className="flex justify-center text-6xl font-semibold text-primary-900 hover:text-teal-300">Contato</h1>
                <div className="flex justify-center py-8">
                    <ContactForm />
                </div>
            </div>
            <footer className="sec flex justify-center items-center">
                <div className="flex justify-center items-center ">
                    <a target="_blank" href="https://github.com/MateusBT3"><img src={git} width="50px" alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/m.toledo007/"><img src={insta} width="60px" alt="" /></a>
                </div>
            </footer>
        </section>
    )
}
export default ContactSection;