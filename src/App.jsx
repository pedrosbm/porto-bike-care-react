import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css'

import Home from './pages/Home'
import Conta from './pages/Conta'
import CadastroClie from './pages/CadastroClie'
import LoginPage from './pages/LoginPage'
import CadastroBike from './pages/CadastroBike'
import ConfirmacaoBike from './pages/ConfirmacaoBike'
import ValidacaoPage from './pages/ValidacaoPage'
import PagamentoPage from './pages/Pagamento'
import FinalizacaoPage from './pages/FinalizacaoPage'
import EditBike from './Componentes/EditBike/EditBike';
import EditCard from './Componentes/EditCard/EditCard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Conta' element={<Conta/>} />
        <Route path='/Cadastro' element={<CadastroClie/>} />
        <Route path='/Login' element={<LoginPage/>} />
        <Route path='/Etapa1' element={<CadastroBike/>} />
        <Route path='/Etapa2' element={<ConfirmacaoBike/>}/>
        <Route path='/Etapa3' element={<ValidacaoPage/>}/>
        <Route path='/Etapa4' element={<PagamentoPage/>}/>
        <Route path='/Finalizacao' element={<FinalizacaoPage/>}/>
        <Route path='/Editar/:id' element={<EditBike/>}/>
        <Route path='/EditarCartao/:id' element={<EditCard/>}/>
      </Routes>
    </Router>
  );
}

