'use client'

import { useState } from 'react'
import type { ContactForm as ContactFormContent } from '@/content/types'

type Status = 'idle' | 'sending' | 'success' | 'error'

const inputClass =
  'w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400'

export default function ContactForm({ form }: { form: ContactFormContent }) {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const formEl = e.currentTarget
    const fd = new FormData(formEl)
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      company: fd.get('company'),
      message: fd.get('message'),
      consent: fd.get('consent') === 'on',
      website: fd.get('website'), // honeypot
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('request failed')
      formEl.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="bg-[#fafafa] rounded-xl p-8 lg:p-10" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
            {form.name}
          </label>
          <input type="text" id="name" name="name" required placeholder={form.namePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            {form.email}
          </label>
          <input type="email" id="email" name="email" required placeholder={form.emailPlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
            {form.phone}
          </label>
          <input type="tel" id="phone" name="phone" placeholder={form.phonePlaceholder} className={inputClass} />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
            {form.company}
          </label>
          <input type="text" id="company" name="company" placeholder={form.companyPlaceholder} className={inputClass} />
        </div>
      </div>

      <div className="mb-8">
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          {form.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={3}
          placeholder={form.messagePlaceholder}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Honeypot — hidden from users, catches bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="mb-8 flex items-start gap-3 text-sm text-gray-600">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-hlc-blue-800" />
        <span>{form.consent}</span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-hlc-blue-800 hover:bg-hlc-blue-900 text-white px-8 py-2.5 rounded-md text-[0.85rem] font-medium transition-colors inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? form.sending : form.submit}
          {status !== 'sending' && <span aria-hidden="true">&rarr;</span>}
        </button>

        <p
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === 'success'
              ? 'text-hlc-blue-800'
              : status === 'error'
                ? 'text-red-600'
                : 'sr-only'
          }`}
        >
          {status === 'success' ? form.success : status === 'error' ? form.error : ''}
        </p>
      </div>

      <p className="mt-6 text-xs leading-relaxed text-gray-500">{form.privacy}</p>
    </form>
  )
}
