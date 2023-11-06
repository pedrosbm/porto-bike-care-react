import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

function ListaClie (){
    const [clientes, setClientes] = useState ([])

    useEffect(() => {
        fetch("URL DA API").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
            setProdutos(resp);
            console.log(resp);
        }).catch((error) => {
            console.log(error);
        })
    },[])

    const handleDelete = (id) =>{
      fetch("URL DA API/"+id,{
        method:"delete"
      }).then(()=>{
        window.location="/"
      }).catch((error)=>{
        console.log(error);
      })
    }

    return (
        <>
        <h1>Dados do Usuário</h1>
        <section>
            {clientes.map((cliente)=>
            <span key={cliente.id}>
                <p>{cliente.nome}</p>
                <p>{cliente.sobrenome}</p>
                <p>{cliente.cpf}</p>
                <p>{cliente.email}</p>
                <p>{cliente.nasc}</p>
            <div className="actions">
                <p><Link className="button" to={`/editar/${produto.codigo}`}>Atualizar</Link></p>
                <p><button className="button" title="Excluir" onClick={handleDelete.bind(this,produto.codigo)}>Excluir</button></p>
            </div>
            </span>
            )

            }
        </section>
        </>
    )
}