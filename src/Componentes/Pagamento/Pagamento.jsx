import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

function Pagamento() {
    const navigate = useNavigate();

    const [apolice, setApolice] = useState({
        titular: localStorage.getItem("nome"),
        infoBike: localStorage.getItem("observacoes"),
        valorAssegurado: parseFloat(localStorage.getItem("valor")),
        clienteId: parseInt(localStorage.getItem("id"))
    });

    const [pagamento, setPagamento] = useState({
        quantParcelas: "",
        valor: "",
        clienteId: parseInt(localStorage.getItem("id")),
    })

    const [plano, setPlano] = useState({
        nomePlano: "",
        valor: "",
        cobertura: [],
        apoliceId: ""
    })

    const [cartao, setCartao] = useState({
        numCartao: "",
        titular: "",
        dataVal: "",
        cvv: "",
        modalidade: "",
        clienteId: parseInt(localStorage.getItem("id")),
        pagamentoId: ""
    })

    useEffect(() => {
        setPagamento({ ...pagamento, valor: plano.valor / pagamento.quantParcelas })
    }, [plano.valor])

    useEffect(() => {
        if (plano.nomePlano === "Pedal Essencial") {
            setPlano((prevPlano) => ({
                ...prevPlano,
                cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro",
                ],
                valor: 0.08 * parseFloat(localStorage.getItem("valor"))
            }));
        } else if (plano.nomePlano === "Pedal Leve") {
            setPlano((prevPlano) => ({
                ...prevPlano,
                cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro",
                    "Lubrificação de correntes e coroas",
                    "Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente",
                ],
                valor: 0.10 * parseFloat(localStorage.getItem("valor"))
            }));
        } else if (plano.nomePlano === "Pedal Elite") {
            setPlano((prevPlano) => ({
                ...prevPlano,
                cobertura: [
                    "Reparo de câmaras de ar",
                    "Reparo ou troca de correntes",
                    "Substituição ou regulagem de selim e canote de selim",
                    "Substituição e regulagem manetes de freios e cabo de aço",
                    "Substituição ou regulagem de freio dianteiro e traseiro",
                    "Lubrificação de correntes e coroas",
                    "Transporte do segurado e Bike - limite de 50km, em caso de quebra ou acidente",
                    "Transporte do segurado e Bike - limite de 150km, em caso de quebra ou acidente",
                    "Instalação de suporte de parede e chão para bike",
                    "Serviço de Leva e Traz, com limite de 50km, mediante agendamento prévio",
                ],
                valor: 0.12 * parseFloat(localStorage.getItem("valor"))
            }));
        }
    }, [plano.nomePlano]);

    const handlePlanoChange = (e) => {
        setPlano((prevPlano) => ({
            ...prevPlano,
            nomePlano: e.target.value,
        }));
    };

    const handlePagamentoChange = (e) => {
        const quantParcelas = e.target.value;
        const novoValor = plano.valor / quantParcelas;

        setPagamento({ ...pagamento, quantParcelas: parseInt(quantParcelas), valor: parseFloat(novoValor) });
    }


    const handleCartaoChange = (e) => {
        if (e.target.name == "cvv") {
            setCartao({ ...cartao, cvv: parseInt(e.target.value) })
        } else if (e.target.name == "numCartao") {
            setCartao({ ...cartao, numCartao: parseInt(e.target.value) })
        } else
            setCartao({ ...cartao, [e.target.name]: e.target.value })
    }

    //Sequência de post's
    const novoApolice = async (apolice) => {
        try {
            const response = await fetch('http://localhost:5000/Apolice/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(apolice),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setPlano({ ...plano, apoliceId: data["apoliceId"] })
            } else {
                console.error('Erro na requisição:', response.status, response.statusText);
                throw new Error('Erro na requisição.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar bike:', error);
        }
    };

    const novoPagamento = async (pagamento) => {
        try {
            const response = await fetch('http://localhost:5000/Pagamento/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pagamento),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setCartao({ ...cartao, pagamentoId: data["pagametoId"] })
            } else {
                console.error('Erro na requisição:', response.status, response.statusText);
                throw new Error('Erro na requisição.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar bike:', error);
        }
    };

    const novoPlano = async (plano) => {
        try {
            const response = await fetch('http://localhost:5000/Plano/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(plano),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Erro na requisição:', response.status, response.statusText);
                throw new Error('Erro na requisição.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar bike:', error);
        }
    };

    const novoCartao = async (cartao) => {
        try {
            const response = await fetch('http://localhost:5000/Cartão/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartao),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
            } else {
                console.error('Erro na requisição:', response.status, response.statusText);
                throw new Error('Erro na requisição.');
            }
        } catch (error) {
            console.error('Erro ao cadastrar bike:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await novoApolice(apolice);
            await novoPagamento(pagamento);
            await novoPlano(plano);
            await novoCartao(cartao);
        } catch (error) {
            console.error('Erro geral:', error);
        }
    };


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
                        <select placeholder="Selecionar" type="text" name="nomePlano" onChange={handlePlanoChange}>
                            <option defaultChecked>Selecionar plano</option>
                            <option value="Pedal Essencial">Pedal Essencial</option>
                            <option value="Pedal Leve">Pedal Leve</option>
                            <option value="Pedal Elite">Pedal Elite</option>
                        </select>
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

                        <div>
                            <label htmlFor="parcelas">Quantidade de parcelas:</label>
                            <select name="quantParcelas" onChange={handlePagamentoChange}>
                                <option defaultChecked>Selecionar parcelas</option>
                                <option value="1" >1 parcela</option>
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
                            <h3>de: R${parseFloat(pagamento.valor).toFixed(2)}</h3>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="cartões">
                    <h2>Cartão</h2>
                    <div>
                        <label htmlFor="nome">Nome do Titular:</label>
                        <input type="text" name="titular" minLength={1} onChange={handleCartaoChange} />

                        <label htmlFor="modalidade">Selecione um tipo:</label>
                        <select required name="modalidade" onChange={handleCartaoChange}>
                            <option defaultChecked>Selecionar Modalidade</option>
                            <option value="Cartão de Crédito">Cartão de Crédito</option>
                            <option value="Cartão de Débito">Cartão de Débito</option>
                        </select>

                        <label htmlFor="numCartao">Número do Cartão: </label>
                        <input type="number" name="numCartao" minLength={16} maxLength={16} onChange={handleCartaoChange} />

                        <label htmlFor="validade">Validade: </label>
                        <input type="text" name="dataVal" placeholder="MM/AA" onChange={handleCartaoChange} />

                        <label htmlFor="cvv">CVV: </label>
                        <input type="number" name="cvv" minLength={3} maxLength={3} onChange={handleCartaoChange} />
                    </div>
                </fieldset>

                <button className='Button' type="submit">Próximo</button>
            </form>
        </>
    )
}

export default Pagamento;