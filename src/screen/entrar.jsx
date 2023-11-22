import Navbar from "../components/Navbar";
import empresa from '../assets/images/entertainment.png'
import { useState } from "react";
import axios from "axios";

const CriarConta = () => {
    const [name, setName] = useState([]);
    const [senha , setSenha] = useState([]);
    const [email , setEmail ] = useState([]);
    const [login , setLogin ] = useState([]);

    const enviaCadastro = async (e)=> {
        e.preventDefault();
        const post = {'name': name, 'senha': senha, 'email': email, 'login': login};

        try {
           const resposta = await axios.post('http://localhost/piloto_freddys/api-slim/entrar', {body:post,},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
           if (resposta.data == 'funcionario'){
            location.href = 'http://localhost:5173/funcionario';
           } else {
            location.href = 'http://localhost:5173/cardapio';
           }
        } catch (error) {
            console.log(error);
            console.log('errou.');
        }
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
                        <p className="font-medium text-3xl">Entrar na Minha Conta</p>
                        <p className="text-xl mt-8 text-gray-600">Bora pedir? Insira seu Usuário e Senha.</p>
                        <div className="mt-8 ms-12">
                            <form onSubmit={(e)=>enviaCadastro(e)}>
                                <div className="flex flex-col justify-evenly h-[20rem]">
                                    <div>
                                        <p className="ms-6 text-lg text-gray-600">Usuário</p>
                                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="nome" id="nome" onChange={(e) => setName(e.target.value)} placeholder="Qual é o seu nome?" />
                                    </div>
                                    <div>
                                        <p className="ms-6 text-lg text-gray-600">Senha</p>
                                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} placeholder="Insira sua Senha" />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-around h-[12rem]">
                                    <button type="submit" className=" w-10/12 py-3 mt-9 rounded-full bg-black text-white font-semibold">Logar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CriarConta