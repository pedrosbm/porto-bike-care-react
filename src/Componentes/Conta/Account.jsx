import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Conta.css'
import Icon from '../../imgs/userIcon.png'

function Account() {

  const logout = () => {
    localStorage.clear();
    localStorage.setItem("logado", false);
    navigate("/");
  };

  const navigate = useNavigate();

  if (localStorage.getItem("logado") == "true") {
    return (
      <>
        <section className="wrapper">
          <div>
            <div className="account">
              <div>
                <div className="welcome">
                  <img src={Icon} alt="imgIcon" className="imgIcon" />
                  <h2 className="b1"> Bem-vindo(a) {localStorage.getItem("nome")}</h2>
                </div>
                <div className="accountData">
                  <h3 className="d1">Dados da Conta</h3>
                  <div className="infosUsu">

                    <div className="info">
                      <span className="g1">Nome</span>
                      <div>
                        <p>{localStorage.getItem("nome")}</p>
                      </div>
                    </div>

                    <div className="info">
                      <span className="g1">E-mail</span>
                      <div>
                        <p>{localStorage.getItem("email")}</p>
                      </div>
                    </div>

                    <div className="info">
                      <span className="g1">CPF</span>
                      <div>
                        <p>{localStorage.getItem("cpf/cnpj")}</p>
                      </div>
                    </div>

                    <div className="info">
                      <span className="g1">Cep</span>
                      <div>
                        <p>{localStorage.getItem("cep")}</p>
                      </div>
                    </div>

                    <div className="info">
                      <span className="g1">Data de Nascimento</span>
                      <p className="cinzinha"></p>
                      <div>
                        <p>{localStorage.getItem("nasc")}</p>
                      </div>
                    </div>
                    <button className="logout" onClick={logout}>
                      Sair
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <Navigate to='/Login' />
  }
}

export default Account;
