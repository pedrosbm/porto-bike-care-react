import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bikeIcon from '../../imgs/bikeIcon.png'
import './ListaBikes.css'

function ListaBikes() {
    const [bikes, setBikes] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/Bike/list/${parseInt(localStorage.getItem("id"))}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setBikes(data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/Bike/delete/${id}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setBikes(data)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <h1>Bikes Cadastradas:</h1>
            <section>
                {bikes.map((bike, index) =>
                    <div key={index} className="userBike">
                        <div className="bikeData">
                            <div>
                                <img src={bikeIcon} alt="bikeIcon" />
                            </div>

                            <div>
                                <p>Apelido - {bike.nick}</p>
                                <p>Marca - {bike.marca}</p>
                            </div>

                        </div>

                        <hr className="line"></hr>

                        <div className="bikeStatus">
                            <div>
                                <p>Modalidade - {bike.modalidade}</p>
                                <p>Número de série - {bike.numSerie}</p>
                            </div>
                        </div>

                        <hr className="line"></hr>

                        <div className="bikeOptions">
                            <div>
                                <Link className="option" to={`/Editar/${bike.id}`}>Editar</Link>
                                <button className="option" onClick={handleDelete.bind(this, bike.id)} >Apagar{bike.numSerie}</button>
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