import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import NavbarP from '../NavBarS/NavBarS'
import Footer from '../Rodape/Rodape'
import e from "cors";

export default function EditCard() {

    const navigate = useNavigate();

    const [cartao, setCartao] = useState({});

    let { id } = useParams('id')

    useEffect(() => {
        fetch(`http://localhost:8080/Cartão/listOne/${id}`)
            .then((resp) => {
                return resp.json();
            }).then((data) => {
                data["dataVal"] = dateConv(data["dataVal"])
                setCartao(data)
            }).catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        console.log(cartao)
        fetch('http://localhost:8080/Cartão/edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartao),
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
        navigate("/Conta")
    }

    const handleChange = (e) => {
        setCartao({ ...cartao, [e.target.name]: e.target.value });
    };

    const dateConv = e =>{
        const lista = e.split("-")
        const ano = lista[0]
        const data = lista[1] + "/" + ano[2] + ano[3] 
        return data
    }

    const handleDataChange = e =>{
        const data = dateConv(e.target.value)
        setCartao({...cartao, [e.target.name]: data})
    }

    return (
        <>
            <NavbarP />
            <div className="wrapper">
                <h2>Editar Cartão</h2>
                <form className="forms" onSubmit={handleSubmit}>

                    <div>
                        <div className="inputBox">
                            <label htmlFor="nome">Nome do Titular:</label>
                            <input value={cartao["titular"]} type="text" name="titular" minLength={1} onChange={handleChange} />
                        </div>

                        <div className="inputBox">
                            <div>
                                <label htmlFor="modalidade" className="infoMod">Selecione um tipo:</label>
                            </div>
                            <select className='selects' value={cartao["modalidade"]} required name="modalidade" onChange={handleChange}>
                                <option defaultChecked>Selecionar Modalidade</option>
                                <option value="Crédito">Cartão de Crédito</option>
                                <option value="Débito">Cartão de Débito</option>
                            </select>

                        </div>

                        <div className="inputBox">
                            <div>
                                <label htmlFor="numCartao">Número do Cartão: </label>
                            </div>
                            <input value={cartao["numCartao"]} type="number" name="numCartao" minLength={16} maxLength={16} onChange={handleChange} />
                        </div>

                        <div className="inputBox">
                            <div>
                                <label htmlFor="validade">Validade: </label>
                            </div>
                            <input type="date" name="dataVal" placeholder="MM/AA" onChange={handleDataChange} />
                        </div>

                        <div className='inputBox'>
                            <div>
                                <label htmlFor="cvv" className="infocvv">CVV: </label>
                            </div>
                            <input value={cartao["cvv"]} type="number" name="cvv" minLength={3} maxLength={3} onChange={handleChange} />
                        </div>

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