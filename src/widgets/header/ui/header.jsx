import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { CitySelect } from "../../../features/city-select";
import { LanguageSwitch } from "../../../features/language-switch";
import { useScrolled } from "../../../shared/lib/use-scrolled";
import { CityContext } from "../../../app/providers/city-context";
import logo from "../../../shared/assets/svg/logo.svg";
import "./header.css";

export default function Header() {
  const { t } = useTranslation();
  const { data } = useContext(CityContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled();

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header__inner container">
        <nav className={`header__nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#cars" onClick={() => setMenuOpen(false)}>
            {t("header.nav.cars")}
          </a>
          <a href="#yachts" onClick={() => setMenuOpen(false)}>
            {t("header.nav.yachts")}
          </a>
          <a href="#chauffeur" onClick={() => setMenuOpen(false)}>
            {t("header.nav.chauffeur")}
          </a>
        </nav>

        <a href="#top" className="header__logo">
          <img src={logo} alt="TRINITY" />
        </a>

        <div className="header__right">
          <a href={`tel:${data.phone}`} className="header__phone">
            {data.phone}
          </a>
          <CitySelect />
          <LanguageSwitch />
          <button
            className={`header__burger ${menuOpen ? "is-open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
