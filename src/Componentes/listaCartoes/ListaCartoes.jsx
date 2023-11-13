import React, { useEffect, useState } from "react";
import cardIcon from '../../imgs/cardIcon.png'
import { Link } from "react-router-dom";

function ListaBikes() {
    const [cartoes, setCartoes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/Cartão/list/${parseInt(localStorage.getItem("id"))}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setCartoes(data)
                console.log(data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/Cartão/delete/${id}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setCartoes(data)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className="list">
            <h1>Cartões Cadastrados:</h1>
            <section>
                {cartoes.map((cartao, index) =>
                    <div key={index} className="userBike">

                        <div>
                            <img className="bikeIcon" src={cardIcon} alt="cardIcon" />
                        </div>

                        <div className="bikeData">
                            <div>
                                <p>{cartao.titular}</p>
                                <p>{cartao.modalidade}</p>
                            </div>

                            <div>
                                <p>{cartao.numCartao}</p>
                            </div>
                        </div>

                        <hr className="line"></hr>

                        <div className="Card options">
                            <Link className="option" to={`/EditarCartao/${cartao.id}`}>Editar</Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}
export default ListaBikes;