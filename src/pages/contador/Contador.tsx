import { useState } from "react"

function Contador() {

  // const [nome_estado, função_setState] = useState(valor_inicial_do_estado)
  
// estado valor (react)
    const [valor, setValor] = useState(0);

// função de mudança de estado (typescript)
    function handleClick(){
      setValor(valor + 1);
    }
// tudo html e css
  return (
    <div>
      <h2>Componente Contador</h2>

      <p>O valor atual do meu estado é: {valor}</p>
      
      <button onClick={handleClick}>Adicionair +1</button>

    </div>
  )
}

export default Contador