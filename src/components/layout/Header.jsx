import Button from '../ui/Button'
import { navItems } from '../../data/navigation'
import { useMenu } from '../../hooks/useMenu'
import { SERVICE_NAME } from '../../utils/constants'
import { whatsappLink } from '../../utils/whatsapp'

function Header() {
  const { menuOpen, toggleMenu, closeMenu } = useMenu()

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-[76px] w-[min(1140px,calc(100%-40px))] items-center gap-6">
        <a href="#inicio" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5 font-display text-[15px] font-bold leading-none">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-yellow-400 text-xs">TE</span>
          <span>
            {SERVICE_NAME}
            <small className="mt-1 block font-body text-[9px] font-semibold uppercase tracking-[.12em] text-zinc-500">Transporte escolar</small>
          </span>
        </a>

        <button
          onClick={toggleMenu}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          className="ml-auto flex w-9 flex-col gap-1.5 py-2 md:hidden"
        >
          <span className="h-0.5 w-6 bg-zinc-950" />
          <span className="h-0.5 w-6 bg-zinc-950" />
          <span className="h-0.5 w-6 bg-zinc-950" />
        </button>

        <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 right-0 top-[76px] flex-col gap-0 border-b border-stone-200 bg-white px-5 pb-5 pt-2 md:static md:ml-auto md:flex md:flex-row md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu} className="py-3 text-xs font-semibold hover:text-yellow-700 md:py-0">
              {label}
            </a>
          ))}
          <Button href={whatsappLink()} className="mt-2 !px-4 !py-2.5 !text-xs md:mt-0">
            Falar no WhatsApp
          </Button>
        </nav>

        <div className="hidden shrink-0 items-center gap-1 rounded border border-stone-200 px-2 py-1.5 text-[10px] font-semibold text-zinc-500 lg:flex">
          <span className="font-bold text-lime-700">✓</span> Regularizado pela SMTT
        </div>
      </div>
    </header>
  )
}

export default Header