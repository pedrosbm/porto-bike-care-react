import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './ConfirmacaoBike.css'

function ConfirmacaoBike() {
  const navigate = useNavigate();

  const [bike, setBike] = useState({
    nick: localStorage.getItem("nick"),
    tipoQuadro: localStorage.getItem("tipoQuadro"),
    quantMarcha: parseInt(localStorage.getItem("quantMarcha")),
    tipoSuspensao: localStorage.getItem("tipoSuspensao"),
    tipoFreio: localStorage.getItem("tipoFreio"),
    modalidade: localStorage.getItem("modalidade"),
    marca: localStorage.getItem("marca"),
    modelo: localStorage.getItem("modelo"),
    valor: parseInt(localStorage.getItem("valor")),
    numSerie: localStorage.getItem("numSerie"),
    tipoPneu: localStorage.getItem("tipoPneu"),
    observações: localStorage.getItem("observacoes"),
    nf: parseInt(localStorage.getItem("nf")),
    clienteId: parseInt(localStorage.getItem("id")),
  });

  const onConfirm = () => {
    navigate("/Etapa3")
    fetch('http://localhost:8080/Bike/new', {
      method: 'POST',
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
  }

  const onCancel = () => {
    navigate("/Etapa1")
  }

  return (
    <div className="wrapper">
      <h2 className="confirDados">Confirme os Dados:</h2>
      <div className="infosDados">
        <p className="h1"> Número de Série </p>
        {bike.numSerie}
      </div>
      <div className="infosDados">
        <p className="h1"> Tipo de Quadro </p>
        {bike.tipoQuadro}
      </div>
      <div className="infosDados">
        <p className="h1">Quantidade de Marchas </p>
        {bike.quantMarcha}
      </div>
      <div className="infosDados">
        <p className="h1"> Modalidade </p>
        {bike.modalidade}
      </div>
      <div className="infosDados">
        <p className="h1"> Marca </p>
        {bike.marca}
      </div>
      <div className="infosDados">
        <p className="h1">Valor</p>
        {bike.valor}
      </div>
      <div className="infosDados">
        <p className="h1"> Tipo de Suspensão</p>
        {bike.tipoSuspensao}
      </div>
      <div className="infosDados">
        <p className="h1"> Freio </p>
        {bike.tipoFreio}
      </div>
      <div className="infosDados">
        <p className="h1">Modelo </p>
        {bike.modelo}
      </div>
      <div className="infosDados">
        <p className="h1"> Tipo de Pneu </p>
        {bike.tipoPneu}
      </div>
      <div className="infosDados">
        <p className="h1">Observações </p>
        {bike.observações}
      </div>
      <div className="infosDados">
        <p className="h1"> Nota Fiscal </p>
        {bike.nf}
      </div>


      <div className="botoesConfig">
        <button onClick={onConfirm} className="Button">Confirmar</button>
        <button onClick={onCancel} className="Button b2">Voltar</button>

      </div>

    </div>
  );
}

export default ConfirmacaoBike;