import Banner from "./componentes/Banner"
import Formulario from "./componentes/Formulario";
import {useState} from "react"


function App() {

  const [colaboradores, setColaboradores] = useState([]);

  const cadastroColaborador = (colaboradorNovo) => {
    setColaboradores([...colaboradores, colaboradorNovo])
    console.log(colaboradorNovo)
  };

  return (
    <div className="App">
      <Banner />
      <Formulario  cadastroNovoColaborador={colaboradorNovo => cadastroColaborador(colaboradorNovo)}/>
    </div>

  )
}

export default App;
