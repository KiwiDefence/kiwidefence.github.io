'use client'

import { createContext, useContext, useEffect, useState, useCallback } from 'react'

type Theme = 'dark' | 'light' | 'system'

interface ThemeContextValue {
  theme: Theme
  resolved: 'dark' | 'light'
  setTheme: (t: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'system',
  resolved: 'dark',
  setTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

function getSystemTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark')
  const [resolved, setResolved] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('kiwi-theme') as Theme | null
    if (stored) setThemeState(stored)
  }, [])

  const apply = useCallback((t: Theme) => {
    const r = t === 'system' ? getSystemTheme() : t
    setResolved(r)
    document.documentElement.setAttribute('data-theme', r)
  }, [])

  useEffect(() => {
    apply(theme)
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const handler = () => { if (theme === 'system') apply('system') }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [theme, apply])

  const setTheme = useCallback((t: Theme) => {
    setThemeState(t)
    localStorage.setItem('kiwi-theme', t)
    apply(t)
  }, [apply])

  return (
    <ThemeContext.Provider value={{ theme, resolved, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
