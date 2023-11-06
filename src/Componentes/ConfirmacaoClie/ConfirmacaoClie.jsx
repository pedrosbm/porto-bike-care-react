import React from "react";

function ConfirmacaoClie({ data, onConfirm, onCancel }) {
  return (
    <div>
      <h2>Confirme os Dados:</h2>
      <p>
        <strong>Nome:</strong> {data.nome}
      </p>
      <p>
        <strong>Sobrenome:</strong> {data.sobrenome}
      </p>
      <p>
        <strong>Data de Nascimento:</strong> {data.nasc}
      </p>
      <p>
        <strong>CPF:</strong> {data.cpf}
      </p>
      <p>
        <strong>E-mail:</strong> {data.email}
      </p>
      <p>
        <strong>Senha:</strong> {data.pwd}
      </p>
      <p>
        <strong>Confirmação de Senha:</strong> {data.confPwd}
      </p>

      <button onClick={onConfirm}>Confirmar</button>
      <button onClick={onCancel}>Cancelar</button>
    </div>
  );
}

export default ConfirmacaoClie;
