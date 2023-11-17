import Footer from "../components/Footer"
import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import { RiBearSmileLine } from 'react-icons/ri'
import { GiFullPizza } from 'react-icons/gi'
import Frango from '/src/assets/images/frango-e-requeijao-v1.jpg'
import { useState } from "react"
import axios from "axios"
import { useRef } from "react"

const Pedido = () => {
    const [name, setName] = useState([]);
    const [valor, setValor] = useState([]);



    const enviaPedido = async (e) => {
        e.preventDefault();
        pizza = '';
        setName(pizza.valor)
        const post = {'name': name, 'valor': valor};

        try {
            await axios.post('http://localhost/piloto_freddys/api-slim/pedidos', {body:post,},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}}).then(location.href='http://localhost:5173/Cardapio', alert('Pedido registrado com sucesso!'));

        } catch (error) {
            console.log(error);
            console.log('errou.');
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
                    <p className='text-gray-600  hover:text-red-700  active:text-red-700'> <a href="#" className='flex items-center gap-2'><HiOutlineHome />Início</a></p>
                    <p className='text-red-700  hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><HiOutlineBookOpen />Cardápio</a></p>
                    <p className='text-gray-600   hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><CiPizza />Meio a meio</a></p>
                </div>
                <div>
                    <p><a href="#" className='flex items-center gap-3'><LuMapPin />Rua. Alexandre Martins 80 <BiChevronDown className='text-red-700' /></a></p>
                </div>
                <div>
                    <p className='text-red-700 font-medium flex gap-2 items-center'><CgProfile />Meu perfil</p>
                </div>
                </div>
            </div>
            <hr />
            <div className='bg-white w-full shadow-lg h-20 flex items-center'>
            <div className='items-center flex justify-evenly container mx-auto'>
                <div>
                <p className='flex gap-2 text-gray-600'><p className='font-medium text-red-700 flex items-center gap-1'><RiBearSmileLine/>Loja:</p> PH EXPRESS PRAIAMAR SHOPPING - SP</p>
                </div>
                <div className='flex gap-5'>
                <div>
                <label for="Toggle4" className="inline-flex items-center p-1 cursor-pointer w-full gap-5 justify-center border-gray border rounded-full">
                    <p id="Toggle4" type="checkbox" className="hidden peer" />
                    <span className="px-7 py-1 rounded-full dark:bg-red-700  peer-checked:dark:text-gray-600 text-white peer-checked:dark:bg-white font-medium">Delivery</span>
                    <span className="px-7 py-1 rounded-full dark:bg-white peer-checked:dark:bg-red-700 peer-checked:dark:text-white font-medium">Retirada</span>
                </label>
                </div>
                
                <div className='border-r border-1 h-12'></div>
                <div className='flex items-center gap-2'>
                    <GiFullPizza className='text-red-700 text-3xl'/>
                    <div>
                    <p className='font-medium text-md'>R$ 39,90</p>
                    <p className='text-gray-600'>1 item</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </nav>
            <form onSubmit={(e)=>enviaPedido(e)}>
                <div className="flex justify-center mt-52">
                    <div className="bg-white w-[45rem] h-[32rem]  shadow-gray-400 shadow-md rounded-lg">
                        <div className="p-5 ">
                            <p className="text-red-700 text-lg">Pizza de Frango com Requeijão</p>
                            <p className="text-gray-500">Frango, queijo saboroso e requeijão cremoso, praticidade e sabor para o seu dia!</p>
                            <div className="flex items-center flex-col">
                                <img src={Frango} className="w-[30rem] flex items-center"/>
                            </div>
                        </div>
                        <div className="bg-white w-[45rem] rounded-xl p-5 shadow-[0px_-2px_5px_0px_#00000024]">
                            <p ref={pizza} className="font-medium text-lg" value="Pizza de Frango com Requeijão" name="name" id="name">Pizza de Frango com Requeijão</p>
                            <p className="text-gray-500 mt-3">A partir</p>
                            <p className="font-medium" name="valor" id="valor" value="R$39.90" onChange={(e) => setValor(e.target.value)}>39.90</p>
                            <button className="text-white font-medium bg-red-700 rounded-full px-5 not-sr-only py-1 mt-5" type="submit" onClick={(e) => enviaPedido()}>Fazer Pedido</button>
                        </div>
                    </div>  
                </div>
            </form>
        <Footer/>
    </div>
    );
};  

export default Pedido