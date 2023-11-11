import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Pagamento() {
    const navigate = useNavigate();

    const [apolice, setApolice] = useState({
        titular: localStorage.getitem("nome"),
        infoBike: localStorage.getItem("observacoes"),
        valorAssegurado: localStorage.getItem("valor"),
        dataInicio: new Date(),
        clienteId: localStorage.getItem("id")
    });

    const [cartao, setCartao] = useState({
        numCartao: "",
        titular: "",
        dataVal: "",
        cvv: "",
        modalidade: "",
    })

    const [plano, setPlano] = useState({
        nomePlano: "",
        valor: "",
        cobertura: [],
    })

    const [pagamento, setPagamento] = useState({
        nomePlano: "",
        valor: "",
        cobertura: "",
    })

    const handlePlanoChange = (e) => {
        setPlano({ ...plano, [e.target.name]: e.target.value })
        if (e.target.value == "Pedal Essencial") {
            setPlano({
                ...plano, cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro"
                ], valor: [
                    0.08 * parseFloat(localStorage.getItem("valor"))
                ]
            })
        } else if (e.target.value == "Pedal Leve") {
            setPlano({
                ...plano, cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro",
                    "Lubrificação de correntes e coroas",
                    "Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente"
                ], valor: [
                    0.10 * parseFloat(localStorage.getItem("valor"))
                ]
            })
        } else if (e.target.value == "Pedal Elite") {
            setPlano({
                ...plano, cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro",
                    "Lubrificação de correntes e coroas",
                    "Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente",
                    "Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente",
                    "Instalação de suporte de parede e chão para bike",
                    " Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio"
                ], valor: [
                    0.12 * parseFloat(localStorage.getItem("valor"))
                ]
            })
        }
    }

    const handleChange = (e) => {
        setPlano({ ...novo, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        // e.preventDefault()
        // fetch(`URL DA API ${id ? id : ""}`, {
        //     method: metodo,
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(novo)
        // }).then(() => {
        //     window.location = "/"
        // })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Pagamento</h2>
                <fieldset className="plano">
                    <h3>Escolha um plano: </h3>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="plano">Plano:</label>
                        </div>
                        <input placeholder="Selecionar" type="text" list="planos" name="nomePlano" onChange={handlePlanoChange} />
                        <datalist id="planos">
                            <option value="Pedal Essencial">Pedal Essencial</option>
                            <option value="Pedal Leve">Pedal Leve</option>
                            <option value="Pedal Elite">Pedal Elite</option>
                        </datalist>
                    </div>

                    <div className="coberturas">
                        <h2>{plano.nomePlano}</h2>
                        <h3>Coberturas:</h3>

                        <ul className="lista">
                            {plano.cobertura.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="preco">
                        <h3>Preço - R${plano.valor}</h3>

                        <label htmlFor="parcelas">Quantidade de parcelas:</label>
                        <select name="parcelas" value={pagamento.quantParcelas} onChange={handleChange}>
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


                    </div>
                </fieldset>

                <fieldset className="cartões">
                    <h2>Cartão</h2>
                    <div>
                        <label htmlFor="nome">Nome do Titular:</label>
                        <input type="text" name="nome" minLength={1} onChange={handleChange} />

                        <label htmlFor="cd">Selecione um tipo:</label>
                        <select name="cd" value={cartao.modalidade} onChange={handleChange}>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito" selected>Cartão de Débito</option>
                        </select>

                        <label htmlFor="numCartao">Número do Cartão: </label>
                        <input type="number" name="numCartao" minLength={16} maxLength={16} onChange={handleChange} />

                        <label htmlFor="validade">Validade: </label>
                        <input type="text" name="validade" placeholder="MM/AA" onChange={handleChange} />

                        <label htmlFor="cvv">CVV: </label>
                        <input type="number" name="cvv" minLength={3} maxLength={3} onChange={handleChange} />
                    </div>
                </fieldset>

                <button className='Button' type="submit">Próximo</button>
            </form>
        </>
    )
}

export default Pagamento;