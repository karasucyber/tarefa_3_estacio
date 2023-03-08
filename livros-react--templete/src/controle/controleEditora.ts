import { Editora } from "../modelo/Editora";


const editoras: Editora[] = [ 
    {nome: "julio", codEditora:1},
    
    {nome: "ruan", codEditora:2},
    
    {nome: "o fusca", codEditora:3},

]

export class ControleEditor{
 
   getEditoras(){
    return editoras;
   }
 
   getNomeEdiora(codEditora){

    return editoras.filter(editoras => editoras.codEditora === codEditora)[0].nome;

   }

}