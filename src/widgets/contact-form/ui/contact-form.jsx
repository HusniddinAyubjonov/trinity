import { useTranslation } from 'react-i18next'
import { ContactRequestForm } from '../../../features/contact-request'
import { Reveal } from '../../../shared/ui/reveal'
import contactBg from '../../../shared/assets/img/contact_bg.png'
import './contact-form.css'

export default function ContactForm() {
  const { t } = useTranslation()

  return (
    <section className="contact" id="contacts">
      <div className="contact__grid container">
        <Reveal as="div" className="contact__photo">
          <img src={contactBg} alt="" />
        </Reveal>

        <Reveal as="div" className="contact__box" delay={120}>
          <h2>{t('contact.title')}</h2>
          <ContactRequestForm />
        </Reveal>
      </div>
    </section>
  )
}
