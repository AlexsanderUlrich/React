import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario";
import { useState } from "react"
import Jogo from "./componentes/Jogo"



function App() {

  const jogos = [
    {
      nome: 'Valorant',
      corPrimaria: '#FF1A44',
      corSecundaria: '#FF7374',
    },
    {
      nome: 'Counter-Striker',
      corPrimaria: '#02B2D1',
      corSecundaria: '#3575AD',
    },
    {
      nome: 'Overwatch',
      corPrimaria: '#f88d00',
      corSecundaria: '#ffed88',
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
        corPrimaria={jogo.corPrimaria}
        corSecundaria={jogo.corSecundaria}
        players={Players.filter(player => player.jogo === jogo.nome)}
      />)}


    </div>

  )
}

export default App;
