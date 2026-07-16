import type { Locale, ReferenceProject } from '@/content/types'

export default function ProjectCard({
  project,
  locale,
}: {
  project: ReferenceProject
  locale: Locale
}) {
  const facts: { label: string; value: string }[] = []
  if (project.location) {
    facts.push({
      label: locale === 'pt' ? 'Localização' : 'Location',
      value: project.location[locale],
    })
  }
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

  return (
    <article className="card card--hover flex flex-col p-6">
      <span className="mb-3 self-start rounded-full bg-hlc-blue-800 px-2.5 py-1 text-[0.7rem] font-bold tracking-wider text-white">
        CC1
      </span>
      <h3 className="mb-3 text-base font-semibold text-hlc-blue-800">
        {project.name[locale]}
      </h3>
      {facts.length > 0 && (
        <dl className="mb-auto grid gap-1.5">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col">
              <dt className="text-[0.72rem] uppercase tracking-wider text-[var(--ink-muted)]">
                {f.label}
              </dt>
              <dd className="m-0 text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>
      )}
      {/* Attribution is mandatory and always visible — never remove. */}
      <p className="attribution">
        {project.attribution[locale]}
        {project.sourceUrl ? (
          <>
            {' '}
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.sourceLabel[locale]}
            </a>
          </>
        ) : (
          <> — {project.sourceLabel[locale]}</>
        )}
      </p>
    </article>
  )
}
