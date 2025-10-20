import { useEffect, useMemo, useState } from "react";
import ThemeToggle from "./components/ThemeToggle.jsx";
import WelcomeScreen from "./components/WelcomeScreen.jsx";
import MenuScreen from "./components/MenuScreen.jsx";
import ContentScreen from "./components/ContentScreen.jsx";
import ModalAlumno from "./components/ModalAlumno.jsx";
import { ALUMNOS } from "./data/alumnos.js";

export default function App() {
  // Tema
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Pantallas: welcome | menu | content
  const [screen, setScreen] = useState("welcome");

  // Sección dentro de content: "datos" | "notas"
  const [section, setSection] = useState("datos");

  // Filtros
  const [qNombre, setQNombre] = useState("");
  const [qDni, setQDni] = useState("");
  const [qCurso, setQCurso] = useState("");

  // Selección para modal
  const [selAlumno, setSelAlumno] = useState(null);

  // Normalizador para búsqueda
  const norm = (s) =>
    (s || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "");

  const alumnosFiltrados = useMemo(() => {
    const n = norm(qNombre);
    const d = norm(qDni);
    const c = norm(qCurso);
    return ALUMNOS.filter((a) => {
      const nOk =
        !n ||
        `${norm(a.nombre)} ${norm(a.apellido)}`.includes(n) ||
        norm(a.nombre).includes(n) ||
        norm(a.apellido).includes(n);
      const dOk = !d || norm(a.dni).includes(d);
      const cOk =
        !c || `${norm(a.curso || "")}${norm(a.division || "")}`.includes(c);
      return nOk && dOk && cOk;
    });
  }, [qNombre, qDni, qCurso]);

  return (
    <div className="container">
      <ThemeToggle theme={theme} setTheme={setTheme} />

      {screen === "welcome" && (
        <WelcomeScreen onContinue={() => setScreen("menu")} />
      )}

      {screen === "menu" && (
        <MenuScreen
          onGoDatos={() => {
            setSection("datos");
            setScreen("content");
          }}
          onGoNotas={() => {
            setSection("notas");
            setScreen("content");
          }}
          onBack={() => setScreen("welcome")}
        />
      )}

      {screen === "content" && (
        <ContentScreen
          section={section}
          qNombre={qNombre}
          setQNombre={setQNombre}
          qDni={qDni}
          setQDni={setQDni}
          qCurso={qCurso}
          setQCurso={setQCurso}
          alumnos={alumnosFiltrados}
          onBack={() => setScreen("menu")}
          onOpen={(alumno) => setSelAlumno(alumno)}
        />
      )}

      <ModalAlumno alumno={selAlumno} onClose={() => setSelAlumno(null)} />
    </div>
  );
}
