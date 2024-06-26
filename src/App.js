import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario";
import { useState } from "react"
import Jogo from "./componentes/Jogo"



function App() {

  const jogos = [
    {
      nome: 'VALORANT',
      corPrimaria: '#FF1A44',
      corSecundaria: '#FF7374',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA_4ct2dJgRNcpHlKqS5yIixcWuqWL26ImTg&s',
    },
    {
      nome: 'Counter-Striker',
      corPrimaria: '#02B2D1',
      corSecundaria: '#3575AD',
      imagem:'https://ih1.redbubble.net/image.4940982788.8058/raf,360x360,075,t,fafafa:ca443f4786.jpg',
    },
    {
      nome: 'Overwatch',
      corPrimaria: '#f88d00',
      corSecundaria: '#ffed88',
      imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIqOs_MLi2c3T4lWvfx7glZFETEy7Q3oM_4A&s',
    }, 

  ]

  const [Players, setPlayer] = useState([]);

  const cadastroPlayer = (playerNovo) => {
    setPlayer([...Players, playerNovo])
    console.log(playerNovo)
  };

  return (
    <div className="App">

      <Banner />
      <Formulario nomeDosJogos={jogos.map(jogo => jogo.nome)} cadastroNovoPlayer={playerNovo => cadastroPlayer(playerNovo)} />

      {jogos.map(jogo => <Jogo
        key={jogo.nome}
        nome={jogo.nome}
        imagem={jogo.imagem}
        corPrimaria={jogo.corPrimaria}
        corSecundaria={jogo.corSecundaria}
        players={Players.filter(player => player.jogo === jogo.nome)}
      />)}


    </div>

  )
}

export default App;
