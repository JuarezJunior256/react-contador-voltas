import React from 'react'

// componente para mostrar botão
const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

export default Button