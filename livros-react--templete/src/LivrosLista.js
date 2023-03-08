import ControleEditora from "./controle/controleLivros.ts";
import ControleLivros from "./controle/controleLivros.ts";
import {Livros} from "./modelo/livros.ts"




const controleEditora = new ControleEditora;
const controleLivro = new controleLivro;


  function linhaLivros({Livros, excluir }) {

  const nomeEditora = ControleEditora.getNomeEditora(Livros.codEditora);
  return (
    <>
      <tr>
      <td>{Livros.titulo}</td>
      <td>{Livros.resumo}</td>
      <td>{nomeEditora}</td>
      <td>{Livros.autores.join()}</td>
        <td><button className='button' onClick={() => excluir(Livros.codigo)}>Excluir</button></td>
      </tr>
    </>
  )

}


function App() {
  return (
    <div className="App">
      <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <div class="navbar-collapse">

            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="receitas.html">catálogo</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="cadastro.html">Novo</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <h1 scope="row" >Titulo</h1>
      <br />
      <div className='container'>
        <div className='tabela'>
        </div>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">resumo</th>
              <th scope="col">editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>

            <linha />

          </tbody>
        </table>
      </div>




    </div>
  );
}

export default App;
