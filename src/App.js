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
  const tempo = props.tempo
  const minutos =  Math.round(tempo / 60) // obtendo os minutos
  const segundos = tempo % 60 // obtendo os segundos
  const minutosStr = minutos < 10 ? '0' + minutos : minutos // formatação para mostrar dois algorismo
  const segundosStr = segundos < 10 ? '0' + segundos : segundos // formatação para mostrar dois algorismo

  return (
    <p>
      {`${minutosStr} : ${segundosStr}`}<br />
      Tempo médio por volta
    </p>
  )
}

// componente para mostrar botão
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

function App() {
  // definindo numero de voltas
  const [numVoltas, setNumVoltas] = useState(14)
  // definindo booleando para running do tempo
  const [running, setRunning] = useState(false)
  //definindo o tempo
  const [tempo, setTempo] = useState(0)

  // será atualizado apenas na primeira vez
  useEffect(() => {
    let timer = null // variavel que irá receber uma instancia do setInterval
    if (running) { 
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])
  
  const toggleRunning = () => {
    setRunning(!running)
  }

  // incrementando o numero de voltas
  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }
  // decrementando o numero de voltas
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }

  // resetar o timer
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }
  
  return (
    <div>
      <MostraVoltas voltas={numVoltas} />
      <Button text='+' onClick={increment}/>
      <Button text='-' onClick={decrement}/>
      {
        numVoltas > 0 &&
        <MostraTempo tempo={tempo/numVoltas}/>
      }
      <Button onClick={toggleRunning} text='Iniciar'/>
      <Button onClick={reset} text='Reiniciar'/>
    </div>
  );
}


export default App
