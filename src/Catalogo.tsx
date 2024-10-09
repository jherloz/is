import React, { useState } from 'react';
import './Catalogo.css';
import ConsultaReparto from './ConsultaReparto';

interface Reparto {
  id_reparto: number;
  id_repartidor: number;
  id_cliente: number;
  estado_entrega: string;
  codigo_entrega: string;
  fecha_estimada: string;
}

const Catalogo: React.FC = () => {
  const [repartos, setRepartos] = useState<Reparto[]>([
    { id_reparto: 1, id_repartidor: 101, id_cliente: 201, estado_entrega: 'En camino', codigo_entrega: 'ABC123', fecha_estimada: '2024-10-10' },
    { id_reparto: 2, id_repartidor: 102, id_cliente: 202, estado_entrega: 'Entregado', codigo_entrega: 'DEF456', fecha_estimada: '2024-10-11' },
  ]);

  const [nuevoReparto, setNuevoReparto] = useState<Reparto>({
    id_reparto: 0,
    id_repartidor: 0,
    id_cliente: 0,
    estado_entrega: '',
    codigo_entrega: '',
    fecha_estimada: '',
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [selectedReparto, setSelectedReparto] = useState<Reparto | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoReparto({ ...nuevoReparto, [name]: value });
  };

  const handleAddReparto = (e: React.FormEvent) => {
    e.preventDefault();
    setRepartos([...repartos, { ...nuevoReparto, id_reparto: repartos.length + 1 }]);
    setNuevoReparto({
      id_reparto: 0,
      id_repartidor: 0,
      id_cliente: 0,
      estado_entrega: '',
      codigo_entrega: '',
      fecha_estimada: '',
    });
    setMostrarFormulario(false);
  };

  const handleRepartoClick = (reparto: Reparto) => {
    setSelectedReparto(reparto);
  };

  const handleCloseConsulta = () => {
    setSelectedReparto(null);
  };

  if (selectedReparto) {
    return <ConsultaReparto reparto={selectedReparto} onClose={handleCloseConsulta} />;
  }

  return (
    <div className="catalogo-container">
      <h2>Lista de Repartos</h2>
      <div className="contenido">
        <div className="repartos-list">
          {repartos.map((reparto) => (
            <div key={reparto.id_reparto} className="reparto-item" onClick={() => handleRepartoClick(reparto)}>
              <p><strong>ID Reparto:</strong> {reparto.id_reparto}</p>
              <p><strong>ID Repartidor:</strong> {reparto.id_repartidor}</p>
              <p><strong>ID Cliente:</strong> {reparto.id_cliente}</p>
              <p><strong>Estado de Entrega:</strong> {reparto.estado_entrega}</p>
              <p><strong>Código de Entrega:</strong> {reparto.codigo_entrega}</p>
              <p><strong>Fecha Estimada:</strong> {reparto.fecha_estimada}</p>
            </div>
          ))}
        </div>
        {mostrarFormulario && (
          <form onSubmit={handleAddReparto} className="nuevo-reparto-form">
            <h3>Añadir Nuevo Reparto</h3>
            <input
              type="number"
              name="id_repartidor"
              placeholder="ID Repartidor"
              value={nuevoReparto.id_repartidor}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="id_cliente"
              placeholder="ID Cliente"
              value={nuevoReparto.id_cliente}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="estado_entrega"
              placeholder="Estado de Entrega"
              value={nuevoReparto.estado_entrega}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="codigo_entrega"
              placeholder="Código de Entrega"
              value={nuevoReparto.codigo_entrega}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="fecha_estimada"
              placeholder="Fecha Estimada"
              value={nuevoReparto.fecha_estimada}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Añadir</button>
          </form>
        )}
      </div>
      <button onClick={() => setMostrarFormulario(!mostrarFormulario)} className="toggle-button">
        {mostrarFormulario ? 'Cancelar' : 'Añadir'}
      </button>
    </div>
  );
};

export default Catalogo;
