import { useTranslation } from 'react-i18next'
import { Reveal } from '../../../shared/ui/reveal'
import review1 from '../../../shared/assets/img/review_1.png'
import review2 from '../../../shared/assets/img/review_2.png'
import review3 from '../../../shared/assets/img/review_3.png'
import review4 from '../../../shared/assets/img/review_4.png'
import './reviews.css'

const GALLERY = [review1, review2, review3, review4]

export default function Reviews() {
  const { t } = useTranslation()

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <Reveal as="h2" className="reviews__title">
          {t('reviews.title')}
        </Reveal>

        <div className="reviews__gallery">
          {GALLERY.map((img, i) => (
            <Reveal as="div" className="reviews__photo" key={i} delay={i * 100}>
              <img src={img} alt="" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
