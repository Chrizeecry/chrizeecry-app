'use client';

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Play,
  Calculator,
  Music,
  Menu,
  X,
  Youtube,
  GraduationCap,
  ExternalLink,
  MessageCircle,
  FileText,
  CheckCircle2,
  Minus,
  ChevronUp,
} from "lucide-react"
import Footer from "@/components/footer";
import BlueprintHero from "@/components/blueprint-hero";
import PricingSection from "@/components/pricing-section";
import CostOfInaction from "@/components/cost-of-inaction";

export default function Page() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showDiscountPopup, setShowDiscountPopup] = useState(false)
  const [discountMinimized, setDiscountMinimized] = useState(false)
  const [showCommunityPopup, setShowCommunityPopup] = useState(false)
  const [communityMinimized, setCommunityMinimized] = useState(false)
  const [showCookieConsent, setShowCookieConsent] = useState(false)
  const [selectedDivision, setSelectedDivision] = useState("")

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      const timer = setTimeout(() => setShowCookieConsent(true), 2000)
      return () => clearTimeout(timer)
    }
  }, [])
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    division: "",
    interests: [] as string[],
  })

  const [lastScrollY, setLastScrollY] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      setShowScrollTop(currentScrollY > 400)
      
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollHeight > 0) {
        const scrollPercent = (currentScrollY / scrollHeight) * 100
        
        // Stagger popups
        if (scrollPercent > 20 && scrollPercent < 45) {
          setShowDiscountPopup(true)
        } else if (scrollPercent >= 45) {
          setShowCommunityPopup(true)
          // Auto-minimize the discount if community shows up to save space
          setDiscountMinimized(true)
        }
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const handleLeadCapture = (division: string) => {
    setSelectedDivision(division)
    setFormData({ ...formData, division })
    setShowLeadForm(true)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setShowLeadForm(false)
    // Show success message or redirect
  }

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileNavOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setMobileNavOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-amber-200" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                  Chrizeecry
                </span>
                <span className="hidden sm:inline-block text-[#8B4513] font-medium ml-1">Collective</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("youtube-channels")}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#FFD700] transition-all duration-300 font-bold px-2 py-1 hover:scale-105"
              >
                <Youtube className="w-5 h-5" />
                <span>Channels</span>
              </button>
              <button
                onClick={() => scrollToSection("about-founder")}
                className="text-gray-700 hover:text-[#FFD700] transition-all duration-300 font-bold px-2 py-1 hover:scale-105"
              >
                About
              </button>
              <Button
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase text-xs tracking-widest px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-b-4 border-orange-700"
                onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
              >
                ⭐ Join Bootcamp
              </Button>
              <a
                href="https://collective.chrizeecry.com/meet-and-great-the-community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8B4513] hover:text-[#FFD700] font-black uppercase text-xs tracking-widest px-5 py-2.5 border-2 border-amber-200 rounded-full hover:bg-amber-50 transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
              >
                Free Community
              </a>
            </nav>

            {/* Mobile/Tablet Menu Button */}
            <div className="xl:hidden flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-4 py-2 rounded-full shadow-md text-xs sm:text-sm"
                onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
              >
                ⭐ Join
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileNavOpen(true)}
                className="text-gray-700 hover:text-[#FFD700] hover:bg-amber-50"
              >
                <Menu className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300">
            <div className="flex justify-between items-center p-6 border-b border-amber-200">
              <span className="text-xl font-bold text-[#8B4513]">Menu</span>
              <Button variant="ghost" size="icon" onClick={() => setMobileNavOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="p-6 space-y-6">
              <button
                onClick={() => scrollToSection("youtube-channels")}
                className="flex items-center space-x-3 text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left py-3 min-h-[48px]"
              >
                <Youtube className="w-6 h-6" />
                <span className="text-lg">My YouTube Channels</span>
              </button>
              <button
                onClick={() => scrollToSection("about-founder")}
                className="block text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left py-3 min-h-[48px] text-lg"
              >
                About Founder
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="block text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left py-3 min-h-[48px] text-lg"
              >
                My Story
              </button>
              <div className="pt-6 space-y-4">
                <a
                  href="https://nas.io/chrizeecry-complete-collective-vault-premium"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black uppercase text-sm tracking-widest px-6 py-4 rounded-xl transition-all shadow-lg text-center w-full"
                >
                  ⭐ Join Bootcamp
                </a>
                <a
                  href="https://collective.chrizeecry.com/meet-and-great-the-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-amber-50 border-2 border-amber-200 text-[#8B4513] font-black uppercase text-sm tracking-widest px-6 py-4 rounded-xl transition-all text-center w-full"
                >
                  🚀 Free Community
                  <span className="block text-[10px] font-bold mt-1 opacity-80 italic">Notes, Freebies & Study Guides</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#8B4513] hover:scale-105 transition-transform duration-300 px-4 py-2 text-sm font-semibold shadow-lg">
                  🚀 From Academic Exclusion to Engineering Excellence
                </Badge>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Where{" "}
                  <span className="bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">
                    Persistence
                  </span>
                  <br />
                  Meets Purpose
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                 A 4-year Honours Degree completed in 8 years. What started as a lonely journey became a masterclass in resilience. I am a Wits Civil Engineer bridging the gap between academic FAILURE and S.T.E.M Mastery for aspiring South African Civil Engineers
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#FFD700] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFD700] text-[#8B4513] font-bold px-8 py-4 text-base md:text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  onClick={() => scrollToSection("community")}
                >
                  Discover My Methods
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-4 text-base md:text-lg border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("about-founder")}
                >
                  <Play className="mr-2 w-6 h-6" />
                  Read My Journey
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                    6930+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Social Media Followers</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl md:text-4xl font-bold text-[#FFD700]">90%</span>
                    <Star className="w-6 h-6 text-[#FFD700] fill-current" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Civil Technology Grade 12 [2013] </div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                    8
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years of Grit Engineering</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grad%20pic%20samson.jpg-1gOwd24ULEaLsbj1yFL85Ir8l2uWk9.jpeg"
                  alt="Samson Senyatsi graduation day: The moment of triumph after 8 years"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl mx-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border-2 border-[#FFD700] max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">BSc Civil Engineering</div>
                      <div className="text-sm text-gray-600">Wits University, 2021</div>
                      <div className="text-xs text-[#FFD700] font-semibold">Against All Odds</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-3xl blur-3xl opacity-20 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Founder Section */}
      <section id="about-founder" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-[#8B4513] text-white px-4 py-2 text-sm font-semibold">👨‍🎓 About the Founder</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Man Behind the Mission</h2>
            <blockquote className="text-2xl md:text-3xl font-bold text-gray-700 max-w-4xl mx-auto leading-relaxed italic">
              "They told me I wouldn't make it. But eight years later, I walked out with an engineering degree from Wits:
              not just with a certificate, but with a spine forged through fire."
            </blockquote>
          </div>

          {/* Professional Engineer Photo */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_12_27_15_23_IMG_4146.JPG-YN6RCCweaXEPk5ryint1Hf3lDKdGsm.jpeg"
                alt="Samson Senyatsi as a professional engineer: Working on construction site with engineering equipment"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-2">Professional Engineer in Action</h3>
                <p className="text-gray-700 leading-relaxed">
                  Today, as a Resident Engineer managing construction projects, I apply the same persistence and
                  problem-solving skills that got me through university. Every challenge on site reminds me of the
                  obstacles I overcame during my academic journey.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {/* The Beginning */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Beginning: High School Dreams</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Growing up in a small town, engineering seemed like a distant dream. My high school didn't have the
                    resources that many others did, but what we lacked in facilities, I made up for in determination. I
                    still remember the day my physics teacher pulled me aside after class.
                  </p>
                  <blockquote className="text-blue-800 italic font-medium border-l-4 border-blue-500 pl-4">
                    "You have potential," he said, "but Wits Engineering isn't just about being smart. It breaks
                    people."
                  </blockquote>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Those words would echo in my mind years later, during my darkest moments at university. But at the
                    time, they only strengthened my resolve. If it was hard, that meant it was worth doing.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-02%20203756-ae0p8KueA4SQaGbSeaLA8ION6iPWD7.png"
                  alt="Young Samson with fellow students: High school dreams"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* Mentor's Note: The Big Brother Perspective */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border-4 border-amber-500 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] -z-0" />
              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase italic tracking-tighter">A Word From Your "Big Brother"</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <p className="text-lg text-slate-300 leading-relaxed italic">
                      "I'm not just here to teach you how to draw an Isometric view or solve a Calculus integral. I'm here because I've been exactly where you are."
                    </p>
                    <p className="text-slate-400">
                      Whether you're shy, feel like you're 'not cool', or you're a junior engineer struggling to find your footing—I am your partner in this transformation. 
                    </p>
                    <p className="text-slate-400">
                      My mission is to help you unlock monetary skills and personal branding that make you indispensable, even if you're the quietest person in the room. You don't need to be loud to be a leader; you just need the right systems and the grit to follow through.
                    </p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl space-y-4">
                    <h4 className="text-xl font-bold text-amber-500">Why I Consult:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">Unlock high-income technical & creator skills</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">Build a personal brand that attracts opportunities</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">Navigate the 'nonlinear' path of engineering & life</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Lifestyle & Personal Side */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chrizeecry.jpg-BGkAS9cCMuPhTGXxs95ffj4ZmqsIPM.jpeg"
                  alt="Samson in casual lifestyle setting - Balancing professional and personal life"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Beyond Engineering: The Complete Person</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    While engineering defines my professional life, I believe in being well-rounded. Whether I'm
                    creating music, connecting with my community, or simply enjoying life's moments, I bring the same
                    passion and authenticity to everything I do.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This balance between professional excellence and personal fulfillment is something I teach my
                    students and mentees. Success isn't just about academic achievement; it's about becoming the best
                    version of yourself in all areas of life.
                  </p>
                </div>
              </div>
            </div>

            {/* The First Shock */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The First Shock: University Reality</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Walking into Wits for the first time was overwhelming. The campus sprawled like a small city, and
                    everyone around me seemed to know exactly where they were going and what they were doing. I felt
                    like an impostor from day one.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The workload hit like a tsunami. In high school, I was used to being at the top of my class without
                    much effort. At Wits, I was drowning in assignments, tutorials, and practicals that seemed to have
                    no end. My first-semester results were a harsh wake-up call.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1658704435628.jpg-FIQMP2tPzPMPXHLiFZuLNHymvC0j3B.jpeg"
                  alt="Wits University academic record - The reality check"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* The Fall */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/adu%20certification%20of%20mentorship.jpg-ycCkscEVqcFdLDwBVfNk4u6j21peg6.jpeg"
                  alt="Academic recognition certificate"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Fall: Academic Exclusion</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I still remember the email. "Dear Student, We regret to inform you..." My heart sank as I read the
                    words that confirmed my worst fear: I had been academically excluded. All the sacrifices my family
                    had made, all the expectations from my community, it felt like I had let everyone down.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    That night, sitting alone in my small room, I faced the darkest moment of my journey. I had two
                    choices: accept defeat or fight back. The easy path would have been to switch to an easier degree or
                    give up entirely. But something inside me refused to quit.
                  </p>
                </div>
              </div>
            </div>

            {/* The Climb */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Climb: Finding My Way Back</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The appeal process was humbling. I had to admit my failures, analyze where I went wrong, and present
                    a plan for improvement. I spent weeks preparing my case, reaching out to lecturers, and developing a
                    study strategy that would address my weaknesses.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    When I was granted a second chance, I approached university differently. I created a strict
                    schedule, formed study groups, and started tutoring other students: teaching concepts helped cement
                    my own understanding. Each small victory rebuilt my confidence.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-06-02%20184901-7hf1SzSKOq5ZyFp2YpW2gvDI0mpSH2.png"
                  alt="Official recommendation letter from Wits"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* The Transformation */}
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 text-center">
                The Transformation: Beyond Academics
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    What I didn't expect was how this struggle would transform me beyond academics. I developed
                    resilience that no comfortable journey could have taught me. I learned to ask for help: something
                    my pride had prevented before. I discovered that failure isn't final unless you allow it to be.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Most importantly, I found purpose in helping others navigate similar challenges. The tutoring that
                    started as a way to reinforce my own learning became a passion for education and mentorship.
                  </p>
                </div>
              </div>
            </div>

            {/* The Graduation */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Graduation: A Beginning, Not an End</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Eight years after I first stepped onto campus, I stood in my graduation gown, degree in hand. The
                    journey took twice as long as it should have, but the person who walked across that stage was not
                    the same one who had entered university with naive confidence years before.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    That day wasn't just about academic achievement, it was about proving that determination can
                    overcome almost any obstacle. The degree was valuable, but the journey to earn it was priceless.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grd.jpg-CsA6uktYEKQGt3rxcD6vAfT3je3wN3.jpeg"
                  alt="Official Wits University graduation ceremony 2022 - Receiving the degree"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            {/* The Legacy */}
            <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-6">The Legacy: Chrizeecry Collective</h3>
              <p className="text-lg mb-6 max-w-4xl mx-auto">
                Today, everything I build through Chrizeecry Collective is informed by this journey. I don't just teach
                technical skills, I help people develop the mindset to overcome their own challenges. The methods I
                share aren't theoretical; they're battle-tested through my own failures and comebacks.
              </p>
              <p className="text-yellow-100 max-w-4xl mx-auto">
                My story isn't unique, many face similar obstacles. But by sharing it honestly, I hope to show others
                that their current struggles don't define their ultimate potential. Sometimes, the longest, most
                difficult path leads to the most meaningful destination.
              </p>
            </div>

            {/* The Philosophy That Drives Everything */}
            <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-6">The Philosophy That Drives Everything</h3>
              <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                "I'm that engineer who endures at every level. I thrive under pressure and stand tall like the sun in
                the sky: always shining, no matter what."
              </blockquote>
              <p className="text-lg text-yellow-100 max-w-3xl mx-auto">
                This journey from exclusion to engineer isn't just my story, it's proof that with the right mindset,
                systems, and persistence, anyone can overcome seemingly impossible obstacles. That's why I've built
                Chrizeecry Collective: to share these battle-tested methods with others who refuse to give up on their
                dreams.
              </p>
            </div>

            {/* The Lessons */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 col-span-full text-center">
                The Lessons That Shaped Me
              </h3>

              {[
                {
                  title: "Resilience isn't innate",
                  description: "It's built through surviving challenges you thought would break you.",
                  icon: "💪",
                },
                {
                  title: "Community matters",
                  description: "No one succeeds entirely alone.",
                  icon: "🤝",
                },
                {
                  title: "Failure is feedback",
                  description: "It shows you where to focus, not where to give up.",
                  icon: "📈",
                },
                {
                  title: "Your timeline is your own",
                  description: "Comparison is the thief of joy and motivation.",
                  icon: "⏰",
                },
                {
                  title: "Struggles become strength",
                  description: "What nearly breaks you often becomes your greatest asset.",
                  icon: "🔥",
                },
                {
                  title: "Purpose through pain",
                  description: "Your greatest struggles often reveal your life's mission.",
                  icon: "🎯",
                },
              ].map((lesson, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">{lesson.icon}</div>
                    <h4 className="font-bold text-lg text-gray-900">{lesson.title}</h4>
                    <p className="text-gray-600 text-sm">{lesson.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channels Section */}
      <section id="youtube-channels" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-semibold uppercase tracking-widest">📺 The Technical Beat Universe</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase italic">Beats to Study Civil Engineering To</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Technical study beats designed for deep focus. 
              From Euclidean geometry logic to AfroSoul Amapiano: we build bridges with sound.
            </p>
          </div>

          {/* YouTube Channel Screenshots */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chrizeecry-swxrDdCYNHnILa1lZOwSgd61gMGXn9.png"
                alt="Chrizeecry YouTube Channel - Study Beats & STEM Mentorship"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-amber-500 shadow-lg">
                <h5 className="font-bold text-[#8B4513] mb-1">Study Beats & Mentorship</h5>
                <p className="text-sm text-gray-700">264 subscribers • 336 videos • Engineering Study Beats</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chris_senyatsi%20maths-EG67j3NVSXVifYdpkJgXCfgtM7PM2J.png"
                alt="Chris Senyatsi Math Tutor YouTube Channel - Grade 8-12 NSC Maths"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-green-500 shadow-lg">
                <h5 className="font-bold text-[#8B4513] mb-1">Math Academy Channel</h5>
                <p className="text-sm text-gray-700">931 subscribers • 107 videos • Technical Math Hacks</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chrizeecrybeats-k8pjMxeBtxsMfs45pJVzdNXsaZvrwS.png"
                alt="Chrizeecry Beats YouTube Channel - Technical Beats & Samples"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 border-l-4 border-blue-500 shadow-lg">
                <h5 className="font-bold text-[#8B4513] mb-1">Technical Beats Vault</h5>
                <p className="text-sm text-gray-700">169 subscribers • 23 videos • Chrizeecry Beats & Songs</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Main Channel */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-red-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Youtube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black uppercase">Chrizeecry: Personal Brand</CardTitle>
                    <p className="text-sm text-gray-600 font-bold uppercase tracking-widest text-[10px]">Grade 8-12 Online Mentorship</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">264</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">336</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Videos</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4 font-medium italic border-l-2 border-amber-500 pl-3">
                  Original technical beats (AfroSoul, Amapiano, Trap) for focus, mixed with STEM vlogs, My Wits Vlogs, Who is Sello Senyatsi: From Maranatha Day Care, Mahobotle Primary School, Ramoabi Middle School, Mmankala Technical High School, Wits University, Work Now The Founder of Chrizeecry Collective Pty Ltd.
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-red-600 hover:bg-red-700 text-white mb-2"
                  onClick={() => window.open("https://youtube.com/@chrizeecry", "_blank")}
                >
                  <Youtube className="mr-2 w-4 h-4" />
                  Subscribe Now
                </Button>
                <p className="text-xs text-gray-500 text-center">Joined Feb 26, 2016</p>
              </CardContent>
            </Card>

            {/* Math Tutor Channel */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-green-500 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black uppercase">Chris Senyatsi: Civil Engineer</CardTitle>
                    <p className="text-sm text-gray-600 font-bold uppercase tracking-widest text-[10px]">Tech Drawing, Maths & Science</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">931</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">150,389</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Total Views</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4 font-medium italic border-l-2 border-green-500 pl-3">
                  107 videos • Battle-tested strategies for Euclidean Geometry, Calculus, and Technical Maths and Physical Sciences.
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-green-600 hover:bg-green-700 text-white mb-2"
                  onClick={() => window.open("https://youtube.com/@chrissenyatsi-mathtutor", "_blank")}
                >
                  <Calculator className="mr-2 w-4 h-4" />
                  Subscribe & Learn
                </Button>
                <p className="text-xs text-gray-500 text-center">Joined Aug 29, 2022</p>
              </CardContent>
            </Card>

            {/* Beats Channel */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white shadow-xl">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-black uppercase">Chrizeecry: Musician</CardTitle>
                    <p className="text-sm text-gray-600 font-bold uppercase tracking-widest text-[10px]">Technical Study Beats</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">159</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900 tracking-tighter">27,572</div>
                    <div className="text-[10px] font-black uppercase text-gray-500">Total Views</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4 font-medium italic border-l-2 border-blue-500 pl-3">
                  23 videos • Technical study beats for engineers: AfroSoul, Amapiano, and FL Studio technicals.
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white mb-2 font-bold uppercase"
                  onClick={() => window.open("https://youtube.com/@chrizeecrybeats", "_blank")}
                >
                  <Music className="mr-2 w-4 h-4" />
                  Get Beats
                </Button>
                <p className="text-[10px] text-gray-400 text-center font-bold tracking-widest uppercase">Sample Packs & FLP drops</p>
              </CardContent>
            </Card>
          </div>

          {/* Featured Videos */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Featured Content</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/ypQZ2BK1Pxc"
                    title="Highest Viewed Math Video - 33K Views"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Most Popular Math Tutorial</h4>
                  <p className="text-sm text-gray-600">56K+ views • Breaking down complex concepts simply</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/aOWssnls5Bc"
                    title="Music Production Showcase"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Music Production Talent</h4>
                  <p className="text-sm text-gray-600">Showcasing my other passion: creating beats and music</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Total Impact */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-amber-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Total YouTube Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">1,348</div>
                <div className="text-gray-600 font-medium">Total Subscribers</div>
                <div className="text-sm text-gray-500">Across all channels</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">178,009</div>
                <div className="text-gray-600 font-medium">Total Views</div>
                <div className="text-sm text-gray-500">Educational impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">489</div>
                <div className="text-gray-600 font-medium">Total Videos</div>
                <div className="text-sm text-gray-500">Content library</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">3</div>
                <div className="text-gray-600 font-medium">Active Channels</div>
                <div className="text-sm text-blue-200">Multi-platform presence</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-bold hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://linktr.ee/chrizeecry", "_blank")}
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Subscribe to All Channels
              </Button>
              <p className="text-sm text-gray-600 mt-2">Get the complete learning experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Showcase Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#8B4513] px-4 py-2 text-sm font-semibold">
              🎯 Multi-Talented Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">From Student to Professional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A visual journey through engineering work, music production, academic achievements, and professional
              growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Academic Record */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1658704435628.jpg-FIQMP2tPzPMPXHLiFZuLNHymvC0j3B.jpeg"
                alt="Official Wits University Academic Record - 8 Year Journey"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Official Academic Record</h5>
                <p className="text-sm text-gray-700">8-year journey documented by Wits University</p>
              </div>
            </div>

            {/* Music Production */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_11_19_07_45_IMG_3007.JPG-zCylqsCxJ6sU61bX1jcoOGfCdI4llB.jpeg"
                alt="Samson with music production equipment - Multi-talented creator"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Music Production Passion</h5>
                <p className="text-sm text-gray-700">Creating beats and educational content</p>
              </div>
            </div>

            {/* Engineering Work */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2023_05_03_07_23_IMG_1735.JPG-Ml9aSFarEmSJ4QDYDSdmFGz0J8GLws.jpeg"
                alt="Samson in engineering work attire on construction site"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Professional Engineer</h5>
                <p className="text-sm text-gray-700">Real-world construction and project management</p>
              </div>
            </div>

            {/* Construction Site Work */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_03_12_12_50_IMG_2365.JPG-APWMLCa0KaMTuswjCirrbgJ5RpaurO.jpeg"
                alt="Samson doing surveying work on construction site"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Field Engineering</h5>
                <p className="text-sm text-gray-700">Hands-on construction site management</p>
              </div>
            </div>

            {/* Technical Work */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_03_11_22_03_IMG_6861.JPG-wjj3c6CWR3NzQbEQCS2GxUP1YgaL0y.jpeg"
                alt="Samson working with engineering software and technical drawings"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Technical Expertise</h5>
                <p className="text-sm text-gray-700">Advanced engineering software and design</p>
              </div>
            </div>

            {/* Creative Side */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_09_16_14_42_IMG_0805.JPG-RTVttQlJ35KwsXETU6Sm4EInQMZbSU.jpeg"
                alt="Samson in creative urban setting showcasing his artistic side"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Creative Expression</h5>
                <p className="text-sm text-gray-700">Balancing technical skills with artistic vision</p>
              </div>
            </div>
          </div>

          {/* Additional Images Row */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_03_12_10_20_IMG_2303.JPG-HAlxr3a6JMnmlRd1ZHhE7pbwYkepkt.jpeg"
                alt="Samson in casual professional setting"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Professional Growth</h5>
                <p className="text-sm text-gray-700">Evolving from student to industry professional</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_10_04_22_51_IMG_8209.JPG-8KhGzJc0hp4vQJYmXZx7ytzbsIEcEs.jpeg"
                alt="Samson performing music in studio setting"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Musical Performance</h5>
                <p className="text-sm text-gray-700">Live music and content creation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Engineering Work & Freelance Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">
              🔧 Early Engineering Career
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">From Student to Professional</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The transition from academic theory to real-world application. Every project taught me something new about
              persistence, precision, and professional growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Freelance Surveying Work */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_03_12_13_15_IMG_0220.JPG-ZbqmQOr2zQyScVV5J30EFO4tya7H6E.jpeg"
                alt="Samson doing freelance surveying work - Early professional experience with surveying equipment"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">Freelance Surveying Projects</h5>
                <p className="text-sm text-gray-700">
                  Before joining Marumo Consulting, I worked on freelance surveying projects with my friend, gaining
                  hands-on experience with professional equipment and real-world applications of engineering principles.
                </p>
              </div>
            </div>

            {/* University Lab Work */}
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_06_17_12_23_IMG_9712.JPG-dPxI5d6yxZ5NcZakwETPE8vQ9YeyZ7.jpeg"
                alt="Samson working in Wits University engineering lab - Academic and practical learning combined"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">University Lab Experience</h5>
                <p className="text-sm text-gray-700">
                  Working in the Wits School of Civil and Environmental Engineering labs, combining academic learning
                  with practical application. This experience bridged the gap between theory and real-world engineering.
                </p>
              </div>
            </div>
          </div>

          {/* University Days Reflection */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_09_13_01_11_IMG_0574.JPG-ypZsfMQvad6P2wknPdkD4lU6rbmz8Y.jpeg"
                alt="Samson relaxing on university lawn - Peaceful moments during the challenging academic journey"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">University Days Reflection</h5>
                <p className="text-sm text-gray-700">
                  Peaceful moments on the Wits campus lawn during my academic journey. These quiet times were essential
                  for processing the challenges and maintaining perspective during the toughest years.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Learning Never Stopped</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Even during the most challenging academic periods, I was constantly learning: not just from
                  textbooks, but from every practical experience, every setback, and every small victory. The
                  combination of academic rigor and real-world application shaped my understanding of engineering.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These experiences taught me that engineering isn't just about calculations and designs: it's about
                  problem-solving, persistence, and the ability to adapt when things don't go according to plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Expression & Music */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-purple-600 text-white px-4 py-2 text-sm font-semibold">🎵 Creative Expression</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Beyond Engineering: The Artist Within</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Music and creativity have always been part of my journey. They provided balance during intense academic
              years and continue to fuel my content creation today.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Music as Therapy and Expression</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  During the most challenging periods of my academic journey, music became my outlet. Whether performing
                  live or creating beats in my room, music provided the emotional balance I needed to persevere through
                  engineering studies.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This creative side didn't compete with my engineering aspirations; it complemented them. The
                  discipline required for music production taught me patience and attention to detail that directly
                  benefited my technical work.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_04_25_23_04_IMG_8304.JPG-qznTCMwAlZU0Z36VEFJe64dWjRyJSc.jpeg"
                  alt="Samson performing live music at Curiocity venue - Creative expression through music performance"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Live Performance at Curiocity</h5>
                  <p className="text-sm text-gray-700">
                    Performing live music while balancing engineering studies. These performances taught me confidence,
                    stage presence, and the importance of connecting with an audience - skills that now serve me well in
                    content creation.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_09_16_14_33_IMG_0803.JPG-PXYTAeCrDQet86xLXKiWfh1pQf9z5w.jpeg"
                  alt="Samson in urban creative setting - Balancing artistic expression with academic pursuits"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Urban Creative Expression</h5>
                  <p className="text-sm text-gray-700">
                    Finding creative inspiration in urban environments. This artistic side helped me develop a unique
                    perspective that I now bring to educational content creation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Engineering Career */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-green-600 text-white px-4 py-2 text-sm font-semibold">
              👷‍♂️ Professional Engineering
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">From Engineer to Digital Transformer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Building the future through education and content creation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024_02_29_10_14_IMG_9396.JPG-abQB3uhjX0Pqgdjb4LtVOrTDZm8Ur1.jpeg"
                alt="Samson as Resident Engineer at Marumo Consulting - Professional engineering work with safety equipment"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">Resident Engineer at Marumo Consulting</h5>
                <p className="text-sm text-gray-700">
                  Working as a Resident Engineer from 2023-2025, supervising the construction of a 1.1 km road project
                  in Burgersfort. This role taught me project management, quality control, and real-world
                  problem-solving.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2023-2025: From Engineer to Digital Transformer
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From 2023 to 2025, I served as a Resident Engineer at Marumo Consulting Engineers in Burgersfort, where I
                  supervised and managed the construction of a 1.1 km road project. My responsibilities included quality
                  control and assurance, contractor supervision, progress monitoring and reporting, health and safety
                  compliance, material testing coordination, technical problem-solving, stakeholder communication, and
                  ensuring adherence to engineering specifications and municipal standards.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Today, I am a full-time digital influencer and educational entrepreneur under my company CHRIZEECRY COLLECTIVE (PTY) LTD (Enterprise Number: 2025/308227/07). Chrizeecry Collective transforms lives
                  through engineering expertise, mathematics education, music production, and timeless wisdom: built on 8 years of persistence and proven by thousands of success stories.
                </p>
                <blockquote className="text-green-800 italic font-medium border-l-4 border-green-500 pl-4">
                  "My academic journey prepared me perfectly for real-world challenges, but my true calling emerged in
                  democratizing education. Every day on construction sites taught me that the strongest foundations are
                  built through persistence - the same principle I now apply to building educational content that
                  transforms lives."
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_03_12_12_50_IMG_9335.JPG-8sTxiRmdRkffo4C5XhKBoJ3qRafCi8.jpeg"
                alt="Samson conducting field inspections - Hands-on engineering work and quality control"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">Field Inspections & Quality Control</h5>
                <p className="text-sm text-gray-700">
                  Conducting thorough field inspections and ensuring quality control standards. These experiences taught
                  me attention to detail and systematic problem-solving approaches.
                </p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_07_22_10_50_IMG_5301.JPG-DBa1nXGxZZFnkxZPukQroKlRoop8To.jpeg"
                alt="Samson at Wits graduation ceremony - The culmination of 8 years of persistence and hard work"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-2">Graduation Day Victory</h5>
                <p className="text-sm text-gray-700">
                  The moment that made 8 years of struggle worthwhile. Walking across that stage wasn't just about
                  receiving a degree - it was about proving that persistence conquers all obstacles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Bottom Section: The Chrizeecry Difference, Cost of Inaction, FAQ, and CTAs */}
      <section id="chrizeecry-difference" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">💡 Why This Isn't Just Another Course</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">Most programs teach textbooks. We build the <strong>Human Engineer</strong>. In the age of AI, your story is your greatest asset.</p>
          </div>

          {/* Pillars with Glass Effect */}
          <div className="space-y-8">
            {/* 1. The AI-Proof Edge */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#8B4513] mb-3">🧠 1. The AI-Proof Edge</h3>
              <p className="text-gray-800 mb-4">AI can solve equations. It can't replicate <strong>resilience</strong>.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Contextual Intelligence:</strong> Applying engineering principles to the South African reality, from township to boardroom.</li>
                <li><strong>The "Survivor" Mindset:</strong> Learn from a mentor who turned exclusion into a career as a Resident Engineer.</li>
                <li><strong>Emotional Durability:</strong> Technical skills get you in the door. Grit and EQ get you promoted.</li>
              </ul>
            </div>

            {/* 2. The Multi-Sensory Method */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#8B4513] mb-3">🎧 2. The Multi-Sensory "Afro-soul beats and Motswako Rap Songs From Lefatlheng To States" Method</h3>
              <p className="text-gray-800 mb-4"><strong>"Study with a Vibe, Not a Struggle."</strong></p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Rhythmic Learning:</strong> Access the exclusive <em>Chrizeecry Beats</em> library to find your "Deep Work" flow.</li>
                <li><strong>Visual & Auditory Anchors:</strong> Breaking down complex topics with music, visuals, and storytelling.</li>
              </ul>
            </div>

            {/* 3. The R100M Philosophy */}
            <div className="bg-white/50 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold text-[#8B4513] mb-3">🏗️ 3. The R100M Philosophy</h3>
              <p className="text-gray-800 mb-4"><strong>Content → Community → Creation → Capital.</strong> Stop chasing degrees. Start building value.</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li><strong>Beyond the Certificate:</strong> Your NQF 8 (honours-level) matters less than your portfolio. Build a "Public Resume" that gets you noticed.</li>
                <li><strong>The Business of Engineering:</strong> Learn what universities don't teach: negotiation, project management, and personal branding.</li>
              </ul>
            </div>
          </div>

          {/* Cost of Inaction */}
          <CostOfInaction />

          {/* FAQ */}
          <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">❓ Frequently Asked Questions</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 p-4">
                  <h4 className="font-bold text-gray-900">"I'm broke. Can I still join?"</h4>
                  <p className="text-gray-700 mt-1">Yes. <strong>The Vault (R129/month)</strong> gives you the essentials to start climbing for less than a takeout meal.</p>
                </div>
                <div className="bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 p-4">
                  <h4 className="font-bold text-gray-900">"Is this for High School or University?"</h4>
                  <p className="text-gray-700 mt-1">Both. The principles are foundational, whether you're aiming for a Matric distinction or surviving First Year.</p>
                </div>
                <div className="bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 p-4">
                  <h4 className="font-bold text-gray-900">"What if I need 1-on-1 help or private consultation?"</h4>
                  <p className="text-gray-700 mt-1">Join the <strong>Direct Mentorship</strong> (Elite Transformation). I'll be your partner in unlocking your professional and monetary future.</p>
                </div>
                <div className="bg-white/50 backdrop-blur-lg rounded-xl border border-white/30 p-4">
                  <h4 className="font-bold text-gray-900">"Can I get a refund?"</h4>
                  <p className="text-gray-700 mt-1">Since all our resources are digital and immediate, <strong>we do not offer money-back guarantees</strong>. However, if you're not satisfied, we'll give you an extra month free or extra support to ensure you get value.</p>
                </div>
                <div className="bg-amber-100/50 backdrop-blur-lg rounded-xl border border-amber-300 p-4 text-center">
                  <h4 className="font-bold text-amber-900">Have a suggestion or found a bug?</h4>
                  <p className="text-amber-800 text-sm mt-1 mb-3">We're always building. Tell us how to improve this site or our programs.</p>
                  <Button 
                    variant="outline" 
                    className="border-amber-500 text-amber-700 hover:bg-amber-500 hover:text-white font-bold"
                    onClick={() => window.open("https://wa.me/27736043894?text=Hi%20Chris,%20I%20have%20a%20suggestion%20for%20your%20website/program...", "_blank")}
                  >
                    Send Feedback
                  </Button>
                </div>
            </div>
          </div>

          {/* Ready To Transform CTA */}
          <div className="mt-20 text-center bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-2xl p-8 transform hover:shadow-3xl transition-all duration-500">
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mb-4">🚀 Ready to Transform?</h3>
            <p className="text-lg text-gray-800 mb-10 max-w-3xl mx-auto">Join <span className="font-bold text-amber-600">930+ subscribed YouTube students</span> who chose distinction over exclusion.</p>

            <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* THE VAULT */}
              <div className="group relative border border-amber-400/50 rounded-2xl p-6 flex flex-col justify-between bg-amber-50/30 hover:bg-amber-50/70 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div>
                  <h4 className="font-extrabold text-xl text-amber-900">THE VAULT</h4>
                  <p className="text-4xl font-black my-3 text-amber-700">R129<span className="text-base font-medium">/month</span></p>
                  <p className="text-sm text-amber-800 mb-4">Lightweight. Essential. Immediate.</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transform group-hover:-translate-y-1 transition-transform" onClick={() => window.open('#','_blank')}>
                  Get Started
                </Button>
              </div>

              {/* THE COHORT */}
              <div className="group relative border-2 border-[#8B4513] rounded-2xl p-6 flex flex-col justify-between bg-[#8B4513]/10 hover:bg-[#8B4513]/20 shadow-xl scale-105 hover:scale-110 transition-all duration-300">
                <div className="absolute -top-3 right-4 bg-gradient-to-r from-[#8B4513] to-amber-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">BEST VALUE</div>
                <div>
                  <h4 className="font-extrabold text-xl text-[#8B4513]">THE MASTERY COHORT</h4>
                  <p className="text-sm text-gray-600 mb-2">For Technical High Schoolers & Junior Engineers seeking technical dominance</p>
                  <p className="text-4xl font-black my-3 text-[#8B4513]">R374<span className="text-base font-medium">/month</span></p>
                  <p className="text-sm text-gray-700 mb-4">Structured. Mentored. Unbeatable Value.</p>
                </div>
                <Button className="w-full bg-[#8B4513] text-white font-bold shadow-lg hover:shadow-xl transform group-hover:-translate-y-1 transition-transform" onClick={() => window.open('#','_blank')}>
                  Join Cohort
                </Button>
              </div>

              {/* DIRECT MENTORSHIP */}
              <div className="group relative border border-gray-400/50 rounded-2xl p-6 flex flex-col justify-between bg-gray-50/30 hover:bg-gray-50/70 hover:shadow-lg hover:scale-105 transition-all duration-300">
                <div>
                  <h4 className="font-extrabold text-xl text-gray-900">DIRECT MENTORSHIP</h4>
                  <p className="text-4xl font-black my-3 text-gray-700">Apply</p>
                  <p className="text-sm text-gray-800 mb-4">Intensive. Personal. Life-Changing.</p>
                </div>
                <Button variant="outline" className="w-full border-gray-400 text-gray-800 font-bold hover:bg-gray-200 transform group-hover:-translate-y-1 transition-transform" onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}>
                  Apply Now
                </Button>
              </div>
            </div>

            <blockquote className="mt-12 text-gray-800 italic font-semibold text-lg">
              “I teach skills, not guarantees. But if you bring the discipline, I’ll bring the blueprint.”<br/> <strong className="font-bold text-amber-800">Samson Chrizeecry Senyatsi</strong>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Special Recognition Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-amber-600 text-white px-4 py-2 text-sm font-semibold">🙏 Special Recognition</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The People Who Believed</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Behind every success story are the people who believed when belief was hard to find. Their support made
              all the difference.
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-3xl p-8 shadow-xl border border-amber-200 text-center">
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">A Special Thank You</h3>
            <blockquote className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-relaxed italic">
              "To Ms. Itumeleng and the Amrut Foundation team - your belief in my potential when I couldn't see it
              myself changed everything. You didn't just help with finances; you restored my faith in the power of
              community and showed me that sometimes, the right support at the right moment can transform a life
              forever."
            </blockquote>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The garden project we worked on together wasn't just about reducing my outstanding fees - it was about
              planting seeds of hope and watching them grow into something beautiful. Thank you for being the bridge
              between my struggles and my success.
            </p>
          </div>
        </div>
      </section>

      {/* Community Impact & Mentorship Legacy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">

      {/* ...rest of the page... */}

                <div className="text-center space-y-6 mb-16">
            <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">🌱 Community Impact</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">The Circle of Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From receiving support to giving back - how community, mentorship, and the belief of extraordinary people 
              transformed my journey and inspired a lifetime commitment to uplifting others.
            </p>
          </div>

          {/* The Wits ADU Recognition */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Recognition at Wits Academic Development Unit</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    During my darkest academic moments, when I was struggling to find my footing at university, 
                    Ms. Itumeleng Tshwane at the Wits Academic Development Unit saw something in me that I couldn't 
                    see in myself. Despite my academic setbacks, she recognized my resilience, my work ethic, and 
                    my genuine desire to help others succeed.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Her recommendation for me to become a Lead Mentor wasn't just about my academic performance, it was 
                    about my character, my persistence, and my ability to connect with struggling students. She saw 
                    that my journey through adversity had given me something valuable: the ability to understand and 
                    guide others through their own challenges.
                  </p>
                  <blockquote className="text-blue-800 italic font-medium border-l-4 border-blue-500 pl-4">
                    "Ms. Itumeleng, your belief in me when I couldn't believe in myself changed everything. You didn't 
                    just see my potential: you created opportunities for me to discover it. Thank you for being the 
                    bridge between my struggles and my purpose."
                  </blockquote>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_08_05_12_49_IMG_1858.JPG-JaqKS10MWwEGMGeVNyKJgMbU7O3t0f.jpeg"
                  alt="Samson with Ms. Itumeleng at Amrut Foundation networking event - The moment of recognition and community support"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">With Ms. Itumeleng at Amrut Foundation Event</h5>
                  <p className="text-sm text-gray-700">
                    At the Amrut Foundation Bursary Felicitation & Networking Event at ETG House, Sandton. A moment 
                    celebrating the power of community support and mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Amrut Foundation Connection */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200">
              <h3 className="text-2xl font-bold text-[#8B4513] mb-6 text-center">The Amrut Foundation: Where Support Meets Purpose</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Through Ms. Itumeleng's recommendation, I was introduced to <a href="https://amrutfoundation.org.za/about/" target="_blank" rel="noopener noreferrer">Hemang</a> and the Amrut Foundation. 
                    What started as financial support evolved into something much more meaningful: a partnership in 
                    community development and social impact.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The foundation didn't just help reduce my outstanding university fees; they gave me an opportunity 
                    to contribute meaningfully to my community. Working at Tshimangadzo Care Centre in Johannesburg's 
                    Bertrams area, I installed greenhouse structures and developed gardens to feed the community.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This wasn't just about completing a project: it was about understanding that engineering skills 
                    could directly improve lives. Every plant we grew, every structure we built, represented hope 
                    and sustenance for families in need.
                  </p>
                  <blockquote className="text-orange-800 italic font-medium border-l-4 border-orange-500 pl-4">
                    "Much thanks to Amrut Foundation for awakening our spirits and showing us that success is not 
                    just about personal achievement; it's about lifting others as we climb."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Community Service & Safety Initiatives */}
          
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024_12_06_19_41_IMG_2049.JPG-Fk54KH4nzlZBM31mZHCNlC9lsQ4qst.jpeg"
                  alt="Samson during road construction work - Professional growth and community development"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Professional Growth Through Service</h5>
                  <p className="text-sm text-gray-700">
                    Every project, from community gardens to road construction, reinforced my belief that engineering 
                    is about building better communities, not just better structures.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Beyond Projects: Community Safety & Care</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    My commitment to community extended beyond professional projects. Living in Lefatlheng (Mathibestad), Hammanskraal, in the far north of Pretoria, opposite Sempapa Secondary School, I witnessed the challenges our community faced daily. Crime, theft, and mugging were unfortunate realities that affected our neighbors, especially women walking to work in the early morning hours.

                    When I saw community members organizing cleaning initiatives and safety patrols, I knew I had to join them. Having been supported by the Wits community and broader networks, I felt a responsibility to give back to my own neighborhood. Together, we worked to clean our streets and create a safer environment for everyone, understanding that dignity and safety go hand in hand.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mashaba Street - Community Life */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="/images/mashaba-street-goats.jpg"
                  alt="Goats on the completed road near Mashaba Street in Burgersfort - Local community life integrating with new infrastructure"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Life on Mashaba Street</h5>
                  <p className="text-sm text-gray-700">
                    The completed road serving the local community, where even the goats enjoy the smooth new infrastructure. 
                    Shout out to my friend Hendrick Mashaba and T Bone Steak - great friends from Burgersfort who made the journey memorable!
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Community Integration & Friendship</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Working in Burgersfort wasn't just about engineering; it was about building relationships and understanding 
                    the local culture. My friends Hendrick Mashaba and T Bone Steak became like family, teaching me about 
                    Sepedi culture and the mining community around Burgersfort.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This photo captures the essence of rural South African life: where modern infrastructure meets traditional 
                    community living. The goats casually using our newly constructed road shows how engineering projects 
                    become part of the fabric of daily life.
                  </p>
                  <blockquote className="text-green-800 italic font-medium border-l-4 border-green-500 pl-4">
                    "Mashaba Street doesn't actually exist; it's just what we called this area near The Mashabas! 
                    But the friendships and memories we made there are very real. Wish y'all could ride that road 
                    with the same pride we built it with."
                  </blockquote>
                                  </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-xl font-bold text-[#8B4513] mb-4">Giving Back Full Circle</h4>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <blockquote className="text-gray-700 italic mb-4">
                "Giving Back Full Circle ⭕️👷🏾‍♂️🌱 
                Along side Amrut Foundation 
                #givingbackfullcircle #amrutfoundationza

                Reconstruct yourself & give back 

                'THE TRUE MEANING OF LIFE IS TO PLANT TREES UNDER WHOSE SHADE YOU DO NOT EXPECT TO SIT' ~ Nelson Henderson"
              </blockquote>
              <p className="text-sm text-gray-600">
                <a href="https://www.linkedin.com/posts/activity-6946376686938509312-Ohq1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  View original LinkedIn post showcasing community work and greenhouse building at Tshimangadzo Care Centre
                </a>
              </p>
            </div>
          </div>

          {/* Teaching & Giving Back */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Returning to My Roots: Teaching at Mmankala</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    One of my most fulfilling experiences was returning to Mmankala Technical and Commercial High School:
                    the same institution that nurtured my engineering dreams: to teach Euclidean geometry. Standing in 
                    front of that blackboard, I represented something powerful: the 
                    possibility of dreams realized.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Teaching those geometric principles wasn't just about mathematics; it was about showing students 
                    that someone from their community, someone who faced challenges and setbacks, could still achieve 
                    their goals and return to uplift others.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    "Every line I drew on that board was a testament to persistence. Every student who understood a 
                    concept was proof that knowledge, when shared with love and patience, multiplies exponentially."
                  </p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_09_11_13_27_IMG_0209.JPG-rWICWWRn1BSN1cPmQrLOeGKb6DVx0n.jpeg"
                  alt="Samson teaching Euclidean geometry at Mmankala High School - Giving back to his educational roots"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Teaching at My Former High School</h5>
                  <p className="text-sm text-gray-700">
                    Returning to Mmankala Technical and Commercial High School to teach Euclidean geometry, 
                    representing hope and possibility for the next generation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Study Sessions & Friendship */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_09_29_23_32_IMG_1304.PNG-J8Jnfgdt9MDL9pm33Z9qOxHeaUFKuW.png"
                  alt="Samson studying at John Moffat venue, Wits School of Construction - Collaborative learning environment"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Study Sessions at John Moffat Venue</h5>
                  <p className="text-sm text-gray-700">
                    At the Wits School of Construction, finding alternative study spaces that fostered collaboration 
                    and deep learning with friends and fellow students.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-2xl border border-gray-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">The Power of Collaborative Learning</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Some of my most productive study sessions happened at the John Moffat venue in the School of 
                    Construction, rather than our traditional Civil and Environmental Engineering building in The Hillman Building. This 
                    space became our sanctuary: a place where complex engineering concepts became clearer through 
                    collaborative discussion and shared struggle.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These study sessions taught me that learning is not a solitary journey. The friends who sat 
                    with me during those long nights, who explained concepts when I was confused, who celebrated 
                    small victories and supported me through setbacks; they were integral to my success.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    "In that quiet study space, surrounded by laptops and engineering textbooks, we weren't just 
                    learning formulas; we were building the foundation for lifelong friendships and professional networks."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Expression & Brand Building */}
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-2xl border border-pink-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">Building My Creative Brand</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Even during my academic struggles, I never stopped creating. My artist merchandise and music 
                    production weren't just hobbies: they were expressions of my identity and early attempts at 
                    building a personal brand. These photoshoots with friends represented hope and ambition during 
                    uncertain times.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Promoting my music online while studying engineering taught me valuable lessons about marketing, 
                    audience engagement, and content creation: skills that would later become central to my success 
                    as an educational content creator.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    "Every creative project, every photoshoot, every beat I produced was practice for the content 
                    creator I would eventually become. Art and engineering aren't opposites: they're complementary 
                    expressions of human creativity and problem-solving."
                  </p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2022_01_29_11_38_IMG_5489.JPEG-MjxvPfAgpoRnEOco653jOBOhS8rGSc.jpeg"
                  alt="Samson with friends promoting artist merchandise - Building creative brand and community"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Creative Brand Photoshoot</h5>
                  <p className="text-sm text-gray-700">
                    Promoting artist merchandise with friends, building a creative brand while pursuing engineering 
                    studies; balancing multiple passions and future possibilities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Road Construction Legacy */}
          
          {/* The Burgersfort Road Project - Expanded */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">The Burgersfort Road Project: A Testament to Persistence</h3>
            
            {/* Before and After Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative group">
                <img
                  src="/images/underground-boulders.jpg"
                  alt="Massive underground boulders discovered during excavation - 11.79m measurement showing the scale of challenges"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">The Challenge: Underground Boulders</h5>
                  <p className="text-sm text-gray-700">
                    Box-cutting for layer earthworks revealed massive underground boulders covering 80%+ of the road alignment. 
                    Each boulder measured over 11 meters, requiring specialized equipment and patience.
                  </p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="/images/completed-road-final.jpg"
                  alt="Completed 1.1km road with proper markings and cyclists using it - The final result after overcoming all challenges"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">The Victory: Completed Infrastructure</h5>
                  <p className="text-sm text-gray-700">
                    The finished 1.1km road serving the Burgersfort community, complete with proper markings and safe passage 
                    for vehicles and cyclists alike.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction Process Images */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="relative group">
                <img
                  src="/images/road-base-preparation.jpg"
                  alt="Road base preparation and foundation work"
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-xs text-gray-700 font-medium">Base Layer Preparation</p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="/images/road-construction-asphalt.jpg"
                  alt="Asphalt laying process with professional equipment and safety protocols"
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-xs text-gray-700 font-medium">Asphalt Laying Process</p>
                </div>
              </div>

              <div className="relative group">
                <img
                  src="/images/road-completion-equipment.jpg"
                  alt="Final compaction and finishing work with road roller equipment"
                  className="w-full rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                  <p className="text-xs text-gray-700 font-medium">Final Compaction & Finishing</p>
                </div>
              </div>
            </div>

            {/* Project Reflection */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200">
              <h4 className="text-xl font-bold text-[#8B4513] mb-4">Lessons from the Rock</h4>
              <p className="text-gray-700 leading-relaxed mb-4">
                This journey taught me responsibility, perseverance, and presence. It reminded me that engineering is not just 
                about plans and progress logs: it's about impact. It's about building something that lasts, and doing so with integrity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Working in Burgersfort was not just about infrastructure; it was about service. Seeing how our work touched lives, 
                how it opened up safer and more accessible routes for everyday people, reminded me why I chose this path in the first place. 
                Through all the highs and lows of the project, I felt a deep sense of purpose that no textbook or previous experience could have offered.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The process required patience we didn't know we had. When we discovered those massive boulders covering 80% of our 
                planned route, we could have seen it as an insurmountable obstacle. Instead, we saw it as an opportunity to prove 
                our engineering capabilities and problem-solving skills.
              </p>
              <blockquote className="text-amber-800 italic font-medium border-l-4 border-amber-500 pl-4 text-lg">
                "I never wished for an easy project or path because I know what hardships do to people; they turn you into a genius, 
                a persistent and persevering legend in all facets of life. Don't wish it was easier; wish you were better." 
                (Jim Rohn)
              </blockquote>
            </div>
          </div>

          {/* Personal Reflection & Growth */}
          
          
          <div className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <img
                  src="/images/family-graduation-photo.jpg"
                  alt="Samson's graduation day with his mother and brother at Wits University - A family celebration of persistence and achievement"
                  className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                  <h5 className="font-bold text-[#8B4513] mb-2">Family Victory at Wits University</h5>
                  <p className="text-sm text-gray-700">
                    Graduation day with my mother and brother: the two people who believed in me when I couldn't believe in myself.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">For My Mother and Brother: The Ultimate Motivation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Through every setback, every exclusion, every moment of doubt, there were two constant sources of motivation: 
                    my mother and my brother. That honours degree I received wasn't just mine; it belonged to all of us. Every 
                    sacrifice they made, every word of encouragement during my darkest moments, every prayer whispered for my success.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Special recognition goes to my brother, who had to crawl so I could walk. He didn't finish high school, but 
                    he taught me more about life, resilience, and character than any textbook ever could. This Honours degree is 
                    for him too; proof that his sacrifices and wisdom weren't in vain.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Being the first generation in our family to attend and graduate from the top university in Africa: Wits University, 
                    ranked 2nd in Africa and 2nd in South Africa according to US News Best Global Universities Rankings 2024-2025 
                    (Global score 61.9, #264 globally), carried the weight of family dreams and community expectations.
                  </p>
                  <blockquote className="text-yellow-800 italic font-medium border-l-4 border-yellow-500 pl-4 text-lg">
                    "Mama, this degree is yours as much as it is mine. Brother, your wisdom and sacrifice paved this path. 
                    When I walked across that graduation stage, I carried both your dreams and your strength with me. 
                    Everything I achieve is a reflection of the foundation you both built in me."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* The Transformation to Content Creator */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">From Engineer to Digital Transformer</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              Today, I am a full-time content creator, educational entrepreneur, and digital transformer. I've evolved 
              from someone who needed support to someone who provides it. My multi-channel empire reaches thousands
              of students across YouTube, TikTok, Instagram, and other platforms, turning my hard-earned engineering
              knowledge into accessible, life-changing educational content.
            </p>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              I am a creative, always have been, and always will be. Whether it's civil engineering, mathematics,
              music production, tech, AI, HTML, CSS, Next.js, LLM development, or any other field I explore: creativity
              and persistence remain my driving forces.
            </p>
            <p className="text-yellow-100 max-w-4xl mx-auto text-xl font-semibold">
              "The circle is complete: from receiving mentorship to providing it, from being supported by community
              to building communities, from struggling student to successful educator. This is what transformation
              looks like: not just personal success, but the multiplication of opportunity for others."
            </p>
          </div>
        </div>
      </section>

      {/* Premium Offerings Section - The Resilient Engineer Path */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-20">
            <Badge className="bg-gradient-to-r from-[#FF8C00] to-[#8B4513] text-white px-4 py-2 text-sm font-semibold">
              🚀 THE RESILIENT ENGINEER PATH
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              From Exclusion to <span className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">Distinction</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Three strategic paths designed for technical students, engineers, and builders who refuse to accept mediocrity. 
              Choose your transformation level based on your ambition.
            </p>
          </div>

          {/* Pricing Cards - Three Tier System */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* TIER 1: The Vault (Foundation) */}
            <Card className="relative overflow-hidden border-2 border-green-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 left-4">
                <Badge className="bg-green-500 text-white px-3 py-1 text-xs font-bold">FOUNDATION</Badge>
              </div>
              
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">The Vault</CardTitle>
                <p className="text-sm text-gray-600 font-medium mb-4">Library of essentials</p>
                <div className="space-y-1 mb-4">
                  <div className="text-4xl font-bold text-green-600">R129/month</div>
                  <p className="text-sm text-gray-600">or R1,290/year (save 17%)</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3 border-t border-b border-green-200 py-6">
                  <h4 className="font-bold text-gray-900 mb-4">✅ What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Lifetime library access to all Grade 1-12+ Classwork Books in Civil Tech, Engineering Graphics and Design, Maths & Physics resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Daily PDFs with Actionable Steps to a GRIT Engineer</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Access to Free Facebook & Instagram Group</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Calculus & Euclidean Geometry Videos</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Free Daily Youtube Technical Maths and Science shorts</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-sm text-gray-700"><span className="font-bold">Best for:</span> Students building foundational knowledge, cost-conscious learners, those exploring the journey</p>
                </div>

                <Button
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3"
                  onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                >
                  Start Here →
                </Button>
              </CardContent>
            </Card>

            {/* TIER 2: The Mastery Cohort (Community) - ANCHOR/FEATURED */}
            <Card className="relative overflow-hidden border-4 border-amber-500 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 lg:scale-110 lg:z-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-200 to-orange-300 opacity-10 rounded-full -mr-16 -mt-16"></div>
              
              <div className="absolute top-4 right-4 space-y-2">
                <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 text-xs font-bold block text-center">⭐ RECOMMENDED</Badge>
                <Badge className="bg-red-500 text-white px-4 py-2 text-xs font-bold block text-center">25% OFF ⏰</Badge>
              </div>

              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎯</span>
                </div>
                <CardTitle className="text-3xl font-bold text-gray-900 mb-2">The Mastery Cohort</CardTitle>
                <p className="text-sm text-gray-700 font-bold mb-4">I guide you through the fire to secure your professional future</p>
                <div className="space-y-1 mb-4">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600 line-through">R499/month</div>
                    <div className="text-4xl font-bold text-amber-600">R374/month</div>
                    <p className="text-sm text-gray-600"> (Back 2 School Special offer - limited time)</p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3 border-t border-b border-amber-200 py-6">
                  <h4 className="font-bold text-gray-900 mb-4">✅ Everything in The Vault, PLUS:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">12-Week Cohort Program:</span> Structured live workshops with Samson & expert engineers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Weekly Live Sessions:</span> Interactive problem-solving & mentorship circles</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">AI Tools & Career Resources:</span> Resume generator, software stack guides, project templates</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Premium Community:</span> Networking with 500+ technical students & engineers</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Quarterly Genius Box:</span> Curated AI tools, discounts, and exclusive resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-amber-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Affiliate Income:</span> Earn 20-30% on every referral you make</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-4 rounded-lg border-2 border-amber-200">
                  <p className="text-sm text-gray-800"><span className="font-bold">Best for:</span> Serious technical students ready for structured transformation, those seeking live mentorship & peer accountability</p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-3 text-lg shadow-lg"
                  onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                >
                  Join the Cohort Now →
                </Button>
                <p className="text-xs text-center text-gray-600 italic">Limited to 100 spots | First cohort fills fast</p>
              </CardContent>
            </Card>

            {/* TIER 3: The Distinction Bootcamp (Transformation) */}
            <Card className="relative overflow-hidden border-2 border-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-slate-50">
              <div className="absolute top-0 right-0 bg-purple-600 text-white px-8 py-1 rotate-45 translate-x-8 translate-y-2 text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Exclusive
              </div>
              <div className="absolute top-4 left-4">
                <Badge className="bg-purple-600 text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">Elite Transformation</Badge>
              </div>

              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">The Transformation Partner</CardTitle>
                <p className="text-sm text-gray-600 font-medium mb-4">I'm your consultant, big brother, and technical guide. We unlock your hidden potential together.</p>
                <div className="space-y-1 mb-4">
                  <div className="text-4xl font-bold text-purple-600 uppercase tracking-tight">Direct Mentorship</div>
                  <p className="text-xs text-gray-500 font-semibold tracking-wide">Investment: R4,999 (Limited to 5 candidates per quarter)</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3 border-t border-b border-purple-200 py-6">
                  <h4 className="font-bold text-gray-900 mb-4">✅ Everything in The Mastery Cohort, PLUS:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">1-on-1 Coaching:</span> Weekly 30-min calls with Samson focused on your unique goals</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Career Breakthrough Sprint:</span> Personalized job search strategy & portfolio building</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Project Mentorship:</span> Direct feedback on your engineering/technical projects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Fast-Track Certification:</span> Advanced civil engineering & technical credentials</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Lifetime Vault Access:</span> All future updates, tools, and resources included forever</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">Elite Review Trip:</span> Exclusive invitation to our annual 12-week wrap-up workshop & adventure trip (Sun City or similar South African landmarks)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-purple-600 font-bold mt-0.5">→</span>
                      <span className="text-gray-700"><span className="font-bold">VIP Network Pass:</span> Direct access to engineering firms, contractors, and employers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700"><span className="font-bold">Best for:</span> Career changers, civil engineers struggling to find consulting jobs, and professionals seeking rapid advancement through content creation and personal branding.</p>
                </div>

                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3"
                  onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                >
                  Apply for Bootcamp →
                </Button>
              </CardContent>
            </Card>
          </div>

 {/* Authority & Trust Section */}
<div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 border border-slate-800 mb-16 shadow-2xl overflow-hidden relative">
  {/* Decorative background element */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 blur-[100px] -z-0" />
  
  <div className="relative z-10">
    <div className="text-center mb-12">
      <h3 className="text-3xl font-extrabold tracking-tight mb-4">
        Why the Chrizeecry Method Works
      </h3>
      <p className="text-slate-400 max-w-2xl mx-auto">
        Combining expert academic theory from Wits University with the grit of real-world site engineering.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        {/* The Academic Edge */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center border border-amber-500/50">
            <span className="text-amber-500 font-bold">01</span>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">The Wits Engineering Pedigree</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              I survived the 2x academic exclusion trap at Wits to graduate as a <span className="text-white font-semibold">BSc Civil Engineer</span>. I don't just teach the syllabus; I teach the resilience needed to survive the hardest degree in Africa.
            </p>
          </div>
        </div>

        {/* Real World Authority */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/50">
            <span className="text-blue-500 font-bold">02</span>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">Real-World Site Authority</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              As a Resident Engineer on major <span className="text-white font-semibold">1.1km infrastructure projects</span>, I bring practical site knowledge into the classroom. My students see how theory builds real roads and bridges.
            </p>
          </div>
        </div>

        {/* Multi-Sensory Approach */}
        <div className="flex gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/50">
            <span className="text-purple-500 font-bold">03</span>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-2">The Lo-Fi Focus System</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              I am the <span className="text-white font-semibold">Lo-Fi Study Architect</span>. By combining Motswako-inspired beats with technical visualisations, I help students enter a "flow state" where complex EGD and Calculus become second nature.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 shadow-inner">
        <h4 className="text-center font-bold mb-6 text-amber-500 uppercase tracking-widest text-sm">
          Proven Excellence
        </h4>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-2xl font-black text-white">90%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Civil Tech Score</div>
          </div>
          <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-2xl font-black text-white">83%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter">EGD Distinction</div>
          </div>
          <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-2xl font-black text-white">1000+</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Students Coached</div>
          </div>
          <div className="text-center p-4 bg-slate-900 rounded-xl border border-slate-700">
            <div className="text-2xl font-black text-white">8 yrs</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-tighter">Field Experience</div>
          </div>
        </div>
        
        <button 
          onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
          className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-black py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
        >
          SECURE YOUR SPOT NOW <span className="text-xl">→</span>
        </button>
        <p className="text-[10px] text-center text-slate-500 mt-4 px-4 leading-tight">
          Limited capacity for live mentorship. We prioritize students who are ready to put in the disciplined effort required for distinction.
        </p>
      </div>
    </div>
  </div>
</div>

          {/* Final CTA */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Ready to Transform?</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              No matter where you're starting, there's a path designed for your journey. Join 1000+ technical students 
              who refused to accept exclusion and chose distinction instead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 text-lg shadow-lg"
                onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
              >
                View All Options
              </Button>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.open("https://collective.chrizeecry.com/meet-and-great-the-community", "_blank")}
              >
                Start Free (No Card Required)
              </Button>
            </div>
            <p className="text-sm text-gray-600 italic">
              Questions? Join our free WhatsApp community first to connect with current members and ask anything.
            </p>
          </div>
        </div>
      </section>

      {/* The Story Section */}
      <section id="story" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <Badge className="bg-[#8B4513] text-white px-4 py-2 text-sm font-semibold">📖 The Real Story</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">From Exclusion to Engineer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              "They told me I wouldn't make it. But eight years later, I walked out with an engineering degree from Wits:
              not just with a certificate, but with a spine forged through fire."
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What most don't know is how brutal the journey was: not just academically, but emotionally, financially,
              and spiritually. My path wasn't straight. It was filled with academic exclusions, financial struggles, and
              moments of deep doubt. But each setback became a building block for resilience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">"I wasn't supposed to make it."</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My academic record at Wits University tells a story most people wouldn't be proud of. But I am: not
                  because I struggled, but because I overcame. I started my BSc in Civil Engineering in 2014. Year after
                  year, I faced delays, exclusions, and setbacks: both academic and financial.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I was excluded more than once. Had to apply for readmission. Permitted to proceed on special
                  curriculum. Told to repeat years. It wasn't linear. It wasn't smooth. But it was mine.
                </p>
                <p className="text-gray-700 font-semibold text-lg">
                  Every challenge shaped me. In 2021, I completed all requirements and qualified. Not just with a degree,
                  but with a mindset built on grit and endurance.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-[#FFD700] mb-2">2014</div>
                  <div className="text-sm text-gray-600">Started at Wits</div>
                  <div className="text-xs text-[#8B4513] font-medium">Full of hope</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-red-500 mb-2">2017</div>
                  <div className="text-sm text-gray-600">Academic Exclusion</div>
                  <div className="text-xs text-red-600 font-medium">Darkest moment</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-500 mb-2">2020</div>
                  <div className="text-sm text-gray-600">Lead Mentor</div>
                  <div className="text-xs text-blue-600 font-medium">Helping others</div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold text-green-500 mb-2">2021</div>
                  <div className="text-sm text-gray-600">Qualified</div>
                  <div className="text-xs text-green-600 font-medium">Victory!</div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1668147787826.jpg-cR1GBXeiv933iVLb4i5P7gHfG4SCUe.jpeg"
                alt="Samson's complete journey - from graduation to professional engineer"
                className="w-full max-w-2xl mx-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 group-hover:translate-y-1">
                <h4 className="font-bold text-[#8B4513] mb-2">Graduation Day Victory</h4>
                <p className="text-sm text-gray-700">
                  After 8 years of struggle, the moment that made it all worthwhile. A victory against all odds.
                </p>
              </div>
            </div>
          </div>

          {/* Academic Journey Table */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">My Academic Journey</h3>
            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Term</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Program</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">YOS</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Progression Outcome</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2021</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 4</td>
                    <td className="py-3 px-4 text-sm font-medium text-green-600">
                      Q - Completed all requirements for qualification
                    </td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2020</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 3</td>
                    <td className="py-3 px-4 text-sm font-medium text-blue-600">
                      PSC - Permitted to proceed on a special curriculum
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2019</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 3</td>
                    <td className="py-3 px-4 text-sm font-medium text-yellow-600">
                      M1C - Renewal of registration permitted by Wits Readmissions Committee
                    </td>
                  </tr>
                  <tr className="hover:bg-yellow-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2018</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 3</td>
                    <td className="py-3 px-4 text-sm font-medium text-yellow-600">
                      M1C - Renewal of registration permitted by Wits Readmissions Committee
                    </td>
                  </tr>
                  <tr className="hover:bg-orange-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2017</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 3</td>
                    <td className="py-3 px-4 text-sm font-medium text-orange-600">
                      MBR - Exclusion waived - must return to the same year of study
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2016</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 2</td>
                    <td className="py-3 px-4 text-sm font-medium text-green-600">PCD - Permitted to proceed</td>
                  </tr>
                  <tr className="hover:bg-red-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2015</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 2</td>
                    <td className="py-3 px-4 text-sm font-medium text-red-600">
                      RET - Must return to complete requirements for year of study
                    </td>
                  </tr>
                  <tr className="hover:bg-green-50 transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-700">2014</td>
                    <td className="py-3 px-4 text-sm text-gray-700">BSc Eng (Civil)</td>
                    <td className="py-3 px-4 text-sm text-gray-700">YOS 1</td>
                    <td className="py-3 px-4 text-sm font-medium text-green-600">PCD - Permitted to proceed</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-md">
              <h4 className="font-bold text-gray-900 mb-3">Legend: Wits Exams Board Progression Codes</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-green-600">Q</span>
                  <span className="text-gray-700">
                    Qualification Completed: All degree requirements met. Final year successfully completed.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-blue-600">PSC</span>
                  <span className="text-gray-700">
                    Permitted to Proceed on Special Curriculum: Allowed to continue with modified course load.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-yellow-600">M1C</span>
                  <span className="text-gray-700">
                    Readmissions Committee Approval: Permitted to re-register after academic review.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-orange-600">MBR</span>
                  <span className="text-gray-700">
                    Exclusion Waived: Academic exclusion lifted, must repeat the year of study.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-green-600">PCD</span>
                  <span className="text-gray-700">
                    Permitted to Proceed: Successfully completed year requirements, advance to next level.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-semibold text-red-600">RET</span>
                  <span className="text-gray-700">
                    Return to Complete: Must return to complete outstanding requirements for current year.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* From Exclusion to Engineer: My Journey at Wits */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white mb-12">
              <h3 className="text-3xl font-bold mb-6 text-center">From Exclusion to Engineer: My Journey at Wits</h3>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg leading-relaxed">I wasn't supposed to make it.</p>

                <p className="text-lg leading-relaxed">
                  My academic record at Wits University tells a story most people wouldn't be proud of. But I am: not
                  because I struggled, but because I overcame. I started my BSc in Civil Engineering in 2014. Year after
                  year, I faced delays, exclusions, and setbacks: both academic and financial. I was excluded more than
                  once. Had to apply for readmission. Permitted to proceed on special curriculum. Told to repeat years.
                  It wasn't linear. It wasn't smooth. But it was mine.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-yellow-100">Every challenge shaped me.</p>

                <p className="text-lg leading-relaxed">
                  In 2021, I completed all requirements and qualified. Not just with a degree, but with a mindset built
                  on grit and endurance.
                </p>

                <p className="text-lg leading-relaxed">
                  And this pattern didn't just show up in school. When I was part of the road construction project in
                  Burgersfort, we hit delays, unexpected issues, and major pressure. But just like my student journey, I
                  pushed through. I saw it through: from breaking ground to full functional completion.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-yellow-100">Because that's who I am.</p>

                <p className="text-xl leading-relaxed font-bold text-center text-yellow-100">
                  I'm that engineer who endures at every level. I thrive under pressure and stand tall like the sun in
                  the sky: always shining, no matter what.
                </p>
              </div>
            </div>

            {/* Detailed Academic Timeline */}
            <div className="space-y-12">
              {/* 2011-2013: High School Excellence */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">2011-2013: High School Excellence</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At Mmankala Commercial & Technical High School, I discovered my passion for engineering through
                  subjects like Civil Technology and Engineering Graphics & Design. I consistently topped my classes,
                  developing a strong foundation that would later help me persevere through university challenges.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Subjects:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Civil Technology</li>
                      <li>• Engineering Graphics & Design</li>
                      <li>• Mathematics</li>
                      <li>• Physical Sciences</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-green-800 italic font-medium">
                      "I graduated with 3 straight A+ (Level 7s) and 4 Level 6s in my NSC results. My teachers saw
                      potential in me that I would later have to remind myself of during the toughest university years."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2015: First Setback */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2015: First Setback (RET - Must Return to Complete Requirements)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  My first major academic challenge came in second year. I struggled with some of the core engineering
                  subjects and was required to repeat the year to complete outstanding requirements. This was my first
                  taste of academic adversity.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Challenging Subjects:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Structural Mechanics</li>
                      <li>• Materials Science</li>
                      <li>• Fluid Mechanics</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-orange-800 italic font-medium">
                      "This was the year I learned that university wasn't just about being smart: it was about
                      resilience, time management, and developing effective study methods. I had to completely rethink
                      my approach to learning."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2016: Second Year Success */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2016: Second Year Success (PCD - Permitted to Proceed)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After repeating second year, I found my stride. I developed better study habits and began to truly
                  understand the engineering principles. This was the year I started tutoring other students in
                  engineering graphics and design, discovering my talent for explaining complex concepts.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Subjects:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Engineering Surveying</li>
                      <li>• Construction Materials</li>
                      <li>• AutoCAD</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-green-800 italic font-medium">
                      "When I started helping other students with their work, I realized that teaching was actually
                      strengthening my own understanding. This discovery would later become a cornerstone of my
                      professional identity."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2017: Academic Exclusion */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-2xl border border-red-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2017: Academic Exclusion (MBR - Exclusion Waived, Must Return to Same Year)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Third year brought new challenges with advanced engineering concepts. I faced academic exclusion but
                  successfully appealed, having my exclusion waived. This was a pivotal moment that taught me to
                  advocate for myself and navigate institutional systems.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Advanced Subjects:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Structural Analysis</li>
                      <li>• Reinforced Concrete Design</li>
                      <li>• Geotechnical Engineering</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-red-800 italic font-medium">
                      "The day I received my exclusion letter was one of the darkest of my life. But preparing my appeal
                      forced me to reflect deeply on my purpose and commitment. When the exclusion was waived, I knew I
                      had been given a second chance I couldn't waste."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2018-2019: Readmission Years */}
              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2018-2019: Readmission Years (M1C - Readmission with Conditions)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For two consecutive years, I had to apply for readmission through the Wits Readmissions Committee.
                  Each time, I had to prove why I deserved another chance. During this period, I worked on notable
                  projects including a reinforced concrete design for a double-storey factory and a steel design hangar
                  for a Cessna aircraft.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Key Projects & Skills:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Transportation Engineering</li>
                      <li>• Steel Design</li>
                      <li>• Prokon</li>
                      <li>• Revit</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-yellow-800 italic font-medium">
                      "These years taught me persistence like nothing else. I designed a sewer pipeline along the
                      Pienaars river valley between Mamelodi and Baviaanspoort, analyzing structural loads and
                      estimating quantities. Each project was both a technical challenge and a chance to prove my
                      capabilities."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2020: Special Curriculum */}
              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-8 rounded-2xl border border-purple-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2020: Special Curriculum (PSC - Permitted to Proceed on Special Curriculum)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The university created a special curriculum for me to progress, recognizing my determination despite
                  past struggles. This was also when I began working as a Lead Mentor at Wits Academic Development &
                  Leadership Unit, helping other students navigate their own academic challenges.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">Focus Areas:</h5>
                    <ul className="space-y-1 text-gray-700">
                      <li>• Integrated Resource Management</li>
                      <li>• Infrastructure Planning</li>
                      <li>• Mentorship</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <blockquote className="text-purple-800 italic font-medium">
                      "As a Lead Mentor, I achieved an 80% success rate in helping mentees continue to the next academic
                      year. The irony wasn't lost on me; I was helping others succeed while still fighting for my own
                      academic survival."
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* 2021: Qualification Completed */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">
                  2021: Qualification Completed (Q - Completed All Requirements)
                </h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After eight years of persistence, I completed all requirements for my BSc in Civil Engineering.
                  However, financial constraints prevented me from receiving my physical degree immediately.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <blockquote className="text-green-800 italic font-medium text-lg">
                    "The moment I saw 'Q - Completed all requirements for qualification' on my academic record was
                    surreal. Eight years of struggle, condensed into a single letter code. But that 'Q' represented a
                    victory against all odds."
                  </blockquote>
                </div>
              </div>

              {/* 2022: Receiving Physical Degree */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
                <h4 className="text-2xl font-bold text-[#8B4513] mb-4">2022: Receiving My Physical Degree</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With the help of Amrut Foundation and the Wits Mentorship program, I worked on a garden project with a
                  Johannesburg CBD community home. In exchange, they helped reduce my outstanding fees, allowing me to
                  finally receive my physical BSc Honours degree (NQF level 8) in Civil and Environmental Engineering.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <blockquote className="text-blue-800 italic font-medium">
                    "Even after completing all academic requirements, I still had to overcome financial hurdles. Working
                    with the community garden project reminded me that engineering isn't just about technical
                    skills; it's about building and nurturing growth in all its forms."
                  </blockquote>
                </div>
              </div>

              {/* 2023-Present: Professional Career */}
              <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] p-8 rounded-2xl text-white">
                <h4 className="text-2xl font-bold mb-4">2023-2025: Professional Engineering Career</h4>
                <p className="leading-relaxed mb-4">
                  From 2023 to 2025, I served as a Resident Engineer at Marumo Consulting Engineers in Burgersfort, where I supervised and managed the
                  construction of a 1.1 km road project. My academic journey prepared me perfectly for the real-world
                  challenges of engineering projects, where delays, unexpected issues, and pressure were constant
                  companions.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <blockquote className="text-yellow-100 italic font-medium">
                    "Every day on site, I draw on the resilience I developed at Wits. When we face construction
                    challenges, I remember the academic obstacles I overcame. The road we're building is straight and
                    well-designed, unlike my path to becoming an engineer, but both lead to valuable destinations."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Key Milestones Table */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">Key Milestones</h4>
              <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Year</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Milestone</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2013</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Graduated high school with distinction</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Achieved 3 A+ (Level 7s) and 4 Level 6s in NSC results
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2014</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Started engineering at Wits</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Received University Entrance Scholarship</td>
                    </tr>
                    <tr className="hover:bg-orange-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2015</td>
                      <td className="py-3 px-4 text-sm text-gray-700">First academic setback</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Required to repeat second year</td>
                    </tr>
                    <tr className="hover:bg-red-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2017</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Academic exclusion & successful appeal</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Learned to advocate for myself and navigate institutional systems
                      </td>
                    </tr>
                    <tr className="hover:bg-yellow-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2018-2019</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Readmission years</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Worked on major projects including reinforced concrete design and steel hangar
                      </td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2020</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Special curriculum approval</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Became Lead Mentor at Wits Academic Development Unit
                      </td>
                    </tr>
                    <tr className="hover:bg-green-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2021</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Completed all degree requirements</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Qualified after 8 years of persistence</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2022</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Received physical degree</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Worked with Amrut Foundation to resolve financial constraints
                      </td>
                    </tr>
                    <tr className="hover:bg-amber-50 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">2023</td>
                      <td className="py-3 px-4 text-sm text-gray-700">Started as Resident Engineer</td>
                      <td className="py-3 px-4 text-sm text-gray-700">
                        Managing 1.1km road construction project in Burgersfort
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* How This Journey Shapes My Work */}
            <div className="mt-12 bg-gradient-to-r from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
              <h4 className="text-2xl font-bold text-center mb-8 text-gray-900">How This Journey Shapes My Work</h4>
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                My 8-year journey taught me lessons that I now bring to every project and client relationship:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-[#FFD700]">
                    <h5 className="font-bold text-gray-900 mb-2">Persistence Through Obstacles</h5>
                    <p className="text-gray-700 text-sm">
                      I don't quit when challenges arise. I've developed systems to push through difficulties and find
                      solutions where others see only problems.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-red-500">
                    <h5 className="font-bold text-gray-900 mb-2">Deep Understanding of Failure</h5>
                    <p className="text-gray-700 text-sm">
                      I've experienced setbacks firsthand and know how to recover, adapt, and ultimately succeed despite
                      them.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-blue-500">
                    <h5 className="font-bold text-gray-900 mb-2">Empathy for the Struggling</h5>
                    <p className="text-gray-700 text-sm">
                      I connect with those facing challenges because I've been there. This shapes how I teach, mentor,
                      and support others.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-l-green-500">
                    <h5 className="font-bold text-gray-900 mb-2">Appreciation for Process</h5>
                    <p className="text-gray-700 text-sm">
                      I value the journey as much as the destination, finding meaning and growth in every step of the
                      process.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Quote */}
            <div className="mt-12 bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
              <blockquote className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed italic">
                "Engineering taught me that every structure has a breaking point. But more importantly, it taught me
                that with proper design, materials, and maintenance, structures can withstand forces far beyond what
                seems possible. The same is true for people."
              </blockquote>
              <p className="text-xl font-semibold text-yellow-100">(Samson Senyatsi)</p>
            </div>
          </div>

          {/* The Transformation */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">The Transformation</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              What started as academic struggle became my greatest strength. I learned to endure, adapt, and persist
              when everything seemed impossible. I discovered that resilience isn't about never falling; it's about
              getting up every time you do.
            </p>
            <p className="text-yellow-100 max-w-4xl mx-auto">
              Today, I use these hard-earned lessons to help others navigate their own challenges. My methods aren't
              theoretical: they're battle-tested through years of real struggle and eventual triumph.
            </p>
          </div>
        </div>
      </section>

      {/* Educational Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-amber-100 text-[#8B4513] border-amber-200">💎 THE KNOWLEDGE VAULT</Badge>
                <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                  Master the Fundamentals of <br />
                  <span className="text-amber-600 italic underline decoration-amber-300 underline-offset-8">Resilient Engineering</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Success in South African schools and industry isn't just about formulas: it's about the <span className="font-bold underline">Euclidean logic</span> of problem-solving. Whether you're a parent supporting a student or a Civil Engineer building your personal brand, we bridge the gap between theory and legacy.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-all border-t-4 border-t-amber-500">
                  <Calculator className="w-10 h-10 text-amber-600 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Technical Mastery</h4>
                  <p className="text-sm text-gray-600">Deep dives into Calculus & Euclidean Geometry for Grade 10-12 and beyond.</p>
                </Card>
                <Card className="p-6 border-none shadow-md bg-white hover:shadow-xl transition-all border-t-4 border-t-blue-500">
                  <Star className="w-10 h-10 text-blue-600 mb-4" />
                  <h4 className="font-bold text-lg mb-2">Personal Branding</h4>
                  <p className="text-sm text-gray-600">Learn content creation skills to stand out in the consulting engineering market.</p>
                </Card>
              </div>

              <Button 
                onClick={() => scrollToSection("community")}
                className="group bg-slate-900 text-white hover:bg-black px-8 py-6 rounded-2xl font-bold text-lg"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-orange-500/20 blur-3xl rounded-full" />
              <div className="relative bg-white p-8 rounded-3xl shadow-2xl border border-amber-100">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="mr-2">📝</span> Featured Study Resources
                </h3>
                <div className="space-y-4">
                  {[
                    "Handwritten Wits Civil Engineering Notes",
                    "Euclidean Geometry: The Visual Logic Guide",
                    "Calculus for Technical Excellence",
                    "Consulting Career Breakthrough Roadmap"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center p-3 rounded-xl bg-amber-50/50 border border-amber-100 hover:bg-amber-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-amber-600 font-bold mr-4">
                        {i + 1}
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
                  <p className="text-xs text-gray-500 font-medium">Join 2,500+ members in the collective</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
{/* fix the syntax error */}
<div className="max-w-7xl mx-auto">
  <div className="text-center space-y-6 mb-16">
    <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-semibold">🤝 Join Our Community</Badge>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Connect with Like-Minded Learners</h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
      Join our growing community across mathematics, engineering, music, and life wisdom. Choose free channels
      or premium memberships.
    </p>
  </div>

  <div className="grid lg:grid-cols-2 gap-12 mb-16">
    {/* Free Community */}
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Free WhatsApp Channels</h3>
        <p className="text-gray-600">
          Join our free community channels to get basic tips, updates, and connect with fellow learners.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { name: "🧠 Maths Academy", description: "Growing community", color: "green" },
          {
            name: "🏗️ Civil & Structural",
            description: "Active discussions",
            color: "amber",
            badge: "Most Active",
          },
          { name: "🎵 Music & Media", description: "Creative collaborators", color: "purple" },
          { name: "💽 Curated Nostalgia", description: "Nostalgic thinkers", color: "gray" },
        ].map((channel, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-gray-900">{channel.name}</h4>
                  {channel.badge && (
                    <Badge className="bg-red-600 text-white text-xs px-2 py-1">{channel.badge}</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{channel.description}</p>
              </div>
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  window.open(
                    "https://collective.chrizeecry.com/meet-and-great-the-community",
                    "_blank",
                  )
                }
              >
                Join Free
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>

    {/* Exclusive Transformation Paths */}
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Elite Transformation Paths</h3>
        <p className="text-gray-600">
          I'll be your consultant and "big brother" on these paths. We'll unlock high-income skills and technical mastery together.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { name: "🧠 Maths Academy", price: "R129/month", color: "green" },
          { name: "🏗️ Civil & Structural", price: "R374/month", color: "amber", badge: "Most Popular" },
          { name: "🎵 Music & Media", price: "R374/month", color: "purple" },
          { name: "💎 Complete Collective", price: "R4999/month", color: "yellow" },
        ].map((membership, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#FFD700]"
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-bold text-gray-900">{membership.name}</h4>
                  {membership.badge && (
                    <Badge className="bg-red-600 text-white text-xs px-2 py-1">{membership.badge}</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600">{membership.price}</p>
              </div>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] text-[#8B4513] hover:from-[#FF8C00] hover:to-[#FFD700]"
                onClick={() => handleLeadCapture("premium-community")}
              >
                Join Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </div>

  {/* Community Stats - Based on Real Social Media Following */}
  <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-8 shadow-2xl text-white text-center">
    <h3 className="text-2xl font-bold mb-8">Social Media Reach</h3>
    <div className="grid md:grid-cols-4 gap-8">
      <div>
        <div className="text-4xl font-bold mb-2">6930+</div>
        <div className="text-blue-100">Total Followers</div>
        <div className="text-sm text-blue-200">Across all platforms</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">178K+</div>
        <div className="text-blue-100">Video Views</div>
        <div className="text-sm text-blue-200">Educational content</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">486+</div>
        <div className="text-blue-100">Videos Created</div>
        <div className="text-sm text-blue-200">Educational & creative</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">6</div>
        <div className="text-blue-100">Platforms</div>
        <div className="text-sm text-blue-200">Multi-platform presence</div>
      </div>
    </div>
  </div>
</div>
</section>

{/* Knowledge Vault & Technical Mastery Section */}
<section className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
  <div className="container mx-auto px-4 relative z-10">
    <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
      <Badge className="bg-amber-500 text-black font-black uppercase tracking-widest px-4 py-2">The STEM Blueprint</Badge>
      <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
        Master the Big 4: <br/>
        <span className="text-amber-500 italic">EGD, Civil Tech, Maths & Science</span>
      </h2>
      <p className="text-xl text-gray-400 font-medium leading-relaxed">
        Designed by a Wits Civil Engineer who survived two academic exclusions so you don't have to. 
        We don't just teach subjects; we build non-linear futures.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { title: "Technical Maths", desc: "Calculus, Euclidean Geometry, and Exam Hacks.", icon: <Calculator className="w-8 h-8"/> },
        { title: "EGD & Civil Tech", desc: "Stop guessing Isometric and Sectional views.", icon: <ArrowRight className="w-8 h-8"/> },
        { title: "Study Beats", desc: "Technical beats (AfroSoul/Amapiano) for deep focus.", icon: <Music className="w-8 h-8"/> },
        { title: "AI Tutors", icon: <Star className="w-8 h-8"/>, desc: "Prompt engineering for 24/7 tutor access." }
      ].map((item, i) => (
        <Card key={i} className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-amber-500/50 transition-all group">
          <CardContent className="p-8 space-y-4">
            <div className="text-amber-500 group-hover:scale-110 transition-transform">{item.icon}</div>
            <h3 className="text-xl font-black uppercase">{item.title}</h3>
            <p className="text-sm text-gray-400 font-medium leading-relaxed">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Book Waitlist Section */}
<section className="py-20 bg-amber-500 text-black overflow-hidden relative">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
          "Exclusion <br className="hidden md:block"/> To Engineer" <br/>
          <span className="text-white">The Book</span>
        </h2>
        <p className="text-xl font-bold italic leading-relaxed">
          My life has always been non-linear. This is the raw, unfiltered story of how I turned 2x Wits exclusions into a BSc (Hons) Civil Engineering degree. 
          Learn the "Grit Systems" they don't teach in lecture halls.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            readOnly
            value="WhatsApp your email to: +27 73 604 3894"
            className="flex-grow px-6 py-4 rounded-xl bg-black text-amber-500 font-bold border-2 border-amber-500/50"
          />
          <Button 
            className="bg-white text-black font-black uppercase px-8 py-6 rounded-xl hover:bg-black hover:text-white transition-all shadow-xl"
            onClick={() => window.open("https://wa.me/27736043894?text=Hi%20Chris,%20I'd%20like%20to%20join%20the%20Waitlist%20for%20your%20book%20Exclusion%20To%20Engineer.", "_blank")}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 relative group">
         <div className="aspect-[3/4] bg-black rounded-2xl shadow-2xl flex items-center justify-center p-12 relative overflow-hidden transform hover:rotate-2 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-transparent opacity-50"></div>
            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-5xl font-black text-white uppercase italic tracking-tighter leading-none">Exclusion <br/> To <br/> Engineer</h3>
              <p className="text-amber-400 font-black uppercase tracking-widest text-sm">By Samson Chris Senyatsi</p>
              <div className="pt-8">
                 <Badge className="bg-white text-black font-black text-lg px-6 py-2">COMING 2026</Badge>
              </div>
            </div>
         </div>
         <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl transform -rotate-12 border-4 border-black z-20">
            <span className="text-4xl font-black italic">GRIT</span>
         </div>
      </div>
    </div>
  </div>
</section>

{/* Contact & Inquiry Section */}
<section id="contact" className="py-24 bg-white relative">
  <div className="container mx-auto px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-black uppercase italic tracking-tighter">Let's Build</h2>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Whether you're a parent seeking a mentor for your child, a teacher looking for resources, 
              or a business wanting to sponsor the bright minds of Lefatlheng: I'm ready to talk.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="space-y-4 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black uppercase text-xs text-amber-600 tracking-widest mb-1">Company Details</h4>
                <p className="font-black text-gray-900 leading-tight">Chrizeecry Collective (Pty) Ltd</p>
                <p className="text-xs text-gray-500 mt-1">Reg No: 2025 / 308227 / 07</p>
              </div>
            </div>

            <div className="space-y-4 p-6 bg-amber-50 rounded-2xl border border-amber-100">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-white">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black uppercase text-xs text-amber-600 tracking-widest mb-1">Direct Line</h4>
                <p className="font-black text-gray-900">+27 73 604 3894</p>
                <p className="text-xs text-gray-500 mt-1">chrizeecry@gmail.com</p>
              </div>
            </div>
          </div>

          <Card className="bg-gray-950 text-white border-none shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <CardContent className="p-8 relative z-10">
              <h4 className="font-black uppercase mb-4 text-amber-400 tracking-widest italic">Sponsorship & Vision</h4>
              <p className="text-lg text-gray-300 font-medium leading-relaxed italic">
                "As a solopreneur focusing on the 'Big 4', I need partners to sponsor drawing tools, 
                WiFi for kids in Lefatlheng, and books. Let's empower those bright minds."
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-none rounded-3xl overflow-hidden">
          <div className="h-4 bg-gradient-to-r from-amber-400 to-orange-500"></div>
          <CardContent className="p-10 md:p-12 space-y-8">
            <h3 className="text-3xl font-black uppercase italic tracking-tighter">Direct Connection</h3>
            <div className="space-y-6">
              <p className="text-gray-600 font-medium italic">
                "No complicated forms here. I'm a real person, and I want to help you or your child succeed. Choose how you'd like to connect below:"
              </p>
              
              <div className="grid gap-4">
                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase py-8 rounded-2xl transition-all shadow-xl text-lg tracking-widest flex items-center justify-center space-x-3"
                  onClick={() => window.open("https://wa.me/27736043894?text=Hi%20Chris,%20I'm%20inquiring%20about...", "_blank")}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp Me Directly</span>
                </Button>

              

                <div className="text-center pt-4">
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Or Email</p>
                  <a href="mailto:chrizeecry@gmail.com" className="text-xl font-black text-gray-900 hover:text-amber-500 transition-colors tracking-tight">chrizeecry@gmail.com</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

<Footer />

{showDiscountPopup && (
  <div className={`fixed bottom-10 right-5 md:right-10 z-[100] transition-all duration-500 ${discountMinimized ? 'w-auto' : 'max-w-sm w-full'}`}>
    {discountMinimized ? (
      <button
        onClick={() => setDiscountMinimized(false)}
        className="bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center space-x-2"
      >
        <Star className="w-6 h-6 fill-current" />
        <span className="font-bold pr-2 text-sm">25% OFF</span>
      </button>
    ) : (
      <div className="bg-white shadow-2xl border-2 border-orange-500 p-6 rounded-2xl transform animate-in slide-in-from-bottom-20">
        <div className="flex justify-end space-x-2 absolute top-2 right-2">
          <button 
            onClick={() => setDiscountMinimized(true)} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            title="Minimize"
          >
            <Minus className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setShowDiscountPopup(false)} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Star className="w-6 h-6 text-orange-600 fill-current" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">⏰ Limited Offer!</h3>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Get <span className="font-bold text-orange-600 text-lg">25% OFF</span> the Mastery Cohort today.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4 text-center">
          <span className="text-sm text-amber-800 font-medium">Use code:</span>
          <div className="text-xl font-mono font-bold text-[#8B4513] tracking-wider mt-1 select-all">
            CHRIS25
          </div>
        </div>
        <Button 
          className="w-full bg-black hover:bg-gray-800 text-white py-6 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-[1.02]"
          onClick={() => {
            window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")
            setShowDiscountPopup(false)
          }}
        >
          Claim My Discount
        </Button>
      </div>
    )}
  </div>
)}

{showCommunityPopup && (
  <div className={`fixed bottom-10 left-5 md:left-10 z-[100] transition-all duration-500 ${communityMinimized ? 'w-auto' : 'max-w-sm w-full'}`}>
    {communityMinimized ? (
      <button
        onClick={() => setCommunityMinimized(false)}
        className="bg-[#8B4513] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center space-x-2"
      >
        <GraduationCap className="w-6 h-6" />
        <span className="font-bold pr-2 text-sm">Study Vault</span>
      </button>
    ) : (
      <div className="bg-white shadow-2xl border-2 border-amber-400 p-6 rounded-2xl transform animate-in slide-in-from-bottom-20">
        <div className="flex justify-end space-x-2 absolute top-2 right-2">
          <button 
            onClick={() => setCommunityMinimized(true)} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            title="Minimize"
          >
            <Minus className="h-5 w-5" />
          </button>
          <button 
            onClick={() => setShowCommunityPopup(false)} 
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-amber-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900">🎁 Free Study Vault</h3>
        </div>
        <p className="text-gray-600 mb-4 leading-relaxed text-sm">
          Download <span className="font-bold text-amber-700">Wits Handwritten Notes</span>, Grade 1-12 resources, and get exclusive freebies. 
          Perfect for students, parents, and junior engineers.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-start text-xs text-gray-500">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1 flex-shrink-0" />
            <span>Calculus & Euclidean Geometry Guides (Technical Maths & Science)</span>
          </div>
          <div className="flex items-start text-xs text-gray-500">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1 flex-shrink-0" />
            <span>Civil Engineering Consulting & Content Creation Skills</span>
          </div>
          <div className="flex items-start text-xs text-gray-500">
            <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-1 flex-shrink-0" />
            <span>Unlock monetary skills even if you are shy or "not cool"</span>
          </div>
        </div>
        <Button 
          className="w-full bg-[#8B4513] hover:bg-[#6F370F] text-white py-6 rounded-xl font-bold text-lg shadow-lg transition-transform hover:scale-[1.02]"
          onClick={() => {
            window.open("https://collective.chrizeecry.com/meet-and-great-the-community", "_blank")
            setShowCommunityPopup(false)
          }}
        >
          Access Free Vault
        </Button>
      </div>
    )}
  </div>
)}

{showScrollTop && (
  <div className="fixed bottom-10 right-8 z-[90] flex flex-col items-center group">
    <div className="flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity mb-2 animate-bounce">
      <span className="text-xl">🚀</span>
      <span className="text-xl">📐</span>
      <span className="text-xl">🏗️</span>
    </div>
    <button
      onClick={scrollToTop}
      className="w-14 h-14 bg-[#8B4513] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 hover:bg-[#6F370F] active:scale-95 border-2 border-amber-200"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
    </button>
  </div>
)}

{showCookieConsent && (
  <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
    <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md text-white p-6 rounded-2xl shadow-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">🍪</span>
        </div>
        <div>
          <h4 className="font-bold text-lg">Your Privacy & Growth</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            We use cookies to optimize your learning journey and improve our collective experience. 
            By staying, you agree to our <a href="/policies" className="text-amber-400 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-3 w-full md:w-auto">
        <Button 
          variant="outline" 
          className="flex-1 md:flex-none border-slate-500 hover:bg-slate-800 hover:border-amber-500 text-white transition-all"
          onClick={() => {
            localStorage.setItem("cookie-consent", "declined")
            setShowCookieConsent(false)
          }}
        >
          Decline
        </Button>
        <Button 
          className="flex-1 md:flex-none bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-8"
          onClick={() => {
            localStorage.setItem("cookie-consent", "accepted")
            setShowCookieConsent(false)
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  </div>
)}
</div>
)
}