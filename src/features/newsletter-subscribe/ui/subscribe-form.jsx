import { useState } from "react";
import "./subscribe-form.css";

export default function SubscribeForm({
  placeholder = "Your email",
  buttonText = "Receive",
  variant = "default",
}) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    alert("Подписка оформлена!");
    setEmail("");
  };

  return (
    <form
      className={`subscribe-form subscribe-form--${variant}`}
      onSubmit={handleSubmit}
    >
      <div style={{ flex: 1 }}>
        <input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && (
          <span
            style={{
              color: "#ff4444",
              fontSize: 12,
              display: "block",
              marginTop: 4,
            }}
          >
            {error}
          </span>
        )}
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  );
}
