
export class Livros {

   public codigo: number;
   public codEditora: number;
   public titulo: string;
   public resumo: string;
   public autores: string[];

    constructor(codigo:number, titulo: string,resumo: string,autores: string[] ){

        this.codigo = codigo;
        
        this.titulo = titulo;
        
        this.resumo = resumo;

        this.autores = autores;

    }

}