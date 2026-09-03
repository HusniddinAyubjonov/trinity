import { useState } from "react";
import { useTranslation } from "react-i18next";
import { CarListItem } from "../../../entities/car";
import { Reveal } from "../../../shared/ui/reveal";
import searchIcon from "../../../shared/assets/svg/search.svg";
import arrow from "../../../shared/assets/svg/arrow.svg";
import "./popular-car.css";

const CARS_DATA = [
  {
    brand: "Lamborghini",
    model: "Huracan EVO",
    name: "Lamborghini Huracan EVO",
    img: "/src/shared/assets/img/car_lambo_urus.png",
    price: "2 400$",
    tag: "mostPopular",
  },
  {
    brand: "Ferrari",
    model: "Roma",
    name: "Ferrari Roma",
    img: "/src/shared/assets/img/car_ferrari_roma.png",
    price: "1 800$",
    tag: "newCar",
  },
  {
    brand: "Rolls-Royce",
    model: "Ghost",
    name: "Rolls-Royce Ghost",
    img: "/src/shared/assets/img/car_rolls_ghost.png",
    price: "3 200$",
    tag: "specialOffer",
  },
  {
    brand: "Porsche",
    model: "911 Turbo S",
    name: "Porsche 911 Turbo S",
    img: "/src/shared/assets/img/car_porsche_911.png",
    price: "2 100$",
    tag: "daily",
  },
  {
    brand: "Bentley",
    model: "Continental GT",
    name: "Bentley Continental",
    img: "/src/shared/assets/img/car_rolls_ghost.png",
    price: "2 800$",
    tag: "mostPopular",
  },
  {
    brand: "Audi",
    model: "R8 V10",
    name: "Audi R8",
    img: "/src/shared/assets/img/car_lambo_urus.png",
    price: "1 700$",
    tag: "specialOffer",
  },
];

const TABS = ["all", "specialOffer", "newCar", "mostPopular", "daily"];

export default function PopularCar() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [cars, setCars] = useState(CARS_DATA);
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "all") setCars(CARS_DATA);
    else setCars(CARS_DATA.filter((c) => c.tag === tab));
    setActiveCarIndex(0);
  };

  const activeCar = cars[activeCarIndex];

  return (
    <section className="popular" id="cars">
      <div className="popular__grid container">
        <Reveal as="div" className="popular__photo">
          {activeCar && (
            <>
              <img
                src={activeCar.img}
                alt={activeCar.name}
                key={activeCar.name}
                className="popular__photo-img"
              />
              <div className="popular__photo-caption">
                <h2>{t("popular.rent", { name: activeCar.name })}</h2>
                <div className="popular__price">
                  <span className="popular__price-value">
                    {activeCar.price}
                  </span>
                  <span className="popular__price-note">
                    {t("popular.rentFromAed")}
                    <br />
                    {t("popular.perDay")}
                  </span>
                </div>
              </div>
            </>
          )}
        </Reveal>

        <Reveal as="div" className="popular__side" delay={120}>
          <h2 className="popular__heading">{t("popular.heading")}</h2>
          <div className="popular__search">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder={t("popular.searchPlaceholder")} />
          </div>

          <div className="popular__list-row">
            <div className="popular__nav">
              <button
                onClick={() =>
                  setActiveCarIndex(
                    (prev) => (prev - 1 + cars.length) % cars.length,
                  )
                }
              >
                <img
                  src={arrow}
                  alt=""
                  className="popular__nav-icon popular__nav-icon--up"
                />
              </button>
              <button
                onClick={() =>
                  setActiveCarIndex((prev) => (prev + 1) % cars.length)
                }
              >
                <img
                  src={arrow}
                  alt=""
                  className="popular__nav-icon popular__nav-icon--down"
                />
              </button>
            </div>

            <ul className="popular__list">
              {cars.map((c, i) => (
                <CarListItem
                  key={c.brand}
                  brand={c.brand}
                  model={c.model}
                  active={i === activeCarIndex}
                  onClick={() => setActiveCarIndex(i)}
                />
              ))}
            </ul>
          </div>

          {/* Кнопка теперь скроллит к каталогу (#catalog) */}
          <button
            className="btn-primary popular__view-all"
            onClick={() =>
              document
                .getElementById("catalog")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t("popular.viewAll")}
          </button>
        </Reveal>
      </div>

      <div className="popular__tabs container">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={tab === activeTab ? "is-active" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {t(`popular.tabs.${tab}`)}
          </button>
        ))}
      </div>
    </section>
  );
}
