import './Player.css'

function Player (props) {
    return (    
        <section className='player'>

            <div className='cabecalho'> 
                <img src='./public/images/banner.jpg' alt='Imagem'/>  
            </div>

            <div className='rodape'> 
                <h4>{props.nome}</h4>
                <h5>{props.funcao}</h5>
            </div>

        </section>
        )
}

export default Player