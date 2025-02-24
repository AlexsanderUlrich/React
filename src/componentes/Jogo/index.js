import Player from '../Player'
import './Jogos.css'

function Jogo (props) {
    const Fundo = {
        backgroundColor: props.corSecundaria        
    }
    const Borda = {
        borderColor: props.corPrimaria
    }

    const Logo =  props.imagem;
    
    

    return(

        (props.players.length > 0) &&    
        <section className='jogo' style={Fundo}>
            
            <h3 style={Borda}>{props.nome}</h3>            

            <div className='player'> 

                <div className='player-card'>
                           {props.players.map(player => (<Player key={player.nome} nome={player.nome} funcao={player.funcao} imagem={Logo} fundo={props.corPrimaria}/> ))}           
                </div>
            
            </div>
            

        </section>
        
    )
}

export default Jogo