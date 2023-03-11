import { useEffect } from "react";
import LivrosControle from "./controle/controleLivros"
import  {ControleEditor, editoras} from "./controle/ControleEditoras";
import { Livros } from "./modelo/livros";
import React from 'react';
import { Editora } from "./modelo/Editora";


//instanciado Controladores//





type Props = {

  livros: Livros;

  excluir: (index: number) => void;

};

type pros ={
  livros: LivrosControle;
}

const LinhaLivro = ({livros, excluir}: Props) => {
  const ControleEditora = new ControleEditor;

  return ( 
  <>
    <tr>
      <th scope="row">
        <p> {livros.titulo}</p>
        <button type="button" className="btn btn" onClick={() => {
          excluir(livros.codigo)}}> Excluir</button>
         </th>
         <td>{livros.resumo}</td>
         <td> {ControleEditor.getNomeEditora({ codEditora: livros.codEditora }).map((nomecodEditora) => {
            return nomecodEditora.nome;
          })}
          </td>
          <td>
          <ul>
            {livros.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
    </tr>
    
    
    </>)
 


};




