import { Link } from 'react-router-dom'
import './Finalizacao.css'
import caraAndandoDeBike from '../../imgs/image 25.png'
import React from 'react'

function Finalizacao() {

    return (
        <div className="Finalizacao">
            <div className='textFinalizacao'>
                <h2>Pagamento realizado com sucesso!</h2>
                <h4>A <span className='pt1'>Porto</span> Bike Care agradece a preferência!</h4>
            </div>
            <div className='cnjImg'>
                <img src={caraAndandoDeBike} alt='homemBike' className='homemBike' />
                <div className='retFinal'></div>
                <div className='retFinal2'></div>
                <div className='retFinal3'></div>
                <div className='retFinal4'></div>
            </div>
            <Link to='/'>
                <button className='Button' type="submit">Inicio</button>
            </Link>
        </div>
    )
}
export default Finalizacao