import "./App.css"
import "./components/Estilo/reset.css"
import "./components/Estilo/style.css"
import { useState } from "react"

import Cabecalho from "./components/Cabecalho"
import Form from "./components/Formulario"
import DinheiroTotal from "./components/DinhieroTotal"
import List from "./components/Listas"


function App() {
  const [listaTransacao, setlistaTransacao] = useState([])

  return (
    <>
      
      <Cabecalho inicio={"Inicio"} />
      <div className="App">
        <div>
          <Form
            listaTransacao={listaTransacao}
            setlistaTransacao={setlistaTransacao}
            />
          <DinheiroTotal listaTransacao={listaTransacao} />
        </div>
          

        <List
          listaTransacao={listaTransacao}
          setlistaTransacao={setlistaTransacao}
        />
      </div>
    </>
  )
}

export default App
