import Navbar from "../components/Navbar";
import empresa from "../assets/images/entertainment.png";
import { useState } from "react";
import axios from "axios";

const Cadastrador = () => {
  const [name, setName] = useState([]);
  const [senha, setSenha] = useState([]);
  const [email, setEmail] = useState([]);
  const [login, setLogin] = useState([]);
  const [Cep, setCep] = useState([]);
  const [Rua, setRua] = useState([]);
  const [Num, setNum] = useState([]);
  const [Bairro, setBairro] = useState([]);
  const [Cidade, setCidade] = useState([]);
  const [Uf, setUf] = useState([]);

  const enviaCadastro = async (e) => {
    e.preventDefault();
    const post = {
      name: name,
      senha: senha,
      email: email,
      Login: "cliente",
      cep: Cep,
      rua: Rua,
      num: Num,
      bairro: Bairro,
      cidade: Cidade,
      uf: Uf,
    };
    try {
     const retorno = await axios.post(
        "http://localhost/piloto_freddys/api-slim/users",
        { body: post },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      );
        console.log(retorno);
      alert("Cliente cadastrado com sucesso!");
      location.href = "http://localhost:5173/funcionario";
    } catch (error) {
      console.log(error);
      console.log("errou.");
    }
  };
  const verCEP = (e) => {
    e.preventDefault();
    pesquisarCEP(Cep);
  };

  function pesquisarCEP(valor) {
    var cepPronto = valor.replace(/\D/g, "");

    if (cepPronto != "") {
      var validador = /^[0-9]{8}$/;

      if (validador.test(cepPronto)) {
        fetch("https://viacep.com.br/ws/" + cepPronto + "/json/")
          .then((response) => response.json())
          // console.log(response);
          .then((json) => colocarResultado(json));
      } else {
        limparFormulario();
        alert("CEP não existe.");
      }
    } else {
      limparFormulario();
    }
    function colocarResultado(resultado) {
      if (!("erro" in resultado)) {
        document.getElementById("Rua").value = resultado.logradouro;
        setRua(resultado.logradouro);
        document.getElementById("Bairro").value = resultado.bairro;
        setBairro(resultado.bairro);
        document.getElementById("Cidade").value = resultado.localidade;
        setCidade(resultado.localidade);
        document.getElementById("Uf").value = resultado.uf;
        setUf(resultado.uf);
      } else {
        limparFormulario();
        alert("CEP não encontrado.");
      }
    }
  }

  function limparFormulario() {
    document.getElementById("Rua").value = "";
    setRua("");
    document.getElementById("Bairro").value = "";
    setBairro("");
    document.getElementById("Cidade").value = "";
    setCidade("");
    document.getElementById("Uf").value = "";
    setUf("");
  }


  return (
    <div className="telaPadrao overflow-hidden bg-amber-50">
      <div className="">
        <Navbar />
      </div>
      <div className="w-8/12 mx-auto">
        <div className="flex justify-center mt-24">
          <div className="w-6/12 flex justify-center">
            <img className="h-[54rem]" src={empresa} />
          </div>
          <div className="w-6/12 flex flex-col ms-[8rem] mt-20 h-full">
            <p className="font-medium text-3xl">Novo cliente no pedaço?</p>
            <p className="text-xl mt-8 text-gray-600">
              Boa! Bora criar seu login!
            </p>
            <div className="mt-8 ms-12">
              <form onSubmit={(e) => enviaCadastro(e)}>
                <div className="flex flex-col justify-evenly">
                  <div>
                    <p className="ms-6 text-lg text-gray-600">Usuário</p>
                    <input
                      onBlur={(e) => setLogin(e)}
                      className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                      type="text"
                      name="nome"
                      id="nome"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Como é o nome do seu cliente?"
                    />
                  </div>
                  <div>
                    <p className="ms-6 text-lg text-gray-600">Email</p>
                    <input
                      className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                      type="text"
                      name="email"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Insira seu melhor e-mail!"
                    />
                  </div>
                  <div>
                    <p className="ms-6 text-lg text-gray-600">Senha</p>
                    <input
                      className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                      type="password"
                      name="senha"
                      id="senha"
                      onChange={(e) => setSenha(e.target.value)}
                      placeholder="Crie uma senha forte."
                    />
                  </div>
                  <div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">CEP</p>
                      <input
                        onBlur={(e) => verCEP(e)}
                        value={Cep}
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Cep"
                        id="Cep"
                        onChange={(e) => setCep(e.target.value)}
                        placeholder="Insira seu CEP"
                      />
                    </div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">Rua</p>
                      <input
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Rua"
                        id="Rua"
                        onChange={(e) => setRua(e.target.value)}
                        placeholder="Digite o nome da sua Rua"
                      />
                    </div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">Número</p>
                      <input
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Num"
                        id="Num"
                        onChange={(e) => setNum(e.target.value)}
                        placeholder="Digite o número da sua residência"
                      />
                    </div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">Bairro</p>
                      <input
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Bairro"
                        id="Bairro"
                        onChange={(e) => setBairro(e.target.value)}
                        placeholder="Digite o nome do seu Bairro"
                      />
                    </div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">Cidade</p>
                      <input
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Cidade"
                        id="Cidade"
                        onChange={(e) => setCidade(e.target.value)}
                        placeholder="Digite o nome da sua Cidade"
                      />
                    </div>
                    <div>
                      <p className="ms-6 text-lg text-gray-600">Estado</p>
                      <input
                        className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4"
                        type="text"
                        name="Uf"
                        id="Uf"
                        onChange={(e) => setUf(e.target.value)}
                        placeholder="Digite o nome do seu Estado"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-around h-[12rem]">
                  <button
                    type="submit"
                    className=" w-10/12 py-3 mt-9 rounded-full bg-black text-white font-semibold">
                    Criar novo Usuário
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastrador;
