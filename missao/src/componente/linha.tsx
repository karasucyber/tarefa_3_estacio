import { controleEditora} from "../controle/ControleEditoras";
import {LivrosControles } from "../controle/controleLivros"
import React from "react";
import { useState, useEffect } from "react";
import {Livros} from "../modelo/livros"


type PropsLinhaLivro = {
  livro: Livros;
  controle: LivrosControles
  estado: React.Dispatch<React.SetStateAction<boolean>>;
}; 

  const Linha = ({controle, livro, estado}: PropsLinhaLivro) => {
    const  editora = new controleEditora();
    return(
      <>
        <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              controle.excluir(livro.codigo);
              estado(true);
            }}
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora (livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
</>
  );
  }

export default Linha;