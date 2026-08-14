'use client'

import { useEffect } from 'react'

const RELOAD_KEY = 'kiwidefence-chunk-reload'

export default function ChunkLoadRecovery() {
  useEffect(() => {
    const reloadOnce = () => {
      if (sessionStorage.getItem(RELOAD_KEY)) return
      sessionStorage.setItem(RELOAD_KEY, '1')
      window.location.reload()
    }

    const onError = (event: ErrorEvent) => {
      const message = event.message ?? ''
      if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
        reloadOnce()
      }
    }

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const message =
        typeof reason === 'string'
          ? reason
          : reason instanceof Error
            ? reason.message
            : ''

      if (message.includes('ChunkLoadError') || message.includes('Loading chunk')) {
        reloadOnce()
      }
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onUnhandledRejection)

    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
    }
  }, [])

  return null
}
