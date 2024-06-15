import './CampoTexto.css'
import { useState } from 'react'

function CampoTexto (props) {
    
    //Essa const vai receber o valor com nome placeholder, que vai ser definido dentro do Formulário
    const placeholderModificada = `${props.placeholder}...`
    
    //Essa função, quando alterado alguma coisa no input, vai receber o valor, depois vai pegar o aoAlterado de dentro do props do formulário, e retornar ele com o valor do input
    const aoDigitado = (evento) => {
       props.aoAlterado(evento.target.value)
    }
    
    
//O componente vai receber o props, no input, para depois popder pegar os diferentes valores dele. 
//Quando for alterada vai ativar o "onChange" que por sua vez, vai chamar a outra função "aoDigitado"
    return(        
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default CampoTexto;

