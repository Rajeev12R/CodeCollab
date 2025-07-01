'use client'
import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas: any = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const stars: any = []
    const numStars = 300

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Star class
    class Star {
      x: number
      y: number
      size: number
      opacity: number
      twinkleSpeed: number
      twinkleDirection: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 1.5 + 0.5
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkleSpeed = Math.random() * 0.015 + 0.005
        this.twinkleDirection = Math.random() > 0.5 ? 1 : -1
      }

      update() {
        // Twinkling effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection
        
        if (this.opacity <= 0.1 || this.opacity >= 1) {
          this.twinkleDirection *= -1
        }
        
        this.opacity = Math.max(0.1, Math.min(1, this.opacity))
      }

      draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create stars
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star())
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'black'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
    stars.forEach((star: Star) => {
      star.update()
      star.draw()
    })
      
      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center px-4">
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'black' }}
      />
      
      {/* Content */}
      <div className="relative -top-20 z-10 text-white max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Welcome to CodeCollab
        </h1>
        <p className="text-xl md:text-3xl leading-relaxed">
          A collaborative platform built like a product, not just a project.
        </p>
      </div>
    </section>
  )
}

export default Hero