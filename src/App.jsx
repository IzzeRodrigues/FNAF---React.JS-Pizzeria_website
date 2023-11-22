import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import CriarConta from "./screen/CriarConta";
import Cardapio from "./screen/Cardapio";
import './index.css';
import Usuario from './screen/Users';
import Axios from './screen/aula-axios';
import Axios2 from './screen/aula-axios2';
import Teste from './components/teste_banco';
import Entrar from './screen/entrar';
import Pedido from './screen/Pedido';
import Funcionario from './screen/Funcionario';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CriarConta" element={<CriarConta/>}></Route>
        <Route path="/Cardapio" element={<Cardapio/>}></Route>
        <Route path="/entrar" element={<Entrar/>}></Route>
        <Route path="/pedido" element={<Pedido/>}></Route>
        <Route path="/funcionario" element={<Funcionario/>}></Route>

        {/* 28/09 aula */}
        <Route path="/user" element={<Usuario/>}></Route>
        {/* 09/11 aula */}
        <Route path="/aulaaxios" element={<Axios/>} ></Route>
        <Route path="/aulaaxios2" element={<Axios2/>} ></Route>
        {/* 13/11 teste */}
        <Route path="/teste" element={<Teste/>} ></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App