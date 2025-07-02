"use client"
import React, { useState, useEffect } from "react"
import { Github, Sparkles, Code, Zap, Star } from "lucide-react"

const AuthPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [greeting, setGreeting] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const hour = currentTime.getHours()
    if (hour < 12) {
      setGreeting("Good Morning")
    } else if (hour < 17) {
      setGreeting("Good Afternoon")
    } else {
      setGreeting("Good Evening")
    }
  }, [currentTime])

  const features = [
    { icon: <Code className="w-5 h-5" />, text: "Advanced code collaboration" },
    { icon: <Zap className="w-5 h-5" />, text: "Lightning-fast deployment" },
    { icon: <Star className="w-5 h-5" />, text: "Premium developer tools" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-stone-900 flex">
      {/* Left Column - Dynamic Greeting */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full space-y-8">
          {/* Animated Logo/Brand */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-400 to-stone-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-zinc-800 to-stone-800 p-4 rounded-2xl shadow-2xl border border-zinc-700">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="mt-6 text-3xl font-bold bg-gradient-to-r from-white to-zinc-300 bg-clip-text text-transparent">
              CodeCollab
            </h1>
          </div>

          {/* Dynamic Greeting */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {greeting},
              <span className="block text-transparent bg-gradient-to-r from-zinc-300 via-stone-300 to-zinc-400 bg-clip-text animate-pulse">
                Developer
              </span>
            </h2>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Join thousands of developers building the future. Your journey to
              extraordinary code starts here.
            </p>
          </div>
          {/* Features List */}
          <div className="flex justify-center items-center ">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 text-zinc-400 hover:text-white transition-colors duration-300"
              >
                <div className="text-stone-400">{feature.icon}</div>
                <span className="text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Time Display */}
          <div className="text-center">
            <p className="text-sm text-gray-500">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Signup CTA */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-md w-full">
          {/* Signup Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl bg-gradient-to-b from-zinc-900/50 to-stone-900/50">
            <div className="text-center space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Ready to Start?
                </h3>
                <p className="text-zinc-400 text-sm">
                  Sign up with GitHub and join our community of innovators
                </p>
              </div>

              {/* GitHub Signup Button */}
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-zinc-800 to-stone-800 hover:from-zinc-700 hover:to-stone-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-zinc-600 hover:border-zinc-500"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Github
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isHovered ? "rotate-12" : ""
                    }`}
                  />
                  <span>Continue with GitHub</span>
                </div>

                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-zinc-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-zinc-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 text-zinc-400 bg-transparent">or</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-transparent transition-all duration-300 bg-gradient-to-r from-zinc-900/50 to-stone-900/50"
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-white to-zinc-200 hover:from-zinc-100 hover:to-stone-200 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Get Started
                </button>
              </div>

              {/* Terms */}
              <p className="text-xs text-zinc-500 leading-relaxed">
                By signing up, you agree to our{" "}
                <a
                  href="#"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-400 mb-3">
              Trusted by developers at
            </p>
            <div className="flex justify-center space-x-6 opacity-60">
              <div className="w-8 h-8 bg-zinc-600 rounded"></div>
              <div className="w-8 h-8 bg-stone-600 rounded"></div>
              <div className="w-8 h-8 bg-zinc-600 rounded"></div>
              <div className="w-8 h-8 bg-stone-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
