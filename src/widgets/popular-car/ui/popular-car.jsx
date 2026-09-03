import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CarListItem, CARS } from '../../../entities/car'
import { Reveal } from '../../../shared/ui/reveal'
import searchIcon from '../../../shared/assets/svg/search.svg'
import arrow from '../../../shared/assets/svg/arrow.svg'
import './popular-car.css'

const TAB_KEYS = ['specialOffer', 'newCar', 'mostPopular', 'daily']

export default function PopularCar() {
  const { t } = useTranslation()
  const [activeCar, setActiveCar] = useState(0)
  const [activeTab, setActiveTab] = useState('mostPopular')
  const car = CARS[activeCar]

  return (
    <section className="popular">
      <div className="popular__grid container">
        <Reveal as="div" className="popular__photo">
          <img src={car.img} alt={car.name} key={car.name} className="popular__photo-img" />
          <div className="popular__photo-caption">
            <h2>{t('popular.rent', { name: car.name })}</h2>
            <div className="popular__price">
              <span className="popular__price-value">{car.price}</span>
              <span className="popular__price-note">
                {t('popular.rentFromAed')}
                <br />
                {t('popular.perDay')}
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="popular__side" delay={120}>
          <h2 className="popular__heading">{t('popular.heading')}</h2>

          <div className="popular__search">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder={t('popular.searchPlaceholder')} />
          </div>

          <div className="popular__list-row">
            <div className="popular__nav">
              <button
                type="button"
                aria-label="Previous car"
                onClick={() => setActiveCar((i) => Math.max(0, i - 1))}
              >
                <img src={arrow} alt="" className="popular__nav-icon popular__nav-icon--up" />
              </button>
              <button
                type="button"
                aria-label="Next car"
                onClick={() => setActiveCar((i) => Math.min(CARS.length - 1, i + 1))}
              >
                <img src={arrow} alt="" className="popular__nav-icon popular__nav-icon--down" />
              </button>
            </div>

            <ul className="popular__list">
              {CARS.map((c, i) => (
                <CarListItem
                  key={c.brand}
                  brand={c.brand}
                  model={c.model}
                  active={i === activeCar}
                  onClick={() => setActiveCar(i)}
                />
              ))}
            </ul>
          </div>

          <button className="popular__view-all">{t('popular.viewAll')}</button>
        </Reveal>
      </div>

      <div className="popular__tabs container">
        {TAB_KEYS.map((key) => (
          <button
            key={key}
            className={key === activeTab ? 'is-active' : ''}
            onClick={() => setActiveTab(key)}
          >
            {t(`popular.tabs.${key}`)}
          </button>
        ))}
      </div>
    </section>
  )
}
