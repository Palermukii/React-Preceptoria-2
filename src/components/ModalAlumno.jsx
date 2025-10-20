export default function ModalAlumno({ alumno, onClose }) {
    if (!alumno) return null;
  
    const notas = Array.isArray(alumno.asignaturasPendientes)
      ? alumno.asignaturasPendientes
      : [];
  
    const responsables = Array.isArray(alumno.responsables)
      ? alumno.responsables
      : [];
  
    return (
      <div className="modal" role="dialog" aria-modal="true" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
          <h3>{alumno.apellido}, {alumno.nombre}</h3>
  
          <div className="modal-detalles">
            {/* Si tu datos.js traía HTML (por ej. domicilio), se respeta: */}
            {alumno.detallesHTML ? (
              <div dangerouslySetInnerHTML={{ __html: alumno.detallesHTML }} />
            ) : (
              <p><em>Sin detalles adicionales.</em></p>
            )}
          </div>
  
          <h4>Asignaturas sin acreditar</h4>
          {notas.length ? (
            <ul className="list">
              {notas.map((n, i) => <li key={i}>{n}</li>)}
            </ul>
          ) : (
            <p><em>Sin pendientes.</em></p>
          )}
  
          <h4>Responsables</h4>
          {responsables.length ? (
            <ul className="list">
              {responsables.map((r, i) => (
                <li key={i}>
                  <strong>{r.nombre}</strong> — {r.telefono || "s/ teléfono"}
                </li>
              ))}
            </ul>
          ) : (
            <p><em>No informados.</em></p>
          )}
        </div>
      </div>
    );
  }
  