"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface PricingSectionProps {
  onPlanSelect: (planId: string) => void
}

export function PricingSection({ onPlanSelect }: PricingSectionProps) {
  const plans = [
    {
      id: "complete",
      name: "Complete Collective",
      price: "R397",
      originalPrice: "R972",
      savings: "Save R575",
      description: "Access all four academies, exclusive content, priority support, and monthly 1-on-1 sessions.",
      features: [
        "All 4 Academies",
        "Priority Support",
        "Exclusive Content",
        "Community Access",
        "Monthly 1-on-1 Sessions",
        "Lifetime Updates",
      ],
      popular: true,
      badge: "Best Value",
    },
    {
      id: "lifetime",
      name: "Complete Collective Vault",
      price: "R999",
      originalPrice: null,
      savings: "One-Time Payment",
      description:
        "Lifetime access to everything + future drops, including monthly actionable PDFs and quarterly Genius Box.",
      features: [
        "Lifetime Access to All Content",
        "Monthly New Drop PDFs",
        "Genius Circle Zoom",
        "All Community Hubs",
        "Quarterly Genius Box",
        "Future Content Included",
      ],
      popular: false,
      badge: "Lifetime",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center space-y-3 mb-12">
        <h2 className="text-3xl md:text-4xl font-700 tracking-tight text-gray-950">
          Choose Your Plan
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Select the membership that fits your learning journey.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-3xl transition-all duration-300 ${
              plan.popular
                ? "lg:ring-2 lg:ring-gray-900 lg:scale-105"
                : "ring-1 ring-gray-200"
            } overflow-hidden group`}
          >
            {/* Glass effect background */}
            <div
              className={`absolute inset-0 ${
                plan.popular
                  ? "bg-gradient-to-br from-gray-900/5 to-gray-900/10"
                  : "bg-gray-50/50"
              }`}
            />

            {plan.popular && (
              <div className="relative mx-4 mt-4 inline-block">
                <span className="inline-block bg-gray-900 text-white text-xs font-600 px-3 py-1 rounded-full tracking-wide">
                  {plan.badge}
                </span>
              </div>
            )}

            <div className="relative p-8 md:p-10 space-y-8">
              {/* Price Section */}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-600 text-gray-950">
                  {plan.name}
                </h3>

                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-700 tracking-tight text-gray-950">
                      {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span className="text-base text-gray-500 line-through font-500">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  {plan.savings && (
                    <p className="text-sm font-500 text-gray-600">
                      {plan.savings}
                    </p>
                  )}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-500">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full h-12 rounded-2xl font-600 text-base transition-all duration-300 ${
                  plan.popular
                    ? "bg-gray-900 hover:bg-gray-800 text-white active:scale-98"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900 active:scale-98"
                }`}
                onClick={() => onPlanSelect(plan.id)}
              >
                {plan.id === "lifetime" ? "Get Lifetime Access" : "Join Now"}
              </Button>

              {/* Guarantee */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-500 tracking-wide">
                  30-Day Money-Back Guarantee
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Support CTA */}
      <div className="text-center mt-16">
        <p className="text-sm text-gray-600 mb-6">
          Need help choosing the right plan for you?
        </p>
        <Button
          variant="outline"
          className="rounded-2xl border-gray-300 hover:bg-gray-50 text-gray-900 font-500 h-11"
        >
          Schedule a Consultation
        </Button>
      </div>
    </div>
  )
}
