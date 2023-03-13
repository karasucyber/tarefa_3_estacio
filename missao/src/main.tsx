import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './pag/App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pag/Home"
import Cadastro from "./pag/Cadastro";
import "bootstrap/dist/css/bootstrap.min.css" ; 




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<App/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
