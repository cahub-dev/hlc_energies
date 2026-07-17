import { content } from '@/content/site'
import { referenceProjects } from '@/content/projects'
import ProjectCard from './ProjectCard'
import InteractiveAreas from './InteractiveAreas'
import CommitmentCarousel from './CommitmentCarousel'
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
          <iframe
            src="https://www.youtube.com/embed/_-fTGrX1888?autoplay=1&mute=1&loop=1&playlist=_-fTGrX1888&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            title={locale === 'pt' ? 'Vídeo de fundo' : 'Background video'}
            tabIndex={-1}
          />
          <div className="absolute inset-0 bg-black/40" />
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
      <section id="sobre" className="py-24">
        <div className="page-wrap grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
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
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
              alt={c.hero.tagline}
              className="w-full h-auto rounded-xl object-cover shadow-sm aspect-[4/3] lg:aspect-[1.4/1]"
            />
          </div>
        </div>

        {/* Expanded About: Consortium, Technical Capacity & Financials */}
        <div className="page-wrap mt-24 pt-16 border-t border-gray-100">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 mb-16">
            {/* Consórcio */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                {c.consortium.heading}
              </h3>
              <div className="space-y-4 text-[var(--ink-muted)] leading-relaxed">
                {c.consortium.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Capacidade Técnica */}
            <div className="flex flex-col">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">
                {locale === 'pt' ? 'Capacidade Técnica' : 'Technical Capacity'}
              </h3>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                {c.projects.intro}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Areas of interest */}
      <section id="areas" className="py-24 bg-gray-50">
        <div className="page-wrap">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.areas.label}
            </span>
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-[2.5rem] text-gray-900 mb-6">
              {c.areas.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)]">
              {c.areas.intro}
            </p>
          </div>
          
          <InteractiveAreas areas={c.areas} />
          
          <div className="text-center mt-12 max-w-3xl mx-auto">
            <p className="text-[var(--ink-muted)]">
              {c.areas.outro}
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section id="compromisso" className="py-24">
        <div className="page-wrap">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.commitment.label}
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-bold sm:text-4xl lg:text-[2.5rem] text-gray-900">
              {c.commitment.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)]">
              {c.commitment.intro}
            </p>
          </div>
        </div>
        
        <CommitmentCarousel pillars={c.commitment.pillars} notes={c.commitment.notes} locale={locale} />
      </section>

      {/* Reference projects */}
      <section id="projectos" className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="page-wrap">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-medium text-gray-500 mb-4 block">
              &bull; {c.projects.label}
            </span>
            <h2 className="mb-6 mt-2 text-3xl font-medium sm:text-4xl lg:text-[2.75rem] text-gray-900 leading-[1.2]">
              {c.projects.heading}
            </h2>
            <p className="text-lg text-[var(--ink-muted)] font-light leading-relaxed">
              {c.projects.intro}
            </p>
          </div>
          
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {referenceProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contactos" className="bg-white py-24">
        <div className="page-wrap">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
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

              <form className="bg-[#fafafa] rounded-xl p-8 lg:p-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">{c.contact.form.name}</label>
                    <input type="text" id="name" placeholder={c.contact.form.namePlaceholder} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">{c.contact.form.email}</label>
                    <input type="email" id="email" placeholder={c.contact.form.emailPlaceholder} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">{c.contact.form.phone}</label>
                    <input type="tel" id="phone" placeholder={c.contact.form.phonePlaceholder} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">{c.contact.form.company}</label>
                    <input type="text" id="company" placeholder={c.contact.form.companyPlaceholder} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400" />
                  </div>
                </div>

                <div className="mb-10">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">{c.contact.form.message}</label>
                  <textarea id="message" rows={1} placeholder={c.contact.form.messagePlaceholder} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-hlc-blue-700 transition-colors bg-transparent text-sm placeholder:text-gray-400 resize-none h-[40px]"></textarea>
                </div>

                <button type="submit" className="bg-hlc-blue-800 hover:bg-hlc-blue-900 text-white px-8 py-2.5 rounded-md text-[0.85rem] font-medium transition-colors inline-flex items-center gap-2">
                  {c.contact.form.submit} <span aria-hidden="true">&rarr;</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
