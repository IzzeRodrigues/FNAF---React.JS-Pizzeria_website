import Footer from "../components/Footer"
import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import { useEffect, useState } from "react"
import axios from "axios"
import { CiSearch } from "react-icons/ci"
import { useRef } from "react"

const PedidoCliente = () => {
    const buscando = useRef("");

    const [sabor , setSabor] = useState("");

    const enviaPedidoFuncionario = async (e) => {
        e.preventDefault();
        const post = {'Sabor': sabor};
        try {
            const busca =  await axios.post('http://localhost/piloto_freddys/api-slim/pedidoFuncionario', {body:post},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            console.log(sabor); 
            // alert('Pedido Realizado!');
            // location.href = 'http://localhost:5173/funcionario';
        }   catch (error) {
            console.log(error);
        }
    }
    const defineSabor = async(e) =>{
        e.preventDefault();
        setTimeout(
            () => {
                enviaPedidoFuncionario(e);
            }, 500
        )
    }
    // function setValores(banco){
    //     setPizza(banco);
    //     setName(banco.nm_pizza);
    // }
    // function data() {
    //     const valores = new URLSearchParams(window.location.search);
    //     const namePizza = valores.get('pedido');
        
    //     fetch(`http://localhost/piloto_freddys/api-slim/pizzaCliente/${namePizza}`)
    //     .then ((response) => response.json())
    //     .then ((json) => setValores(json))
        
    // }
    // useEffect(() => {
    //     data();
    // }, []);

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
                    <p className='  text-red-700  hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><CiPizza />Atendimento</a></p>
                    
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
                <form>
                    <div className="flex justify-center mt-32">
                        <div className="bg-white w-[45rem] h-[32rem]  shadow-gray-400 shadow-md rounded-lg">
                            <div className="p-5 ">
                                <div className="flex items-center"><CiSearch className="text-red-700 me-2" /><input className="w-full" type="text" name="sabor" ref={buscando} id="sabor" onBlur={(e) => {setSabor(e.target.value);defineSabor(e)}} placeholder="Procure o sabor da pizza do cliente: 'Frango com Requeijão' "/></div>
                                <div className="flex items-center flex-col">
                                    <img src=""/>
                                 </div>
                            </div>
                            <div className="bg-white w-[45rem] rounded-xl p-5 shadow-[0px_-2px_5px_0px_#00000024] flex flex-col">
                                <p className="font-medium text-lg" name="name" id="name">Pizza de {sabor} </p>
                                <p>Pizza mto boa com varias coisas e ingredientes</p>
                                <p className="text-gray-500 mt-3">A partir</p>
                                <p>R$00.00</p>
                                <button className="text-white font-medium bg-red-700 rounded-full px-5 not-sr-only py-1 mt-5" type="submit">Registrar pedido</button>
                            </div>
                        </div>  
                    </div>
                </form>
            </div>
        <Footer/>
    </div>
    );
};  

export default PedidoCliente