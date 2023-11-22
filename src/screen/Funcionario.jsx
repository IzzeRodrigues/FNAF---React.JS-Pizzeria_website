import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import celebrate from '../assets/images/celebrate.jpg'


const Funcionario = () => {
    return (
        <div>
            <nav className='fixed h-24 bg-white w-full z-50 top-0'>
                <div className='nav-center h-full flex items-center justify-center'>
                    <div className='flex items-center gap-[10rem]'>
                        <div className=''>
                            <a href="/">
                                <img src={logo} className='h-20' />
                            </a>
                        </div>
                        <div className='flex gap-5'>
                            <p className='text-gray-600  hover:text-red-700  active:text-red-700'> <a href="#" className='flex items-center gap-2'><HiOutlineHome />Início</a></p>
                            <p className='text-gray-600     hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><HiOutlineBookOpen />Cardápio</a></p>
                            <p className='text-red-700  hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><CiPizza />Atendimento</a></p>
                        </div>
                        <div>
                            <p><a href="#" className='flex items-center gap-3'><LuMapPin />Sede: Praiamar Shopping <BiChevronDown className='text-red-700' /></a></p>
                        </div>
                        <div>
                            <p className='text-red-700 font-medium flex gap-2 items-center'><CgProfile />Meu perfil</p>
                        </div>
                    </div>
                </div>
                <hr />
            </nav>
            <main className='bg-red-50 telaPadrao'>
                <div className='flex justify-center h-[24rem] pt-40'>
                    <div className='bg-white my-[0.5rem] md:w-[50rem] w-[25rem] rounded-xl shadow-lg md:h-[21.6rem] background-image flex '>
                        <div className='pt-[4rem] md:ps-[4rem]'>
                            <p className='text-2xl font-semibold text-left'>Pronto para encantar seus clientes?</p>
                            <p className='pt-5 text-md text-gray-600 text-left w-10/12'>Escolha uma operação e vamos começar!</p>
                            <div className='flex flex-col items-center gap-4 mt-10'>
                                <div className='flex gap-12'>
                                    <button className='rounded-2xl bg-red-700 px-3 py-1 text-white'>Cadastrar novo sabor de Pizza</button>
                                    <button className='rounded-2xl bg-red-700 px-3 py-1 text-white'>Cadastrar nova Bebida</button>
                                </div>
                                <div className='flex gap-12'>
                                    <button className='rounded-2xl bg-red-700 px-3 py-1 text-white'>Cadastrar novo cliente</button>
                                    <button className='rounded-2xl bg-red-700 px-3 py-1 text-white'>Realizar novo pedido</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
export default Funcionario