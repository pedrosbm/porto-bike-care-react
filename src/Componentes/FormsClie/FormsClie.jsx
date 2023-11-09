import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import '../FormsClie/Forms.css'

const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  cpfcnpj: yup.string().required("O CPF/CNPJ é obrigatório"),
  cep: yup.string().required("O CEP é obrigatório").matches(/^\d{8}$/, "CEP inválido"),
  email: yup.string().required("O e-mail é obrigatório"),
  pwd: yup.string().required("A senha é obrigatória"),
  nasc: yup.string().required("Data de nascimento é obrigatória"),
  confPwd: yup.string().required("Confirme a sua senha").oneOf([yup.ref("pwd")], "As senhas são diferentes"),
});

function FormsClie() {
  
  const [novo, setNovo] = useState({
    "tipo": "",
    "nome": "",
    "email": "",
    "cpfcnpj": "",
    "cep": "",
    "nasc": "",
    "senha": ""
  })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  
  const navigate = useNavigate();

  const cadastrar = e => {
    if(e["tipo"] == "PF"){
      console.log("aqui")
      fetch('http://localhost:5000/Cliente/CadastroPf', {
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
    } else if(e["tipo"] == "PJ"){
      fetch('http://localhost:5000/Cliente/CadastroPj', {
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
          localStorage.setItem("logado", true)
          alert("Cadastrado com sucesso!")
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
  }

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value })
  }

  return (
    <>
      <div className="wrapper">
        <h2>Cadastro</h2>
        <p>o primeiro passo para sua segurança!</p>

        <form className="forms" onSubmit={handleSubmit(cadastrar)}>
          <fieldset>
            <div className="inputBox">
              <div>
                <label htmlFor="nome" id="nome" className="name">Nome completo:</label>
                <span>{errors.nome?.message}</span>
              </div>
              <input type="text"{...register("nome")} placeholder="Digite o primeiro nome" minLength={1} value={novo.nome}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="email" className="e-mail" id="e-mail">E-mail:</label>
                <span>{errors.email?.message}</span>
              </div>
              <input type="email"{...register("email")} placeholder="Example@example.com.br" minLength={1} value={novo.email}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox2">

              <div>
                <label htmlFor="tipo">CPF/CNPJ</label>
                <span>{errors.cpfcnpj?.message}</span>
              </div>

              <div className="type">

                <div>
                  <input placeholder="PF/PJ" required type="text"{...register("tipo")} list="tipo" name="tipo" value={novo.tipo} onChange={handleChange} />
                  <datalist id="tipo">
                    <option value="PF">CPF</option>
                    <option value="PJ">CPNJ</option>
                  </datalist>
                </div>

                <div>
                  <input type="number"{...register("cpfcnpj")} minLength={11} placeholder="Apenas números" value={novo.cpfcnpj} onChange={handleChange} />
                </div>

              </div>

            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="cep" className="cep" id="cep">CEP:</label>
                <span>{errors.cep?.message}</span>
              </div>
              <input type="number"{...register("cep")} minLength={8} maxLength={10} placeholder="Apenas números" value={novo.cep}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="nasc" className="nasc" id="nasc">Data de Nascimento:</label>
                <span>{errors.nasc?.message}</span>
              </div>
              <input type="text"{...register("nasc")} placeholder="DD/MM/YYYY" minLength={1} maxLength={10} value={novo.nasc}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="pwd" className="pwd" id="pwd">Senha:</label>
                <span>{errors.pwd?.message}</span>
              </div>
              <input type="password" {...register("pwd")} placeholder="**********" minLength={1} value={novo.pwd}
                onChange={handleChange}
              />
            </div>

            <div className="inputBox">
              <div>
                <label htmlFor="confPwd" className="confPwd" id="confPwd">Confirmação senha:</label>
                <span>{errors.confPwd?.message}</span>
              </div>
              <input type="password" {...register("confPwd")} placeholder="**********" minLength={1} value={novo.confPwd}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="Button">Confirmar</button>

            <div className="link">
              <Link to="/login">Eu já tenho conta</Link>
            </div>

          </fieldset>
        </form>
      </div>
    </>
  )
}
export default FormsClie;