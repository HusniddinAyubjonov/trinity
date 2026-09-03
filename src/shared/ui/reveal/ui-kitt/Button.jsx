import "./ui-kit.css";

export default function Button({
  children,
  variant = "primary",
  onClick,
  disabled,
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
