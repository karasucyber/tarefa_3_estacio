import { LivrosControles } from "../controle/controleLivros";
import { Livros } from "../modelo/livros";
import React from "react";


export type props ={
  livro: Livros;
  controle: LivrosControles;
  component: React.Dispatch<React.SetStateAction<boolean>>;
};

export type props2 = {
  livros: LivrosControles
}

export type props3 = {
  livros: LivrosControles
}
