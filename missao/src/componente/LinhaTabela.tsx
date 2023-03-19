import { controleEditora } from "../controle/ControleEditoras";
import React from "react";
import { props } from "./tabela";
import { Livros } from "../modelo/livros";
import { useEffect, useState } from "react";
import Barra from "./barra";
import { props2 } from "./tabela";






export function LinhaTabela({ livro, controle, component}: props): JSX.Element {
  const editora = new controleEditora();

  return (
    <React.Fragment>
      
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => {
              controle.excluir(livro.codigo);
              component(true);
            }}
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


export default function Livroslista({ livros }: props2): JSX.Element {
  const [livro0x5, setLivro0x5] = useState<Livros[]>(livros.getobterLivros());
  const [component, setcomponent] = useState<boolean>(false);

  useEffect(() => {
    setLivro0x5(livros.getobterLivros());
    setcomponent(false);
  }, [component]);

  return (
    <>

      <Barra />
      <main className="container">
        <h1>Catalogo de Livros</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livro0x5.map((livro) => {
              return (
                <LinhaTabela key={livro.codigo} livro={livro} component={setcomponent} controle={livros}  />
              );
            })}

          </tbody>
        </table>
      </main>

    </>
  );
}