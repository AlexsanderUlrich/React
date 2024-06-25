import './Player.css'

function Player (props) {
    const Fundo = {
        backgroundColor: props.fundo       
    }

    return (    
        <div className='player'>

            <div className='cabecalho' style={Fundo}> 
                <img src={props.imagem} alt='Imagem' onError={(e) => { e.target.src = 'path/to/placeholder/image.png';}}/>  
            </div>

            <div className='rodape'> 
                <h4>{props.nome}</h4>
                <h5>{props.funcao}</h5>
            </div>

        </div>
        )
}

export default Player