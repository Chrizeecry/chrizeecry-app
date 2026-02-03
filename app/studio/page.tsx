'use client';

import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Music, 
  Palette, 
  BookOpen, 
  Share2, 
  ArrowRight,
  ExternalLink,
  ShoppingBag,
  Headphones,
  Heart,
  MessageCircle,
  Mic,
  ShoppingCart,
  Image as ImageIcon,
  Crown,
  GraduationCap,
  Hammer,
  Check,
  Star,
  Users,
  Zap,
  DraftingCompass,
  HardHat,
  Droplets,
  Truck,
  X
} from "lucide-react"
import Footer from "@/components/footer"
import Image from "next/image"
import PopupManager from "@/components/popup-manager"
import ResidentEngineerTicker from "@/components/resident-engineer-ticker"

export default function StudioPage() {
  const [showTopBanner, setShowTopBanner] = useState(false)

  useEffect(() => {
    // Check if the top banner was previously dismissed
    const bannerDismissed = localStorage.getItem("top-banner-dismissed")
    if (!bannerDismissed) {
      setShowTopBanner(true)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-amber-500 font-sans">
      {/* Background - Engineering Grid + Math Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]"></div>
      
      {/* Navigation Bar */}
      <header className="fixed top-0 w-full z-50 flex flex-col">
        {showTopBanner && (
          <div className="w-full bg-amber-600 text-black text-center py-2 px-8 shadow-md flex items-center justify-center relative z-[60]">
            <p className="text-[10px] md:text-xs font-black tracking-wide uppercase">
               Get <span className="text-white animate-pulse">25% OFF</span> The Mastery Cohort | Code: <span className="font-mono bg-black text-amber-500 px-1.5 py-0.5 rounded ml-1">CHRIS25</span>
            </p>
            <button 
              onClick={() => {
                setShowTopBanner(false)
                localStorage.setItem("top-banner-dismissed", "true")
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-black/10 rounded-full transition-colors"
            >
              <X className="w-3 h-3 md:w-4 md:h-4" />
            </button>
          </div>
        )}
        <div className="bg-black/90 backdrop-blur-md border-b border-white/5 flex justify-between items-center px-4 h-16 w-full">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.location.href = '/'}>
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.5)]">
                <span className="font-black text-black text-xl">C</span>
              </div>
              <span className="font-black italic tracking-tighter uppercase text-lg hidden sm:block">
                Chrizeecry <span className="text-amber-500">Studio</span>
              </span>
            </div>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-amber-500 font-bold"
              onClick={() => window.location.href = '/'}
            >
              Back to Collective
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Subtle Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-gradient-to-b from-amber-900/20 to-transparent blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <Badge className="bg-amber-500 text-black mb-6 hover:bg-amber-400 transition-colors border-none px-6 py-2 text-sm font-black uppercase tracking-widest shadow-lg shadow-amber-500/20">
            🚀 Ready to Transform?
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter mb-8 text-white drop-shadow-2xl">
            The Resilient <br/><span className="text-amber-500 drop-shadow-[0_0_25px_rgba(245,158,11,0.6)]">Engineer Path</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed italic font-medium">
            "I teach skills, not guarantees. But if you bring the discipline, I’ll bring the blueprint."
          </p>
          <p className="text-amber-500 font-black text-lg mt-6 uppercase tracking-widest">- Samson Chrizeecry Senyatsi</p>
          
          <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-4 text-base text-gray-300 font-bold bg-white/5 p-4 rounded-full w-fit mx-auto border border-white/10 backdrop-blur-sm">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-sm shadow-md">🎓</div>
                ))}
             </div>
             <span>Join <strong className="text-white">930+ students</strong> who chose distinction.</span>
          </div>
        </div>
      </section>

      {/* BIG 4 CIVIL ENGINEERING SUBJECTS - Educational Section */}
      <section className="px-4 pb-20 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="bg-[#151515] rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
               {/* Decorative Background Icon */}
               <HardHat className="absolute -top-10 -right-10 w-64 h-64 text-white/5 rotate-12 pointer-events-none" />
               
               <div className="text-center mb-12 relative z-10">
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4 text-white">The <span className="text-amber-500">Big 4</span> of Civil Engineering</h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
                     Understanding the pillars that build our world. Parents, teachers, and students - this is the roadmap.
                  </p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                  {/* Structures */}
                  <Card className="bg-[#1a1a1a] border-l-4 border-l-blue-500 border-t-0 border-r-0 border-b-0 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                     <CardContent className="p-6">
                        <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                           <Hammer className="w-8 h-8 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase mb-2">Structures</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                           The Skeleton. Bridges, Skyscrapers, Stadiums. Ensuring they stand tall against gravity and wind.
                        </p>
                     </CardContent>
                  </Card>

                  {/* Geotechnics */}
                  <Card className="bg-[#1a1a1a] border-l-4 border-l-amber-600 border-t-0 border-r-0 border-b-0 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                     <CardContent className="p-6">
                        <div className="w-14 h-14 bg-amber-600/10 rounded-xl flex items-center justify-center mb-4">
                           <DraftingCompass className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase mb-2">Geotechnics</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                           The Foundation. Soil, Rock, Stability. Everything sits on the ground; we make sure it doesn't sink.
                        </p>
                     </CardContent>
                  </Card>

                  {/* Hydraulics */}
                  <Card className="bg-[#1a1a1a] border-l-4 border-l-cyan-400 border-t-0 border-r-0 border-b-0 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                     <CardContent className="p-6">
                        <div className="w-14 h-14 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-4">
                           <Droplets className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase mb-2">Hydraulics</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                           The Lifeblood. Water, Dams, Pipelines, Drainage. Managing the flow of our most precious resource.
                        </p>
                     </CardContent>
                  </Card>

                  {/* Transportation */}
                  <Card className="bg-[#1a1a1a] border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0 shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
                     <CardContent className="p-6">
                        <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                           <Truck className="w-8 h-8 text-green-500" />
                        </div>
                        <h3 className="text-xl font-black text-white uppercase mb-2">Transport</h3>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                           The Veins. Roads, Railways, Airports. Connecting people, goods, and economies efficiently.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </section>

      {/* RESIDENT ENGINEER PRO TIP - Ticker Style */}
      <ResidentEngineerTicker />

      {/* Main Content */}
      <section className="px-4 pb-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="store" className="w-full">
            <div className="flex justify-center mb-16 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              <TabsList className="bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
                <TabsTrigger value="store" className="rounded-full px-8 py-3 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all font-black uppercase tracking-wide text-sm md:text-base">
                  <Crown className="w-5 h-5 mr-2" /> Memberships & Offers
                </TabsTrigger>
                <TabsTrigger value="story" className="rounded-full px-8 py-3 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all font-black uppercase tracking-wide text-sm md:text-base">
                  <BookOpen className="w-5 h-5 mr-2" /> My Journey
                </TabsTrigger>
                <TabsTrigger value="gallery" className="rounded-full px-8 py-3 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all font-black uppercase tracking-wide text-sm md:text-base">
                  <ImageIcon className="w-5 h-5 mr-2" /> Gallery
                </TabsTrigger>
                <TabsTrigger value="music" className="rounded-full px-8 py-3 data-[state=active]:bg-amber-500 data-[state=active]:text-black transition-all font-black uppercase tracking-wide text-sm md:text-base">
                  <Music className="w-5 h-5 mr-2" /> Music
                </TabsTrigger>
              </TabsList>
            </div>

            {/* STORE / MEMBERSHIPS TAB */}
            <TabsContent value="store" className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
              
              {/* MEMBERSHIP TIERS */}
              <div>
                <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4 text-white">Choose Your <span className="text-amber-500">Transformation</span></h2>
                   <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                      Three strategic paths designed for technical students, engineers, and builders who refuse mediocrity.
                   </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* TIER 1: THE VAULT */}
                    <Card className="bg-[#121212] border-white/10 hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full shadow-2xl hover:shadow-amber-500/10">
                       <CardHeader>
                          <Badge className="w-fit bg-gray-700 text-white mb-4 px-3 py-1 text-xs font-bold uppercase">Foundation</Badge>
                          <CardTitle className="text-3xl font-black uppercase text-white">The Vault</CardTitle>
                          <CardDescription className="text-gray-400 font-medium text-base">Lightweight. Essential. Immediate.</CardDescription>
                          <div className="mt-4">
                             <span className="text-5xl font-black text-white">R129</span><span className="text-gray-400 font-bold">/mo</span>
                             <p className="text-sm text-green-500 mt-2 font-bold uppercase">or R1,290/year (Save 17%)</p>
                          </div>
                       </CardHeader>
                       <CardContent className="space-y-6 flex-grow border-t border-white/5 pt-6">
                          <ul className="space-y-4 text-base text-gray-300 font-medium">
                             <li className="flex items-start"><Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" /> <span>Lifetime library access to Grade 1-12+ Classwork Books</span></li>
                             <li className="flex items-start"><Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" /> <span>Civil Tech, EGD, Maths & Physics resources</span></li>
                             <li className="flex items-start"><Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" /> <span>Daily PDFs with Actionable Steps</span></li>
                             <li className="flex items-start"><Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" /> <span>Access to Facebook & Instagram Group</span></li>
                             <li className="flex items-start"><Check className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0" /> <span>Calculus & Euclidean Geometry Videos</span></li>
                          </ul>
                       </CardContent>
                       <CardFooter>
                          <Button 
                            className="w-full bg-white text-black hover:bg-gray-200 font-black uppercase tracking-wide py-8 text-lg rounded-xl shadow-lg"
                            onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                          >
                            Get Started
                          </Button>
                       </CardFooter>
                    </Card>

                    {/* TIER 2: MASTERY COHORT (Recommended) */}
                    <Card className="bg-[#1a1a1a] border-2 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.2)] relative transform md:-translate-y-4 flex flex-col h-full z-10 rounded-2xl">
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-black px-6 py-2 rounded-full font-black text-sm tracking-widest shadow-xl border-4 border-[#0a0a0a]">
                          MOST POPULAR
                       </div>
                       <CardHeader className="pt-10">
                          <div className="flex justify-between items-center mb-4">
                             <Badge className="bg-amber-500/20 text-amber-500 border-none px-3 py-1 font-bold">Best Value</Badge>
                             <div className="text-xs text-amber-500 font-black animate-pulse uppercase tracking-wider">25% OFF LIMITED TIME</div>
                          </div>
                          <CardTitle className="text-4xl font-black uppercase text-amber-500">Mastery Cohort</CardTitle>
                          <CardDescription className="text-gray-300 font-bold text-lg">Structured. Mentored. Unbeatable Value.</CardDescription>
                          <div className="mt-4">
                             <div className="flex items-baseline space-x-2">
                                <span className="text-6xl font-black text-white">R374</span><span className="text-gray-400 font-bold">/mo</span>
                             </div>
                             <p className="text-sm text-gray-500 line-through mt-1 font-bold">Was R499/mo</p>
                          </div>
                       </CardHeader>
                       <CardContent className="space-y-6 flex-grow border-t border-white/5 pt-6">
                          <p className="text-base font-black text-white mb-2 uppercase tracking-wide">Everything in The Vault, PLUS:</p>
                          <ul className="space-y-4 text-base text-gray-300 font-medium">
                             <li className="flex items-start"><Star className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 fill-amber-500" /> <span><strong className="text-white">12-Week Cohort Program:</strong> Live workshops with Samson</span></li>
                             <li className="flex items-start"><Star className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 fill-amber-500" /> <span>Weekly Live Mentorship Sessions</span></li>
                             <li className="flex items-start"><Star className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 fill-amber-500" /> <span><strong className="text-white">AI Tools & Career Resources:</strong> Resume generator & stacks</span></li>
                             <li className="flex items-start"><Star className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 fill-amber-500" /> <span>Affiliate Income: Earn 20-30% on referrals</span></li>
                             <li className="flex items-start"><Star className="w-6 h-6 text-amber-500 mr-3 flex-shrink-0 fill-amber-500" /> <span>Quarterly "Genius Box" Resources</span></li>
                          </ul>
                       </CardContent>
                       <CardFooter>
                          <Button 
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-black font-black uppercase tracking-wide py-8 text-lg rounded-xl shadow-xl hover:shadow-amber-500/20 transition-all transform hover:scale-[1.02]"
                            onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                          >
                            Join Cohort
                          </Button>
                       </CardFooter>
                    </Card>

                    {/* TIER 3: TRANSFORMATION PARTNER */}
                    <Card className="bg-[#121212] border-white/10 hover:border-purple-500/50 transition-all duration-300 flex flex-col h-full shadow-2xl hover:shadow-purple-500/10">
                       <CardHeader>
                          <Badge className="w-fit bg-purple-600 text-white mb-4 px-3 py-1 text-xs font-bold uppercase">Exclusive</Badge>
                          <CardTitle className="text-3xl font-black uppercase text-white">Direct Mentorship</CardTitle>
                          <CardDescription className="text-gray-400 font-medium text-base">Intensive. Personal. Life-Changing.</CardDescription>
                          <div className="mt-4">
                             <span className="text-5xl font-black text-white">R4,999</span><span className="text-gray-400 font-bold">/qtr</span>
                             <p className="text-sm text-amber-500 mt-2 font-bold uppercase">Limited to 5 candidates</p>
                          </div>
                       </CardHeader>
                       <CardContent className="space-y-6 flex-grow border-t border-white/5 pt-6">
                          <p className="text-base font-black text-white mb-2 uppercase tracking-wide">Everything in Cohort, PLUS:</p>
                          <ul className="space-y-4 text-base text-gray-300 font-medium">
                             <li className="flex items-start"><Zap className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 fill-purple-500" /> <span><strong className="text-white">1-on-1 Coaching:</strong> Weekly 30-min calls</span></li>
                             <li className="flex items-start"><Zap className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 fill-purple-500" /> <span>Career Breakthrough Sprint & Strategy</span></li>
                             <li className="flex items-start"><Zap className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 fill-purple-500" /> <span>Elite Review Trip Invitation (Sun City etc.)</span></li>
                             <li className="flex items-start"><Zap className="w-6 h-6 text-purple-500 mr-3 flex-shrink-0 fill-purple-500" /> <span>VIP Network Pass to Engineering Firms</span></li>
                          </ul>
                       </CardContent>
                       <CardFooter>
                          <Button 
                            variant="outline" 
                            className="w-full border-2 border-purple-600 text-purple-400 hover:bg-purple-600/10 font-black uppercase tracking-wide py-8 text-lg rounded-xl"
                            onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                          >
                            Apply for Bootcamp
                          </Button>
                       </CardFooter>
                    </Card>
                </div>
              </div>

              {/* FREE & STORE PRODUCTS SECTION */}
              <div>
                 <h3 className="text-3xl font-black text-white mb-10 border-l-8 border-amber-500 pl-6 uppercase tracking-wide">
                    Free Resources & Store
                 </h3>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* FREE TIER */}
                    <Card className="bg-[#1a1a1a] border-green-500/30 flex flex-col group hover:bg-[#202020] transition-colors">
                      <div className="h-40 bg-green-900/20 flex items-center justify-center border-b border-green-500/20 relative overflow-hidden">
                         <div className="absolute inset-0 bg-green-500/10 transform -skew-y-6 group-hover:skew-y-0 transition-transform duration-500"></div>
                         <div className="text-center relative z-10">
                            <BookOpen className="w-12 h-12 text-green-500 mx-auto mb-3" />
                            <span className="font-black text-green-500 text-lg uppercase tracking-widest border border-green-500/30 px-3 py-1 rounded">FREE TIER</span>
                         </div>
                      </div>
                      <CardContent className="p-8 flex-grow">
                         <h3 className="text-2xl font-black uppercase mb-3 text-white">Grade 1-12 Notes</h3>
                         <p className="text-gray-400 mb-6 font-medium leading-relaxed">
                            Basic access to foundational summaries and school notes. Start your journey here.
                         </p>
                         <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-black text-white">R0</span>
                         </div>
                      </CardContent>
                      <CardFooter className="p-8 pt-0">
                         <Button 
                            className="w-full bg-green-600 hover:bg-green-700 text-white font-black uppercase py-6 rounded-xl shadow-lg"
                            onClick={() => window.open("https://collective.chrizeecry.com/meet-and-great-the-community", "_blank")}
                         >
                            Download Free
                         </Button>
                      </CardFooter>
                    </Card>

                    {/* Wits Notes */}
                    <Card className="bg-[#1a1a1a] border-white/5 hover:border-white/20 transition-colors flex flex-col group hover:bg-[#202020]">
                      <div className="h-40 bg-white/5 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/5 transform skew-x-12 group-hover:skew-x-0 transition-transform duration-500"></div>
                         <GraduationCap className="w-16 h-16 text-gray-400 relative z-10" />
                      </div>
                      <CardContent className="p-8 flex-grow">
                         <h3 className="text-2xl font-black uppercase mb-3 text-white">Wits Civil Notes</h3>
                         <p className="text-gray-400 mb-6 font-medium leading-relaxed">
                            Handwritten survival notes for 3rd & 4th year Structures. The exact notes I used to pass.
                         </p>
                         <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-black text-white">R250</span>
                         </div>
                      </CardContent>
                      <CardFooter className="p-8 pt-0">
                         <Button 
                            className="w-full bg-white text-black hover:bg-gray-200 font-black uppercase py-6 rounded-xl shadow-lg"
                            onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                         >
                            Add to Cart
                         </Button>
                      </CardFooter>
                    </Card>

                    {/* EGD Blueprints */}
                    <Card className="bg-[#1a1a1a] border-white/5 hover:border-white/20 transition-colors flex flex-col group hover:bg-[#202020]">
                      <div className="h-40 bg-white/5 flex items-center justify-center border-b border-white/5 relative overflow-hidden">
                         <div className="absolute inset-0 bg-white/5 transform -skew-x-12 group-hover:skew-x-0 transition-transform duration-500"></div>
                         <Palette className="w-16 h-16 text-gray-400 relative z-10" />
                      </div>
                      <CardContent className="p-8 flex-grow">
                         <h3 className="text-2xl font-black uppercase mb-3 text-white">EGD Blueprints</h3>
                         <p className="text-gray-400 mb-6 font-medium leading-relaxed">
                             CAD files and isometric grid templates for Engineering Graphics Design.
                         </p>
                         <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-black text-white">R150</span>
                         </div>
                      </CardContent>
                      <CardFooter className="p-8 pt-0">
                         <Button 
                            className="w-full bg-white text-black hover:bg-gray-200 font-black uppercase py-6 rounded-xl shadow-lg"
                            onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                         >
                            Add to Cart
                         </Button>
                      </CardFooter>
                    </Card>
                 </div>
              </div>

              {/* WHY CHRIZEECRY METHOD WORKS */}
              <div className="bg-[#151515] rounded-3xl p-8 md:p-16 border border-white/5">
                <h2 className="text-4xl md:text-5xl font-black uppercase italic mb-8 text-center text-white">Why the <span className="text-amber-500">Chrizeecry Method</span> Works</h2>
                <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
                   Combining expert academic theory from Wits University with the grit of real-world site engineering.
                </p>

                <div className="grid md:grid-cols-3 gap-12">
                   <div className="space-y-6 text-center md:text-left">
                      <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 font-black text-2xl border-2 border-amber-500/20 mx-auto md:mx-0">01</div>
                      <h3 className="text-2xl font-black text-white uppercase">Wits Engineering Pedigree</h3>
                      <p className="text-base text-gray-400 leading-relaxed font-medium">
                         I survived the 2x academic exclusion trap at Wits to graduate as a BSc Civil Engineer. I teach the resilience needed to survive the hardest degree in Africa.
                      </p>
                   </div>
                   <div className="space-y-6 text-center md:text-left">
                      <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 font-black text-2xl border-2 border-amber-500/20 mx-auto md:mx-0">02</div>
                      <h3 className="text-2xl font-black text-white uppercase">Real-World Site Authority</h3>
                      <p className="text-base text-gray-400 leading-relaxed font-medium">
                         As a Resident Engineer on major 1.1km infrastructure projects, I bring practical site knowledge. My students see how theory builds real roads.
                      </p>
                   </div>
                   <div className="space-y-6 text-center md:text-left">
                      <div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center text-amber-500 font-black text-2xl border-2 border-amber-500/20 mx-auto md:mx-0">03</div>
                      <h3 className="text-2xl font-black text-white uppercase">Lo-Fi Focus System</h3>
                      <p className="text-base text-gray-400 leading-relaxed font-medium">
                         Combining Motswako-inspired beats with technical visualisations to help students enter a "flow state" where complex EGD and Calculus become natural.
                      </p>
                   </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
                   <div className="text-center">
                      <div className="text-4xl md:text-6xl font-black text-white mb-2">90%</div>
                      <div className="text-sm text-amber-500 font-bold uppercase tracking-widest">Civil Tech Score</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl md:text-6xl font-black text-white mb-2">83%</div>
                      <div className="text-sm text-amber-500 font-bold uppercase tracking-widest">EGD Distinction</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl md:text-6xl font-black text-white mb-2">1000+</div>
                      <div className="text-sm text-amber-500 font-bold uppercase tracking-widest">Students Coached</div>
                   </div>
                   <div className="text-center">
                      <div className="text-4xl md:text-6xl font-black text-white mb-2">8 Yrs</div>
                      <div className="text-sm text-amber-500 font-bold uppercase tracking-widest">Field Experience</div>
                   </div>
                </div>
              </div>

            </TabsContent>

            {/* STORY TAB - The Timeline */}
            <TabsContent value="story" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="max-w-4xl mx-auto">
                 <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">From Exclusion to <span className="text-amber-500">Engineer</span></h2>
                  <p className="text-gray-400">Born 22 August 1995. A path of resilience and construction.</p>
                </div>

                <div className="relative border-l-2 border-amber-500/30 ml-4 md:ml-12 space-y-12 pl-8 md:pl-12 py-4">
                  {/* Item 1 */}
                  <div className="relative">
                    <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-500 ring-4 ring-black">
                      <Heart className="h-3 w-3 md:h-4 md:w-4 text-black" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">Foundation Phase</h3>
                    <p className="text-amber-500 font-mono text-sm mb-4">Maranatha Day Care • Mahobotle Primary</p>
                    <p className="text-gray-400">Where the curiosity began. The early days of discovering shapes, structures, and creativity.</p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative">
                     <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-500 ring-4 ring-black">
                      <BookOpen className="h-3 w-3 md:h-4 md:w-4 text-black" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">The Formative Years</h3>
                    <p className="text-amber-500 font-mono text-sm mb-4">Ramoabi • Mmankala High School</p>
                    <p className="text-gray-400">Building the academic resilience. Mastering the subjects that would become the foundation of my engineering career.</p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative">
                     <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-500 ring-4 ring-black">
                      <GraduationCap className="h-3 w-3 md:h-4 md:w-4 text-black" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">University of the Witwatersrand</h3>
                    <p className="text-amber-500 font-mono text-sm mb-4">Civil Engineering</p>
                    <p className="text-gray-400">The crucible. Late nights, complex structures, and the birth of "Chrizeecry" as a survival mechanism through art and music.</p>
                  </div>

                  {/* Item 4 */}
                  <div className="relative">
                     <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-500 ring-4 ring-black">
                      <Hammer className="h-3 w-3 md:h-4 md:w-4 text-black" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">The Builder</h3>
                    <p className="text-amber-500 font-mono text-sm mb-4">Work Life • Site Engineer</p>
                    <p className="text-gray-400">Turning blueprints into reality. From underground boulders to completed roads. The practical application of years of study.</p>
                  </div>

                   {/* Item 5 */}
                   <div className="relative">
                     <span className="absolute -left-[41px] md:-left-[59px] top-0 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-amber-500 ring-4 ring-black">
                      <Crown className="h-3 w-3 md:h-4 md:w-4 text-black" />
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">The Sensational Teacher</h3>
                    <p className="text-amber-500 font-mono text-sm mb-4">Online Mentor • Digital Creator</p>
                    <p className="text-gray-400">Returning to lift others up. Sharing the vault, the notes, and the mindset needed to go from exclusion to engineer.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* GALLERY TAB */}
            <TabsContent value="gallery" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="text-center mb-8">
                  <h2 className="text-3xl font-black uppercase italic mb-2">Life in <span className="text-amber-500">Pictures</span></h2>
                  <p className="text-gray-400">The studio, the sites, the journey.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {/* Family / Graduation */}
                  <div className="relative aspect-square group overflow-hidden rounded-xl bg-gray-900">
                    <Image 
                      src="/images/family-graduation-photo.jpg" 
                      alt="Graduation Day" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold">The Milestone: Graduation Day</p>
                    </div>
                  </div>

                  {/* Road Construction */}
                  <div className="relative aspect-square group overflow-hidden rounded-xl bg-gray-900">
                     <Image 
                      src="/images/road-completion-equipment.jpg" 
                      alt="Road Construction" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold">Site Life: Heavy Machinery</p>
                    </div>
                  </div>

                   {/* Completed Road */}
                   <div className="relative aspect-square group overflow-hidden rounded-xl bg-gray-900">
                     <Image 
                      src="/images/completed-road-final.jpg" 
                      alt="Completed Road" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold">The Result: Completed Infrastructure</p>
                    </div>
                  </div>

                   {/* Site Context */}
                   <div className="relative aspect-square group overflow-hidden rounded-xl bg-gray-900">
                     <Image 
                      src="/images/mashaba-street-goats.jpg" 
                      alt="Mashaba Street" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white font-bold">Reality: Challenges on Site</p>
                    </div>
                  </div>

                   {/* Placeholder for Bedroom Studio */}
                   <div className="relative aspect-square group overflow-hidden rounded-xl bg-[#222] border border-white/10 flex items-center justify-center">
                     <div className="text-center p-6">
                        <Mic className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">Bedroom Studio</h3>
                        <p className="text-sm text-gray-500 mt-2">Where the magic happens</p>
                     </div>
                  </div>

                  {/* Placeholder for More */}
                   <div className="relative aspect-square group overflow-hidden rounded-xl bg-[#222] border border-white/10 flex items-center justify-center">
                     <div className="text-center p-6">
                        <BookOpen className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white">Study Vault</h3>
                        <p className="text-sm text-gray-500 mt-2">The archives</p>
                     </div>
                  </div>
               </div>
            </TabsContent>

            {/* MUSIC TAB */}
            <TabsContent value="music" className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
               <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-4">The <span className="text-amber-500">Vibe</span></h2>
                <p className="text-gray-400">Music to study and build to.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 uppercase font-black tracking-widest text-[10px]">Afrosoul</Badge>
                  <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 uppercase font-black tracking-widest text-[10px]">Afropiano</Badge>
                  <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 uppercase font-black tracking-widest text-[10px]">Hard Trap</Badge>
                  <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 px-4 py-1.5 uppercase font-black tracking-widest text-[10px]">Amapiano Study</Badge>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                 <Card className="bg-[#1a1a1a] border-none p-4 shadow-2xl">
                    <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/artist/7t3GOP2W6a1VwN1jo6Yk75?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                 </Card>
                 <Card className="bg-[#1a1a1a] border-none p-8 flex flex-col justify-center items-center text-center space-y-8 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Headphones className="w-20 h-20 text-amber-500 animate-pulse relative z-10" />
                    <div className="space-y-3 relative z-10">
                      <h3 className="text-3xl font-black uppercase italic">Stream Everywhere</h3>
                      <p className="text-gray-400 font-medium max-w-xs mx-auto">
                        From <span className="text-white font-bold">Afrosoul & Afropiano</span> songs to <span className="text-white font-bold">Hard Trap</span> beats & <span className="text-amber-500 font-bold uppercase">Amapiano Style</span> solo piano melodies to study.
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xs relative z-10">
                       <Button 
                        variant="default" 
                        className="bg-[#fa243c] hover:bg-[#d11d32] text-white font-black uppercase tracking-wider py-6 rounded-xl shadow-[0_0_20px_rgba(250,36,60,0.3)] transition-all hover:scale-105" 
                        onClick={() => window.open("http://music.apple.com/za/artist/chrizeecry/1413299041")}
                       >
                         Apple Music
                       </Button>
                       <Button 
                        variant="default" 
                        className="bg-[#ff0000] hover:bg-[#cc0000] text-white font-black uppercase tracking-wider py-6 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.3)] transition-all hover:scale-105" 
                        onClick={() => window.open("https://youtube.com/@chrizeecrybeats")}
                       >
                         YouTube
                       </Button>
                    </div>
                 </Card>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Floating WhatsApp Action */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => window.open("https://wa.me/27736043894", "_blank")}
          className="bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform flex items-center justify-center border-4 border-[#0a0a0a]"
        >
          <MessageCircle className="w-8 h-8 text-white" />
        </button>
      </div>

      <Footer />
      <PopupManager />
    </div>
  )
}