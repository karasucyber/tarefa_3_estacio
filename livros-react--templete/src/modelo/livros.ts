
export class Livros {

   public codigo: number;
   public  codEditora: number;
   public  titulo: Text;
   public  resumo: Text;
   public autores: Text;

    constructor(codigo:number, titulo: Text,resumo: Text,autores: Text ){

        this.codigo = codigo;
        
        this.titulo = titulo;
        
        this.resumo = resumo;

        this.autores = autores;

    }

}