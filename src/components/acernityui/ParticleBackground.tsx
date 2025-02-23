'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect, useLayoutEffect, useState } from 'react'

const Particle = ({ mouseX, mouseY }: { mouseX: any, mouseY: any }) => {
  const [isMounted, setIsMounted] = useState(false)
  const xOffset = useMotionValue(0)
  const yOffset = useMotionValue(0)

  // Set random offsets only after mounting
  useLayoutEffect(() => {
    xOffset.set((Math.random() - 0.5) * 100)
    yOffset.set((Math.random() - 0.5) * 100)
    setIsMounted(true)
  }, [])

  const x = useTransform(mouseX, (val: number) => val + xOffset.get())
  const y = useTransform(mouseY, (val: number) => val + yOffset.get())

  return (
    <motion.div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={isMounted ? {
        scale: [0, 0.5, 0],
        opacity: [0, 0.3, 0]
      } : undefined}
      transition={{
        duration: 2 + Math.random() * 5,
        repeat: Infinity,
        delay: Math.random() * 2
      }}
    />
  )
}

export const ParticleBackground = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    setIsClient(true)
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isClient) return null

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {Array.from({ length: 100 }).map((_, i) => (
        <Particle key={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  )
}