
export class Livros {

    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codigo:number, titulo: string,resumo: string,autores: string[] ){

        this.codigo = codigo;
        
        this.titulo = titulo;
        
        this.resumo = resumo;

        this.autores = autores;

    }

}