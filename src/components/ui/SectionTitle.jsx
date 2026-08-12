function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  dark = false,
  className = '',
}) {
  const alignment = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`${alignment} ${className}`}>
      <p
        className={`mb-4 text-xs font-bold tracking-[.13em] ${
          dark ? 'text-yellow-400' : 'text-yellow-800'
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`font-display text-4xl font-bold tracking-[-.05em] sm:text-5xl ${
          dark ? 'text-white' : 'text-zinc-950'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p className={`mt-4 ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle