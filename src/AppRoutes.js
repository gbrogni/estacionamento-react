import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ListagemVagas from './components/ListagemVagas';
import FormCadastroReserva from './components/CadastroReserva.js';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<FormCadastroReserva />} />
        <Route path="/listagem" element={<ListagemVagas />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;