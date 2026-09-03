import { useState } from 'react'
import './subscribe-form.css'

export default function SubscribeForm({
  placeholder = 'Your email',
  buttonText = 'Receive',
  variant = 'default',
}) {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={`subscribe-form subscribe-form--${variant}`} onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{buttonText}</button>
    </form>
  )
}
