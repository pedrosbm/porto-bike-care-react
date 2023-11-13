import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './Validacao.css'

function Validacao() {
  const navigate = useNavigate();
  const limiarAceitavel = 0.5;
  const [novo, setNovo] = useState({
    foto1: null,
    foto2: null,
    foto3: null
  });

  const handleCameraCapture = async (photoName) => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      const mediaStreamTrack = mediaStream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(mediaStreamTrack);

      const photoBlob = await imageCapture.takePhoto();
      setNovo({ ...novo, [photoName]: photoBlob });

      mediaStreamTrack.stop();
    } catch (error) {
      console.error("Erro ao capturar a foto:", error);
      alert("Erro ao capturar a foto. Verifique se a câmera está acessível.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foto1", novo.foto1);
    formData.append("foto2", novo.foto2);
    formData.append("foto3", novo.foto3);

    try {
      const response = await fetch("http://127.0.0.1:8080/upload", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição ${response.status}`);
      }

      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        alert("Erro ao processar as imagens. Por favor, tente novamente.");
        return;
      }

      if (data.class_name === "Classe não aceitável") {
        console.log("Uma das fotos não é aceitável.");
        alert("Uma das fotos não é aceitável. Por favor, tire outra foto.");
        return;
      }

      if (!data.class_name || !["Bicicross", "Downhill", "Gravel", "Speed"].includes(data.class_name)) {
        console.log("A imagem não é uma bicicleta.");
        alert("A imagem não é uma bicicleta.");
        return;
      }

      navigate("/Etapa4");

    } catch (error) {
      console.error("Erro ao enviar as imagens:", error);
      alert("Erro ao enviar as imagens. Por favor, tente novamente.");
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h2>Tire fotos da bike</h2>
        <section>
          <fieldset className="validacao">
            <div className="box">
              <button
                type="button"
                onClick={() => handleCameraCapture("foto1")}
                className="CameraButton"
              >
                Tirar foto da lateral esquerda da bike
              </button>
            </div>
            <div className="box">
              <button
                type="button"
                onClick={() => handleCameraCapture("foto2")}
                className="CameraButton"
              >
                Tirar foto da lateral direita da bike
              </button>
            </div>

            <div className="box">
              <button
                type="button"
                onClick={() => handleCameraCapture("foto3")}
                className="CameraButton"
              >
                Tirar foto da frente da bike
              </button>
            </div>
          </fieldset>
          <button type="submit" className="Button">
            Confirmar
          </button>
        </section>
      </form>
    </div>
  );
}

export default Validacao;