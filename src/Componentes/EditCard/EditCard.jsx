import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom"
import NavbarP from '../NavBarS/NavBarS'
import Footer from '../Rodape/Rodape'
import e from "cors";

export default function () {

    const navigate = useNavigate();

    const [cartao, setCartao] = useState({});

    let { id } = useParams('id')

    useEffect(() => {
        fetch(`http://localhost:5000/Cartao/listOne/${id}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                setCartao(data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        fetch('http://localhost:5000/Cartao/edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bike),
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    console.error('Erro na requisição:', response.status, response.statusText);
                    throw new Error('Erro na requisição.');
                }
            }).then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error('Erro ao cadastrar bike:', error);
            });
        navigate("/")
    }

    const handleChange = (e) => {
        setBike({ ...bike, [e.target.name]: e.target.value });
    };

    const ver = () => {
        console.log(bike)
    }

    return (
        <>
            <NavbarP />
            <div className="wrapper">
                <h2>Editar Bicicleta</h2>

                <button onClick={ver}>consultar</button>

                <form className="forms" onSubmit={handleSubmit}>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="nick">Apelido: </label>
                        </div>
                        <input value={bike["nick"]} type="text" name='nick' minLength={1} placeholder='Bicicleta amarela' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="quadro">Tipo de Quadro:</label>
                        </div>
                        <select className='selects' value={bike["tipoQuadro"]} type="text" list="quadro" name="quadro" onChange={handleChange}>
                            <option defaultChecked>Selecionar quadro</option>
                            <option value="aço">Aço cromo-molibdênio</option>
                            <option value="fibra">Fibra de carbono</option>
                            <option value="aluminio">Alumínio</option>
                            <option value="titanio">Titânio</option>
                        </select>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="quantmarcha">Quantidade de Marchas: </label>
                        </div>
                        <select className='selects' value={bike["quantMarcha"]} type="number" name="quantmarcha" onChange={handleChange} >
                            <option defaultChecked>Selecionar Quantidade</option>
                            <option value="18">18 marchas</option>
                            <option value="21">21 marchas</option>
                            <option value="24">24 marchas </option>
                            <option value="27">27 marchas</option>
                            <option value="30">30 marchas</option>
                        </select>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="suspensao">Tipo de suspensão:</label>
                        </div>
                        <input value={bike["tipoSuspensao"]} type="text" name='suspensao' minLength={1} placeholder='Suspensão com Molas' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="freio">Freio:</label>
                        </div>
                        <select className='selects' value={bike["tipoFreio"]} type="text" name="freio" onChange={handleChange}>
                            <option defaultChecked>Selecionar freio</option>
                            <option value="Cantilevers">Cantilevers</option>
                            <option value="Ferradura">Ferradura</option>
                            <option value="V-brake">V-brake</option>
                            <option value="Disco Mecânico">Disco Mecânico</option>
                            <option value="Disco Hidráulico">Disco Hidráulico</option>
                        </select>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="pneu">Tipo de pneu: </label>
                        </div>
                        <input value={bike["tipoPneu"]} type="text" name='pneu' minLength={1} placeholder='Pneus Híbridos' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="obs">Observações: </label>
                        </div>
                        <input value={bike["observacoes"]} type="text" name='obs' onChange={handleChange} />
                    </div>

                    <button type="submit" className="Button">
                        Confirmar
                    </button>
                </form>
            </div>
            <Footer />
        </>
    )
}