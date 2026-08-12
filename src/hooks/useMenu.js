import { useState } from 'react'

export function useMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen((value) => !value)
  const closeMenu = () => setMenuOpen(false)

  return { menuOpen, toggleMenu, closeMenu }
}