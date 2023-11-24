import Footer from "../components/Footer"
import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import $ from 'jquery';
import 'jquery-mask-plugin/dist/jquery.mask.min'; 

const CriaPizzas = () => {
    
    const [teste , setTeste] = useState('');
    const nome = useRef('');

    const Component = () => {  
       $(() => {
        $('.dinheiro').mask('R$##.00');
        });
        const dinheiro = $('.dinheiro').cleanVal();
    };

    const [sabor , setSabor] = useState([]);

    const enviaPedidoFuncionario = async (e) => {
        e.preventDefault();
        const post = {'Sabor': sabor};
        
        try {
            await axios.post('http://localhost/piloto_freddys/api-slim/pedidoFuncionario', {body:post},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            alert('Pizza criada com sucesso!');
            // location.href = 'http://localhost:5173/funcionario';
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="telaPadrao overflow-hidden bg-red-50">
        <nav className='fixed h-24 bg-white w-full z-50 top-0'>
            <div className='nav-center h-full flex items-center justify-center'>
                <div className='flex items-center gap-[10rem]'>
                <div className=''>
                    <a href="/">
                    <img src={logo} className='h-20' />
                    </a>
                </div>
                <div className='flex gap-5  '>
                    <p className='text-gray-600  hover:text-red-700  active:text-red-700'> <a href="/" className='flex items-center gap-2'><HiOutlineHome />Início</a></p>
                    <p className=' text-gray-600 hover:text-red-700  active:text-red-700'><a href="/entrar" className='flex items-center gap-2'><HiOutlineBookOpen />Cardápio</a></p>
                    <p className='  text-red-700 hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><CiPizza />Atendimento</a></p>
                    
                </div>
                <div>
                    <p><a href="#" className='flex items-center gap-3'><LuMapPin />SEDE: PRAIAMAR SHOPPING <BiChevronDown className='text-red-700' /></a></p>
                </div>
                <div>
                    <p className='text-red-700 font-medium flex gap-2 items-center'><CgProfile />Meu perfil</p>
                </div>
                </div>
            </div>
            <hr />
            
            </nav>
            <div>
                <form onSubmit={(e)=>enviaPedidoFuncionario(e)}>
                    <div className="flex justify-center mt-32">
                        <div className="bg-white w-[45rem] h-[32rem]  shadow-gray-400 shadow-md rounded-lg">
                            <div className="p-5 ">
                                <label>Insira o sabor da pizza</label>
                                <input className="w-full rounded-xl border p-2" type="text" name="sabor" id="sabor" onChange={(e) => setSabor(e.target.value)} placeholder="Cogumelos com Queijo"/>
                                <p className="text-gray-500"></p>
                                <div className="flex items-center flex-col">
                                <input className="mt-8" type="file" />
                                </div>
                            </div>
                            <div className="bg-white w-[45rem] rounded-xl p-5 flex flex-col">
                                <p className="font-medium text-lg" name="name" id="name">Pizza de {sabor} </p>
                                <label className="line-clamp-2 mt-5">Crie uma linda descrição para a nova pizza do catálogo</label>
                                <input type="text" className="rounded-xl border p-2 "  placeholder="Saborosos cogumelos regrados em azeite de oliva combinados com um saborosíssimo que..."/>
                                <p className="text-gray-500 mt-3">A partir de</p>
                                <input  placeholder="R$42.50" ref={nome} onChange={Component} type="text"className="rounded-xl border p-2 dinheiro"/>
                                <button className="text-white font-medium bg-red-700 rounded-full px-5 py-1 mt-12" type="submit">Registrar novo sabor</button>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        <Footer/>
    </div>
    );
};  

export default CriaPizzas