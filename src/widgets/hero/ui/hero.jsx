import { useTranslation } from 'react-i18next'
import heroBg from '../../../shared/assets/img/hero_bg.png'
import whatsapp from '../../../shared/assets/svg/whatsapp.svg'
import telegram from '../../../shared/assets/svg/telegram.svg'
import './hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero" id="top">
      <img src={heroBg} alt="" className="hero__bg" />
      <div className="hero__overlay" />

      <div className="hero__content container">
        <h1 className="hero__title">
          {t('hero.title')}
          <span>{t('hero.subtitle')}</span>
        </h1>
      </div>

      <span className="hero__scroll-line" aria-hidden="true" />

      <div className="hero__social">
        <a href="https://wa.me/971585907875" aria-label="WhatsApp" className="hero__social-btn hero__social-btn--wa">
          <img src={whatsapp} alt="" />
        </a>
        <a href="https://t.me/" aria-label="Telegram" className="hero__social-btn hero__social-btn--tg">
          <img src={telegram} alt="" />
        </a>
      </div>
    </section>
  )
}
