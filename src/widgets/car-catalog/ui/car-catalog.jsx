import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarCard, CARS } from "../../../entities/car";
import { Reveal } from "../../../shared/ui/reveal";
import BookingModal from "../../../shared/ui/reveal/booking-modal/BookingModal";
import "./car-catalog.css";

export default function CarCatalog() {
  const { t } = useTranslation();
  const [selectedCar, setSelectedCar] = useState(null);

  const closeModal = () => setSelectedCar(null);

  return (
    <section className="car-catalog" id="catalog">
      <div className="car-catalog__grid container">
        {CARS.map((car, i) => (
          <Reveal key={car.name} delay={(i % 2) * 120}>
            <CarCard
              name={car.name}
              img={car.img}
              onRentClick={() => setSelectedCar(car)}
            />
          </Reveal>
        ))}
      </div>

      <div className="car-catalog__cta">
        <button
          className="btn-primary"
          onClick={() =>
            document
              .getElementById("cars")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t("carCatalog.viewAll")}
        </button>
      </div>

      {/* Используем НОВУЮ Модалку */}
      {selectedCar && <BookingModal car={selectedCar} onClose={closeModal} />}
    </section>
  );
}
