import React from 'react'
import NavBarP from '../Componentes/NavBarP/NavBarP'
import InfoCobertura from '../Componentes/InfoCobertura/infoCobertura'
import Banner from '../Componentes/Banner/Banner'
import Planos from '../Componentes/Planos/Planos'
import Duvidas from '../Componentes/Duvidas/Duvidas'
import Rodape from '../Componentes/Rodape/Rodape'

export default function Home() {
    return (
        <>
            <NavBarP/>
            <Banner/>
            <InfoCobertura/>
            <Planos/>
            <Duvidas/>
            <Rodape/>
        </>
    )
}