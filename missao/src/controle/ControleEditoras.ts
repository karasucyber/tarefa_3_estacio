import { Editora } from "../modelo/Editora";


export const editoras: Editora[] = [ 
    {nome: "escreve.com", codEditora:1},
    
    {nome: "palavras não faladas", codEditora:2},
    
    {nome: "palavras não escritas", codEditora:3},

]


export class ControleEditor{
    static editora: any;
 
    getEditoras(){
     return editoras;
    }
    getNomeEditora(){
      const editora = editoras.filter( codEditora => editoras)
      return editoras
     }

 }


