function Button({
  href,
  onClick,
  children,
  dark = false,
  className = '',
  type = 'button',
}) {
  const isExternal = href?.startsWith('https')

  const styles = `
    inline-flex items-center justify-center gap-3 rounded-md px-5 py-3.5
    text-sm font-bold transition duration-200 hover:-translate-y-0.5
    ${dark
      ? 'bg-zinc-950 text-white hover:bg-zinc-800'
      : 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300'}
    ${className}
  `

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
        className={styles}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  )
}

export default Button