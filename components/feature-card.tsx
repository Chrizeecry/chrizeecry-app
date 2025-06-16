"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Users } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  students: string
  rating: string
  features: string[]
  price: string
  originalPrice: string
  onSelect: () => void
  popular?: boolean
}

export function FeatureCard({
  icon,
  title,
  description,
  students,
  rating,
  features,
  price,
  originalPrice,
  onSelect,
  popular = false,
}: FeatureCardProps) {
  return (
    <Card
      className={`relative h-full ${popular ? "border-2 border-blue-500 shadow-xl" : "border border-gray-200"} hover:shadow-lg transition-shadow`}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-3 py-1">
          Most Popular
        </Badge>
      )}

      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <div className="text-blue-600">{icon}</div>
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 leading-relaxed">{description}</CardDescription>

        <div className="flex items-center justify-center space-x-4 pt-2">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4 text-gray-500" />
            <span className="text-sm font-medium">{students}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold text-gray-900">{price}</span>
            <span className="text-lg text-gray-500 line-through">{originalPrice}</span>
          </div>
          <div className="text-sm text-gray-600">/month</div>
        </div>

        <ul className="space-y-2">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
          {features.length > 4 && (
            <li className="text-sm text-gray-500 pl-6">+{features.length - 4} more features...</li>
          )}
        </ul>

        <Button
          onClick={onSelect}
          className={`w-full ${
            popular
              ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              : "bg-gray-900 hover:bg-gray-800 text-white"
          }`}
        >
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
