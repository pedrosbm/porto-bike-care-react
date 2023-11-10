import Status1 from '../Componentes/Status/Status1';
import Pagamento from '../Componentes/Pagamento/Pagamento';
import Rodape from '../Componentes/Rodape/Rodape';
import NavBarS from '../Componentes/NavBarS/NavBarS';


function pagPagamento() {

    return (
      <div className="pagPagamento">
        <NavBarS/>
        <Status1/>
        <Pagamento/>
        <Rodape/>
      </div>
    );
  }
  
  export default pagPagamento;