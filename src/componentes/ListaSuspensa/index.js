import './ListaSupensa.css';

function ListaSuspensa(props) {
    return (
        <div className="lista-suspensa">

            <label>{props.label}</label>

            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
            <option value="" key={""}>Selecione...</option>
                {props.itens.map(item => { return <option key={item.nome} >{item}</option> })}

            </select>

        </div>
    )
}

export default ListaSuspensa