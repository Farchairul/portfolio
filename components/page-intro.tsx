export function PageIntro({
  label,
  title,
  accent,
  description,
}: {
  label: string
  title: string
  accent?: string
  description: string
}) {
  return (
    <section className="neo-hero">
      <span className="neo-label">{label}</span>
      <h1>
        {title} {accent ? <em>{accent}</em> : null}
      </h1>
      <p className="hero-lede">{description}</p>
      <div className="hero-rule" />
    </section>
  )
}
