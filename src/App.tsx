import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import Contador from './pages/contador/Contador'
import Tarefa from './pages/tarefa/Tarefa'
// estado causa uma mudança no componente que o usuario vê na tela, mudando a virtual dom
function App() {

  // const [nome_estado, função_setState] = useState(valor_inicial_do_estado)

  return (
    <>
        {/* <Home 
          titulo = "Minha primeira postagem"
          texto = "Texto da minha primeira postagem"
        />
        
        <Home 
          titulo = "Minha segunda postagem"
          texto = "Texto da minha segunda postagem"
        /> */}

        {/* <Contador /> */}

        <Tarefa/>
    </>
  )
}

export default App
