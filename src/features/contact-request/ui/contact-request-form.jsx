import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './contact-request-form.css'

export default function ContactRequestForm() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="contact-request-form">
      <input name="name" value={form.name} onChange={handleChange} type="text" placeholder={t('contact.name')} required />
      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder={t('contact.email')} required />
      <input
        name="phone"
        value={form.phone}
        onChange={handleChange}
        type="tel"
        placeholder={t('contact.phone')}
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder={t('contact.message')}
        rows={4}
      />
      <button type="submit">{t('contact.send')}</button>
    </form>
  )
}
