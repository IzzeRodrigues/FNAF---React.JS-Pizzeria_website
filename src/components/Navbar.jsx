import { useState, useRef } from 'react'; 
import { FaBars } from 'react-icons/fa';
import logo from '../assets/images/freddys_logo.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  
  const linkStyles = {
    height: showLinks? `${linksRef.current.getBoundingClientRect().height}px`: '0px'
  };

  return (
    <div className='shadow-2xl z-50'>
      <nav className='fixed h-24 bg-white w-full shadow-md z-50 top-0 '>
        <div className='nav-center h-full flex items-center '>
          <div className='flex justify-end nav-header2 h-full align-middle '>
            <button className='nav-toggle' onClick={toggleLinks}>
              <FaBars/>
            </button>
          </div>
          <div className='flex justify-end w-full' style={linkStyles}>
            <div className='links-container w-[8rem] rounded-bl-lg'>
            <ul className='links' ref={linksRef}>
              <li className='coluna alinhador'>
                <a className='link' href="/entrar">Entrar</a>
                <button className='button'><a className='color botao texto' href='/CriarConta'>Criar Conta</a></button>
              </li>
            </ul>
            </div> 
        </div>
      <div className='md:flex hidden row w-[18rem] me-[12rem] '>
        <a className='link' href="/entrar">Entrar</a>
        <button className='button flex self-center'><a className='color botao texto flex self-center ' href='/CriarConta'>Criar Conta</a></button>
      </div>
      </div>
    </nav> 
      <a href="/"><img src={logo} className='logo md:ms-44 md:mt-2 drop_shadow z-50 top-0'/></a>
    </div>
  );
};

export default Navbar;
  