import React, {useState, useEffect} from 'react'

// componente para mostras voltas
const MostraVoltas = (props) => {
  return (
    <p>
      {props.voltas}<br />
      Voltas
    </p>
  )
}

// componente para mostrar tempo
const MostraTempo = (props) => {
  return (
    <p>
      {props.tempo}<br />
      Tempo médio por volta
    </p>
  )
}

// componente para mostrar botão
const Button = (props) => <button onClick={props.onclick}>{props.text}</button>

function App() {
  // definindo numero de voltas
  const [numVoltas, setNumVoltas] = useState(14)
  //definindo o tempo
  const [tempo, setTempo] = useState(0)

  // será atualizado apenas na primeira vez
  useEffect(() => {
    setInterval(() => {
      
    }, 1000)
  }, [])

  // incrementando o numero de voltas
  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  // decrementando o numero de voltas
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }
  
  return (
    <div>
      <MostraVoltas voltas='14' />
      <Button text='+' onclik={increment}/>
      <Button text='-' onclick={decrement}/>
      <MostraTempo tempo={tempo}/>
      <Button text='Iniciar'/>
      <Button text='Reiniciar'/>
    </div>
  );
}


export default App
