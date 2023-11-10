import React, { useState } from "react";
import { Link } from 'react-router-dom'

function Pagamento() {

    const [novo, setNovo] = useState({
        id: id,
        titular: "",
        numCartao: "",
        CVV: "",
        modalidade: "",
        quantParcelas: "",
        validade: ""
    })

    const [plano, setPlano] = useState("")

    const handleChange = (e) => {
        setNovo({ ...novo, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`URL DA API ${id ? id : ""}`, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Pagamento</h2>
                <fieldset>
                    <h3>Insira os dados do seu cartão: </h3>

                    <label htmlFor="nome">Nome do Titular:</label>
                    <input type="text" name="nome" minLength={1} value={novo.titular} onChange={handleChange} />

                    <label htmlFor="cd">Selecione um tipo:</label>
                    <select name="cd" value={novo.modalidade} onChange={handleChange}>
                        <option value="Cartão de Crédito">Cartão de Crédito</option>
                        <option value="Cartão de Débito" selected>Cartão de Débito</option>
                    </select>

                    <label htmlFor="numCartao">Número do Cartão: </label>
                    <input type="number" name="numCartao" minLength={16} maxLength={16} value={novo.numcCartao} onChange={handleChange} />

                    <label htmlFor="validade">Validade: </label>
                    <input type="date" name="validade" placeholder="MM/AA" value={novo.validade} onChange={handleChange} />

                    <label htmlFor="cvv">CVV: </label>
                    <input type="number" name="cvv" minLength={3} maxLength={3} value={novo.cvv} onChange={handleChange} />

                    <label htmlFor="parcelas">Quantidade de parcelas:</label>
                    <select name="parcelas" value={novo.quantParcelas} onChange={handleChange}>
                        <option value="1" selected>1 parcela</option>
                        <option value="2" >2 parcelas</option>
                        <option value="3" > 03 parcelas</option>
                        <option value="4" > 04 parcelas</option>
                        <option value="5" > 05 parcelas</option>
                        <option value="6" > 06 parcelas</option>
                        <option value="7" > 07 parcelas</option>
                        <option value="8" > 08 parcelas</option>
                        <option value="9" > 09 parcelas</option>
                        <option value="10" > 10 parcelas</option>
                        <option value="11" > 11 parcelas</option>
                        <option value="12" > 12 parcelas</option>
                    </select>

                    <button className='Button' type="submit">Próximo</button>
                </fieldset>

            </form>
        </>
    )
}

export default Pagamento;