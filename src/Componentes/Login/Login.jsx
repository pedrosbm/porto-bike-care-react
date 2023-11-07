import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import '../FormsClie/Forms.css'

const schema = yup.object({
  email: yup.string().required("E-mail obrigatório"),
  senha: yup.string().required("Senha obrigatória"),
});

function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    "email": "",
    "pwd": ""
  });
  // const [pwdError, setPwdError] = useState(false)
  // const [emailError, setEmailError] = useState(false)

  const logar = e => {
    console.log(e)
    fetch('http://localhost:5000/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novo),
      })
        .then(response => {
          if(response.ok){
            return response.json();
          } else {
            console.error('Erro na requisição:', response.status, response.statusText);
            throw new Error('Erro na requisição.');
          }
        })
        .then(data => {
          if(data == null)
          localStorage.setItem("logado", true)
          localStorage.setItem("id", data["id"])
          localStorage.setItem("nome", data["nome"])
          localStorage.setItem("email", data["email"])
          localStorage.setItem("cpf/cnpj", data["cpfcnpj"])
          localStorage.setItem("cep", data["cep"])
          localStorage.setItem("nasc", data["nasc"])
          navigate("/")
        })
        .catch(error => {
          console.error('Erro ao cadastrar cliente:', error);
        });
  }

  return (
    <>
      <div className="wrapper">
        <h2>Login</h2>
        <form className="forms" onSubmit={handleSubmit(logar)}>
          <fieldset>

            <div className="inputBox">
              <div>
                <label htmlFor="email" className="email" id="email">E-mail:</label><br />
                <span>{errors.email?.message}</span>
              </div>
              <input type="email" {...register("email")} minLength={1} value={cliente.email} placeholder="Example@example.com.br"
                onChange={(e) => setCliente({ ...cliente, email: e.target.value })}
              />
            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="senha" className="senha" id="senha">Senha:</label><br />
                <span>{errors.senha?.message}</span>
              </div>
              <input type="password"{...register("senha")} value={cliente.pwd}
                onChange={(e) => setCliente({ ...cliente, pwd: e.target.value })}
              />
            </div>

            <span id="notFound"></span>

            <button type="submit" className="Button">Confirmar</button>

            <div className="link">
              <Link to="/Cadastro">Eu não tenho conta.</Link>
            </div>

          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Login;