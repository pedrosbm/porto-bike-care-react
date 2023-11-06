import React from "react";
import Status1 from "../Componentes/Status/Status1";
import NavBarS from "../Componentes/NavBarS/NavBarS";
import Rodape from "../Componentes/Rodape/Rodape";
import FormsBike from "../Componentes/FormsBike/FormsBike";
import { Navigate } from 'react-router-dom';

function CadastroBike(){

    if(localStorage.getItem("logado") == "true"){
        return (
            <>
             <NavBarS/>
             <Status1/>
             <FormsBike/>
             <Rodape/>
            </>
        )
    } else  {
        return <Navigate to='/Login'></Navigate>
    }
    
}
export default CadastroBike;