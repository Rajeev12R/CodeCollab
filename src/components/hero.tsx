'use client'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'

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

    // Star class in Typescript
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
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center px-4">
      {/* Canvas for stars */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'black' }}
      />
      <div className="relative z-10 text-white max-w-6xl mx-auto space-y-8">
        {/* Main heading with enhanced styling */}
        <div className="space-y-4">
          <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-gray-300 mb-6">
            ✨ The Future of Code Collaboration
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-pulse">
              Welcome to 
            </span>&nbsp;
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              CodeCollab
            </span>
          </h1>
        </div>
        
        {/* Enhanced description */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl leading-relaxed text-gray-300 font-light">
            A collaborative platform built like a product, not just a project.
          </p>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience real-time collaboration, seamless GitHub integration, and powerful development tools 
            all in one beautiful, intuitive platform.
          </p>
        </div>
        
        {/* Feature highlights */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            Real-time Editing
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            GitHub Integration
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            AI Assistance
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            Cloud Environments
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-background text-black hover:bg-gray-200 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Free
          </Button>
          <Button 
            variant="outline" 
            className="border-white/20 text-background bg-foreground hover:bg-background text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300"
          > 
            Watch Demo 
          </Button>
        </div>
        
        {/* Social proof */}
        <div className="mt-12 text-gray-500 text-sm">
          <p className="mb-4">Trusted by developers at</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold">GitHub</div>
            <div className="text-2xl font-bold">Vercel</div>
            <div className="text-2xl font-bold">Stripe</div>
            <div className="text-2xl font-bold">OpenAI</div>
          </div>
        </div>
    </section>
  )
}

export default Hero