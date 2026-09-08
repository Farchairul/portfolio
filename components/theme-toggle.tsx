'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './theme-provider'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="theme-toggle"
    >
      {theme === 'light' ? <Moon aria-hidden="true" /> : <Sun aria-hidden="true" />}
    </button>
  )
}
