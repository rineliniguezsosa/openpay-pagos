import Cabecera from './componentes/Cabecera'
import Tarjetascontent from './componentes/Tarjetascontent'
import Formulario from './componentes/Formulario'
import './App.css'

function App() {
  return (
    <div className="wall">
      <Cabecera/>
      <Tarjetascontent credito="Tarjetas de crédito" debito="Tarjetas de debito"/>
      <Formulario/>
    </div>
  );
}

export default App;
