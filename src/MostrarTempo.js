import React from  'react'

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

  export default MostraTempo 