import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../../shared/ui/reveal";
import review1 from "../../../shared/assets/img/review_1.png";
import review2 from "../../../shared/assets/img/review_2.png";
import review3 from "../../../shared/assets/img/review_3.png";
import review4 from "../../../shared/assets/img/review_4.png";
import "./reviews.css";

const REVIEW_DATA = [
  {
    img: review1,
    name: "Александр",
    text: "Лучший сервис аренды! Машина была подана точно в срок, состояние идеальное.",
    stars: 5,
  },
  {
    img: review2,
    name: "Дмитрий",
    text: "Брал Lamborghini на выходные. Очень удобный процесс оформления, всего 5 минут!",
    stars: 5,
  },
  {
    img: review3,
    name: "Мария",
    text: "Понравилось, что в машине не было камер и слежки. Полная приватность.",
    stars: 4,
  },
  {
    img: review4,
    name: "Сергей",
    text: "Отличный выбор премиальных авто. Цены честные, поддержка отвечает 24/7.",
    stars: 5,
  },
];

export default function Reviews() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <Reveal as="h2" className="reviews__title">
          {t("reviews.title")}
        </Reveal>
        <div className="reviews__gallery">
          {REVIEW_DATA.map((review, i) => (
            <Reveal
              as="div"
              className="reviews__photo"
              key={i}
              delay={i * 100}
              onClick={() => setActiveImage(review.img)}
            >
              <img src={review.img} alt={review.name} />

              {/* Оверлей с текстом при наведении */}
              <div className="reviews__overlay">
                <h4>{review.name}</h4>
                <div className="reviews__stars">
                  {Array.from({ length: review.stars }).map((_, s) => (
                    <span key={s}>★</span>
                  ))}
                </div>
                <p>{review.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="review-lightbox" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Review" />
        </div>
      )}
    </section>
  );
}
