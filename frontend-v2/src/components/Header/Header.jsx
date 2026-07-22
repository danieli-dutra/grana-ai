import "./Header.css";
import Logo from "../../logos/logo-junta-ai.svg";

export function Header() {
  return (
    <header className="header">
      <img
        src={Logo}
        alt="Junta.ai"
        width={170}
      />

      <div className="actions">
        {/* ThemeToggle virá aqui */}
      </div>
    </header>
  );
}