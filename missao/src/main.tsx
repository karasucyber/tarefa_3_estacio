import React from 'react'
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pag/Home"
import Cadastro from "./pag/Cadastro";
import "bootstrap/dist/css/bootstrap.min.css" ; 
import Livrolista from "./componente/LinhaTabela"
import { LivrosControles } from './controle/controleLivros';
import { } from "./componente/LinhaTabela"
import LivroDados from './pag/Cadastro';

const Livros = new LivrosControles


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path ="/tabela" element={<Livrolista livros={Livros}/>}/>
      <Route path="/cadastro" element={<LivroDados livros={Livros}/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
