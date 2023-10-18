import React, { useState } from 'react';
import './cadastroReserva.css';
import { Link } from 'react-router-dom';

function FormCadastroReserva() {
  const [reservations, setReservations] = useState([]);
  const [formData, setFormData] = useState({
    plate: '',
    ownerName: '',
    apartmentNumber: '',
    apartmentBlock: '',
    vehicleModel: '',
    vehicleColor: '',
    parkingNumber: '',
  });

  const isInteger = (value) => {
    return !isNaN(value) && Number.isInteger(parseInt(value, 10));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.plate ||
      !formData.ownerName ||
      !isInteger(formData.apartmentNumber) ||
      !isInteger(formData.apartmentBlock) ||
      !formData.vehicleModel ||
      !formData.vehicleColor ||
      !isInteger(formData.parkingNumber)
    ) {
      alert('Preencha todos os campos do formulário corretamente.');
      return;
    }

    const newReservation = { ...formData };
    setReservations([...reservations, newReservation]);

    setFormData({
      plate: '',
      ownerName: '',
      apartmentNumber: '',
      apartmentBlock: '',
      vehicleModel: '',
      vehicleColor: '',
      parkingNumber: '',
    });

    const confirmationMessage = `Reserva realizada com sucesso:\nPlaca: ${newReservation.plate}\nProprietário: ${newReservation.ownerName}\nNúmero: ${newReservation.apartmentNumber}\nBloco: ${newReservation.apartmentBlock}\nModelo: ${newReservation.vehicleModel}\nCor: ${newReservation.vehicleColor}\nVaga: ${newReservation.parkingNumber}`;
    alert(confirmationMessage);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="form-page">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Vagas disponíveis</Link>
            </li>
            <li>
              <Link to="/listagem">Listagem de vagas</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="form-container">
          <h1>Cadastro de Reserva</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="plate">Placa do veículo</label>
              <input
                type="text"
                id="plate"
                name="plate"
                placeholder="Placa do Veículo"
                value={formData.plate}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="ownerName">Nome do proprietário</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                placeholder="Nome do Proprietário"
                value={formData.ownerName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="apartmentNumber">Número do apartamento</label>
              <input
                type="text"
                id="apartmentNumber"
                name="apartmentNumber"
                placeholder="Número do Apartamento"
                value={formData.apartmentNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="apartmentBlock">Bloco do apartamento</label>
              <input
                type="text"
                id="apartmentBlock"
                name="apartmentBlock"
                placeholder="Bloco do Apartamento"
                value={formData.apartmentBlock}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleModel">Modelo do veículo</label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                placeholder="Modelo do Veículo"
                value={formData.vehicleModel}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="vehicleColor">Cor do veículo</label>
              <input
                type="text"
                id="vehicleColor"
                name="vehicleColor"
                placeholder="Cor do Veículo"
                value={formData.vehicleColor}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="parkingNumber">Número da vaga de estacionamento</label>
              <input
                type="text"
                id="parkingNumber"
                name="parkingNumber"
                placeholder="Número da Vaga de Estacionamento"
                value={formData.parkingNumber}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" id="submit-button">
              Salvar
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FormCadastroReserva;