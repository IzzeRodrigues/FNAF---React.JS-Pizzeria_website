import Navbar from "../components/Navbar_double"
import banner from '../assets/images/banner_final.jpg'
import card from '../assets/images/1.jpg'
import card2 from '../assets/images/2.jpg'
import card3 from '../assets/images/3.jpg'
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import { useRef } from "react"

const Cardapio = () => {
    const [banco_pizzas, setUser] = useState([]);

    function data() {
        fetch('http://localhost/piloto_freddys/api-slim/pizzas')
        .then ((response) => response.json())
        .then ((json) => setUser(json))
    }
    useEffect(() => {
        data();
    }, []);

    return (
        <div className="telaPadrao overflow-hidden bg-red-50">
            <div className="">
                <Navbar />
                <div className="background_nav py-7">
                    <div className="flex justify-between container mx-auto">
                        <div>
                            <p className="font-medium text-gray-600">Para ofertas exclusivas<button className="ms-5 px-6 py-1 rounded-full bg-blue-800 text-white font-semibold "><a href="/CriarConta">Criar conta</a></button></p>
                        </div>
                        <div>
                            <p className="font-medium text-white">Já tem uma conta?<a href="/entrar" className="ms-2 text-red-400 underline font-medium">Entrar</a></p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-7/12">
                        <div className=" mt-10 w-full ">
                            <img className='rounded-lg w-full' src={banner} />
                        </div>
                        <div className=' mt-10 w-full'>
                            <p className="font-medium text-2xl">🔥 Dá uma olhada nessas ofertas!</p>
                            <div className="flex justify-between mt-10 gap-4">
                                <button className="overflow-hidden h-[13rem] rounded-2xl"><img className="" src={card} /></button>
                                <button className="overflow-hidden h-[13rem] rounded-2xl"><img className="" src={card2} /></button>
                                <button className="overflow-hidden h-[13rem] rounded-2xl"><img className="" src={card3} /></button>
                            </div>
                        </div>
                        <div className='mt-10 w-full'>
                            <div className="mt-10">
                                <p className="font-medium text-2xl mb-10">Tá na mão as mais recomendadas</p>
                                <div className="flex items-center justify-between">
                                    <p className="font-medium text-xl mb-10">🍕 Pizzas</p>
                                    <p className="text-red-700 underline"><a href="#">Ver todas</a></p>
                                </div>
                                <div className="">
                                    <form action="http://localhost:5173/pedido" method="GET" className="flex flex-wrap gap-y-5">
                                    {banco_pizzas.map((pizza) =>
                                            <div className="flex justify-center w-4/12 px-2">
                                                <div key={pizza.id_pizza} className=" bg-white rounded-lg shadow-md ps-4 px-2 py-2">
                                                    <div className="flex w-full">   
                                                        <div className="flex flex-col justify-between w-7/12">
                                                            <p className="font-medium text-lg">{pizza.nm_pizza}</p>
                                                            <p className="w-11/12 text-gray-600 text-ellipsis line-clamp-2 ">{pizza.dc_pizza}</p>
                                                            <div>   
                                                                <p className="text-gray-600 text-sm">A partir de</p>
                                                                <p className="font-medium">R${pizza.vl_pizza}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex">
                                                            <img className="rounded-lg w-[10rem] h-[10rem] object-cover object-center sombra_pizza p-1" src={pizza.img_pizza} />
                                                        </div>  
                                                    </div>
                                                    <hr className="opacity-75 w-full my-3" />
                                                    <div className="flex justify-end">
                                                        <button className="rounded-full py-1 px-4 b outline outline-offset-2 outline-1  hover:outline-4 transition-all duration-100 outline-black font-medium mt-4" name="pedido" value={pizza.id_pizza}>Fazer Pedido</button>
                                                    </div>
                                                </div>
                                        </div>)}
                                    </form>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="flex items-center justify-center mt-12 h-14 px-10 text-lg font-medium text-center text-black border hover:border-4 align-middle transition-all duration-100 ease-in-out bg-transparent border-black border-solid rounded-full cursor-pointer hover:border-black ">Ver cardápio completo</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    ); 
};

export default Cardapio