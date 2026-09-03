import { useState } from "react";
import { CityContext, CITY_DATA } from "../../../app/providers/city-context";
import { Header } from "../../../widgets/header";
import { Hero } from "../../../widgets/hero";
import { PopularCar } from "../../../widgets/popular-car";
import { CarCatalog } from "../../../widgets/car-catalog";
import { AboutUs } from "../../../widgets/about-us";
import { Reviews } from "../../../widgets/reviews";
import { Advantages } from "../../../widgets/advantages";
import { BrandsMarquee } from "../../../widgets/brands-marquee";
import { ContactForm } from "../../../widgets/contact-form";
import { DiscountBanner } from "../../../widgets/discount-banner";
import { Footer } from "../../../widgets/footer";

export default function HomePage() {
  const [city, setCity] = useState("Dubai");
  const data = CITY_DATA[city];

  return (
    <CityContext.Provider value={{ city, setCity, data }}>
      <Header />
      <main>
        <Hero />
        <PopularCar />
        <CarCatalog />
        <AboutUs />
        <Reviews />
        <Advantages />
        <BrandsMarquee />
        <ContactForm />
        <DiscountBanner />
      </main>
      <Footer />
    </CityContext.Provider>
  );
}
