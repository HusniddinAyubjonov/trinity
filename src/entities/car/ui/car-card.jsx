import { useTranslation } from 'react-i18next'
import './car-card.css'

export default function CarCard({ name, img }) {
  const { t } = useTranslation()

  return (
    <div className="car-card">
      <img src={img} alt={name} />
      <div className="car-card__overlay">
        <h3>{name}</h3>
        <button>{t('carCatalog.rent')}</button>
      </div>
    </div>
  )
}
