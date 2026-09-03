import { useTranslation } from 'react-i18next'
import { Reveal } from '../../../shared/ui/reveal'
import adv1 from '../../../shared/assets/img/adv_1.png'
import adv2 from '../../../shared/assets/img/adv_2.png'
import adv3 from '../../../shared/assets/img/adv_3.png'
import adv4 from '../../../shared/assets/img/adv_4.png'
import adv5 from '../../../shared/assets/img/adv_5.png'
import adv6 from '../../../shared/assets/img/adv_6.png'
import './advantages.css'

const IMAGES = [adv1, adv2, adv3, adv4, adv5, adv6]

export default function Advantages() {
  const { t } = useTranslation()
  const texts = t('advantages.items', { returnObjects: true })

  return (
    <section className="advantages">
      <div className="container">
        <Reveal as="h2" className="advantages__title">
          {t('advantages.title')}
        </Reveal>

        <div className="advantages__grid">
          {IMAGES.map((img, i) => (
            <Reveal as="div" className="advantages__item" key={i} delay={(i % 3) * 100}>
              <img src={img} alt="" />
              <div className="advantages__overlay">
                <p>{texts[i]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
