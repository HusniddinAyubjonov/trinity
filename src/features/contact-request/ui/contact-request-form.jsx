import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./contact-request-form.css";

export default function ContactRequestForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-request-form">
      <input
        className="input-field"
        name="name"
        placeholder={t("contact.name")}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        className="input-field"
        name="email"
        type="email"
        placeholder={t("contact.email")}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="input-field"
        name="phone"
        type="tel"
        placeholder={t("contact.phone")}
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />
      <textarea
        className="input-field"
        name="message"
        placeholder={t("contact.message")}
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {status === "success" && (
        <p style={{ color: "var(--accent)" }}>{t("contact.successMessage")}</p>
      )}
      {status === "error" && (
        <p style={{ color: "red" }}>{t("contact.errorMessage")}</p>
      )}

      <button type="submit" className="btn-primary">
        {t("contact.send")}
      </button>
    </form>
  );
}
