import type { VercelRequest, VercelResponse } from '@vercel/node'
import { Resend } from 'resend'

const MAX = { name: 120, email: 160, phone: 40, company: 160, message: 5000 }

const isEmail = (v: unknown): v is string =>
  typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) && v.length <= MAX.email

const clean = (v: unknown, max: number): string =>
  typeof v === 'string' ? v.trim().slice(0, max) : ''

// Escape user content before placing it in the HTML email body.
const esc = (s: string): string =>
  s.replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string
  ))

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'method_not_allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    return res.status(500).json({ error: 'not_configured' })
  }

  const body = (req.body ?? {}) as Record<string, unknown>

  // Honeypot: real users never fill this hidden field — accept silently.
  if (clean(body.website, 200)) return res.status(200).json({ ok: true })

  const name = clean(body.name, MAX.name)
  const email = body.email
  const phone = clean(body.phone, MAX.phone)
  const company = clean(body.company, MAX.company)
  const message = clean(body.message, MAX.message)
  const consent = body.consent === true || body.consent === 'true'

  if (!name || !message || !isEmail(email)) {
    return res.status(400).json({ error: 'invalid' })
  }
  if (!consent) return res.status(400).json({ error: 'consent_required' })

  const lines = [
    `Nome: ${name}`,
    `E-mail: ${email}`,
    phone && `Telefone: ${phone}`,
    company && `Empresa: ${company}`,
    '',
    message,
  ].filter(Boolean) as string[]

  const html = `
    <h2>Novo contacto — hlcenergies.com</h2>
    <p><strong>Nome:</strong> ${esc(name)}</p>
    <p><strong>E-mail:</strong> ${esc(email)}</p>
    ${phone ? `<p><strong>Telefone:</strong> ${esc(phone)}</p>` : ''}
    ${company ? `<p><strong>Empresa:</strong> ${esc(company)}</p>` : ''}
    <p><strong>Mensagem:</strong></p>
    <p style="white-space:pre-wrap">${esc(message)}</p>
  `

  try {
    const resend = new Resend(apiKey)
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Novo contacto — ${name}`,
      text: lines.join('\n'),
      html,
    })
    if (error) return res.status(502).json({ error: 'send_failed' })
    return res.status(200).json({ ok: true })
  } catch {
    return res.status(502).json({ error: 'send_failed' })
  }
}
