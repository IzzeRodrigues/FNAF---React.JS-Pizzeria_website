import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screen/Home";
import CriarConta from "./screen/CriarConta";
import Cardapio from "./screen/Cardapio";
import './index.css';
import Usuario from './screen/Users';

function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/CriarConta" element={<CriarConta/>}></Route>
        <Route path="/Cardápio" element={<Cardapio/>}></Route>
        {/* 28/09 aula */}
        <Route path="/user" element={<Usuario/>}></Route>

      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App