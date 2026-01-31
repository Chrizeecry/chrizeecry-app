"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, MessageCircle, Star } from "lucide-react"

interface PricingSectionProps {
  onPlanSelect: (planId: string) => void
}

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const plans = [
    {
      id: "free",
      name: "Free Community",
      price: "R0",
      description: "Get started with the basic building blocks and a supportive community of like-minded students.",
      features: [
        "Public Tips & PDFs",
        "NSC Maths Essentials",
        "WhatsApp Channel Access",
        "Basic Q&A Support",
        "Study Motivation Beats",
      ],
      popular: false,
      badge: "Starter",
      cta: "Join Free Community",
      link: "https://whatsapp.com/channel/0029VakuD7fAojZ0hcqnXl22"
    },
    {
      id: "maths-academy",
      name: "Maths Academy",
      price: "R129",
      period: "/month",
      description: "Master Grade 8-12 NSC Maths with battle-tested strategies from a Wits Civil Engineer.",
      features: [
        "Euclidean Geometry Mastery",
        "Calculus & Technical Maths",
        "Exam Hack Videos",
        "Weekly Live Support",
        "Premium Maths PDF Vault",
      ],
      popular: true,
      badge: "Most Popular",
      cta: "Join Maths Academy",
      link: "https://nas.io/chrizeecry-maths-academy-premium"
    },
    {
      id: "civil-structural",
      name: "Civil N Str",
      price: "R379",
      period: "/month",
      description: "Advanced engineering mindset and technical mastery for those serious about their STEM future.",
      features: [
        "12-week Mastery PDF (Maths + Physics)",
        "Civil/Structural Engineering Tips",
        "Personalized Progress Roadmaps",
        "Premium Mentorship Circle",
        "Monthly Zoom Strategy Sessions",
        "Exclusion-to-Engineer Framework",
      ],
      popular: false,
      badge: "Professional",
      cta: "Join Civil N Str",
      link: "https://nas.io/chrizeecry-civil-structural-premium"
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-950 uppercase">
          Choose Your Transformation
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
          Whether you're just starting or ready for professional mastery, I'm here to guide you through the fire.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl transition-all duration-500 ${
              plan.popular
                ? "lg:ring-4 lg:ring-amber-400 lg:scale-105 shadow-2xl z-10"
                : "ring-1 ring-amber-100 hover:ring-amber-300 shadow-xl"
            } overflow-hidden group bg-white flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 mt-4 mr-4 z-20">
                <span className="bg-amber-400 text-[#8B4513] text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="relative p-8 md:p-10 space-y-8 flex-grow">
              {/* Price Section */}
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-gray-900 uppercase">
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-[#FFD700] to-[#FF8C00] bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-500 font-bold text-lg">{plan.period}</span>
                  )}
                </div>

                <p className="text-sm text-gray-700 leading-relaxed font-bold italic border-l-4 border-amber-400 pl-4">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform" />
                    <span className="text-sm text-gray-800 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 mt-auto">
              {/* CTA Button */}
              <Button
                className={`w-full h-14 rounded-2xl font-black text-lg uppercase tracking-wide transition-all duration-300 shadow-lg ${
                  plan.popular
                    ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white hover:scale-105 active:scale-95 border-b-4 border-orange-700"
                    : "bg-gray-900 text-white hover:bg-gray-800 hover:scale-105 active:scale-95 border-b-4 border-gray-700"
                }`}
                onClick={() => window.open(plan.link, "_blank")}
              >
                {plan.cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              {/* Guarantee */}
              <div className="text-center mt-6">
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                   No Money-Back (Digital Goods) <br/>
                   <span className="text-amber-600">Extra Month Free Guarantee</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support & Bootcamp CTA */}
      <div className="mt-20 grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-950 text-white border-2 border-amber-400 overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-4">
             <Star className="w-8 h-8 text-amber-400 fill-amber-400 animate-pulse" />
          </div>
          <CardContent className="p-10 space-y-6">
            <Badge className="bg-amber-400 text-gray-950 font-black">EXECUTIVE / BOOTCAMP</Badge>
            <h3 className="text-3xl font-black uppercase italic">12-Week Distinction Bootcamp</h3>
            <p className="text-gray-400 font-medium">
              A complete identity shift. From academic struggle to absolute technical dominance. 
              Includes an exclusive education adventure trip (Sun City or similar) for top performers.
            </p>
            <div className="flex items-center space-x-2 text-amber-400 font-bold italic">
               <MessageCircle className="w-5 h-5" />
               <span>By Application Only: Limited to 10 Seats</span>
            </div>
            <Button 
              className="w-full bg-white text-gray-950 font-black hover:bg-amber-400 transition-colors py-6 text-lg"
              onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
            >
              APPLY FOR THE COHORT
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-white border-2 border-gray-100 shadow-xl flex flex-col justify-center">
          <CardContent className="p-10 text-center space-y-6">
            <h3 className="text-2xl font-black text-gray-900 uppercase">Need a specific guide?</h3>
            <p className="text-gray-600 font-medium italic">
              "As your mentor and 'older brother' in this game, I want to make sure you have exactly what you need. 
              Don't get lost in the noise."
            </p>
            <Button 
              variant="outline"
              className="w-full border-2 border-gray-900 text-gray-900 font-black hover:bg-gray-950 hover:text-white transition-all py-6 rounded-xl"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              SCHEDULE A CHAT
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
