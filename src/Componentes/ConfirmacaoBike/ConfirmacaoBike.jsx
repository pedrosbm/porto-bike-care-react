import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    observações: localStorage.getItem("observações"),
    nf: parseInt(localStorage.getItem("nf")),
    clienteId: parseInt(localStorage.getItem("id")),
  });

  const onConfirm = () => {
    fetch('http://localhost:5000/Bike/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bike),
    })
    .then(response => {
        if (response.ok) {
          navigate("/Etapa3")
        } else {
          console.error('Erro na requisição:', response.status, response.statusText);
          throw new Error('Erro na requisição.');
        }
    })
    .catch(error => {
        console.error('Erro ao cadastrar cliente:', error);
    });
  }

  const onCancel = () => {
    navigate("/Etapa1")
  }
  return (
    <div>
      <h2>Confirme os Dados:</h2>
      <p>
        <strong>Número de Série:</strong> {bike.numSerie}
      </p>
      <p>
        <strong>Tipo de Quadro:</strong> {bike.tipoQuadro}
      </p>
      <p>
        <strong>Apelido:</strong> {bike.nick}
      </p>
      <p>
        <strong>Quantidade de Marchas:</strong> {bike.quantMarcha}
      </p>
      <p>
        <strong>Modalidade:</strong> {bike.modalidade}
      </p>
      <p>
        <strong>Marca:</strong> {bike.marca}
      </p>
      <p>
        <strong>Valor:</strong> {bike.valor}
      </p>
      <p>
        <strong>Tipo de Suspensão:</strong> {bike.tipoSuspensao}
      </p>
      <p>
        <strong>Freio:</strong> {bike.tipoFreio}
      </p>
      <p>
        <strong>Modelo:</strong> {bike.modelo}
      </p>
      <p>
        <strong>Tipo de Pneu:</strong> {bike.tipoPneu}
      </p>
      <p>
        <strong>Observações:</strong> {bike.observações}
      </p>
      <p>
        <strong>Nota Fiscal:</strong> {bike.nf}
      </p>

      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default ConfirmacaoBike;
