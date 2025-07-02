'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Github } from 'lucide-react'
import { Button } from './ui/button'

const Header = () => {
  const router = useRouter();
  const {data: session} = useSession();
  return (
    <div className='relative flex items-center justify-between p-4 bg-foreground text-background overflow-hidden'>
        <div onClick={() => router.push('/')} className='text-2xl font-bold cursor-pointer font-sans'>CodeCollab</div>

        <div className="flex items-center space-x-4">
          {session ? (
            <>
            <span className='text-background font-sans font-semibold'>Hello, {session.user?.name}</span>

            <img
              src={session.user?.image ?? '/default-avatar.png'} // Use default image if no avatar
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />

            <Button onClick={() => signOut()} className='text-sm text-red-500 hover:text-red-400'>Sign Out</Button>
            </>
          ) : (
            <>
            <Button onClick={() => router.push('/auth')} className='flex items-center space-x-2 bg-background text-black hover:bg-gray-200'>

            <Github className="w-5 h-5" />
              <span>Sign In with GitHub</span>
            </Button>
              </>
          )}
        </div>
        
        {/* Animated beam light on bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent opacity-60">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-beam"></div>
        </div>
    </div>
  )
}

export default Header