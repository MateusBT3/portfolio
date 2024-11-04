import { useState } from "react";
import axios from "axios";

function ContactForm() {

  const [cepErro, setCepErro] = useState(false);
  const [cidade, setCidade] = useState();
  const [rua, setRua] = useState();

  const verificarCep = (e) => {
    if (e.target.value.length == 8) {
      axios.get(`https://brasilapi.com.br/api/cep/v1/${e.target.value}`)
        //se estiver ok
        .then(function (response) {
          setCepErro(false)
          setCidade(response.data.city)
          setRua(response.data.street)
        })
        //errado
        .catch(function (error) {
          setCepErro(true)
        })
    }
  }

  return (
    <form className="bgTec bg-blend-multiply hover:shadow-2xl hover:ease-in-out p-6 bg-primary-900 rounded-lg text-white w-1/3 shadow-md">
      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phone">Telefone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          required
          onChange={verificarCep}
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
        {/* {cepErro ?
          <p className="text-yellow-300">CEP inválido</p>
          :
          <p className="text-green-500">CEP válido</p>
        } */}
        {cepErro &&
          <p className="text-yellow-300">CEP inválido</p>
        }
      </div>

      <div className="mb-4">
        <label htmlFor="cep">Cidade</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="cep">Rua</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="mt-1 w-full border border-gray-300 bg-gray-700 rounded-md p-2 focus:ring focus:ring-blue-200"
        />
      </div>

      <button type="submit" className="w-full bg-primary-900 text-white hover:text-teal-300 font-semibold rounded-md p-2 hover:bg-primary-500 duration-200">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;