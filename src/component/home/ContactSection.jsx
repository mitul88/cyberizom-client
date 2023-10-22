import React from 'react'
import ContactForm from './ContactForm'

const ContactSection = () => {
  return (
    <section className='bg-red-400 text-white w-full px-10 py-20 lg:px-48'>
        <h1 className="text-4xl font-bold text-center pb-5">Speak with a Security Expert</h1>
        <h3 className="text-xl font-semibold text-center pb-10">We can help you detect and resolve vulnerabilities before they are exploited.</h3>
        <ContactForm />
    </section>
  )
}

export default ContactSection