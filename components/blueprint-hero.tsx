"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function BlueprintHero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Title & Aliases */}
        <div className="text-center space-y-4">
          <Badge className="bg-[#8B4513] text-white px-4 py-2 text-sm font-semibold">
            🚀 SAMSON CHRIZEECRY SENYATSI: THE R100M BLUEPRINT
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            The Technical Multi-Sensory Mentor
          </h1>
          <p className="text-gray-700">
            Also known as: <span className="font-semibold">Civil Engineer Survivor</span>,
            <span className="font-semibold"> EGD & Civil Tech Specialist</span>,
            <span className="font-semibold"> Lo-Fi Study Architect</span>
          </p>
        </div>

        {/* Philosophy */}
        <Card className="border-amber-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#8B4513]">🎯 The R100M Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-gray-800">
            <p>
              Content is the vehicle — you are the product. Build systems that scale:
              <span className="font-semibold"> Content → Community → Creation → Capital</span>.
            </p>
          </CardContent>
        </Card>

        {/* Scorecard + Authority */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="bg-white/80 backdrop-blur border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#8B4513]">✅ Proven Scorecard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: "Civil Tech", value: "90%" },
                  { label: "EGD", value: "83%" },
                  { label: "Maths", value: "71%" },
                  { label: "Physics", value: "79%" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-3xl font-extrabold text-[#FFD700]">{item.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#8B4513]">🏅 Real-World Authority</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-800">
              <p>Resident engineer on a 1.1km road project. 8-year persistence story — practical skills meet teaching.</p>
              <p className="text-xs text-gray-600 italic">
                Note: This program is rigorous. Success requires disciplined effort from mentors, students, parents and
                community. We teach skills, not guarantees.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Product Ecosystem */}
        <Card className="bg-white/80 backdrop-blur border-amber-200">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#8B4513]">🏗️ Product Ecosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Free Layer</span> — YouTube tutorials & lead magnets
                </div>
                <div>
                  <span className="font-semibold">Technical Mastery Academy</span> — R349/month community (weekly walkthroughs, beats library, WhatsApp support)
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">Institutional</span> — School programs & teacher training (R10k+)
                </div>
                <div>
                  <span className="font-semibold">IP Licensing</span> — Frameworks & curricula for large-scale impact
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trusted Results + CTA */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <Card className="bg-white/80 backdrop-blur border-amber-200">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#8B4513]">📈 Trusted Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1">
              <p className="text-gray-800">1000+ students coached, measurable improvements, practical placements.</p>
              <div className="text-4xl font-extrabold text-[#FFD700]">1000+ <span className="text-gray-800 text-lg font-semibold">Engineers</span></div>
              <p className="text-gray-700">Ready to see which tier fits you?</p>
            </CardContent>
          </Card>

          <div className="space-y-4 text-center md:text-left">
            <Button
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl"
              onClick={() => {
                const el = document.getElementById("chrizeecry-difference");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Check →
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-sm text-gray-600">Small interactive tools coming soon — no heavy CPU, just clarity.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
