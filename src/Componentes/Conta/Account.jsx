import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Account() {
  
  const logout = () => {
    localStorage.clear();
    localStorage.setItem("logado", false);
    navigate("/");
  };
  
  const navigate = useNavigate();

  if(localStorage.getItem("logado") == "true"){
    return (
      <>
        <section className="conta">
          <div>
            <div className="account">
              <div>
                <h2> Bem-vindo(a) {localStorage.getItem("nome")}</h2>
                <div className="accountData">
                  <h3>Seus dados:</h3>
  
                  <div>
                    <p>E-mail:</p>
                    <hr />
                    <p>{localStorage.getItem("email")}</p>
                  </div>
  
                  <div>
                    <p>CPF:</p>
                    <p>{localStorage.getItem("cpf/cnpj")}</p>
                  </div>
  
                  <div>
                    <p>Cep:</p>
                    <hr />
                    <p>{localStorage.getItem("cep")}</p>
                  </div>
  
                  <div>
                    <p>Data de Nascimento:</p>
                    <p>{localStorage.getItem("nasc")}</p>
                  </div>
                </div>
              </div>
  
              <div>
                <button className="logout" onClick={logout}>
                  Sair
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return <Navigate to='/Login'/>
  }
}

export default Account;
