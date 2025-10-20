export default function WelcomeScreen({ onContinue }) {
    return (
      <section className="screen active">
        <h1>Bienvenido al Portal del Colegio</h1>
        <p>Consultá datos, pendientes y contactos de responsables.</p>
        <div className="actions">
          <button className="btn primary" onClick={onContinue}>
            Entrar al menú
          </button>
        </div>
      </section>
    );
  }
  