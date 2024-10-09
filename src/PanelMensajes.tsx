// PanelMensajes.tsx
import React, { useEffect } from 'react';
import './PanelMensajes.css';

interface Mensaje {
  id: number;
  texto: string;
  tipo: number; // 1 para destinatario, 2 para repartidor
}

//Aca esta el id del reparto que viene de Catalogo.tsx
interface PanelMensajesProps {
  repartoId: number;
}

//Tenemos que pasarle al arreglo de mensaje solo los que coincidan con el id de reparto
const PanelMensajes: React.FC<PanelMensajesProps> = ({ repartoId }) => {
  const mensajes: Mensaje[] = [
    { id: 1, texto: 'El repartidor está en camino.', tipo: 2 },
    { id: 2, texto: 'Gracias, estaré esperando.', tipo: 1 },
    { id: 3, texto: 'El paquete ha sido entregado.', tipo: 2 },
  ];

  useEffect(() => {
    console.log(`ID del reparto clickeado: ${repartoId}`);
  }, [repartoId]);

  return (
    <div className="panel-mensajes-container">
      <h3>Mensajes</h3>
      <ul>
        {mensajes.map((mensaje) => (
          <li key={mensaje.id} className={mensaje.tipo === 1 ? 'mensaje-destinatario' : 'mensaje-repartidor'}>
            {mensaje.texto}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PanelMensajes;
