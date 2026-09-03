import { useState, useRef, useEffect, useContext } from "react";
import { CityContext } from "../../../app/providers/city-context";
import arrow from "../../../shared/assets/svg/arrow.svg";
import "./city-select.css";

const CITIES = ["Dubai", "Moscow", "Budapest", "Wiesbaden"];

export default function CitySelect() {
  const { city, setCity } = useContext(CityContext);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="city-select" ref={ref}>
      <button className="city-select__btn" onClick={() => setOpen((v) => !v)}>
        {city}
        <img
          src={arrow}
          alt=""
          className={`city-select__caret ${open ? "is-up" : ""}`}
        />
      </button>
      {open && (
        <ul className="city-select__dropdown">
          {CITIES.map((c) => (
            <li key={c}>
              <button
                className={c === city ? "is-active" : ""}
                onClick={() => {
                  setCity(c);
                  setOpen(false);
                }}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
