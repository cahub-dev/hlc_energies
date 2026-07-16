import type { Locale, ReferenceProject } from '@/content/types'

export default function ProjectCard({
  project,
  locale,
}: {
  project: ReferenceProject
  locale: Locale
}) {
  const facts: { label: string; value: string }[] = []
  if (project.executionPeriod) {
    facts.push({
      label: locale === 'pt' ? 'Execução' : 'Execution',
      value: project.executionPeriod,
    })
  }
  if (project.capacity) {
    facts.push({
      label: locale === 'pt' ? 'Escala' : 'Scale',
      value: project.capacity[locale],
    })
  }
  if (project.location) {
    facts.push({
      label: locale === 'pt' ? 'Localização' : 'Location',
      value: project.location[locale],
    })
  }

  return (
    <article className="group relative flex flex-col h-[400px] lg:h-[450px] w-full rounded-2xl overflow-hidden bg-gray-900 cursor-default">
      {/* Background Image */}
      {project.image && (
        <img 
          src={project.image} 
          alt={project.name[locale]} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
      )}

      {/* Base Gradient (Always visible to ensure title readability) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover Overlay (Dark brand color fading in on hover) */}
      <div className="absolute inset-0 bg-hlc-blue-900/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* CC1 Badge */}
      <span className="absolute top-6 left-6 z-10 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[0.75rem] font-bold tracking-wider text-hlc-blue-800 shadow-sm transition-all duration-500 group-hover:bg-white group-hover:text-hlc-blue-900">
        CC1
      </span>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end z-20">
        {/* Title */}
        <h3 className="text-xl lg:text-[1.35rem] font-medium text-white leading-snug tracking-tight mb-0">
          {project.name[locale]}
        </h3>

        {/* Expandable Details */}
        <div className="grid overflow-hidden transition-all duration-500 ease-in-out grid-rows-[0fr] group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
          <div className="min-h-0 flex flex-col">
            <div className="mt-4 pt-4 border-t border-white/20">
              {facts.length > 0 && (
                <dl className="flex flex-col gap-2.5">
                  {facts.map((f) => (
                    <div key={f.label} className="grid grid-cols-[auto_1fr] gap-3 items-start">
                      <dt className="text-[0.9rem] font-medium text-white/70 leading-relaxed whitespace-nowrap">
                        {f.label}:
                      </dt>
                      <dd className="text-[0.9rem] text-white/90 font-light leading-relaxed m-0">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
