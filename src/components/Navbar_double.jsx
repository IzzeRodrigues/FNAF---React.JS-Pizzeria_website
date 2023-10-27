import { useState, useRef } from 'react';
import logo from '../assets/images/freddys_logo2.png'
import { HiOutlineHome, HiOutlineBookOpen } from 'react-icons/hi'
import { CiPizza } from 'react-icons/ci'
import { BiChevronDown } from 'react-icons/bi'
import { LuMapPin } from 'react-icons/lu'
import { CgProfile } from 'react-icons/cg'
import { RiBearSmileLine } from 'react-icons/ri'
import { GiFullPizza } from 'react-icons/gi'

const Navbar_double = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
  };

  return (
    <nav className='fixed h-24 bg-white w-full z-50 top-0'>
      <div className='nav-center h-full flex items-center justify-center'>
        <div className='flex items-center gap-[10rem]'>
          <div className=''>
            <a href="/">
              <img src={logo} className='h-20' />
            </a>
          </div>
          <div className='flex gap-5  '>
            <p className='text-red-700  hover:text-red-700  active:text-red-700'> <a href="#" className='flex items-center gap-2'><HiOutlineHome />Início</a></p>
            <p className='text-gray-600   hover:text-red-700  active:text-red-700'><a href="#" className='flex items-center gap-2'><HiOutlineBookOpen />Cardápio</a></p>
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
            <input id="Toggle4" type="checkbox" className="hidden peer" />
            <span className="px-7 py-1 rounded-full dark:bg-red-700  peer-checked:dark:text-gray-600 text-white peer-checked:dark:bg-white font-medium">Delivery</span>
            <span className="px-7 py-1 rounded-full dark:bg-white peer-checked:dark:bg-red-700 peer-checked:dark:text-white font-medium">Retirada</span>
          </label>
        </div>
        
          <div className='border-r border-1 h-12'></div>
          <div className='flex items-center gap-2'>
            <GiFullPizza className='text-red-700 text-3xl'/>
            <div>
              <p className='font-medium text-md'>R$ 0,00</p>
              <p className='text-gray-600'>0 itens</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar_double;
