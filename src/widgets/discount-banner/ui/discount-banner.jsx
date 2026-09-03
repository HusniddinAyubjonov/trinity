import { useTranslation } from 'react-i18next'
import { SubscribeForm } from '../../../features/newsletter-subscribe'
import { Reveal } from '../../../shared/ui/reveal'
import './discount-banner.css'

// Triangular 5x5 "+" flourish reconstructed from the exact Figma node
// positions in the corner of the discount card (2 cells are teal accents).
const PLUS_GRID = [
  [0, 0, 1, 1, 2],
  [0, 0, 1, 1, 1],
  [0, 0, 2, 1, 1],
  [0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]

export default function DiscountBanner() {
  const { t } = useTranslation()

  return (
    <section className="discount">
      <span className="discount__blob discount__blob--teal" />
      <span className="discount__blob discount__blob--blue" />

      <Reveal as="div" className="discount__card container">
        <div className="discount__plus-grid" aria-hidden="true">
          {PLUS_GRID.flatMap((row, ri) =>
            row.map((cell, ci) =>
              cell ? (
                <span
                  key={`${ri}-${ci}`}
                  className={cell === 2 ? 'is-accent' : ''}
                  style={{ gridRow: ri + 1, gridColumn: ci + 1 }}
                >
                  +
                </span>
              ) : null,
            ),
          )}
        </div>

        <div className="discount__text">
          <h3>{t('discount.title')}</h3>
          <p>{t('discount.text')}</p>
        </div>
        <SubscribeForm
          placeholder={t('discount.emailPlaceholder')}
          buttonText={t('discount.receive')}
          variant="default"
        />
      </Reveal>
    </section>
  )
}
