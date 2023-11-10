import Status1 from '../Componentes/Status/Status1'; 
import Validacao from '../Componentes/Validacao/Validacao';
import Rodape from '../Componentes/Rodape/Rodape';
import NavBarS from '../Componentes/NavBarS/NavBarS';



function ValidacaoPage() {

    return (
      <div className="Cadastro">
        <NavBarS/>
        <Status1/>
        <Validacao/>
        <Rodape/>
      </div>
    );
  }
  
  export default ValidacaoPage;