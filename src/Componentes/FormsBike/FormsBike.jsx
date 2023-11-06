import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

function FormsBike() {
    let {id} = useParams ('editar')


    const [novo,setNovo] = useState({
        id:id,
        nick:"",
        tipoQuadro: "",
        quantMarcha: "",
        tipoFreio: "",
        tipoSuspensao: "",
        acessorio: "",
        tipoPneu: "",
        observações:""     })

    const handleChange = (e) =>{
        setNovo({...novo,[e.target.name]:e.target.value})
    }

    let metodo = "post"
    if (id) {
        metodo = "put"
    }

    useEffect(()=>{
        if(id){
            
            fetch(`API ${id}`).then(resp=>{
                return (resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    },[id])

    const handleSubmit = e =>{
        e.preventDefault()
        fetch(`http://localhost:8080/appRWD/rest/produto/${id ? id : ""}`,{
            method : metodo,
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(novo)
        }).then(()=>{
            window.location = "/"
        })
    }

  return (
    <>
    <h1>Cadastrar Bike</h1>
    <form onSubmit={handleSubmit}>
        <section>
            <fieldset>
                <label htmlFor=""></label>
                <label htmlFor="num_serie">Número de Série:</label>
                <input name='num_serie' type="text" minLength={1} placeholder='xxxxxxx'/>

                <label htmlFor="quadro">Tipo de Quadro:</label>
                <input type="text" list="quadro" name="quadro"  value={novo.tipoQuadro} onChange={handleChange} />
                    <datalist id="quadro">
                        <option value="aço">Aço cromo-molibdênio</option>
                        <option value="fibra">Fibra de carbono</option>
                        <option value="aluminio">Alumínio</option>
                        <option value="titanio">Titânio</option>
                    </datalist>

                <label htmlFor="nick">Apelido: </label>
                <input type="text" name='nick' minLength={1} placeholder='Bicicleta amarela'  value={novo.nick} onChange={handleChange}/>

                <label htmlFor="quantmarcha">Quantidade de Marchas: </label>
                <input type="text" list="quantmarcha" name="quantmarcha"  value={novo.quantMarchas} onChange={handleChange} />
                    <datalist id="quantmarcha">
                        <option value="18 marchas">18 marchas</option>
                        <option value="21 marchas">21 marchas</option>
                        <option value="24 marchas">24 marchas </option>
                        <option value="27 marchas">27 marchas</option>
                        <option value="30 marchas">30 marchas</option>
                    </datalist>
            
            <label htmlFor="modalidade">Modalidade: </label>
            <input type="text" name='modalidade' minLength={1}placeholder='Speed'  />

            <label htmlFor="marca">Marca: </label>
            <input type="text" name='marca' minLength={1}placeholder='Caloi' />

            <label htmlFor="valor">Valor: </label>
            <input type="number" name='valor' minLength={1} placeholder='2000'/>

            <label htmlFor="suspensao">Tipo de suspensão:</label>
            <input type="text" name='suspensao' minLength={1} placeholder='Suspensão com Molas'  value={novo.tipoSuspensao} onChange={handleChange}/>

            <label htmlFor="acess">Acessório:</label>
            <input type="text" name='acess' placeholder='Retrovisores'  value={novo.acesssorios} onChange={handleChange} />

            <label htmlFor="freio">Freio:</label>
            <input type="text" list="freio" name="freio"  value={novo.tipoFreio} onChange={handleChange}/>
                    <datalist id="freio">
                        <option value="Cantilevers">Cantilevers</option>
                        <option value="Ferradura">Ferradura</option>
                        <option value="V-brake">V-brake</option>
                        <option value="Disco Mecânico">Disco Mecânico</option>
                        <option value="Disco Hidráulico">Disco Hidráulico</option>
                    </datalist>

            <label htmlFor="modelo">Modelo: </label>
            <input type="text" name='modelo'minLength={1} placeholder='Gravel'/>

            <label htmlFor="pneu">Tipo de pneu: </label>
            <input type="text" name='pneu' minLength={1} placeholder='Pneus Híbridos'  value={novo.tipoPneu} onChange={handleChange}/>

            <label htmlFor="obs">Observações: </label>
            <input type="text" name='obs'  value={novo.observacoes} onChange={handleChange}/>

            <label htmlFor="file">Nota Fiscal: </label>
            <input type="file" name="file"/>

            <button type="submit">Próximo</button>
            
            </fieldset>
        </section>
    </form>
    </>

        
  )
}

export default FormsBike;
