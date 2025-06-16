"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
      savings: "Save R575!",
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
      badge: "Best Value - Save 23%",
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
      badge: "Lifetime Access!",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Choose Your Investment</h2>
        <p className="text-xl text-gray-600">Select the plan that best fits your learning goals and budget.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`relative p-8 ${plan.popular ? "border-2 border-blue-500 shadow-xl" : "border border-gray-200"}`}
          >
            {plan.popular && (
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1">
                {plan.badge}
              </Badge>
            )}

            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{plan.originalPrice}</span>
                  )}
                </div>
                <div className="text-green-600 font-semibold">{plan.savings}</div>
              </div>
              <CardDescription className="text-gray-600 mt-4">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-3 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
                onClick={() => onPlanSelect(plan.id)}
              >
                {plan.id === "lifetime" ? "Get Lifetime Access" : "Join Complete Collective"}
              </Button>

              <div className="text-center text-sm text-gray-500">30-Day Money-Back Guarantee</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">Need help choosing? Our team is here to help you find the perfect plan.</p>
        <Button variant="outline" size="lg">
          Schedule a Consultation
        </Button>
      </div>
    </div>
  )
}
