import { Editora } from "../modelo/Editora";


export class controleEditora{
  editoras: Editora[] = [ 
    {nome: "escreve.com", codEditora:1},
    
    {nome: "palavras não faladas", codEditora:2},
    
    {nome: "palavras não escritas", codEditora:3},

];

getEditoras() {
  return this.editoras;
}


getNomeEditora(Editoracod: number){
  return this.editoras.filter((editora) => {return editora.codEditora === Editoracod })

}

};


        
 
