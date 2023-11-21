import Navbar from "../components/Navbar";
import empresa from '../assets/images/entertainment.png'
import { useState } from "react";
import axios from "axios";

const CriarConta = () => {
    const [name , setName] = useState([]);
    const [senha , setSenha] = useState([]);
    const [email , setEmail ] = useState([]);
    const [login , setLogin ] = useState([]);

    const [Cep , setCep ] = useState([]);
    const [Rua , setRua ] = useState([]);
    const [Num , setNum ] = useState([]);
    const [Bairro , setBairro ] = useState([]);
    const [Cidade , setCidade ] = useState([]);
    const [Uf , setUf ] = useState([]);


    

    const enviaCadastro = async (e)=> {
        e.preventDefault();
        const post = {'name': name, 'senha': senha, 'email': email, 'Login': login, 'cep': Cep, 'rua': Rua, 'num': Num, 'bairro':Bairro, 'cidade':Cidade, 'uf':Uf};
        try {
            await axios.post('http://localhost/piloto_freddys/api-slim/users', {body:post,},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});

        } catch (error) {
            console.log(error);
            console.log('errou.');
        }
    }

    function verTipo() {
        const tipoUsuario = [];
        if (login == 'cliente'){
            tipoUsuario.push(
                <div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">CEP</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="Cep" id="Cep" onChange={(e) => setCep(e.target.value)} placeholder="Insira seu CEP" />
                    </div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">Rua</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="Rua" id="Rua" onChange={(e) => setRua(e.target.value)}  placeholder="Digite o nome da sua Rua" />
                    </div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">Número</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="password" name="Num" id="Num" onChange={(e) => setNum(e.target.value)} placeholder="Digite o número da sua residência" />
                    </div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">Bairro</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="Bairro" id="Bairro" onChange={(e) => setBairro(e.target.value)}  placeholder="Digite o nome do seu Bairro" />
                    </div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">Cidade</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="password" name="Cidade" id="Cidade" onChange={(e) => setCidade(e.target.value)} placeholder="Digite o nome da sua Cidade" />
                    </div>
                    <div>
                        <p className="ms-6 text-lg text-gray-600">Estado</p>
                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="password" name="Uf" id="Uf" onChange={(e) => setUf(e.target.value)} placeholder="Digite o nome do seu Estado" />
                    </div>
                </div>
            )
            return(tipoUsuario)
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
                        <p className="font-medium text-3xl">Criar Minha Conta</p>
                        <p className="text-xl mt-8 text-gray-600">Boa! Vamos Começar!</p>
                        <div className="mt-8 ms-12">
                            <form onSubmit={(e)=>enviaCadastro(e)}>
                                <div className="flex flex-col justify-evenly">
                                    <div>
                                        <p className="ms-6 text-lg text-gray-600">Usuário</p>
                                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="nome" id="nome" onChange={(e) => setName(e.target.value)} placeholder="Como você quer ser chamado?" />
                                    </div>
                                    <div>
                                        <p className="ms-6 text-lg text-gray-600">Email</p>
                                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)}  placeholder="Insira seu melhor e-mail!" />
                                    </div>
                                    <div>
                                        <p className="ms-6 text-lg text-gray-600">Senha</p>
                                        <input className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" type="password" name="senha" id="senha" onChange={(e) => setSenha(e.target.value)} placeholder="Crie uma senha forte." />
                                    </div>
                                    <div>
                                        <div className="flex flex-col">
                                        <label className="ms-6 text-lg text-gray-600">Quem é você?</label>
                                            <select className="placeholder:text-slate-400 bg-white rounded-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border focus:outline-none focus:ring-red focus:border-red-300  w-10/12 py-3 px-4" name="login" id="login" onChange={(e) => setLogin(e.target.value)}>
                                                <option value="funcionario">Sou Funcionário</option>
                                                <option value="cliente">Sou Cliente</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        {verTipo()}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-around h-[12rem]">
                                    <button type="submit" className=" w-10/12 py-3 mt-9 rounded-full bg-black text-white font-semibold">Cadastrar</button>
                                    <button className="font-medium w-10/12"><a href="/">Cadastrar depois</a></button>
                                    <button className="w-10/12 ">Já tem uma conta?<a href="/entrar" className="underline text-red-700 ms-2">Acesse aqui.</a></button>
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