import React from "react";
import home from "../pag/Home";
import cadastro from "../pag/Cadastro";
import {BrowserRouter, To, Link, Outlet} from "react-router-dom"

function Barra(){
    return (
        <>
       
        <nav>
  <div className="nav nav-tabs" id="nav-tab" role="tablist">
     <Link to='/home' className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</Link>
    <Link to='/' className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Tabel</Link>
    <Link to='/cadastro' className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false" >Cadastro</Link>
  </div>
</nav>
<div className="tab-content" id="nav-tabContent">
  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" ></div>
  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" ></div>
  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" ></div>
</div>
<Outlet/>
        </>
    )
}

export default Barra;