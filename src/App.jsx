import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css'

import Home from './pages/Home'
import Conta from './pages/Conta'
import NovoCliente from './pages/CadastroClie'
import Login from './pages/LoginPage'
import Etapa1 from './pages/CadastroBike'
import Etapa2 from './pages/ConfirmacaoBike'
import Etapa3 from './pages/ValidacaoPage'
import Etapa4 from './pages/Pagamento'
import Finalizacao from './pages/FinalizacaoPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Conta' element={<Conta/>} />
        <Route path='/Cadastro' element={<NovoCliente/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Etapa1' element={<Etapa1/>} />
        <Route path='/Etapa2' element={<Etapa2/>}/>
        <Route path='/Etapa3' element={<Etapa3/>}/>
        <Route path='/Etapa4' element={<Etapa4/>}/>
        <Route path='/Finalizacao' element={<Finalizacao/>}/>
        
      </Routes>
    </Router>
  );
}

