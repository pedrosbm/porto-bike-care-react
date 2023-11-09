import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { Link } from "react-router-dom"

const schema = yup.object({
    nick: yup.string().required("Insira um nome para identifica-la"),
    tipoQuadro: yup.string().required("Esse dado é obrigatórios"),
    quantMarcha: yup.string().required("Esse dado é obrigatórios"),
    tipoSuspensao: yup.string().required("Esse dado é obrigatórios"),
    tipoFreio: yup.string().required("Esse dado é obrigatórios"),
    modalidade: yup.string().required("Esse dado é obrigatórios"),
    marca: yup.string().required("Esse dado é obrigatórios"),
    modelo: yup.string().required("Esse dado é obrigatórios"),
    valor: yup.string().required("Esse dado é obrigatórios"),
    numserie: yup.string().required("Esse dado é obrigatórios"),
    acessorio: yup.string().required("Esse dado é obrigatórios"),
    tipoPneu: yup.string().required("Esse dado é obrigatórios"),
    nf: yup.string().required("Esse dado é obrigatórios"),
    observações: yup.string().required("Esse dado é obrigatórios"),
  });

function FormsBike() {

    const [bike, setBike] = useState({
        nick: "",
        tipoQuadro: "",
        quantMarcha: "",
        tipoSuspensao: "",
        tipoFreio: "",
        modalidade: "",
        marca: "",
        modelo: "",
        valor: "",
        numserie: "",
        acessorio: "",
        tipoPneu: "",
        nf: "",
        observações: "",
        clienteId: localStorage.getItem("id")
    })

    const handleChange = (e) => {
        setBike({ ...bike, [e.target.name]: e.target.value })
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });
      

    const cadastrar = () => {
        console.log(bike)
    }

    return (
        <>
            <h1>Cadastrar Bike</h1>
            <form onSubmit={handleSubmit(cadastrar)}>
                <fieldset>
                    <label htmlFor="nick">Apelido: </label>
                    <input type="text" name='nick' minLength={1} placeholder='Bicicleta amarela' onChange={handleChange} />

                    <label htmlFor="num_serie">Número de Série:</label>
                    <input name='num_serie' type="text" minLength={1} placeholder='xxxxxxx' />

                    <label htmlFor="quadro">Tipo de Quadro:</label>
                    <input type="text" list="quadro" name="quadro" onChange={handleChange} />
                    <datalist id="quadro">
                        <option value="aço">Aço cromo-molibdênio</option>
                        <option value="fibra">Fibra de carbono</option>
                        <option value="aluminio">Alumínio</option>
                        <option value="titanio">Titânio</option>
                    </datalist>

                    <label htmlFor="quantmarcha">Quantidade de Marchas: </label>
                    <input type="text" list="quantmarcha" name="quantmarcha" onChange={handleChange} />
                    <datalist id="quantmarcha">
                        <option value="18 marchas">18 marchas</option>
                        <option value="21 marchas">21 marchas</option>
                        <option value="24 marchas">24 marchas </option>
                        <option value="27 marchas">27 marchas</option>
                        <option value="30 marchas">30 marchas</option>
                    </datalist>

                    <label htmlFor="modalidade">Modalidade: </label>
                    <input type="text" name='modalidade' minLength={1} placeholder='Speed' />

                    <label htmlFor="marca">Marca: </label>
                    <input type="text" name='marca' minLength={1} placeholder='Caloi' />

                    <label htmlFor="valor">Valor: </label>
                    <input type="number" name='valor' minLength={1} placeholder='2000' />

                    <label htmlFor="suspensao">Tipo de suspensão:</label>
                    <input type="text" name='suspensao' minLength={1} placeholder='Suspensão com Molas' onChange={handleChange} />

                    <label htmlFor="acess">Acessório:</label>
                    <input type="text" name='acess' placeholder='Retrovisores' onChange={handleChange} />

                    <label htmlFor="freio">Freio:</label>
                    <input type="text" list="freio" name="freio" onChange={handleChange} />
                    <datalist id="freio">
                        <option value="Cantilevers">Cantilevers</option>
                        <option value="Ferradura">Ferradura</option>
                        <option value="V-brake">V-brake</option>
                        <option value="Disco Mecânico">Disco Mecânico</option>
                        <option value="Disco Hidráulico">Disco Hidráulico</option>
                    </datalist>

                    <label htmlFor="modelo">Modelo:</label>
                    <input type="text" name='modelo' onChange={handleChange} />

                    <label htmlFor="pneu">Tipo de pneu: </label>
                    <input type="text" name='pneu' minLength={1} placeholder='Pneus Híbridos' onChange={handleChange} />

                    <label htmlFor="obs">Observações: </label>
                    <input type="text" name='obs' onChange={handleChange} />

                    <label htmlFor="nf">Nota Fiscal: </label>
                    <input type="text" name='nf' minLength={1} placeholder='*********' onChange={handleChange} />

                    <button type="submit">Próximo</button>

                </fieldset>
            </form>
        </>


    )
}

export default FormsBike;