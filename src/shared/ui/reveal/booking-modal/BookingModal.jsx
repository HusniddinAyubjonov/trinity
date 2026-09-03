import { useState } from "react";
import "./BookingModal.css";

export default function BookingModal({ car, onClose }) {
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

        <h3 className="modal-title">Бронирование: {car?.name}</h3>

        {/* ШАГ 1: Даты */}
        {step === 1 && (
          <div className="modal-step">
            <p className="step-label">Шаг 1 из 3: Даты аренды</p>
            <label>Начало аренды</label>
            <input
              className="input-field"
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={update}
            />

            <label>Конец аренды</label>
            <input
              className="input-field"
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={update}
            />

            <div className="modal-actions">
              <button className="btn-primary" onClick={nextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 2: Контакты */}
        {step === 2 && (
          <div className="modal-step">
            <p className="step-label">Шаг 2 из 3: Контактные данные</p>
            <input
              className="input-field"
              type="text"
              placeholder="Ваше имя"
              name="name"
              value={form.name}
              onChange={update}
              required
            />
            <input
              className="input-field"
              type="tel"
              placeholder="+7 (999) 999-99-99"
              name="phone"
              value={form.phone}
              onChange={update}
              required
            />
            <input
              className="input-field"
              type="email"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={update}
            />

            <div className="modal-actions">
              <button className="btn-secondary" onClick={prevStep}>
                Назад
              </button>
              <button className="btn-primary" onClick={nextStep}>
                Далее
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 3: Документы и подача */}
        {step === 3 && (
          <div className="modal-step">
            <p className="step-label">Шаг 3 из 3: Документы и подача</p>
            <input
              className="input-field"
              type="text"
              placeholder="Номер водительского удостоверения"
              name="license"
              value={form.license}
              onChange={update}
            />

            <label>Способ получения авто:</label>
            <div className="delivery-options">
              <button
                className={`btn-secondary ${form.delivery === "pickup" ? "is-active" : ""}`}
                onClick={() => setForm({ ...form, delivery: "pickup" })}
              >
                Самовывоз
              </button>
              <button
                className={`btn-secondary ${form.delivery === "delivery" ? "is-active" : ""}`}
                onClick={() => setForm({ ...form, delivery: "delivery" })}
              >
                Подача в Дубае 24/7
              </button>
            </div>

            <div className="modal-actions">
              <button className="btn-secondary" onClick={prevStep}>
                Назад
              </button>
              <button className="btn-primary" onClick={() => setStep(4)}>
                Проверить данные
              </button>
            </div>
          </div>
        )}

        {/* ШАГ 4: Подтверждение */}
        {step === 4 && (
          <div className="modal-step modal-success">
            <h4>Заявка принята!</h4>
            <p>Мы получили ваши данные и свяжемся с вами в течение 15 минут.</p>
            <div className="modal-summary">
              <span>Авто: {car?.name}</span>
              <span>
                Даты: {form.startDate} — {form.endDate}
              </span>
              <span>Клиент: {form.name}</span>
              <span>
                Тип: {form.delivery === "pickup" ? "Самовывоз" : "Подача"}
              </span>
            </div>
            <button className="btn-primary" onClick={onClose}>
              Отлично, закрыть
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
