import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Validacao() {
  const navigate = useNavigate();

  const [novo, setNovo] = useState({
    fotoSerie: null,
    foto1: null,
    foto2: null,
    foto3: null,
    foto4: null,
    foto5: null,
    foto6: null,
    foto7: null,
    foto8: null,
    foto9: null
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const formData = new FormData();
    formData.append("fotoSerie", novo.fotoSerie);
    formData.append("foto1", novo.foto1);
    formData.append("foto2", novo.foto2);
    formData.append("foto3", novo.foto3);
    formData.append("foto4", novo.foto4);
    formData.append("foto5", novo.foto5);
    formData.append("foto6", novo.foto6);
    formData.append("foto7", novo.foto7);
    formData.append("foto8", novo.foto8);
    formData.append("foto9", novo.foto9);

    setLoading(true);
    setError(null);

    fetch("http://127.0.0.1:5000/upload", {
      method: "POST",
      body: formData,
       mode: 'cors'
  })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erro na requisição: ${response.status}`);
        } return response.json();
    })
    .then((data) => {
      console.log(data);
     
      navigate("/Finalizacao"); 
    })
    .catch((error) => {
      console.error("Erro ao processar a requisição:", error);
      setError("Erro ao enviar as imagens. Tente novamente mais tarde.");
    })
    .finally(() => {
      setLoading(false);
    });
};

    return(
        <>
        <div>
         <form onSubmit={handleSubmit}>
            <section>
                <h2>Envie imagens da bike</h2>
                <fieldset>
                    <label htmlFor="fotoSerie">Envie uma foto mostrando o número de série da bike: </label>
                    <input type="file" name="fotoSerie" onChange={handleChange} />

                    <label htmlFor="foto1">Envie fotos da lateral esquerda da bike: </label>
                    <input type="file" name="foto1"  onChange={handleChange} />

                    <label htmlFor="foto2">Envie fotos da lateral direita da bike: </label>
                    <input type="file" name="foto2"  onChange={handleChange}/>

                    <label htmlFor="foto3">Envie fotos do quadro da bike: </label>
                    <input type="file" name="foto3"  onChange={handleChange}/>

                    <label htmlFor="foto4">Envie fotos do freio da bike: </label>
                    <input type="file" name="foto4"  onChange={handleChange}/>

                    <label htmlFor="foto5">Envie fotos do guidão da bike: </label>
                    <input type="file" name="foto5"  onChange={handleChange}/>

                    <label htmlFor="foto6">Envie fotos da marcha da bike: </label>
                    <input type="file" name="foto6" onChange={handleChange}/>

                    <label htmlFor="foto7">Envie fotos da pneu da bike: </label>
                    <input type="file" name="foto7"  onChange={handleChange}/>

                    <label htmlFor="foto8">Envie fotos do aro da bike: </label>
                    <input type="file" name="foto8"  onChange={handleChange}/>

                    <label htmlFor="foto9">Envie fotos do banco da bike: </label>
                    <input type="file" name="foto9"  onChange={handleChange}/>
                </fieldset>
              </section>
              <button type="submit" className="Button">Confirmar</button>
           </form>
       </div>
     </>
  )
}
export default Validacao;