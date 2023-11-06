import Account from "../Componentes/Conta/Account";
import NavBarS from "../Componentes/NavBarS/NavBarS";
import Rodape from "../Componentes/Rodape/Rodape";
import { Navigate } from "react-router-dom";

function Conta() {

  if (localStorage.getItem("logado") == "true") {
    return (
      <>
        <NavBarS />
        <Account />
        <Rodape />
      </>
    );
  } else {
    return <Navigate to='/Login'></Navigate>
  }
}

export default Conta;