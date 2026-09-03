import { useTranslation } from 'react-i18next'
import { SubscribeForm } from '../../../features/newsletter-subscribe'
import logo from '../../../shared/assets/svg/logo.svg'
import facebook from '../../../shared/assets/svg/facebook.svg'
import instagram from '../../../shared/assets/svg/instagram.svg'
import tiktok from '../../../shared/assets/svg/tiktok.svg'
import youtube from '../../../shared/assets/svg/youtube.svg'
import './footer.css'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <a href="#top" className="footer__logo">
            <img src={logo} alt="TRINITY" />
          </a>

          <div className="footer__cols">
            <div className="footer__col">
              <h4>{t('footer.forCustomers')}</h4>
              <ul>
                <li><a href="#about">{t('footer.aboutUs')}</a></li>
                <li><a href="#">{t('footer.conditions')}</a></li>
                <li><a href="#reviews">{t('footer.testimonials')}</a></li>
                <li><a href="#">{t('footer.articles')}</a></li>
                <li><a href="#contacts">{t('footer.contacts')}</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>{t('footer.carListTitle')}</h4>
              <ul>
                <li><a href="#">{t('footer.suvs')}</a></li>
                <li><a href="#">{t('footer.convertibles')}</a></li>
                <li><a href="#">{t('footer.sportsCars')}</a></li>
                <li><a href="#">{t('footer.premium')}</a></li>
                <li><a href="#">{t('footer.coupe')}</a></li>
              </ul>
            </div>

            <div className="footer__col footer__col--wide">
              <h4>{t('footer.service')}</h4>
              <a href="tel:+971585907875" className="footer__phone">
                +971 58 590 7875
              </a>
              <ul className="footer__inline">
                <li><a href="#">{t('header.nav.cars')}</a></li>
                <li><a href="#">{t('footer.yachtList')}</a></li>
                <li><a href="#">{t('footer.chauffeur')}</a></li>
              </ul>
            </div>

            <div className="footer__col footer__col--address">
              <p className="footer__address">{t('footer.address')}</p>
              <SubscribeForm
                placeholder={t('footer.emailPlaceholder')}
                buttonText={t('footer.submit')}
                variant="footer"
              />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>{t('footer.privacyPolicy')}</span>
          <span>{t('footer.copyright')}</span>
          <div className="footer__social">
            <a href="#" aria-label="Facebook"><img src={facebook} alt="" /></a>
            <a href="#" aria-label="TikTok"><img src={tiktok} alt="" /></a>
            <a href="#" aria-label="YouTube"><img src={youtube} alt="" /></a>
            <a href="#" aria-label="Instagram"><img src={instagram} alt="" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
