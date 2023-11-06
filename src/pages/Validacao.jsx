import Status2 from '../Componentes/Status/Status2'; 
import Validacao from '../Componentes/Validacao/Validacao';
import Rodape from '../Componentes/Rodape/Rodape';
import NavBarS from '../Componentes/NavBarS/NavBarS';



function Validacao() {

    return (
      <div className="Cadastro">
        <NavBarS/>
        <Status2/>
        <Validacao/>
        <Rodape/>
      </div>
    );
  }
  
  export default Validacao;