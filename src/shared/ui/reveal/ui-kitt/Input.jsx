import "./ui-kit.css";

export default function Input({
  placeholder,
  error,
  disabled,
  type = "text",
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input-field ${error ? "input-field--error" : ""}`}
    />
  );
}
