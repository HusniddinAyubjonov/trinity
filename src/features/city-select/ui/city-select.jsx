import { useState } from 'react'
import arrow from '../../../shared/assets/svg/arrow.svg'
import './city-select.css'

const CITIES = ['Dubai', 'Moscow', 'Budapest', 'Wiesbaden']

export default function CitySelect() {
  const [open, setOpen] = useState(false)
  const [city, setCity] = useState('Dubai')

  return (
    <div className="city-select">
      <button className="city-select__btn" onClick={() => setOpen((v) => !v)}>
        {city}
        <img src={arrow} alt="" className={`city-select__caret ${open ? 'is-up' : ''}`} />
      </button>
      {open && (
        <ul className="city-select__dropdown">
          {CITIES.map((c) => (
            <li key={c}>
              <button
                className={c === city ? 'is-active' : ''}
                onClick={() => {
                  setCity(c)
                  setOpen(false)
                }}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
