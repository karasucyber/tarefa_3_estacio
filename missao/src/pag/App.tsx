import { useState } from 'react'
import {editoras} from "../controle/ControleEditoras"
import Barra from "../componente/barra"
import Tabela from '../componente/tabela'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
       <Barra/>
       <Tabela/>
    </div>

  

)
}

export default App
