import FormsClie from '../Componentes/FormsClie/FormsClie';
import Rodape from '../Componentes/Rodape/Rodape';
import NavBarS from '../Componentes/NavBarS/NavBarS';
import React from 'react';

function CadastroClie() {

    return (
      <div className="Cadastro">

        <NavBarS/>
        <FormsClie/>
        <Rodape/>
      </div>
    );
  }
  
  export default CadastroClie;