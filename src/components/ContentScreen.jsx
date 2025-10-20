function ItemAlumno({ a, onOpen }) {
    return (
      <li className="result-item" onClick={() => onOpen(a)}>
        <div className="row">
          <strong>{a.apellido}, {a.nombre}</strong>
          <span>DNI: {a.dni}</span>
        </div>
        <div className="row">
          <span>Curso: {a.curso || "-"}°</span>
          <span>División: {a.division || "-"}</span>
          <span>Pendientes: {Array.isArray(a.asignaturasPendientes) ? a.asignaturasPendientes.length : 0}</span>
        </div>
      </li>
    );
  }
  
  export default function ContentScreen({
    section,
    qNombre, setQNombre,
    qDni, setQDni,
    qCurso, setQCurso,
    alumnos,
    onBack,
    onOpen
  }) {
    return (
      <section className="screen active">
        <h2>{section === "notas" ? "Notas y Pendientes" : "Datos del Alumno"}</h2>
  
        <div className="filters">
          <input
            value={qNombre}
            onChange={(e) => setQNombre(e.target.value)}
            placeholder="Buscar por nombre/apellido"
          />
          <input
            value={qDni}
            onChange={(e) => setQDni(e.target.value)}
            placeholder="DNI"
          />
          <input
            value={qCurso}
            onChange={(e) => setQCurso(e.target.value)}
            placeholder="Curso y división (ej: 6 2)"
          />
        </div>
  
        <ul className="results">
          {alumnos.length === 0 && <li className="empty">Sin resultados</li>}
          {alumnos.map((a) => (
            <ItemAlumno key={a.id || `${a.dni}-${a.nombre}`} a={a} onOpen={onOpen} />
          ))}
        </ul>
  
        <div className="actions">
          <button className="btn" onClick={onBack}>Volver</button>
        </div>
      </section>
    );
  }
  