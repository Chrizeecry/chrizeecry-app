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
} from "lucide-react"
import Footer from "@/components/footer";

// fix the syntax

export default function Page() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [selectedDivision, setSelectedDivision] = useState("")
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    division: "",
    interests: [] as string[],
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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

  // fix the syntax error below

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
            <nav className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("youtube-channels")}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#FFD700] transition-all duration-300 hover:scale-105 font-medium"
              >
                <Youtube className="w-5 h-5" />
                <span>My YouTube Channels</span>
              </button>
              <button
                onClick={() => scrollToSection("about-founder")}
                className="text-gray-700 hover:text-[#FFD700] transition-all duration-300 font-medium hover:scale-105"
              >
                About Founder
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="text-gray-700 hover:text-[#FFD700] transition-all duration-300 font-medium hover:scale-105"
              >
                My Story
              </button>
              <Button
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
              >
                ⭐ Join Mastery Cohort
              </Button>
              <a
                href="https://collective.chrizeecry.com/meet-and-great-the-community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#FFD700] transition-all duration-300 font-medium hover:scale-105"
              >
                Free Community
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileNavOpen(true)}
                className="text-gray-700 hover:text-[#FFD700] hover:bg-amber-50"
              >
                <Menu className="h-6 w-6" />
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
                className="flex items-center space-x-3 text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left"
              >
                <Youtube className="w-5 h-5" />
                <span>My YouTube Channels</span>
              </button>
              <button
                onClick={() => scrollToSection("about-founder")}
                className="block text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left"
              >
                About Founder
              </button>
              <button
                onClick={() => scrollToSection("story")}
                className="block text-gray-700 hover:text-[#FFD700] transition-colors w-full text-left"
              >
                My Story
              </button>
              <a
                href="https://collective.chrizeecry.com/meet-and-great-the-community"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-[#FFD700] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFD700] text-[#8B4513] font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-center w-full"
              >
                🚀 Join Collective
              </a>
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
                  🚀 From Exclusion to Excellence
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
                  An 8-year journey through engineering that became a masterclass in resilience. Now helping 2,500+
                  students transform their futures through proven methods and real-world expertise.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFD700] to-[#FF8C00] hover:from-[#FF8C00] hover:to-[#FFD700] text-[#8B4513] font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
                  onClick={() => scrollToSection("community")}
                >
                  Discover My Methods
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg border-2 border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513] hover:text-white transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("about-founder")}
                >
                  <Play className="mr-2 w-6 h-6" />
                  Read My Journey
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                    5,571+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Social Followers</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="flex items-center justify-center space-x-1 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl md:text-4xl font-bold text-[#FFD700]">4.9</span>
                    <Star className="w-6 h-6 text-[#FFD700] fill-current" />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Success Rating</div>
                </div>
                <div className="text-center group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700] group-hover:scale-110 transition-transform duration-300">
                    8
                  </div>
                  <div className="text-sm text-gray-600 font-medium">Years of Grit</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/grad%20pic%20samson.jpg-1gOwd24ULEaLsbj1yFL85Ir8l2uWk9.jpeg"
                  alt="Samson Senyatsi graduation day - The moment of triumph after 8 years"
                  className="rounded-3xl shadow-2xl w-full max-w-2xl mx-auto"
                />
                <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl border-2 border-[#FFD700] max-w-xs">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#FFD700] to-[#FF8C00] rounded-full flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">BSc Civil Engineering</div>
                      <div className="text-sm text-gray-600">Wits University • 2021</div>
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
              "They told me I wouldn't make it. But eight years later, I walked out with an engineering degree from Wits
              — not just with a certificate, but with a spine forged through fire."
            </blockquote>
          </div>

          {/* Professional Engineer Photo */}
          <div className="mb-16">
            <div className="relative max-w-4xl mx-auto">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2021_12_27_15_23_IMG_4146.JPG-YN6RCCweaXEPk5ryint1Hf3lDKdGsm.jpeg"
                alt="Samson Senyatsi as a professional engineer - Working on construction site with engineering equipment"
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
                  alt="Young Samson with fellow students - High school dreams"
                  className="w-full rounded-2xl shadow-xl"
                />
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
                    students and mentees. Success isn't just about academic achievement—it's about becoming the best
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
                    had made, all the expectations from my community — it felt like I had let everyone down.
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
                    schedule, formed study groups, and started tutoring other students — teaching concepts helped cement
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
                    resilience that no comfortable journey could have taught me. I learned to ask for help — something
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
                    That day wasn't just about academic achievement — it was about proving that determination can
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
                technical skills — I help people develop the mindset to overcome their own challenges. The methods I
                share aren't theoretical; they're battle-tested through my own failures and comebacks.
              </p>
              <p className="text-yellow-100 max-w-4xl mx-auto">
                My story isn't unique — many face similar obstacles. But by sharing it honestly, I hope to show others
                that their current struggles don't define their ultimate potential. Sometimes, the longest, most
                difficult path leads to the most meaningful destination.
              </p>
            </div>

            {/* The Philosophy That Drives Everything */}
            <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-6">The Philosophy That Drives Everything</h3>
              <blockquote className="text-xl md:text-2xl font-bold mb-6 leading-relaxed">
                "I'm that engineer who endures at every level. I thrive under pressure and stand tall like the sun in
                the sky — always shining, no matter what."
              </blockquote>
              <p className="text-lg text-yellow-100 max-w-3xl mx-auto">
                This journey from exclusion to engineer isn't just my story — it's proof that with the right mindset,
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
            <Badge className="bg-red-600 text-white px-4 py-2 text-sm font-semibold">📺 Multi-Channel Creator</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">My YouTube Universe</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Educational content across multiple channels, reaching thousands of learners worldwide. Subscribe to all
              channels for the complete experience!
            </p>
          </div>

          {/* YouTube Channel Screenshots */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chrizeecry-swxrDdCYNHnILa1lZOwSgd61gMGXn9.png"
                alt="Chrizeecry YouTube Channel - Main lifestyle and music channel"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Main Channel</h5>
                <p className="text-sm text-gray-700">241 subscribers • 275 videos • Lifestyle & Music</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chris_senyatsi%20maths-EG67j3NVSXVifYdpkJgXCfgtM7PM2J.png"
                alt="Chris Senyatsi Math Tutor YouTube Channel - Educational mathematics content"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Math Tutor Channel</h5>
                <p className="text-sm text-gray-700">658 subscribers • 75 videos • Mathematics Education</p>
              </div>
            </div>

            <div className="relative group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%40chrizeecrybeats-k8pjMxeBtxsMfs45pJVzdNXsaZvrwS.png"
                alt="Chrizeecry Beats YouTube Channel - Music production and beats"
                className="w-full rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4">
                <h5 className="font-bold text-[#8B4513] mb-1">Beats Channel</h5>
                <p className="text-sm text-gray-700">159 subscribers • 23 videos • Music Production</p>
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
                    <CardTitle className="text-lg">Chrizeecry</CardTitle>
                    <p className="text-sm text-gray-600">Lifestyle & Journey</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-red-600">240</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-red-600">275</div>
                    <div className="text-sm text-gray-600">Videos</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Lifestyle, music videos, and personal journey documentation since 2016
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
                    <CardTitle className="text-lg">Chris Senyatsi - Math Tutor</CardTitle>
                    <p className="text-sm text-gray-600">Mathematics Education</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-green-600">661</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">85,871</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  75 videos • Simplifying mathematics for high school students with visual learning techniques
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

            {/* Music Channel */}
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Chrizeecry Beats</CardTitle>
                    <p className="text-sm text-gray-600">Music Production</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">159</div>
                    <div className="text-sm text-gray-600">Subscribers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">27,572</div>
                    <div className="text-sm text-gray-600">Total Views</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  23 videos • Professional beats and music production tutorials for aspiring producers
                </p>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-2"
                  onClick={() => window.open("https://youtube.com/@chrizeecrybeats", "_blank")}
                >
                  <Music className="mr-2 w-4 h-4" />
                  Subscribe & Create
                </Button>
                <p className="text-xs text-gray-500 text-center">Joined Jun 27, 2022</p>
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
                  <p className="text-sm text-gray-600">33K+ views • Breaking down complex concepts simply</p>
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
                  <p className="text-sm text-gray-600">Showcasing my other passion - creating beats and music</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Total Impact */}
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-xl border border-amber-200">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Total YouTube Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">1,060</div>
                <div className="text-gray-600 font-medium">Total Subscribers</div>
                <div className="text-sm text-gray-500">Across all channels</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">113,443</div>
                <div className="text-gray-600 font-medium">Total Views</div>
                <div className="text-sm text-gray-500">Educational impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FFD700] mb-2">373</div>
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
                  Even during the most challenging academic periods, I was constantly learning - not just from
                  textbooks, but from every practical experience, every setback, and every small victory. The
                  combination of academic rigor and real-world application shaped my understanding of engineering.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  These experiences taught me that engineering isn't just about calculations and designs - it's about
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
                  This creative side didn't compete with my engineering aspirations - it complemented them. The
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
                  through engineering expertise, mathematics education, music production, and timeless wisdom—built on 8 years of persistence and proven by thousands of success stories.
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
                    Her recommendation for me to become a Lead Mentor wasn't just about my academic performance—it was 
                    about my character, my persistence, and my ability to connect with struggling students. She saw 
                    that my journey through adversity had given me something valuable: the ability to understand and 
                    guide others through their own challenges.
                  </p>
                  <blockquote className="text-blue-800 italic font-medium border-l-4 border-blue-500 pl-4">
                    "Ms. Itumeleng, your belief in me when I couldn't believe in myself changed everything. You didn't 
                    just see my potential—you created opportunities for me to discover it. Thank you for being the 
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
                    What started as financial support evolved into something much more meaningful—a partnership in 
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
                    This wasn't just about completing a project—it was about understanding that engineering skills 
                    could directly improve lives. Every plant we grew, every structure we built, represented hope 
                    and sustenance for families in need.
                  </p>
                  <blockquote className="text-orange-800 italic font-medium border-l-4 border-orange-500 pl-4">
                    "Much thanks to Amrut Foundation for awakening our spirits and showing us that success is not 
                    just about personal achievement—it's about lifting others as we climb."
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
                    My commitment to community extended beyond professional projects. Living in Lefatlheng (Mathibestad), Hammanskraal, in the far north of Pretoria—opposite Sempapa Secondary School—I witnessed the challenges our community faced daily. Crime, theft, and mugging were unfortunate realities that affected our neighbors, especially women walking to work in the early morning hours.

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
                    Working in Burgersfort wasn't just about engineering—it was about building relationships and understanding 
                    the local culture. My friends Hendrick Mashaba and T Bone Steak became like family, teaching me about 
                    Sepedi culture and the mining community around Burgersfort.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This photo captures the essence of rural South African life—where modern infrastructure meets traditional 
                    community living. The goats casually using our newly constructed road shows how engineering projects 
                    become part of the fabric of daily life.
                  </p>
                  <blockquote className="text-green-800 italic font-medium border-l-4 border-green-500 pl-4">
                    "Mashaba Street doesn't actually exist—it's just what we called this area near The Mashabas! 
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
                    One of my most fulfilling experiences was returning to Mmankala Technical and Commercial High School—
                    the same institution that nurtured my engineering dreams—to teach Euclidean geometry. Standing in 
                    front of that blackboard, I represented something powerful: the 
                    possibility of dreams realized.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Teaching those geometric principles wasn't just about mathematics—it was about showing students 
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
                    space became our sanctuary—a place where complex engineering concepts became clearer through 
                    collaborative discussion and shared struggle.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    These study sessions taught me that learning is not a solitary journey. The friends who sat 
                    with me during those long nights, who explained concepts when I was confused, who celebrated 
                    small victories and supported me through setbacks—they were integral to my success.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    "In that quiet study space, surrounded by laptops and engineering textbooks, we weren't just 
                    learning formulas—we were building the foundation for lifelong friendships and professional networks."
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
                    production weren't just hobbies—they were expressions of my identity and early attempts at 
                    building a personal brand. These photoshoots with friends represented hope and ambition during 
                    uncertain times.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Promoting my music online while studying engineering taught me valuable lessons about marketing, 
                    audience engagement, and content creation—skills that would later become central to my success 
                    as an educational content creator.
                  </p>
                  <p className="text-gray-700 leading-relaxed font-semibold">
                    "Every creative project, every photoshoot, every beat I produced was practice for the content 
                    creator I would eventually become. Art and engineering aren't opposites—they're complementary 
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
                    studies—balancing multiple passions and future possibilities.
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
                about plans and progress logs—it's about impact. It's about building something that lasts, and doing so with integrity.
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
                "I never wished for an easy project or path because I know what hardships do to people—they turn you into a genius, 
                a persistent and persevering legend in all facets of life. Don't wish it was easier; wish you were better." 
                — Jim Rohn
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
                    Graduation day with my mother and brother—the two people who believed in me when I couldn't believe in myself.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200">
                  <h3 className="text-2xl font-bold text-[#8B4513] mb-4">For My Mother and Brother: The Ultimate Motivation</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Through every setback, every exclusion, every moment of doubt, there were two constant sources of motivation: 
                    my mother and my brother. That honours degree I received wasn't just mine—it belonged to all of us. Every 
                    sacrifice they made, every word of encouragement during my darkest moments, every prayer whispered for my success.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Special recognition goes to my brother, who had to crawl so I could walk. He didn't finish high school, but 
                    he taught me more about life, resilience, and character than any textbook ever could. This Honours degree is 
                    for him too—proof that his sacrifices and wisdom weren't in vain.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Being the first generation in our family to attend and graduate from the top university in Africa—Wits University, 
                    ranked 2nd in Africa and 2nd in South Africa according to US News Best Global Universities Rankings 2024-2025 
                    (Global score 61.9, #264 globally)—carried the weight of family dreams and community expectations.
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
              from someone who educational entrepreneur, and digital transformer. I've evolved
              from someone who needed support to someone who provides it. My multi-channel empire reaches thousands
              of students across YouTube, TikTok, Instagram, and other platforms, turning my hard-earned engineering
              knowledge into accessible, life-changing educational content.
            </p>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              I am a creative, always have been, and always will be. Whether it's civil engineering, mathematics,
              music production, tech, AI, HTML, CSS, Next.js, LLM development, or any other field I explore—creativity
              and persistence remain my driving forces.
            </p>
            <p className="text-yellow-100 max-w-4xl mx-auto text-xl font-semibold">
              "The circle is complete: from receiving mentorship to providing it, from being supported by community
              to building communities, from struggling student to successful educator. This is what transformation
              looks like—not just personal success, but the multiplication of opportunity for others."
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
              Three strategic tiers designed for technical students, engineers, and builders who refuse to accept mediocrity. 
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
                  <div className="text-4xl font-bold text-green-600">R129</div>
                  <p className="text-sm text-gray-600">/month or R1,290/year (save 17%)</p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3 border-t border-b border-green-200 py-6">
                  <h4 className="font-bold text-gray-900 mb-4">✅ What's Included:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Lifetime library access to all Maths & Physics resources</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Monthly "New Drop" Actionable PDFs</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Access to WhatsApp community groups</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Calculator hacks & memory tools</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-green-500 font-bold mt-0.5">→</span>
                      <span className="text-gray-700">Free access to monthly study sessions</span>
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
                <p className="text-sm text-gray-700 font-bold mb-4">Structured transformation for engineers</p>
                <div className="space-y-1 mb-4">
                  <div className="space-y-1">
                    <div className="text-xs text-gray-600 line-through">R499/month</div>
                    <div className="text-4xl font-bold text-amber-600">R374</div>
                    <p className="text-sm text-gray-600">/month (seasonal offer - limited time)</p>
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
            <Card className="relative overflow-hidden border-2 border-purple-500 hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 left-4">
                <Badge className="bg-purple-600 text-white px-3 py-1 text-xs font-bold">PREMIUM</Badge>
              </div>

              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🏆</span>
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">The Distinction Bootcamp</CardTitle>
                <p className="text-sm text-gray-600 font-medium mb-4">12-week intensive transformation</p>
                <div className="space-y-1 mb-4">
                  <div className="text-4xl font-bold text-purple-600">R4,999</div>
                  <p className="text-sm text-gray-600">one-time / 12-week intensive</p>
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
                      <span className="text-gray-700"><span className="font-bold">VIP Network Pass:</span> Direct access to engineering firms, contractors, and employers</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-4 rounded-lg border border-purple-200">
                  <p className="text-sm text-gray-700"><span className="font-bold">Best for:</span> Career changers, professionals seeking rapid advancement, those ready for intensive 1-on-1 transformation</p>
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

          {/* R100M Blueprint - Trust & Product Summary */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 mb-16 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🚀 SAMSON CHRIZEECRY SENYATSI: THE R100M BLUEPRINT</h3>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <p className="text-gray-700">Primary Title: <span className="font-bold">The Technical Multi-Sensory Mentor</span></p>
                <p className="text-gray-700">Also known as: <span className="font-medium">Civil Engineer Survivor</span>, <span className="font-medium">EGD & Civil Tech Specialist</span>, <span className="font-medium">Lo-Fi Study Architect</span></p>

                <div className="mt-4 p-4 rounded-lg bg-gradient-to-r from-[#fef3c7] to-white border border-amber-200">
                  <h4 className="font-bold text-gray-900 mb-2">🎯 The R100M Philosophy</h4>
                  <p className="text-sm text-gray-700">Content is the vehicle — you are the product. Build systems that scale: <strong>Content → Community → Creation → Capital</strong>.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 rounded-lg bg-white border shadow-sm">
                    <h5 className="font-bold text-sm text-gray-900">Proven Scorecard</h5>
                    <ul className="text-sm text-gray-700 mt-2 space-y-1">
                      <li>• Civil Tech: <strong>90%</strong></li>
                      <li>• EGD: <strong>83%</strong></li>
                      <li>• Maths: <strong>71%</strong></li>
                      <li>• Physics: <strong>79%</strong></li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-white border shadow-sm">
                    <h5 className="font-bold text-sm text-gray-900">Real-World Authority</h5>
                    <p className="text-sm text-gray-700 mt-2">Resident engineer on a 1.1km road project. 8-year persistence story — practical skills meet teaching.</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic mt-3">Note: This program is rigorous. Success requires disciplined effort from mentors, students, parents and community. We teach skills, not guarantees.</p>
              </div>

              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/60 to-gray-50 border border-gray-200 shadow-md">
                  <h4 className="font-bold text-gray-900 mb-3">🏗️ Product Ecosystem</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Free Layer</strong> — YouTube tutorials & lead magnets</li>
                    <li>• <strong>Technical Mastery Academy</strong> — R349/month community (weekly walkthroughs, beats library, WhatsApp support)</li>
                    <li>• <strong>Institutional</strong> — School programs & teacher training (R10k+)</li>
                    <li>• <strong>IP Licensing</strong> — Frameworks & curricula for large-scale impact</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-white border shadow-sm flex items-center justify-between">
                  <div>
                    <h5 className="font-bold text-gray-900">Trusted Results</h5>
                    <p className="text-sm text-gray-600">1000+ students coached, measurable improvements, practical placements.</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-24 h-24 bg-gradient-to-br from-[#f8fafc] to-white rounded-xl flex items-center justify-center border border-gray-200 shadow-sm animate-pulse">
                      <div className="text-center">
                        <div className="text-sm font-bold text-gray-900">1000+</div>
                        <div className="text-xs text-gray-500">Engineers</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini calculator / gamified CTA (lightweight) */}
                <div className="mt-2 p-4 rounded-lg bg-gradient-to-br from-[#ffffff] to-[#f8fafc] border border-gray-200 text-center">
                  <div className="text-sm text-gray-700 mb-2">Ready to see which tier fits you?</div>
                  <div className="inline-flex items-center justify-center space-x-2">
                    <input readOnly className="w-28 text-center rounded-md border px-2 py-1 text-sm" value="I want growth" />
                    <button
                      className="bg-amber-500 hover:bg-amber-600 text-white font-bold px-3 py-1 rounded-md text-sm shadow-sm"
                      onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                    >
                      Check →
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Small interactive tools coming soon — no heavy CPU, just clarity.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Ready to Transform?</h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              No matter where you're starting, there's a tier designed for your journey. Join 1000+ technical students 
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
              "They told me I wouldn't make it. But eight years later, I walked out with an engineering degree from Wits
              — not just with a certificate, but with a spine forged through fire."
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What most don't know is how brutal the journey was — not just academically, but emotionally, financially,
              and spiritually. My path wasn't straight. It was filled with academic exclusions, financial struggles, and
              moments of deep doubt. But each setback became a building block for resilience.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-amber-200 hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#8B4513] mb-4">"I wasn't supposed to make it."</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  My academic record at Wits University tells a story most people wouldn't be proud of. But I am — not
                  because I struggled, but because I overcame. I started my BSc in Civil Engineering in 2014. Year after
                  year, I faced delays, exclusions, and setbacks — both academic and financial.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I was excluded more than once. Had to apply for readmission. Permitted to proceed on special
                  curriculum. Told to repeat years. It wasn't linear. It wasn't smooth. But it was mine.
                </p>
                <p className="text-gray-700 font-semibold text-lg">
                  Every challenge shaped me. In 2021, I completed all requirements and qualified. Not just with a degree
                  — but with a mindset built on grit and endurance.
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
                  My academic record at Wits University tells a story most people wouldn't be proud of. But I am — not
                  because I struggled, but because I overcame. I started my BSc in Civil Engineering in 2014. Year after
                  year, I faced delays, exclusions, and setbacks — both academic and financial. I was excluded more than
                  once. Had to apply for readmission. Permitted to proceed on special curriculum. Told to repeat years.
                  It wasn't linear. It wasn't smooth. But it was mine.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-yellow-100">Every challenge shaped me.</p>

                <p className="text-lg leading-relaxed">
                  In 2021, I completed all requirements and qualified. Not just with a degree — but with a mindset built
                  on grit and endurance.
                </p>

                <p className="text-lg leading-relaxed">
                  And this pattern didn't just show up in school. When I was part of the road construction project in
                  Burgersfort, we hit delays, unexpected issues, and major pressure. But just like my student journey, I
                  pushed through. I saw it through — from breaking ground to full functional completion.
                </p>

                <p className="text-lg leading-relaxed font-semibold text-yellow-100">Because that's who I am.</p>

                <p className="text-xl leading-relaxed font-bold text-center text-yellow-100">
                  I'm that engineer who endures at every level. I thrive under pressure and stand tall like the sun in
                  the sky — always shining, no matter what.
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
                      "This was the year I learned that university wasn't just about being smart—it was about
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
                      year. The irony wasn't lost on me—I was helping others succeed while still fighting for my own
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
                    skills—it's about building and nurturing growth in all its forms."
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
                    well-designed—unlike my path to becoming an engineer—but both lead to valuable destinations."
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
              <p className="text-xl font-semibold text-yellow-100">— Samson Senyatsi</p>
            </div>
          </div>

          {/* The Transformation */}
          <div className="bg-gradient-to-r from-[#8B4513] to-[#FFD700] rounded-3xl p-8 shadow-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">The Transformation</h3>
            <p className="text-lg mb-6 max-w-4xl mx-auto">
              What started as academic struggle became my greatest strength. I learned to endure, adapt, and persist
              when everything seemed impossible. I discovered that resilience isn't about never falling — it's about
              getting up every time you do.
            </p>
            <p className="text-yellow-100 max-w-4xl mx-auto">
              Today, I use these hard-earned lessons to help others navigate their own challenges. My methods aren't
              theoretical — they're battle-tested through years of real struggle and eventual triumph.
            </p>
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

    {/* Premium Community */}
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Memberships</h3>
        <p className="text-gray-600">
          Unlock exclusive content, AI tools, mentorship, and advanced resources with our premium memberships.
        </p>
      </div>

      <div className="space-y-4">
        {[
          { name: "🧠 Maths Academy", price: "R129/month", color: "green" },
          { name: "🏗️ Civil & Structural", price: "R379/month", color: "amber", badge: "Most Popular" },
          { name: "🎵 Music & Media", price: "R237/month", color: "purple" },
          { name: "💎 Complete Collective", price: "R729.99/month", color: "yellow" },
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
        <div className="text-4xl font-bold mb-2">5,571+</div>
        <div className="text-blue-100">Total Followers</div>
        <div className="text-sm text-blue-200">Across all platforms</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">113K+</div>
        <div className="text-blue-100">Video Views</div>
        <div className="text-sm text-blue-200">Educational content</div>
      </div>
      <div>
        <div className="text-4xl font-bold mb-2">350+</div>
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

<Footer />
</div>
)
}