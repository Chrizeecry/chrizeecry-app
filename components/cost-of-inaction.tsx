'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, AlertTriangle } from 'lucide-react';

export default function CostOfInaction() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900">⏳ The Cost of Inaction</h2>
          <p className="text-lg text-gray-800 font-semibold">Time is the only resource you can't engineer.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Path A: The Scattered Route */}
          <div className="group relative rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-800">Path A: The Scattered Route</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Keep collecting free PDFs and watching random videos. Reach 30 and wonder why you're "stuck" despite working hard.
              </p>
            </div>
          </div>

          {/* Path B: The Resilient Engineer */}
          <div className="group relative rounded-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-100 to-green-100 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-green-800">Path B: The Resilient Engineer</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Join a structured ecosystem today.
              </p>
              <div className="grid h-0 opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
                <ul className="space-y-4 mt-4">
                  <li>
                    <strong className="block text-green-700">3 Months:</strong>
                    <span className="text-gray-600">Fortified understanding of Technical Maths & Physical Science.</span>
                  </li>
                  <li>
                    <strong className="block text-green-700">6 Months:</strong>
                    <span className="text-gray-600">Applying real-world Engineering Graphics & Design judgment, building a portfolio.</span>
                  </li>
                  <li>
                    <strong className="block text-green-700">1 Year:</strong>
                    <span className="text-gray-600">You're not just a student; you're a candidate employers likely notice.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-900 mt-12 font-bold text-2xl">
          Don't let another semester pass in mediocrity.
        </p>
      </div>
    </section>
  );
}
