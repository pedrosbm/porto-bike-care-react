import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './Conta.css'
import Icon from '../../imgs/userIcon.png'

function Account() {

  const [cliente, setCliente] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8080/Cliente/listOne/${parseInt(localStorage.getItem("id"))}`)
      .then((resp) => {
        return resp.json();
      }).then((data) => {
        localStorage.setItem("nome", data["nome"])
        localStorage.setItem("cep", data["cep"])
        localStorage.setItem("email", data["email"])
        setCliente(data)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    fetch('http://localhost:8080/Cliente/edit', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cliente),
    })
      .then(response => {
        if (response.ok) {
          localStorage.setItem("nome", cliente["nome"])
          localStorage.setItem("cep", cliente["cep"])
          localStorage.setItem("email", cliente["email"])
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
    navigate("/Conta")
  }

  const logout = () => {
    localStorage.clear();
    localStorage.setItem("logado", false);
    navigate("/");
  };

  const navigate = useNavigate();

  if (localStorage.getItem("logado") == "true") {
    return (
      <>
        <div className="account">
          <div className="AccountfirstBox">
            <div className="welcome">
              <img src={Icon} alt="imgIcon" className="imgIcon" />
              <div>
                <h2 className="b1"> Bem-vindo(a)</h2>
                <h3>{cliente["nome"]}</h3>
                <button className="logout" onClick={logout}>
                  Sair
                </button>
              </div>
            </div>
          </div>

          <div>
            <form className="forms" onSubmit={handleSubmit}>
              <fieldset>
                <div className="inputBox input2">
                  <div>
                    <label htmlFor="nome" id="nome" className="name">Nome completo:</label>
                  </div>
                  <input name="nome" type="text" placeholder="Digite o primeiro nome" minLength={1} value={cliente.nome}
                    onChange={handleChange}
                  />
                </div>

                <div className="inputBox input2">
                  <div>
                    <label htmlFor="email" className="e-mail" id="email">E-mail:</label>
                  </div>
                  <input name="email" type="email" placeholder="Example@example.com.br" minLength={1} value={cliente.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="inputBox input2">
                  <div>
                    <label htmlFor="cep" className="cep" id="cep">CEP:</label>
                  </div>
                  <input name="cep" type="number" minLength={8} maxLength={10} placeholder="Apenas números" value={cliente.cep}
                    onChange={handleChange}
                  />
                </div>

                <div title="Esse dado não é editavel em função da nossa política." className="inputBox input2 lock">
                  <div>
                    <label htmlFor="cep" className="cep" id="cep">CPF/CNPJ:</label>
                  </div>
                  <input name='cpfcnpj' value={localStorage.getItem("cpf/cnpj")} />
                </div>

                <div title="Esse dado não é editavel em função da nossa política." className="inputBox input2 lock">
                  <div>
                    <label htmlFor="nasc" className="nasc" id="nasc">Data de nascimento:</label>
                  </div>
                  <input name='nasc' value={localStorage.getItem("nasc")} />
                </div>

                <button type="submit" className="Button Button2">Salvar alterações</button>

              </fieldset>
            </form>
          </div>

        </div>
      </>
    );
  } else {
    return <Navigate to='/Login' />
  }
}

export default Account;
