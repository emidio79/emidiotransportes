function Badge({ children }) {
  return (
    <div className="flex shrink-0 items-center gap-1 rounded border border-stone-200 px-2 py-1.5 text-[10px] font-semibold text-zinc-500">
      <span className="font-bold text-lime-700">✓</span>
      {children}
    </div>
  )
}

export default Badge