import React, { useState } from 'react';
import './listagemVagas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ListagemVagas () {
  const [reservations, setReservations] = useState([
    {
      placaVeiculo: "ABC1234",
      nomeProprietario: "João",
      numApartamento: "101",
      blocoApartamento: "A",
      modeloVeiculo: "Sedan",
      corVeiculo: "Prata",
      numVagaEstacionamento: "1"
    },
    {
      placaVeiculo: "XYZ5678",
      nomeProprietario: "Maria",
      numApartamento: "202",
      blocoApartamento: "B",
      modeloVeiculo: "SUV",
      corVeiculo: "Preto",
      numVagaEstacionamento: "2"
    }
  ]);

  const removeReservation = (index) => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
  };

  return (
    <div className="listagem-page">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Vagas disponíveis</Link>
            </li>
            <li>
              <Link to="/form">Formulário de cadastro</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="container">
        <h1>Listagem de Vagas</h1>
        <table>
          <thead>
            <tr>
              <th>Excluir</th>
              <th>Placa do Veículo</th>
              <th>Nome do Proprietário</th>
              <th>Número do Apartamento</th>
              <th>Bloco do Apartamento</th>
              <th>Modelo do Veículo</th>
              <th>Cor do Veículo</th>
              <th>Número da Vaga de Estacionamento</th>
            </tr>
          </thead>

          <tbody>
            {reservations.map((dados, index) => (
              <tr key={index}>
                <td>
                  <FontAwesomeIcon icon={faTrash} onClick={() => removeReservation(index)} />
                </td>
                <td>{dados.placaVeiculo}</td>
                <td>{dados.nomeProprietario}</td>
                <td>{dados.numApartamento}</td>
                <td>{dados.blocoApartamento}</td>
                <td>{dados.modeloVeiculo}</td>
                <td>{dados.corVeiculo}</td>
                <td>{dados.numVagaEstacionamento}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button><Link to="/form" className="button-link">Fazer reserva</Link></button>
      </div>
    </div>
  );
};
 
export default ListagemVagas;