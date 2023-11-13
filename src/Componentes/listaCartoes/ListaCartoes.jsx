import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bikeIcon from '../../imgs/bikeIcon.png'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './ListaBikes.css'

function ListaBikes() {
    const [cartoes, setCartoes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/Cartao/list/${parseInt(localStorage.getItem("id"))}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setCartoes(data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/Cartao/delete/${id}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setCartoes(data)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <h1>Bikes Cadastradas:</h1>
            <section>
                {cartoes.map((cartao, index) =>
                    <div key={index} className="userBike">
                        <div className="card">
                            <div>
                                <img src={cardIcon} alt="cardIcon" />
                            </div>

                            <div>
                                <div>
                                    <p>{cartao.titular}</p>
                                    <p>{cartao.modalidade}</p>
                                </div>

                                <div>
                                    <p>{cartao.numCartao}</p>
                                </div>
                            </div>
                        </div>

                        <hr className="line"></hr>

                        <div className="new newCard">
                            <img src={addButton} alt="AddButton" />
                            <p>Novo cartão</p>
                        </div>

                        <hr className="line"></hr>

                        <div className="bikeOptions">
                            <div>
                                <Link className="option" to={`/EditarCartao/${cartao.id}`}>Editar</Link>
                                <button className="option" onClick={handleDelete.bind(this, cartao.id)} >Apagar</button>
                            </div>
                        </div>
                    </div>
                )}
            </section>
            <Link to="/Etapa1">Cadastrar Bike</Link>
        </>
    )
}
export default ListaBikes;