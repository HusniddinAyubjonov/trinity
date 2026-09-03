import './brands-marquee.css'

const BRANDS = [
  'Lexus', 'Mercedes', 'Audi', 'BMW', 'Rolls-Royce', 'Cadillac', 'Maserati', 'Lamborghini', 'Bentley', 'Porsche',
]

export default function BrandsMarquee() {
  const items = [...BRANDS, ...BRANDS]
  return (
    <section className="marquee">
      <div className="marquee__track">
        {items.map((b, i) => (
          <span key={i}>{b}</span>
        ))}
      </div>
    </section>
  )
}
