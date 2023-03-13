import { ControleEditor, editoras } from "../controle/ControleEditoras";
import {LivrosControles} from "../controle/controleLivros"






















function Tabela(){
    return(
        <>
        <div className="container text-center"> 
<table className="table">
  <thead>
    <tr>
      <th scope="col-">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <button type="button" className="btn btn-dark">Excluir</button>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <button type="button" className="btn btn-dark">Excluir</button>

    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <button type="button" className="btn btn-dark">Excluir</button>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td> olá </td>
      <button type="button" className="btn btn-dark">Excluir</button>

    </tr>
  </tbody>
</table>
</div>
        </>
    );
}

export default Tabela;