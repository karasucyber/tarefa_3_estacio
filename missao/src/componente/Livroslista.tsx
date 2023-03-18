import { Livros } from "../modelo/livros";
import React, { useEffect, useState } from "react";
import Barra from "./barra";
import { LinhaTabela } from "./LinhaTabela";
import { props2 } from "./tabela";


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
                <LinhaTabela key={livro.codigo} livro={livro} component={setcomponent} controle={livros} />
              );
            })}

          </tbody>
        </table>
      </main>

    </>
  );
}
