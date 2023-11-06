import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './reset.css'

import Home from './pages/Home'
import Conta from './pages/Conta'
import NovoCliente from './pages/CadastroClie'
import Login from './pages/LoginPage'
import Etapa1 from './pages/CadastroBike'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Conta' element={<Conta/>} />
        <Route path='/Cadastro' element={<NovoCliente/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Etapa1' element={<Etapa1/>} />
      </Routes>
    </Router>
  );
}

