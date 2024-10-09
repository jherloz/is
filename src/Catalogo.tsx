import React, { useState } from 'react';
import './Catalogo.css';

interface Pedido {
  id_pedido: number;
  id_repartidor: number;
  id_cliente: number;
  estado_entrega: string;
  codigo_entrega: string;
  fecha_estimada: string;
}

const Catalogo: React.FC = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([
    { id_pedido: 1, id_repartidor: 101, id_cliente: 201, estado_entrega: 'En camino', codigo_entrega: 'ABC123', fecha_estimada: '2024-10-10' },
    { id_pedido: 2, id_repartidor: 102, id_cliente: 202, estado_entrega: 'Entregado', codigo_entrega: 'DEF456', fecha_estimada: '2024-10-11' },
  ]);

  const [nuevoPedido, setNuevoPedido] = useState<Pedido>({
    id_pedido: 0,
    id_repartidor: 0,
    id_cliente: 0,
    estado_entrega: '',
    codigo_entrega: '',
    fecha_estimada: '',
  });

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNuevoPedido({ ...nuevoPedido, [name]: value });
  };

  const handleAddPedido = (e: React.FormEvent) => {
    e.preventDefault();
    setPedidos([...pedidos, { ...nuevoPedido, id_pedido: pedidos.length + 1 }]);
    setNuevoPedido({
      id_pedido: 0,
      id_repartidor: 0,
      id_cliente: 0,
      estado_entrega: '',
      codigo_entrega: '',
      fecha_estimada: '',
    });
    setMostrarFormulario(false);
  };

  return (
    <div className="catalogo-container">
      <h2>Lista de Pedidos</h2>
      <div className="contenido">
        <div className="pedidos-list">
          {pedidos.map((pedido) => (
            <div key={pedido.id_pedido} className="pedido-item">
              <p><strong>ID Pedido:</strong> {pedido.id_pedido}</p>
              <p><strong>ID Repartidor:</strong> {pedido.id_repartidor}</p>
              <p><strong>ID Cliente:</strong> {pedido.id_cliente}</p>
              <p><strong>Estado de Entrega:</strong> {pedido.estado_entrega}</p>
              <p><strong>Código de Entrega:</strong> {pedido.codigo_entrega}</p>
              <p><strong>Fecha Estimada:</strong> {pedido.fecha_estimada}</p>
            </div>
          ))}
        </div>
        {mostrarFormulario && (
          <form onSubmit={handleAddPedido} className="nuevo-pedido-form">
            <h3>Añadir Nuevo Pedido</h3>
            <input
              type="number"
              name="id_repartidor"
              placeholder="ID Repartidor"
              value={nuevoPedido.id_repartidor}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="id_cliente"
              placeholder="ID Cliente"
              value={nuevoPedido.id_cliente}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="estado_entrega"
              placeholder="Estado de Entrega"
              value={nuevoPedido.estado_entrega}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="codigo_entrega"
              placeholder="Código de Entrega"
              value={nuevoPedido.codigo_entrega}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="fecha_estimada"
              placeholder="Fecha Estimada"
              value={nuevoPedido.fecha_estimada}
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
