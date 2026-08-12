function Button({ href, children, dark = false, className = '' }) {
  const isExternal = href.startsWith('https')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`
        inline-flex items-center justify-center gap-3 rounded-md px-5 py-3.5
        text-sm font-bold transition duration-200 hover:-translate-y-0.5
        ${dark
          ? 'bg-zinc-950 text-white hover:bg-zinc-800'
          : 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300'}
        ${className}
      `}
    >
      {children}
    </a>
  )
}

export default Button