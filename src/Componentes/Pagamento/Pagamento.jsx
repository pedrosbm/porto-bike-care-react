import React, { createElement, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import './Pagamento.css'

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
        apoliceId: null
    })

    const [cartao, setCartao] = useState({
        numCartao: "",
        titular: "",
        dataVal: "",
        cvv: "",
        modalidade: "",
        clienteId: parseInt(localStorage.getItem("id")),
        pagamentoId: null
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
            const response = await fetch(`http://localhost:5000/Plano/new/${parseInt(localStorage.getItem("id"))}`, {
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
            const response = await fetch(`http://localhost:5000/Cartão/new/${parseInt(localStorage.getItem("id"))}`, {
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

    const limparBike = () => {
        localStorage.setItem("nick", "")
        localStorage.setItem("tipoQuadro", "")
        localStorage.setItem("quantMarcha", "")
        localStorage.setItem("tipoSuspensao", "")
        localStorage.setItem("tipoFreio", "")
        localStorage.setItem("modalidade", "")
        localStorage.setItem("marca", "")
        localStorage.setItem("modelo", "")
        localStorage.setItem("valor", "")
        localStorage.setItem("numSerie", "")
        localStorage.setItem("tipoPneu", "")
        localStorage.setItem("observações", "")
        localStorage.setItem("nf", "")
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await novoApolice(apolice);
            await novoPagamento(pagamento);
            await novoPlano(plano);
            await novoCartao(cartao);
            limparBike();
            navigate("/Finalizacao")
        } catch (error) {
            console.error('Erro geral:', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2 className="titlePag">Pagamento</h2>
                <hr className="line3"/>
                <fieldset className="plano">
                    <h3 className="opPag">Escolha um plano </h3>

                    <div className="inputBox">
                       
                        <select placeholder="Selecionar" type="text" name="nomePlano" onChange={handlePlanoChange} className="selePlano">
                            <option defaultChecked>Selecionar plano</option>
                            <option value="Pedal Essencial">Pedal Essencial</option>
                            <option value="Pedal Leve">Pedal Leve</option>
                            <option value="Pedal Elite">Pedal Elite</option>
                        </select>
                    </div>

                    <div className="coberturas">
                        <h2>{plano.nomePlano}</h2>
                        <h3>Coberturas</h3>

                        <ul className="lista">
                            {plano.cobertura.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="preco">
                        <h3 className="preco1">Preço - R${plano.valor}</h3>

                        <div className="preco2">
                            <label htmlFor="parcelas">Quantidade de parcelas:</label>
                            <select name="quantParcelas" onChange={handlePagamentoChange} className="qtdParcela">
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
                <hr className="line4"/>
                <fieldset className="cartões">
                    <h2 className="titleCartao">Cartão</h2>
                   
                    <div>
                        <div className="cartaoinfo1">
                        <label htmlFor="nome">Nome do Titular:</label>
                        <input type="text" name="titular" minLength={1} onChange={handleCartaoChange} />
                        </div>

                        <div  className="cartaoinfo1">
                        <label htmlFor="modalidade" className="infoMod">Selecione um tipo:</label>
                        <select required name="modalidade" onChange={handleCartaoChange}>
                            <option defaultChecked>Selecionar Modalidade</option>
                            <option value="Crédito">Cartão de Crédito</option>
                            <option value="Débito">Cartão de Débito</option>
                        </select>

                        </div>
                     
                        <div className="cartaoinfo1">
                        <label htmlFor="numCartao">Número do Cartão: </label>
                        <input type="number" name="numCartao" minLength={16} maxLength={16} onChange={handleCartaoChange} />
                        </div>

                        <div className="cartaoinfo2">
                        <label htmlFor="validade">Validade: </label>
                        <input type="text" name="dataVal" placeholder="MM/AA" onChange={handleCartaoChange} />

                        <label htmlFor="cvv" className="infocvv">CVV: </label>
                        <input type="number" name="cvv" minLength={3} maxLength={3} onChange={handleCartaoChange} />
                        </div>
                       
                    </div>
                </fieldset>

                <button className='Button' type="submit">Próximo</button>
            </form>
        </>
    )
}

export default Pagamento;