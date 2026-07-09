'use client'

import { useTheme } from './ThemeProvider'

const modes = [
  { key: 'light' as const, label: 'Switch to light theme', icon: (
    <svg viewBox="0 0 16 16" height="16" width="16"><path fill="currentColor" fillRule="evenodd" d="M8.75.75V0h-1.5v2h1.5V.75M3.26 4.32l-.53-.53-.35-.35-.53-.53L2.9 1.85l.53.53.35.35.53.53zm8.42-1.06.53-.53.35-.35.53-.53 1.06 1.06-.53.53-.35.35-.53.53zM8 11.25a3.25 3.25 0 1 0 0-6.5 3.25 3.25 0 0 0 0 6.5m0 1.5a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5m6-5.5h2v1.5h-2zm-13.25 0H0v1.5h2v-1.5H.75m1.62 5.32-.53.53 1.06 1.06.53-.53.35-.35.53-.53-1.06-1.06-.53.53zm10.2 1.06.53.53 1.06-1.06-.53-.53-.35-.35-.53-.53-1.06 1.06.53.53zM8.75 14v2h-1.5v-2z" clipRule="evenodd" /></svg>
  )},
  { key: 'system' as const, label: 'Switch to system theme', icon: (
    <svg viewBox="0 0 16 16" height="16" width="16"><path fill="currentColor" fillRule="evenodd" d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H8.75v3h1.75V16h-5v-1.5h1.75v-3H1a1 1 0 0 1-1-1zm1.5.5V10h13V2.5z" clipRule="evenodd" /></svg>
  )},
  { key: 'dark' as const, label: 'Switch to dark theme', icon: (
    <svg viewBox="0 0 16 16" height="16" width="16"><path fill="currentColor" fillRule="evenodd" d="M1.5 8a6 6 0 0 1 3.62-5.51 7 7 0 0 0 7.08 9.25A5.99 5.99 0 0 1 1.5 8M6.42.58a7.5 7.5 0 1 0 7.96 10.41l-.92-1.01a5.5 5.5 0 0 1-6.3-8.25zm6.83.42v1.75H15v1.5h-1.75V6h-1.5V4.25H10v-1.5h1.75V1z" clipRule="evenodd" /></svg>
  )},
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="theme-switcher">
      {modes.map((m) => (
        <button
          key={m.key}
          type="button"
          role="radio"
          aria-checked={theme === m.key}
          aria-label={m.label}
          data-active={theme === m.key}
          data-theme-switcher="true"
          className="theme-switch"
          onClick={() => setTheme(m.key)}
        >
          {m.icon}
        </button>
      ))}
    </div>
  )
}
