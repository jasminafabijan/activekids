import emailjs from '@emailjs/browser'

/** Matches the EmailJS template: {{name}}, {{email}}, {{topic}}, {{message}} */
export type ContactFormPayload = {
  name: string
  email: string
  topic: string
  message: string
}

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export const isEmailJsConfigured = () =>
  Boolean(serviceId && templateId && publicKey)

export const sendContactMessage = (payload: ContactFormPayload) => {
  if (!serviceId || !templateId || !publicKey) {
    return Promise.reject(new Error('EmailJS is not configured'))
  }

  return emailjs.send(serviceId, templateId, payload, { publicKey })
}
