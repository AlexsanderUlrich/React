import './Botao.css'

function Botao(props) {
    
    return (
        <div className="botao">
            <button>{props.titulo}</button>
        </div>
    )
}

export default Botao 
