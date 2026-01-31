"use client"

import { Button } from "@/components/ui/button"
import { Youtube, MessageCircle, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-[#8B4513] font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-2xl font-black text-white uppercase tracking-tighter">Chrizeecry</span>
              </div>
            </div>
            <p className="text-yellow-100 leading-relaxed font-medium">
              Empowering technical students and junior engineers to master the "Big 4" and secure their professional futures through grit and systems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Resources</h3>
            <div className="space-y-2">
              <a href="#youtube-channels" className="block text-yellow-100 hover:text-white transition-colors font-bold text-sm">
                YouTube Universe
              </a>
              <a href="#contact" className="block text-yellow-100 hover:text-white transition-colors font-bold text-sm">
                Inquire / Sponsorship
              </a>
              <a href="#about-founder" className="block text-yellow-100 hover:text-white transition-colors font-bold text-sm">
                The Founder
              </a>
              <a href="/policies" className="block text-yellow-100 hover:text-white transition-colors font-bold text-sm">
                Privacy Policies
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-yellow-100">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Office</h3>
            <div className="space-y-2 text-sm font-bold">
              <p>Lefatlheng Section 5,</p>
              <p>Hammanskraal, Pretoria,</p>
              <p>Gauteng, South Africa</p>
              <p className="mt-4 pt-4 border-t border-white/10">Email: chrizeecry@gmail.com</p>
              <p>Phone: +27 73 604 3894</p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-black uppercase tracking-widest text-white">Fast Links</h3>
            <div className="space-y-2">
              <Button
                variant="outline"
                className="w-full bg-white text-[#8B4513] border-none font-black uppercase text-xs tracking-widest"
                onClick={() => window.open("https://wa.me/27736043894", "_blank")}
              >
                <MessageCircle className="mr-2 w-4 h-4" />
                WhatsApp Mentor
              </Button>
              <Button
                variant="outline"
                className="w-full bg-black/20 text-white border-white/20 hover:bg-white hover:text-[#8B4513] font-black uppercase text-xs tracking-widest"
                onClick={() => window.open("https://linktr.ee/chrizeecry", "_blank")}
              >
                All Digital Links
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center space-y-4">
          <p className="text-white font-black uppercase tracking-widest text-[10px]">
            © 2026 CHRIZEECRY COLLECTIVE (PTY) LTD • ENTERPRISE NO: 2025 / 308227 / 07
          </p>
          <p className="text-white font-bold italic text-sm max-w-3xl mx-auto opacity-80">
            "We build for the bright minds of disadvantaged backgrounds. Grit is our currency. Systems are our logic."
          </p>
        </div>
      </div>
    </footer>
  )
}
