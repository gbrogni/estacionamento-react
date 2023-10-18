import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [vagasDisponiveis, setVagasDisponiveis] = useState([]);

  useEffect(() => {
    fetchVagasDisponiveis();
  }, []);

  const fetchVagasDisponiveis = () => {
    const vagas = [
      {
        numero: 1,
        tipo: 'Vaga comum',
        disponivel: false,
      },
      {
        numero: 2,
        tipo: 'Vaga comum',
        disponivel: false,
      },
      {
        numero: 3,
        tipo: 'Vaga de visitante',
        disponivel: true,
      },
      {
        numero: 4,
        tipo: 'Vaga comum',
        disponivel: true,
      },
    ];

    setVagasDisponiveis(vagas);
  };

  return (
    <div className="home-page">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/form">Formulário de cadastro</Link>
            </li>
            <li>
              <Link to="/listagem">Listagem de vagas</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Número da Vaga</th>
              <th>Tipo</th>
              <th>Disponível</th>
            </tr>
          </thead>

          <tbody>
            {vagasDisponiveis.map((vaga) => (
              <tr key={vaga.numero}>
                <td>{vaga.numero}</td>
                <td>{vaga.tipo}</td>
                <td>{vaga.disponivel ? 'Sim' : 'Não'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;