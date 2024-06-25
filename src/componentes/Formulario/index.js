import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react'


function Formulario(props) {   
    

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [jogo, setJogo] = useState('')    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.cadastroNovoPlayer({
            nome,
            funcao,
            imagem,
            jogo
        })
        setNome('')
        setFuncao('')
        setImagem('')
    }
   


    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Jogador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do jogador"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Função"
                    placeholder="Digite a função"
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label="Jogo"
                    itens={props.nomeDosJogos}
                    valor={jogo}
                    aoAlterado={valor => setJogo(valor)}
                />

                <Botao titulo="Gravar Jogador" />
            </form>
        </section>
    )

}



export default Formulario