'use client'
import React from 'react'

const Header = () => {
  return (
    <div className='relative flex items-center justify-between p-4 bg-foreground text-background overflow-hidden'>
        <div className='text-2xl font-bold font-sans'>CodeCollab</div>
        
        {/* Animated beam light on bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-beam"></div>
        </div>
    </div>
  )
}

export default Header