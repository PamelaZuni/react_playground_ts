import { useState } from "react"

function Contador() {

  const [valor, setValor] = useState(0); //variavel de estado se chama valor, valor responsavel por guardar o numero do contator. setValor responsavel por alterar mudar o estado. igual 
  
  function handleClick(){
    setValor(valor +1);
  }
  return (
    <div>
      <h2>Componente Contador</h2>

      <p>O valor atual é: {valor}</p>

      <button onClick={handleClick}>Adicionar 1</button>
    </div>

  )
}

export default Contador