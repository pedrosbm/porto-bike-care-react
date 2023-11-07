import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Account() {
  const navigate = useNavigate();
  // const [cliente, setCliente] = useState({
  //   "nome": "",
  //   "cpfcnpj": "",
  //   "email": "",
  //   "nasc": "",
  //   "cep": ""
  // })

  // const handleChange = (e) => {
  //   setNovo({ ...cliente, [e.target.name]: e.target.value })
  // }

  const logout = () => {
    localStorage.setItem("logado", false);
    localStorage.clear();
    navigate("/");
  };

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
}

export default Account;
