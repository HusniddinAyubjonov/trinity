import { useState } from "react";
import { useTranslation } from "react-i18next";
import BookingModal from "../../../shared/ui/reveal/booking-modal/BookingModal";
import "./car-card.css";

export default function CarCard({ name, img, onRentClick }) {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="car-card">
      <img src={img} alt={name} />
      <div className="car-card__overlay">
        <h3>{name}</h3>
        <button
          className="btn-primary"
          onClick={() => {
            if (onRentClick)
              onRentClick(); // Открывает модалку из Каталога
            else setShowModal(true); // Или открывает свою модалку
          }}
        >
          {t("carCatalog.rent")}
        </button>
      </div>

      {showModal && (
        <BookingModal car={{ name }} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}
