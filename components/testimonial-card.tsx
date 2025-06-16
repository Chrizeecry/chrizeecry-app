import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  academy: string
  rating: number
}

export function TestimonialCard({ quote, author, role, academy, rating }: TestimonialCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <CardContent className="p-6 space-y-4">
        <div className="flex space-x-1">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        </div>

        <blockquote className="text-gray-700 leading-relaxed">"{quote}"</blockquote>

        <div className="space-y-1">
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-blue-600 font-medium">{academy}</div>
        </div>
      </CardContent>
    </Card>
  )
}
