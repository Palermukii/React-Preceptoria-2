export default function ThemeToggle({ theme, setTheme }) {
    return (
      <button
        className="theme-toggle-btn"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Cambiar tema"
        title="Cambiar tema"
      >
        <span className="icon-sun">☀️</span>
        <span className="icon-moon">🌙</span>
      </button>
    );
  }
  