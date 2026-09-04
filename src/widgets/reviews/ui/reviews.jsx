import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Reveal } from "../../../shared/ui/reveal";
import review1 from "../../../shared/assets/img/review_1.JPG";
import review2 from "../../../shared/assets/img/review_2.PNG";
import review3 from "../../../shared/assets/img/review_3.png";
import review4 from "../../../shared/assets/img/review_4.png";
import "./reviews.css";

const IMAGES = [review1, review2, review3, review4];
const STARS = [5, 5, 4, 5];

export default function Reviews() {
  const { t } = useTranslation();
  const [activeImage, setActiveImage] = useState(null);
  const items = t("reviews.items", { returnObjects: true });

  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <Reveal as="h2" className="reviews__title">
          {t("reviews.title")}
        </Reveal>
        <div className="reviews__gallery">
          {items.map((review, i) => (
            <Reveal
              as="div"
              className="reviews__photo"
              key={i}
              delay={i * 100}
              onClick={() => setActiveImage(IMAGES[i])}
            >
              <img src={IMAGES[i]} alt={review.name} />

              {/* Оверлей с текстом при наведении */}
              <div className="reviews__overlay">
                <h4>{review.name}</h4>
                <div className="reviews__stars">
                  {Array.from({ length: STARS[i] }).map((_, s) => (
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
