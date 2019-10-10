import React from 'react'

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
const Button = (props) => <button>props.text</button>

function App() {
  return (
    <div className="App">
      <MostraVoltas voltas='14' />
      <Button text='+++'/>
      <Button text='-'/>
      <MostraTempo tempo='01:30'/>
      <Button text='Iniciar'/>
      <Button text='Reiniciar'/>
    </div>
  );
}

export default App
