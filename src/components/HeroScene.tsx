'use client'

import { useRef, useMemo, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 500
const CONNECTION_DIST = 2.2
const SPHERE_RADIUS = 8

function ParticleField({ isLight }: { isLight: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3)
    const pair: number[] = []

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = SPHERE_RADIUS * Math.cbrt(Math.random())
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      for (let j = i + 1; j < PARTICLE_COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3]
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1]
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2]
        if (dx * dx + dy * dy + dz * dz < CONNECTION_DIST * CONNECTION_DIST) {
          pair.push(i, j)
        }
      }
    }

    const lineArr = new Float32Array(pair.length * 3)
    for (let k = 0; k < pair.length; k += 2) {
      const i = pair[k]
      const j = pair[k + 1]
      lineArr[k * 3] = pos[i * 3]
      lineArr[k * 3 + 1] = pos[i * 3 + 1]
      lineArr[k * 3 + 2] = pos[i * 3 + 2]
      lineArr[k * 3 + 3] = pos[j * 3]
      lineArr[k * 3 + 4] = pos[j * 3 + 1]
      lineArr[k * 3 + 5] = pos[j * 3 + 2]
    }

    return { positions: pos, linePositions: lineArr }
  }, [])

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.0006 * delta * 60
      groupRef.current.rotation.x += 0.0002 * delta * 60
    }
  })

  const particleColor = isLight ? '#000000' : '#ffffff'
  const particleOpacity = isLight ? 0.35 : 0.5
  const lineOpacity = isLight ? 0.08 : 0.06

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={PARTICLE_COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.1} color={particleColor} transparent opacity={particleOpacity} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color={particleColor} transparent opacity={lineOpacity} />
      </lineSegments>
    </group>
  )
}

export default function HeroScene() {
  const [isLight, setIsLight] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute('data-theme')
      setIsLight(theme === 'light')
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
    setIsLight(document.documentElement.getAttribute('data-theme') === 'light')
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="hero-scene"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: ready ? 1 : 0,
        transition: 'opacity 1s ease',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 14], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
        onCreated={() => setReady(true)}
      >
        <ParticleField isLight={isLight} />
      </Canvas>
    </div>
  )
}
