// ConsultaReparto.tsx
import React from 'react';
import './ConsultaReparto.css';
import PanelMensajes from './PanelMensajes';

interface Reparto {
  id_reparto: number;
  id_repartidor: number;
  id_cliente: number;
  estado_entrega: string;
  codigo_entrega: string;
  fecha_estimada: string;
}

interface ConsultaRepartoProps {
  reparto: Reparto;
  onClose: () => void;
}

const ConsultaReparto: React.FC<ConsultaRepartoProps> = ({ reparto, onClose }) => {
  return (
    <div className="consulta-reparto-container">
      <div className="detalle-reparto">
        <h2>Consulta del Reparto</h2>
        <p><strong>ID Reparto:</strong> {reparto.id_reparto}</p>
        <p><strong>ID Repartidor:</strong> {reparto.id_repartidor}</p>
        <p><strong>ID Cliente:</strong> {reparto.id_cliente}</p>
        <p><strong>Estado de Entrega:</strong> {reparto.estado_entrega}</p>
        <p><strong>Código de Entrega:</strong> {reparto.codigo_entrega}</p>
        <p><strong>Fecha Estimada:</strong> {reparto.fecha_estimada}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="mapa">
        <h3>Mapa aun no disponible</h3>
      </div>
      <PanelMensajes repartoId={reparto.id_reparto} />
    </div>
  );
};

export default ConsultaReparto;
