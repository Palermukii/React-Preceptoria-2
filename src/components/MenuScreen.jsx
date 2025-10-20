export default function MenuScreen({ onGoDatos, onGoNotas, onBack }) {
    return (
      <section className="screen active">
        <h2>Menú principal</h2>
        <div className="grid">
          <button className="card" onClick={onGoDatos}>
            <h3>Datos del Alumno</h3>
            <p>Buscar por nombre, DNI, curso/división.</p>
          </button>
          <button className="card" onClick={onGoNotas}>
            <h3>Notas / Pendientes</h3>
            <p>Ver asignaturas sin acreditar y observaciones.</p>
          </button>
        </div>
        <div className="actions">
          <button className="btn" onClick={onBack}>Volver</button>
        </div>
      </section>
    );
  }
  