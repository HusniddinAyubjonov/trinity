import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./BookingModal.css";

export default function BookingModal({ car, onClose }) {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    name: "",
    phone: "",
    email: "",
    license: "",
    delivery: "pickup",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        {/* Прогресс-бар */}
        <div className="modal-progress">
          <span className={`progress-dot ${step >= 1 ? "active" : ""}`}></span>
          <span className={`progress-line ${step >= 2 ? "active" : ""}`}></span>
          <span className={`progress-dot ${step >= 2 ? "active" : ""}`}></span>
          <span className={`progress-line ${step >= 3 ? "active" : ""}`}></span>
          <span className={`progress-dot ${step >= 3 ? "active" : ""}`}></span>
        </div>

        <h3 className="modal-title">{t("booking.title", { name: car?.name })}</h3>

        {/* ШАГ 1: Даты */}
        {step === 1 && (
          <div className="modal-step">
            <p className="step-label">{t("booking.step1Of3")}</p>
            <label>{t("booking.startDate")}</label>
            <input
              className="input-field"
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={update}
            />

            <label>{t("booking.endDate")}</label>
            <input
              className="input-field"
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={update}
            />

            <div className="modal-actions">
              <button className="btn-primary" onClick={nextStep}>
                {t("booking.next")}
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 2: Контакты */}
        {step === 2 && (
          <div className="modal-step">
            <p className="step-label">{t("booking.step2Of3")}</p>
            <input
              className="input-field"
              type="text"
              placeholder={t("booking.yourName")}
              name="name"
              value={form.name}
              onChange={update}
              required
            />
            <input
              className="input-field"
              type="tel"
              placeholder={t("booking.phonePlaceholder")}
              name="phone"
              value={form.phone}
              onChange={update}
              required
            />
            <input
              className="input-field"
              type="email"
              placeholder={t("booking.emailPlaceholder")}
              name="email"
              value={form.email}
              onChange={update}
            />

            <div className="modal-actions">
              <button className="btn-secondary" onClick={prevStep}>
                {t("booking.back")}
              </button>
              <button className="btn-primary" onClick={nextStep}>
                {t("booking.next")}
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 3: Документы и подача */}
        {step === 3 && (
          <div className="modal-step">
            <p className="step-label">{t("booking.step3Of3")}</p>
            <input
              className="input-field"
              type="text"
              placeholder={t("booking.licensePlaceholder")}
              name="license"
              value={form.license}
              onChange={update}
            />

            <label>{t("booking.deliveryMethod")}</label>
            <div className="delivery-options">
              <button
                className={`btn-secondary ${form.delivery === "pickup" ? "is-active" : ""}`}
                onClick={() => setForm({ ...form, delivery: "pickup" })}
              >
                {t("booking.pickup")}
              </button>
              <button
                className={`btn-secondary ${form.delivery === "delivery" ? "is-active" : ""}`}
                onClick={() => setForm({ ...form, delivery: "delivery" })}
              >
                {t("booking.delivery")}
              </button>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={prevStep}>
                {t("booking.back")}
              </button>
              <button className="btn-primary" onClick={() => setStep(4)}>
                {t("booking.reviewData")}
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 4: Подтверждение */}
        {step === 4 && (
          <div className="modal-step modal-success">
            <h4>{t("booking.successTitle")}</h4>
            <p>{t("booking.successText")}</p>
            <div className="modal-summary">
              <span>
                {t("booking.car")}: {car?.name}
              </span>
              <span>
                {t("booking.dates")}: {form.startDate} — {form.endDate}
              </span>
              <span>
                {t("booking.client")}: {form.name}
              </span>
              <span>
                {t("booking.type")}:{" "}
                {form.delivery === "pickup" ? t("booking.pickup") : t("booking.delivery")}
              </span>
            </div>
            <button className="btn-primary" onClick={onClose}>
              {t("booking.greatClose")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
