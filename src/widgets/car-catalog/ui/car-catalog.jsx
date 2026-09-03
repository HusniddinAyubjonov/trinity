import { useTranslation } from 'react-i18next'
import { CarCard, CARS } from '../../../entities/car'
import { Reveal } from '../../../shared/ui/reveal'
import './car-catalog.css'

export default function CarCatalog() {
  const { t } = useTranslation()

  return (
    <section className="car-catalog">
      <div className="car-catalog__grid container">
        {CARS.map((car, i) => (
          <Reveal key={car.name} delay={(i % 2) * 120}>
            <CarCard name={car.name} img={car.img} />
          </Reveal>
        ))}
      </div>

      <div className="car-catalog__cta">
        <button>{t('carCatalog.viewAll')}</button>
      </div>
    </section>
  )
}
