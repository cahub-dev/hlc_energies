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
            title="Hero Background Video"
            tabIndex={-1}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="page-wrap relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12 rise-in pt-32">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-normal leading-[1.1] !text-white sm:text-6xl lg:text-7xl drop-shadow-sm">
              Experience <br /> Delivers Solutions
            </h1>
          </div>

          <div className="flex gap-8 md:gap-12">
            <div>
              <p className="text-4xl sm:text-5xl font-normal text-white drop-shadow-sm">47+</p>
              <p className="mt-2 text-sm text-white">Years of experience</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-normal text-white drop-shadow-sm">120+</p>
              <p className="mt-2 text-sm text-white">Experts</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-normal text-white drop-shadow-sm">138</p>
              <p className="mt-2 text-sm text-white">Completed project</p>
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
              className="inline-flex items-center justify-center rounded bg-[#7a729e] px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#6c658a] transition-colors"
            >
              {c.about.label} &rarr;
            </a>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
              alt="Evostel industrial automation"
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
      <section id="projectos" className="bg-hlc-blue-50 py-24">
        <div className="page-wrap">
          <span className="section-label">{c.projects.label}</span>
          <h2 className="mb-6 mt-2 text-3xl font-bold sm:text-4xl">
            {c.projects.heading}
          </h2>
          <p className="max-w-[58ch] text-lg text-[var(--ink-muted)]">
            {c.projects.intro}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
      <section
        id="contactos"
        className="bg-hlc-blue-800 py-24 text-hlc-blue-100"
      >
        <div className="page-wrap">
          <span className="section-label text-hlc-gold-300">
            {c.contact.label}
          </span>
          <h2 className="mb-6 mt-2 text-3xl font-bold text-white sm:text-4xl">
            {c.contact.heading}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {c.contact.addressLabel}
              </h3>
              <p className="mt-1 max-w-[42ch]">{c.contact.address}</p>
              <h3 className="mt-6 text-lg font-semibold text-white">
                {c.contact.emailLabel}
              </h3>
              <p className="mt-1">
                <a
                  href={`mailto:${c.contact.email}`}
                  className="text-hlc-gold-300 underline"
                >
                  {c.contact.email}
                </a>
              </p>
            </div>
            <div className="space-y-1">
              {c.contact.identity.map((line, i) => (
                <p
                  key={i}
                  className={i === 0 ? 'font-bold text-white' : undefined}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
