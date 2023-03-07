
import './index.css';
import React from 'react';
import './'












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
              <li class="nav-item">
                  <a class="nav-link" href="cadastro.html">Novo</a>
              </li>
          </ul>
      </div>
  </nav>
  </header>
  <h1 scope="row" >Titulo</h1>
  <br/>
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
    <tr>
      <th scope="row"> Use o cabeçalho Java  <button className='button'>excluir</button></th>
      
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row"> Titulo <button className='button'>excluir</button></th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row"> Titulo <button className='button'>excluir</button></th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
  </div>

    

   
    </div>
  );
}

export default App;
