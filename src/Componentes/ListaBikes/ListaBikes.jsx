import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaBikes(){
    const [bikes, setBikes] = useState([])

    useEffect(() => {
        fetch ("URL DA API").then((resp) =>{
            return Response.json();
    }).then ((resp) =>{
        setBikes(resp);
        console.log(resp);
    }).catch((error) => {
        console.log(error);
    })
}, [])
    const handleDelete = (id) =>{
        fetch("URL DA API"+id,{
        method:"delete"
        }).then(()=>{
        window.location="/"
        }).catch((error)=>{
        console.log(error);
        })
    }
    return (
        <>
        <h1>Bikes Cadastradas:</h1>
        <Link to="/incluir">Cadastrar Bike</Link>
        <section>
            {bikes.map ((bike)=> 
                <span  key ={bike.id}> 
                <p>{bike.nick}</p>
                <p>{bike.tipoQuadro}</p>
                <p>{bike.quantMarcha}</p>
                <p>{bike.tipoSuspensao}</p>
                <p>{bike.acessorio}</p>
                <p>{bike.tipoPneu}</p>
                <p>{bike.observacoes}</p>
                <p> <Link to={`/editar/${bike.id}`}>Atualizar</Link></p>
                <p><button title="Excluir" onClick={handleDelete.bind(this,bike.id)}>Excluir</button></p>
                </span>
                )}
        </section>
     </>
    )
}
export default ListaBikes;