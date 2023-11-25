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

const CriaBebidas = () => {
    
    const Component = () => {  
        $(() => {
            $('.dinheiro').mask('R$#.00');
        });
        setPreco($('.dinheiro').cleanVal());
    };  
    
    const valor = useRef('');
    
    const [nome , setNome] = useState("");
    const [desc , setDesc] = useState("");
    const [img , setImg ] = useState("");
    const [preco , setPreco ] = useState("");
    
    const enviaPedido = async (e) => {
        e.preventDefault();
        const post = {'Nome': nome, 'Desc': desc, 'Img': img, 'Preco': preco};
        
        try {
            const conecta = await axios.post('http://localhost/piloto_freddys/api-slim/criadorBebidas', {body:post},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            alert('Bebida criada com sucesso!');
            location.href = 'http://localhost:5173/funcionario';
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
                <form onSubmit={(e)=>enviaPedido(e)}>
                    <div className="flex justify-center mt-32">
                        <div className="bg-white w-[45rem] h-[32rem]  shadow-gray-400 shadow-md rounded-lg">
                            <div className="p-5 ">
                                <label>Insira o nome da Bebida</label>
                                <input className="w-full rounded-xl border p-2" type="text" name="sabor" id="sabor" onChange={(e) => setNome(e.target.value)} placeholder="Coca-Cola zero"/>
                                <p className="text-gray-500"></p>
                                <div className="flex items-center flex-col">
                                    <div className="flex flex-col items-center border mt-5 rounded-xl p-5">
                                        <label>Escolha uma foto para nova bebida</label>
                                        <input className="mt-2" type="file" onChange={(e) => setImg(e.target.value)}  />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white w-[45rem] rounded-xl border-t p-5 flex flex-col">
                                <p className="font-medium text-lg" name="name" id="name">{nome}</p>
                                <label className="line-clamp-2 mt-5">Crie uma descrição para a nova bebida do catálogo</label>
                                <input onChange={(e) => setDesc(e.target.value)} type="text" className="rounded-xl border p-2 " placeholder="Coca-Cola sabor original contém água gaseificada, açúcar, extrato de noz de cola, cafeí..."/>
                                <p className="text-gray-500 mt-3">A partir de</p>
                                <input onChange={Component} placeholder="R$8.50" type="text" ref={valor} className="rounded-xl border p-2 dinheiro"/>
                                <button className="text-white font-medium bg-red-700 rounded-full px-5 py-1 mt-2" type="submit">Registrar nova bebida</button>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        <Footer/>
    </div>
    );
};  

export default CriaBebidas