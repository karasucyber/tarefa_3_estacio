import { Livros } from "../modelo/livros";

class ControleLivro {
livros: Livros[] = [
{
codigo: 1,
codEditora: 1,
titulo: "livros de sei lá",
autores: [""],
resumo: "",
},
{
codigo: 2,
codEditora: 2,
titulo: "livros de ain pai",
autores: [""],
resumo: "",
},
{
codigo: 3,
codEditora: 3,
titulo: "",
autores: [""],
resumo: "",
},
];

obterLivros(): Livros[] {
return this.livros;
}

incluir(livro: Livros): void {
const novoCodLivro =
this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
livro.codigo = novoCodLivro;
this.livros.push(livro);
}

excluir(codLivro: number): void {
const index = this.livros.findIndex((livro) => livro.codigo === codLivro);
if (index !== -1) {
this.livros.splice(index, 1);
}
}
}