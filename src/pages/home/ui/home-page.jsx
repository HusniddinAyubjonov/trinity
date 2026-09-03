import { Header } from '../../../widgets/header'
import { Hero } from '../../../widgets/hero'
import { PopularCar } from '../../../widgets/popular-car'
import { CarCatalog } from '../../../widgets/car-catalog'
import { AboutUs } from '../../../widgets/about-us'
import { Reviews } from '../../../widgets/reviews'
import { Advantages } from '../../../widgets/advantages'
import { BrandsMarquee } from '../../../widgets/brands-marquee'
import { DiscountBanner } from '../../../widgets/discount-banner'
import { ContactForm } from '../../../widgets/contact-form'
import { Footer } from '../../../widgets/footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PopularCar />
        <CarCatalog />
        <AboutUs />
        <Reviews />
        <Advantages />
        <BrandsMarquee />
        <DiscountBanner />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
