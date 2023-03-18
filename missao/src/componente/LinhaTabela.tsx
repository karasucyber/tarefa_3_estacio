import { controleEditora } from "../controle/ControleEditoras";
import React from "react";
import { props } from "./tabela";
import Barra from "./barra";

export function LinhaTabela({ livro, }: props): JSX.Element {
  const editora = new controleEditora();

  return (
    <React.Fragment>
      
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
          >
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
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
    </React.Fragment>
  );
}
