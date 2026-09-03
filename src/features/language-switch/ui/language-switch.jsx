import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import arrow from "../../../shared/assets/svg/arrow.svg";
import "./language-switch.css";

const LANGS = [
  { code: "eng", label: "ENG" },
  { code: "ru", label: "RU" },
  { code: "de", label: "DE" },
  { code: "hu", label: "HU" },
];

export default function LanguageSwitch() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current =
    LANGS.find((l) => l.code === i18n.resolvedLanguage) || LANGS[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="language-switch" ref={ref}>
      <button
        className="language-switch__btn"
        onClick={() => setOpen((v) => !v)}
      >
        {current.label}
        <img
          src={arrow}
          alt=""
          className={`language-switch__caret ${open ? "is-up" : ""}`}
        />
      </button>
      {open && (
        <ul className="language-switch__dropdown">
          {LANGS.map((lang) => (
            <li key={lang.code}>
              <button
                className={lang.code === current.code ? "is-active" : ""}
                onClick={() => {
                  i18n.changeLanguage(lang.code);
                  setOpen(false);
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
