import Linhas from "./linha"
import React from "react";


function Tabela(){
    return(
        <>
        <div className="container text-center"> 
<table className="table">
  <thead>
    <tr>
      <th scope="col-">titulo</th>
      <th scope="col">resumo</th>
      <th scope="col">Editora</th>
      <th scope="col">Autores</th>
    </tr>
  </thead>
  <tbody>
    

  </tbody>
</table>
</div>
      
        </>
    );
}

export default Tabela;