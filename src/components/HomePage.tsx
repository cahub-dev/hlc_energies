import { content } from '@/content/site'
import { referenceProjects } from '@/content/projects'
import ProjectsShowcase from './ProjectsShowcase'
import InteractiveAreas from './InteractiveAreas'
import CommitmentCarousel from './CommitmentCarousel'
import Reveal from './Reveal'
import ContactForm from './ContactForm'
import HeroSlideshow from './HeroSlideshow'
import type { Locale } from '@/content/types'

export default function HomePage({ locale }: { locale: Locale }) {
  const c = content[locale]

  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative min-h-screen flex items-end pb-24 text-white overflow-hidden bg-hlc-blue-900"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroSlideshow />
        </div>

        <div className="page-wrap relative z-10 w-full rise-in pt-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-hlc-gold-300 drop-shadow-sm">
              {c.hero.title}
            </p>
            <h1 className="text-4xl font-normal leading-[1.1] !text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
              {c.hero.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90 leading-relaxed drop-shadow-sm">
              {c.hero.body[0]}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={c.hero.primary.to}
                className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-hlc-blue-900 shadow-sm transition-colors hover:bg-white/90"
              >
                {c.hero.primary.label} <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href={c.hero.secondary.to}
                className="inline-flex items-center gap-2 rounded border border-white/60 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-hlc-blue-900"
              >
                {c.hero.secondary.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-16 md:py-20">
        <Reveal stagger className="page-wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900 mb-6">
              {c.about.heading}
            </h2>
            <div className="mb-8 space-y-4">
              {c.about.body.map((p, i) => (
                <p
                  key={i}
                  className="text-[var(--ink-muted)] text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center rounded bg-hlc-blue-800 px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-hlc-blue-900 transition-colors"
            >
              {c.about.label} &rarr;
            </a>
          </div>
          <div className="relative">
            {/* Branded navy panel (replaces stock photo per review §A3; a real
                HLC/CC1 photo can be dropped in here once the shoot is cleared). */}
            <div className="flex aspect-[4/3] lg:aspect-[1.4/1] w-full flex-col items-center justify-center gap-4 rounded-xl bg-hlc-blue-800 p-8 text-center shadow-sm">
              <img
                src="/logo-hlc-white.svg"
                alt="HLC"
                className="h-12 w-auto"
                width={190}
                height={54}
              />
              <p className="text-sm font-medium uppercase tracking-widest text-white/80">
                {c.footer.tagline}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Consortium HLC–CC1 */}
      <section id="consorcio" className="py-16 md:py-20 border-t border-gray-100">
        <div className="page-wrap">
          <Reveal className="max-w-3xl mb-12">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.consortium.label}
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl text-gray-900">
              {c.consortium.heading}
            </h2>
          </Reveal>

          <Reveal stagger className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Consórcio */}
            <div className="space-y-4 text-[var(--ink-muted)] text-lg leading-relaxed">
              {c.consortium.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Capacidade Técnica + credenciais da CC1 */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                {locale === 'pt' ? 'Capacidade Técnica' : 'Technical Capacity'}
              </h3>
              <p className="text-[var(--ink-muted)] text-lg leading-relaxed">
                {c.projects.intro}
              </p>
              <div className="mt-6 rounded-xl bg-hlc-blue-50 p-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-hlc-blue-900">
                  {c.consortium.credentials.heading}
                </h4>
                <ul className="space-y-2">
                  {c.consortium.credentials.items.map((item, i) => (
                    <li key={i} className="flex gap-2 leading-relaxed text-[var(--ink-muted)]">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hlc-gold-500"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Role breakdown: HLC (local) vs CC1 (technical) */}
          <Reveal stagger className="mt-16 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-hlc-blue-700">
                {c.consortium.roles.localHeading}
              </h3>
              <p className="mt-1 mb-5 text-lg font-medium text-gray-900">
                {c.consortium.roles.localName}
              </p>
              <ul className="space-y-2.5">
                {c.consortium.roles.localItems.map((item, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed text-[var(--ink-muted)]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hlc-blue-700" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-hlc-gold-600">
                {c.consortium.roles.partnerHeading}
              </h3>
              <p className="mt-1 mb-5 text-lg font-medium text-gray-900">
                {c.consortium.roles.partnerName}
              </p>
              <ul className="space-y-2.5">
                {c.consortium.roles.partnerItems.map((item, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed text-[var(--ink-muted)]">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-hlc-gold-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Capacity transfer */}
          <div className="mt-16">
            <Reveal className="max-w-3xl mb-10">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                {c.consortium.transfer.heading}
              </h3>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                {c.consortium.transfer.intro}
              </p>
            </Reveal>
            <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {c.consortium.transfer.pillars.map((p, i) => (
                <div key={i} className="rounded-xl bg-gray-50 p-6">
                  <div className="mb-3 text-sm font-semibold text-hlc-gold-600">0{i + 1}</div>
                  <h4 className="mb-2 font-medium text-gray-900">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-[var(--ink-muted)]">{p.body}</p>
                </div>
              ))}
            </Reveal>
            <Reveal className="mt-6 rounded-xl bg-hlc-blue-800 p-6 text-white">
              <span className="font-medium text-hlc-gold-300">
                {c.consortium.transfer.note.title}
              </span>{' '}
              <span className="text-white/90">{c.consortium.transfer.note.body}</span>
            </Reveal>
          </div>

          {/* CC1 international partners */}
          <div className="mt-16">
            <Reveal className="max-w-3xl mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                {c.consortium.partners.heading}
              </h3>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                {c.consortium.partners.intro}
              </p>
            </Reveal>
            <Reveal className="flex flex-wrap items-center gap-3">
              <span className="mr-2 inline-flex items-baseline gap-2 rounded-lg bg-hlc-blue-50 px-4 py-2">
                <span className="text-2xl font-bold text-hlc-blue-900">
                  {c.consortium.partners.statValue}
                </span>
                <span className="text-sm text-hlc-blue-800">
                  {c.consortium.partners.statLabel}
                </span>
              </span>
              {c.consortium.partners.names.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700"
                >
                  {n}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Areas of activity */}
      <section id="areas" className="py-16 md:py-20 bg-gray-50">
        <div className="page-wrap">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.areas.label}
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-[2.5rem] text-gray-900 mb-6">
              {c.areas.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)]">
              {c.areas.intro}
            </p>
          </Reveal>

          <Reveal>
            <InteractiveAreas areas={c.areas} />
          </Reveal>
          
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-[var(--ink-muted)]">
              {c.areas.outro}
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section id="compromisso" className="py-16 md:py-20">
        <div className="page-wrap">
          <Reveal className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.commitment.label}
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold sm:text-4xl lg:text-[2.5rem] text-gray-900">
              {c.commitment.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)]">
              {c.commitment.intro}
            </p>
          </Reveal>
        </div>

        <Reveal>
          <CommitmentCarousel pillars={c.commitment.pillars} notes={c.commitment.notes} locale={locale} />
        </Reveal>
      </section>

      {/* Reference projects */}
      <section id="projectos" className="bg-gray-50 py-16 md:py-20 border-t border-gray-100">
        <div className="page-wrap">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.projects.label}
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-medium sm:text-4xl lg:text-[2.75rem] text-gray-900 leading-[1.2]">
              {c.projects.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)] font-light leading-relaxed">
              {c.projects.intro}
            </p>
          </Reveal>

          <ProjectsShowcase projects={referenceProjects} locale={locale} />

          {/* CC1 broader track record (beyond energy) */}
          <div className="mt-16 border-t border-gray-200 pt-12">
            <Reveal className="max-w-3xl mb-8">
              <h3 className="text-2xl font-medium text-gray-900 mb-3">
                {c.projects.record.heading}
              </h3>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                {c.projects.record.intro}
              </p>
            </Reveal>
            <Reveal>
              <ul className="divide-y divide-gray-200 border-y border-gray-200">
                {c.projects.record.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                  >
                    <span className="text-gray-900">{item.name}</span>
                    <span className="shrink-0 text-sm tabular-nums text-gray-500">
                      {item.period}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <p className="mt-6 text-sm italic text-gray-500">
              {locale === 'pt'
                ? 'Executado pela CC1, parceiro técnico do Consórcio.'
                : 'Executed by CC1, the Consortium technical partner.'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contactos" className="bg-white py-16 md:py-20">
        <div className="page-wrap">
          <Reveal stagger className="flex flex-col lg:flex-row gap-12 lg:gap-24">

            {/* Left Sidebar: Contact Information */}
            <div className="w-full lg:w-[35%] xl:w-1/3">
              <div className="bg-[#f5f5f5] rounded-xl p-8 lg:p-10 flex flex-col h-full shadow-sm">
                <h3 className="text-[1.35rem] font-medium text-gray-900 mb-8">{c.contact.infoTitle}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs text-gray-500 mb-1">{c.contact.emailLabel}</h4>
                    <p className="text-gray-900 text-sm font-medium">
                      <a href={`mailto:${c.contact.email}`} className="hover:text-hlc-blue-600 transition-colors">
                        {c.contact.email}
                      </a>
                    </p>
                  </div>

                  {c.contact.phone && (
                    <div className="pt-4">
                      <h4 className="text-xs text-gray-500 mb-1">{c.contact.phoneLabel}</h4>
                      <p className="text-gray-900 text-sm font-medium">
                        <a
                          href={`tel:${c.contact.phone.replace(/\s+/g, '')}`}
                          className="hover:text-hlc-blue-600 transition-colors"
                        >
                          {c.contact.phone}
                        </a>
                      </p>
                    </div>
                  )}

                  <div className="pt-4">
                    <h4 className="text-xs text-gray-500 mb-1">{c.contact.addressLabel}</h4>
                    <p className="text-gray-900 text-sm leading-relaxed max-w-[280px]">
                      {c.contact.address}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-1">
                    {c.contact.identity.map((line, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${i === 0 ? 'font-medium text-gray-900' : 'text-gray-600'}`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-12">
                  <a
                    href={`mailto:${c.contact.email}`}
                    className="bg-hlc-blue-800 hover:bg-hlc-blue-900 text-white px-6 py-2.5 rounded-md text-[0.85rem] font-medium transition-colors inline-flex items-center gap-2"
                  >
                    {c.contact.cta} <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content: Contact Form */}
            <div className="w-full lg:w-[65%] xl:w-2/3 lg:pt-6">
              <div className="mb-10">
                <span className="text-xs font-medium text-gray-500 mb-4 block uppercase tracking-wider">
                  &bull; {c.contact.label}
                </span>
                <h2 className="text-4xl lg:text-[3rem] font-medium text-gray-900 leading-[1.1] mb-3">
                  {c.contact.form.heading}{' '}
                  <span className="text-hlc-gold-600">{c.contact.form.headingAccent}</span>
                </h2>
                <p className="text-[0.95rem] text-gray-600">
                  {c.contact.form.intro}
                </p>
              </div>

              <ContactForm form={c.contact.form} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
