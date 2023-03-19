import React from "react";
import Barra from "../componente/barra";
import {Livros} from "../modelo/livros";
import {useNavigate} from "react-router-dom";
import {controleEditora} from "../controle/ControleEditoras";
import {props3} from "../componente/tabela";
import {useState} from "react";



export default function LivroDados({livros}:props3){
const[titulo, setTitulo] = useState<string>("");
const[resumo, setResumo] = useState<string>("");
const[editora, setEditora] = useState<number>(1);

const navigate = useNavigate();
const todasEditoras = new controleEditora();
function cadastroLivro(event: React.FormEvent){
  event.preventDefault();
  const novolivro = new Livros(1 ,editora ,resumo , titulo, ["Kauã"]);
  livros.incluir(novolivro);
  navigate("/tabela");

}


  return (
    <React.Fragment>
      <Barra />
      <main className="container">
        <h1>Dados Livro</h1>
        <form onSubmit={(event) => cadastroLivro(event)}>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              value={titulo}
              onChange={(event) => setTitulo(event.target.value)}
              className="form-control"
              placeholder="Titulo do livro"
            />
          </div>

          <div className="form-group mt-2">
            <label htmlFor="resumo">Resumo</label>

            <textarea
              id="resumo"
              value={resumo}
              onChange={(event) => setResumo(event.target.value)}
              className="form-control"
              rows={3}
            ></textarea>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="editora">Editora</label>
            <select
              id="editora"
              value={editora}
              onChange={(event) => {
                setEditora(Number(event.target.value));
              }}
              className="form-control"
            >
              {todasEditoras.getEditoras().map((editora) => {
                return (
                  <option value={editora.codEditora}>{editora.nome}</option>
                );
              })}
            </select>
          </div>

          <div className="form-group mt-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea id="autores" className="form-control" rows={3}></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-2">
            Salvar dados
          </button>
        </form>
      </main>
    </React.Fragment>
  );
}