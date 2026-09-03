import { useTranslation } from 'react-i18next'
import { Reveal } from '../../../shared/ui/reveal'
import { useInView } from '../../../shared/lib/use-in-view'
import { useCountUp } from '../../../shared/lib/use-count-up'
import aboutBg from '../../../shared/assets/img/about_us_bg.png'
import './about-us.css'

const STAT_VALUES = [
  { value: '8', unit: 'year' },
  { value: '72', unit: 'cars' },
  { value: '190', unit: 'people' },
]

function StatNumber({ value, unit, delay }) {
  const { t } = useTranslation()
  const [ref, inView] = useInView({ threshold: 0.5 })
  const count = useCountUp(value, inView)

  return (
    <Reveal delay={delay} className="about__stat">
      <div className="about__stat-number" ref={ref}>
        {count}
        <span>{t(`about.stats.${unit}`)}</span>
      </div>
      <p>{t('about.stats.text')}</p>
    </Reveal>
  )
}

export default function AboutUs() {
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <div className="container">
        <Reveal as="h2" className="about__title">
          {t('about.title')}
        </Reveal>

        <div className="about__stats">
          {STAT_VALUES.map((s, i) => (
            <StatNumber key={s.unit} value={s.value} unit={s.unit} delay={i * 120} />
          ))}
        </div>

        <Reveal as="blockquote" className="about__quote">
          <span className="about__quote-mark">&ldquo;</span>
          <p>{t('about.quote')}</p>
          <div className="about__quote-author">
            <strong>{t('about.authorName')}</strong>
            <span>{t('about.authorRole')}</span>
          </div>
        </Reveal>
      </div>

      <Reveal as="div" className="about__photo">
        <img src={aboutBg} alt="Trinity showroom" />
      </Reveal>
    </section>
  )
}
