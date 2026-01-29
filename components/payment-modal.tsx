"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, CreditCard, Shield, CheckCircle } from "lucide-react"

interface PaymentModalProps {
  planId: string
  onClose: () => void
}

export function PaymentModal({ planId, onClose }: PaymentModalProps) {
  const [step, setStep] = useState<"payment" | "processing" | "success">("payment")
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    country: "",
    agreeToTerms: false,
  })

  const planDetails = {
    maths: { name: "Maths Academy", price: "R129", description: "Monthly subscription" },
    civil: { name: "Civil & Structural", price: "R379", description: "Monthly subscription" },
    music: { name: "Music & Media", price: "R237", description: "Monthly subscription" },
    nostalgia: { name: "Curated Nostalgia", price: "R127", description: "Monthly subscription" },
    complete: { name: "Complete Collective", price: "R397", description: "Monthly subscription" },
    lifetime: { name: "Complete Collective Vault", price: "R999", description: "One-time payment" },
  }

  const currentPlan = planDetails[planId as keyof typeof planDetails]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStep("processing")

    // Simulate payment processing
    setTimeout(() => {
      setStep("success")
      // Here you would integrate with your payment processor
      // and send the user their access links
    }, 3000)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (step === "processing") {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Processing Payment...</h3>
            <p className="text-gray-600">Please wait while we process your payment securely.</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (step === "success") {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Payment Successful!</h3>
            <p className="text-gray-600 mb-6">
              Welcome to {currentPlan.name}! Check your email for access links to your exclusive WhatsApp/Telegram
              groups and learning materials.
            </p>
            <div className="space-y-3 text-left bg-gray-50 p-4 rounded-lg mb-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Access links sent to {formData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">WhatsApp group invitation sent</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-sm">Learning materials now available</span>
              </div>
            </div>
            <Button onClick={onClose} className="w-full">
              Start Learning
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Complete Your Purchase</CardTitle>
            <CardDescription>
              {currentPlan.name} - {currentPlan.price} ({currentPlan.description})
            </CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
                <p className="text-sm text-gray-600 mt-1">Your access links will be sent to this email</p>
              </div>
              <div>
                <Label htmlFor="phone">WhatsApp Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+27 XX XXX XXXX"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
                <p className="text-sm text-gray-600 mt-1">For WhatsApp group invitations</p>
              </div>
            </div>

            {/* Payment Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <CreditCard className="w-5 h-5 mr-2" />
                Payment Information
              </h3>
              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange("cvv", e.target.value)}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country</Label>
                <Select onValueChange={(value) => handleInputChange("country", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="za">South Africa</SelectItem>
                    <SelectItem value="us">United States</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                    <SelectItem value="ca">Canada</SelectItem>
                    <SelectItem value="au">Australia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeToTerms}
                onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                required
              />
              <Label htmlFor="terms" className="text-sm leading-relaxed">
                I agree to the{" "}
                <a href="/policies" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/policies" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                . I understand that I will receive access links via email and WhatsApp group invitations.
              </Label>
            </div>

            {/* Security Notice */}
            <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
              <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-blue-900">Secure Payment</p>
                <p className="text-blue-700">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                </p>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Order Summary</h4>
              <div className="flex justify-between items-center">
                <span>{currentPlan.name}</span>
                <span className="font-semibold">{currentPlan.price}</span>
              </div>
              <div className="text-sm text-gray-600 mt-1">{currentPlan.description}</div>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3"
              disabled={!formData.agreeToTerms}
            >
              Complete Purchase - {currentPlan.price}
            </Button>

            <p className="text-center text-sm text-gray-600">30-day money-back guarantee • Cancel anytime</p>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
