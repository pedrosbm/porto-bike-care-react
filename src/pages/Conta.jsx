import Account from "../Componentes/Conta/Account";
import ListaBikes from "../Componentes/ListaBikes/ListaBikes";
import NavBarS from "../Componentes/NavBarS/NavBarS";
import Rodape from "../Componentes/Rodape/Rodape";
import { Navigate } from "react-router-dom";
import ListaCartoes from '../Componentes/listaCartoes/ListaCartoes'

function Conta() {

  if (localStorage.getItem("logado") == "true") {
    return (
      <>
        <NavBarS />
        <Account />
        <ListaBikes/>
        <ListaCartoes/>
        <Rodape />
      </>
    );
  } else {
    return <Navigate to='/Login'></Navigate>
  }
}

export default Conta;