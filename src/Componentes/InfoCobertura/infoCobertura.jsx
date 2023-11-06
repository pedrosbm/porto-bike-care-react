import './infoCobertura.css'
import Aviao from '../../imgs/simboloAviao.png'
import Roubo from '../../imgs/roubo.png'
import Mundo from '../../imgs/simboloMundo.png'
import Pessoa from '../../imgs/simboloPessoa.png'
import Pessoas from '../../imgs/simboloPessoas.png'
import Bike from '../../imgs/simboloBike.png'

function InfoCobertura() {
    return (
        <section id='1' className='infoCobertura'>
            <div>
                <h2>
                    Com o Porto Bike Care, você escolhe as coberturas de acordo com as suas necessidades.
                </h2>
            </div>

            <div className='coberturas'>

                <div className='upperLine groupLine'>
                    <div className='cobertura'>
                        <img src={Aviao} alt="imgAviao" />
                        <p>Extravio de viagens aérias e/ou rodovíarias</p>
                    </div>

                    <div className='cobertura'>
                        <img src={Roubo} alt="imgRoubo" />
                        <p>Roubo</p>
                    </div>

                    <div className='cobertura'>
                        <img src={Pessoa} alt="imgPessoa" />
                        <p>Acidentes pessoais e/ou individuais</p>
                    </div>
                </div>

                <div className='downLine groupLine'>
                    <div className='cobertura'>
                        <img src={Pessoas} alt="imgPessoas" />
                        <p>Danos a Terceiros</p>
                    </div>

                    <div className='cobertura'>
                        <img src={Bike} alt="imgBike" />
                        <p>Danos na tentativa de roubo </p>
                    </div>

                    <div className='cobertura'>
                        <img src={Mundo} alt="imgMundo" />
                        <p>Extensão da cobertura em solo internacional
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default InfoCobertura;