import './car-list-item.css'

export default function CarListItem({ brand, model, active, onClick }) {
  return (
    <li className="car-list-item">
      <button className={active ? 'is-active' : ''} onClick={onClick}>
        <strong>{brand}</strong>
        <span>{model}</span>
      </button>
    </li>
  )
}
