'use client'
import React from 'react'

const features = [
  {
    title: "Real-time Collaboration",
    description: "Work on code together with your team in real-time with branch-wise control and live cursor tracking.",
    icon: "👥",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "GitHub Integration",
    description: "Easily manage repositories, pull requests, and merges directly inside the app with seamless sync.",
    icon: "🔗",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Project Snapshots",
    description: "Track your progress through snapshots and versioned history for every feature with automated backups.",
    icon: "📸",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Code Assistant",
    description: "Get intelligent code suggestions, auto-completion, and debugging help powered by advanced AI.",
    icon: "🤖",
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Cloud Environments",
    description: "Spin up development environments in seconds with pre-configured containers and dependencies.",
    icon: "☁️",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    title: "Advanced Security",
    description: "Enterprise-grade security with end-to-end encryption, access controls, and audit logs.",
    icon: "🔒",
    gradient: "from-yellow-500 to-orange-500"
  }
]

const Features = () => {
  return (
    <section className="w-full py-20 bg-black text-white relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950 opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, collaborate, and ship code faster than ever before
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-neutral-800/50 transition-all duration-500 border border-neutral-800/50 hover:border-neutral-700/50 overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Animated border beam */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-30 animate-border-beam`}></div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-white text-black font-semibold py-4 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Features
          </button>
        </div>
      </div>

    </section>
  )
}

export default Features