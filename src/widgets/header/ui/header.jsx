import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CitySelect } from '../../../features/city-select'
import { LanguageSwitch } from '../../../features/language-switch'
import { useScrolled } from '../../../shared/lib/use-scrolled'
import logo from '../../../shared/assets/svg/logo.svg'
import './header.css'

export default function Header() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled()

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header__inner container">
        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`}>
          <a href="#cars">{t('header.nav.cars')}</a>
          <a href="#yachts">{t('header.nav.yachts')}</a>
          <a href="#chauffeur">{t('header.nav.chauffeur')}</a>
        </nav>

        <a href="#top" className="header__logo">
          <img src={logo} alt="TRINITY" />
        </a>

        <div className="header__right">
          <a href="tel:+971585907875" className="header__phone">
            +971 58 590 7875
          </a>

          <CitySelect />

          <LanguageSwitch />

          <button
            className={`header__burger ${menuOpen ? 'is-open' : ''}`}
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
