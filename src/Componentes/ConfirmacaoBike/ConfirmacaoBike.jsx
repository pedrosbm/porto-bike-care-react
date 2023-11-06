import React from "react";

function ConfirmacaoBike({ data, onConfirm, onCancel }) {
  return (
    <div>
      <h2>Confirme os Dados:</h2>
      <p>
        <strong>Número de Série:</strong> {data.num_serie}
      </p>
      <p>
        <strong>Tipo de Quadro:</strong> {data.tipoQuadro}
      </p>
      <p>
        <strong>Apelido:</strong> {data.nick}
      </p>
      <p>
        <strong>Quantidade de Marchas:</strong> {data.quantmarcha}
      </p>
      <p>
        <strong>Modalidade:</strong> {data.modalidade}
      </p>
      <p>
        <strong>Marca:</strong> {data.marca}
      </p>
      <p>
        <strong>Valor:</strong> {data.valor}
      </p>
      <p>
        <strong>Tipo de Suspensão:</strong> {data.tipoSuspensao}
      </p>
      <p>
        <strong>Acessório:</strong> {data.acess}
      </p>
      <p>
        <strong>Freio:</strong> {data.tipoFreio}
      </p>
      <p>
        <strong>Modelo:</strong> {data.modelo}
      </p>
      <p>
        <strong>Tipo de Pneu:</strong> {data.tipoPneu}
      </p>
      <p>
        <strong>Observações:</strong> {data.obs}
      </p>
      <p>
        <strong>Nota Fiscal:</strong> {data.file}
      </p>

      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default ConfirmacaoBike;
