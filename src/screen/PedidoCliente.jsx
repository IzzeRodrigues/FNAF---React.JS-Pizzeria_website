import Footer from "../components/Footer"
import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import { useState } from "react"
import axios from "axios"
import { CiSearch } from "react-icons/ci"
import { useRef } from "react"

const PedidoCliente = () => {
    const buscando = useRef("");
    const [listaPizzas, setPizza] = useState([]);
    const [sabor , setSabor] = useState("");
    const [imagem , setImagem] = useState("");
    const [descricao , setDescricao] = useState("");
    const [preco , setPreco] = useState("");

    const enviaPedidoFuncionario = async (e) => {
        e.preventDefault();
        const post = {'Sabor': sabor, 'Imagem': imagem, 'Descricao': descricao, 'Preco': preco};
        try {
            const retorno = await axios.post('http://localhost/piloto_freddys/api-slim/pedidoFuncionario', {body:post},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            setValores(retorno.data);
        }   catch (error) {
            console.log(error);
        }
    }

    const registraPedido = async (e) => {
        e.preventDefault();
        try {
            const guarda = {'Name': sabor, 'Valor': preco};
            const envio = await axios.post('http://localhost/piloto_freddys/api-slim/pedido', {body:guarda},{headers : {'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}});
            if (envio.data){
                alert('Pedido solicitado incorretamente, tente novamente!')
            }else{
                alert('Pedido Realizado!');
                location.href = 'http://localhost:5173/funcionario';
            };
        } catch (error) {
            console.log(error);
        }
    }
    function setValores(banco){
        setPizza(banco);
        setSabor(banco.nm_pizza);
        setImagem(banco.img_pizza)
        setDescricao(banco.dc_pizza);
        setPreco(banco.vl_pizza);
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
                <form onSubmit={(e) => registraPedido(e)}>
                    <div className="flex justify-center mt-32">
                        <div className="bg-white w-[45rem] h-[32rem]  shadow-gray-400 shadow-md rounded-lg">
                            <div className="p-5 ">
                                <div className="flex items-center"><input className="w-full" type="text" name="sabor" ref={buscando} id="sabor" onChange={(e) => setSabor(e.target.value)}  placeholder="Procure o sabor da pizza do cliente: 'Frango com Requeijão' "/><button onClick={(e) => enviaPedidoFuncionario(e)}><CiSearch className="text-red-700 me-2" /></button></div>
                                <div className="flex items-center flex-col">
                                    <img  className="w-[28rem] flex items-center" src={listaPizzas.img_pizza}/>
                                 </div>
                            </div>
                            <div className="bg-white w-[45rem] rounded-xl p-5 shadow-[0px_-2px_5px_0px_#00000024] flex flex-col">
                                <p className="font-medium text-lg" name="name" id="name">Pizza de {sabor} </p>
                                <p className="text-gray-500">{listaPizzas.dc_pizza}...</p>
                                <p className="text-gray-500 mt-3">A partir</p>
                                <p>R${listaPizzas.vl_pizza}</p>
                                <button className="text-white font-medium bg-red-700 rounded-full px-5 not-sr-only py-1 mt-5" type="submit" >Registrar pedido</button>
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