import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
    nick: yup.string().required("Campo obrigatório"),
    tipoQuadro: yup.string().required("Campo obrigatório"),
    quantMarcha: yup.string().required("Campo obrigatório"),
    tipoSuspensao: yup.string().required("Campo obrigatório"),
    tipoFreio: yup.string().required("Campo obrigatório"),
    modalidade: yup.string().required("Campo obrigatório"),
    marca: yup.string().required("Campo obrigatório"),
    modelo: yup.string().required("Campo obrigatório"),
    valor: yup.string().required("Campo obrigatório"),
    numSerie: yup.string().required("Campo obrigatório"),
    tipoPneu: yup.string().required("Campo obrigatório"),
    nf: yup.string().required("Campo obrigatório")
});

function FormsBike() {
    const [novaBike, setNovaBike] = useState({
        nick: localStorage.getItem("nick"),
        tipoQuadro: localStorage.getItem("tipoQuadro"),
        quantMarcha: localStorage.getItem("quantMarcha"),
        tipoSuspensao: localStorage.getItem("tipoSuspensao"),
        tipoFreio: localStorage.getItem("tipoFreio"),
        modalidade: localStorage.getItem("modalidade"),
        marca: localStorage.getItem("marca"),
        modelo: localStorage.getItem("modelo"),
        valor: localStorage.getItem("valor"),
        numSerie: localStorage.getItem("numSerie"),
        tipoPneu: localStorage.getItem("tipoPneu"),
        observacoes: localStorage.getItem("observacoes"),
        nf: localStorage.getItem("nf"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const navigate = useNavigate()

    const cadastrarBike = () => {
        localStorage.setItem("nick", novaBike.nick);
        localStorage.setItem("tipoQuadro", novaBike.tipoQuadro);
        localStorage.setItem("quantMarcha", novaBike.quantMarcha);
        localStorage.setItem("tipoSuspensao", novaBike.tipoSuspensao);
        localStorage.setItem("tipoFreio", novaBike.tipoFreio);
        localStorage.setItem("modalidade", novaBike.modalidade);
        localStorage.setItem("marca", novaBike.marca);
        localStorage.setItem("modelo", novaBike.modelo);
        localStorage.setItem("valor", novaBike.valor);
        localStorage.setItem("numSerie", novaBike.numSerie);
        localStorage.setItem("tipoPneu", novaBike.tipoPneu);
        localStorage.setItem("observacoes", novaBike.observacoes);
        localStorage.setItem("nf", novaBike.nf);
        navigate("/Etapa2")
    }

    const handleChange = (e) => {
        setNovaBike({ ...novaBike, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="wrapper">
                <h2>Cadastro de Bicicleta</h2>

                <form className="forms" onSubmit={handleSubmit(cadastrarBike)}>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="nick">Apelido: </label>
                            <span>{errors.nick?.message}</span>
                        </div>
                        <input value={novaBike["nick"]} type="text" name='nick'{...register("nick")} minLength={1} placeholder='Bicicleta amarela' onChange={handleChange} />
                    </div>


                    <div className="inputBox">
                        <div>
                            <label htmlFor="num_serie">Número de Série:</label>
                            <span>{errors.numSerie?.message}</span>
                        </div>
                        <input value={novaBike["numSerie"]} name='num_serie' {...register("numSerie")} type="text" minLength={1} placeholder='xxxxxxx' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="quadro">Tipo de Quadro:</label>
                            <span>{errors.tipoQuadro?.message}</span>
                        </div>
                        <input value={novaBike["tipoQuadro"]} type="text" list="quadro" name="quadro"{...register("tipoQuadro")} onChange={handleChange} />
                        <datalist id="quadro">
                            <option value="aço">Aço cromo-molibdênio</option>
                            <option value="fibra">Fibra de carbono</option>
                            <option value="aluminio">Alumínio</option>
                            <option value="titanio">Titânio</option>
                        </datalist>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="quantmarcha">Quantidade de Marchas: </label>
                            <span>{errors.quantMarcha?.message}</span>
                        </div>
                        <input value={novaBike["quantMarcha"]} type="number" list="quantmarcha" name="quantmarcha"{...register("quantMarcha")} onChange={handleChange} />
                        <datalist id="quantmarcha">
                            <option value="18">18 marchas</option>
                            <option value="21">21 marchas</option>
                            <option value="24">24 marchas </option>
                            <option value="27">27 marchas</option>
                            <option value="30">30 marchas</option>
                        </datalist>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="modalidade">Modalidade: </label>
                            <span>{errors.modalidade?.message}</span>
                        </div>
                        <input value={novaBike["modalidade"]} type="text" name='modalidade' {...register("modalidade")} minLength={1} placeholder='Speed' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="marca">Marca: </label>
                            <span>{errors.marca?.message}</span>
                        </div>
                        <input value={novaBike["marca"]} type="text" name='marca' {...register("marca")} minLength={1} placeholder='Caloi' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="valor">Valor: </label>
                            <span>{errors.valor?.message}</span>
                        </div>
                        <input value={novaBike["valor"]} type="number" name='valor' {...register("valor")} minLength={1} placeholder='2000' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="suspensao">Tipo de suspensão:</label>
                            <span>{errors.tipoSuspensao?.message}</span>
                        </div>
                        <input value={novaBike["tipoSuspensao"]} type="text" name='suspensao' {...register("tipoSuspensao")} minLength={1} placeholder='Suspensão com Molas' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="freio">Freio:</label>
                            <span>{errors.tipoFreio?.message}</span>
                        </div>
                        <input value={novaBike["tipoFreio"]} type="text" list="freio" name="freio" {...register("tipoFreio")} onChange={handleChange} />
                        <datalist id="freio">
                            <option value="Cantilevers">Cantilevers</option>
                            <option value="Ferradura">Ferradura</option>
                            <option value="V-brake">V-brake</option>
                            <option value="Disco Mecânico">Disco Mecânico</option>
                            <option value="Disco Hidráulico">Disco Hidráulico</option>
                        </datalist>
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="modelo">Modelo:</label>
                            <span>{errors.modelo?.message}</span>
                        </div>
                        <input value={novaBike["modelo"]} type="text" name='modelo' {...register("modelo")} onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="pneu">Tipo de pneu: </label>
                            <span>{errors.pneu?.message}</span>
                        </div>
                        <input value={novaBike["tipoPneu"]} type="text" name='pneu' {...register("tipoPneu")} minLength={1} placeholder='Pneus Híbridos' onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="obs">Observações: </label>
                            <span>{errors.observacoes?.message}</span>
                        </div>
                        <input value={novaBike["observacoes"]} type="text" name='obs' {...register("observacoes")} onChange={handleChange} />
                    </div>

                    <div className="inputBox">
                        <div>
                            <label htmlFor="nf">Nota Fiscal: </label>
                            <span>{errors.nf?.message}</span>
                        </div>
                        <input value={novaBike["nf"]} type="number" name='nf' {...register("nf")} minLength={1} placeholder='*********' onChange={handleChange} />
                    </div>

                    <button type="submit" className="Button">
                        Confirmar
                    </button>
                </form>
            </div>
        </>
    );
}

export default FormsBike;