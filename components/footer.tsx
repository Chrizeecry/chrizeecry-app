"use client"

import { Button } from "@/components/ui/button"
import { Youtube, MessageCircle, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-[#8B4513] font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-white">Chrizeecry</span>
                <span className="text-yellow-100 font-medium ml-1">Collective</span>
              </div>
            </div>
            <p className="text-yellow-100 leading-relaxed">
              Transforming lives through engineering expertise, mathematics education, music production, and timeless
              wisdom.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about-founder" className="block text-yellow-100 hover:text-white transition-colors">
                About Founder
              </a>
              <a href="#youtube-channels" className="block text-yellow-100 hover:text-white transition-colors">
                YouTube Channels
              </a>
              <a href="#story" className="block text-yellow-100 hover:text-white transition-colors">
                My Story
              </a>
              <a href="#community" className="block text-yellow-100 hover:text-white transition-colors">
                Join Community
              </a>
              <a href="/policies" className="block text-yellow-100 hover:text-white transition-colors">
                Policies
              </a>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Connect</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#8B4513]"
                onClick={() => window.open("https://wa.me/27736043894", "_blank")}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#8B4513]"
                onClick={() => window.open("https://linktr.ee/chrizeecry", "_blank")}
              >
                <Youtube className="mr-2 w-4 h-4" />
                All Channels
              </Button>
              <Button
                variant="outline"
                className="w-full bg-transparent border-white text-white hover:bg-white hover:text-[#8B4513]"
                onClick={() => window.open("https://chrizeecry.com", "_blank")}
              >
                <ExternalLink className="mr-2 w-4 h-4" />
                chrizeecry.com
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-200 pt-8 text-center">
          <p className="text-yellow-100 mb-4">
            © 2025 CHRIZEECRY COLLECTIVE (PTY) LTD • Enterprise Number: 2025/308227/07
          </p>
          <p className="text-white font-semibold">
            "I'm that engineer who endures at every level. I thrive under pressure and stand tall like the sun in the
            sky — always shining, no matter what."
          </p>
        </div>
      </div>
    </footer>
  )
}
