import React, { useState, useEffect } from 'react';
import ControleLivro from "./controle/ControleLivro";
import ControleEditora from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

function LinhaLivro(props) {
  const [nomeEditora, setNomeEditora] = useState("");

  useEffect(() => {
    async function getNomeEditora() {
      const nome = await controleEditora.getNomeEditora(props.livro.codEditora);
      setNomeEditora(nome);
    }

    getNomeEditora();
  }, [props.livro.codEditora]);

  const autores = props.livro.autores.map((autor, index) => <li key={index}>{autor}</li>);

  return (
    <tr>
      <td>{props.livro.titulo}</td>
      <td>{props.livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {autores}
        </ul>
      </td>
      <td><button onClick={() => props.excluir(props.livro._id)}>Excluir</button></td>
    </tr>
  );
}

function LivrosLista() {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function obterLivros() {
      const listaLivros = await controleLivro.obterLivros();
      setLivros(listaLivros);
      setCarregado(true);
    }

    if (!carregado) {
      obterLivros();
    }
  }, [carregado]);

  function excluirLivro(id) {
    controleLivro.excluirLivro(id);
    setLivros(livros.filter(livro => livro._id !== id));
  }

  const listaLinhas = livros.map(livro => <LinhaLivro key={livro._id} livro={livro} excluir={excluirLivro}/>);

  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="index.html">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="receitas.html">catálogo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="cadastro.html">Novo</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <h1>Título</h1>
      <br/>
      <div className="container">
        <div className="tabela">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Título</th>
                <th scope="col">Resumo</th>
                <th scope="col">Editora</th>
                <th scope="col">Autores</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {listaLinhas}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LivrosLista;