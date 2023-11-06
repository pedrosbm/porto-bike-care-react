import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ListaCartao (){
    const [cartao, setCartao] = useState ([])

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
        fetch("URL DA API"+id,{
          method:"delete"
        }).then(()=>{
          window.location="/"
        }).catch((error)=>{
          console.log(error);
        })
      }

    return(
        <>
        <h1>Cartões: </h1>
        <Link to="/incluir">Inserir cartão</Link>
        <section>
            {produtos.map((cartao)=>
            <span  key={cartao.id}>
                <p>{cartao.titular}</p>
                <p>{cartao.validade}</p>
                <p>{cartao.cvv}</p>
                <p>{cartao.numParcelas}</p>
                <p>{cartao.modalidade}</p>
                <p>{cartao.numCartao}</p>
            <div className="actions">
                <p><Link className="button" to={`/editar/${produto.codigo}`}>Atualizar</Link></p>
                <p><button className="button" title="Excluir" onClick={handleDelete.bind(this,produto.codigo)}>Excluir</button></p>
            </div> 
            </span>
            )}
        </section>
        </>
    )
}
export default ListaCartao;