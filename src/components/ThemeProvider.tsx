'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  resolved: Theme
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  resolved: 'dark',
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('kiwi-theme')
    if (stored === 'light' || stored === 'dark') {
      setThemeState(stored)
    }
  }, [])

  const apply = useCallback((t: Theme) => {
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  useEffect(() => {
    apply(theme)
  }, [theme, apply])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('kiwi-theme', t)
    apply(t)
  }, [apply])

  return (
    <ThemeContext.Provider value={{ theme, resolved: theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
