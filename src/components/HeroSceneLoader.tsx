'use client'

import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/HeroScene'), {
  ssr: false,
  loading: () => null,
})

export default function HeroSceneLoader() {
  return <HeroScene />
}
