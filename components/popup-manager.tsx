'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { X, Star, Minus, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PopupManager() {
  const [showDiscountPopup, setShowDiscountPopup] = useState(false);
  const [discountMinimized, setDiscountMinimized] = useState(false);
  
  const [showCommunityPopup, setShowCommunityPopup] = useState(false);
  
  const [showMentorshipPopup, setShowMentorshipPopup] = useState(false);
  
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Cookie Consent Check
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShowCookieConsent(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      if (scrollHeight <= 0) return;
      
      const scrollPercent = (scrollY / scrollHeight) * 100;

      // Discount Popup (20%)
      if (scrollPercent > 20 && !localStorage.getItem("discount-dismissed")) {
        setShowDiscountPopup(true);
      }

      // Community Popup (45%)
      if (scrollPercent > 45 && !localStorage.getItem("community-dismissed")) {
        // If discount is open, minimize it
        if (showDiscountPopup && !discountMinimized) {
            setDiscountMinimized(true);
        }
        setShowCommunityPopup(true);
      }
      
      // Mentorship Popup (70%)
      if (scrollPercent > 70 && !localStorage.getItem("mentorship-dismissed")) {
        setShowMentorshipPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showDiscountPopup, discountMinimized]);

  // Dismiss Handlers
  const dismissDiscount = () => {
    setShowDiscountPopup(false);
    localStorage.setItem("discount-dismissed", "true");
  };

  const dismissCommunity = () => {
    setShowCommunityPopup(false);
    localStorage.setItem("community-dismissed", "true");
  };

  const dismissMentorship = () => {
    setShowMentorshipPopup(false);
    localStorage.setItem("mentorship-dismissed", "true");
  };

  return (
    <>
      {/* 1. DISCOUNT POPUP */}
      {showDiscountPopup && (
        <div className={`fixed bottom-24 right-4 z-[90] transition-all duration-500 ${discountMinimized ? 'w-auto' : 'max-w-[240px] md:max-w-sm w-full'}`}>
          {discountMinimized ? (
            <button
              onClick={() => setDiscountMinimized(false)}
              className="bg-orange-500 text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center space-x-2 animate-bounce"
            >
              <Star className="w-5 h-5 fill-current" />
              <span className="font-bold text-xs">25% OFF</span>
            </button>
          ) : (
            <div className="bg-white shadow-2xl border-2 border-orange-500 p-4 rounded-2xl transform animate-in slide-in-from-bottom-20 relative">
               <button 
                  onClick={() => setDiscountMinimized(true)} 
                  className="absolute top-2 right-8 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Minimize"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <button 
                  onClick={dismissDiscount} 
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
                  title="Dismiss"
                >
                  <X className="h-4 w-4" />
                </button>

              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  <Star className="w-6 h-6 text-orange-600 fill-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">Mastery Cohort</h3>
                  <p className="text-xs text-orange-600 font-bold">Limited Time Offer</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-orange-50 p-2 rounded-lg border border-orange-100 text-center">
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">Use Code</div>
                  <div className="text-xl font-mono font-black text-orange-600 tracking-widest">CHRIS25</div>
                  <div className="text-[10px] text-gray-400 mt-1">Get 25% OFF immediately</div>
                </div>
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold shadow-md"
                  onClick={() => window.open("https://nas.io/chrizeecry-complete-collective-vault-premium", "_blank")}
                >
                  Claim Discount
                </Button>
                 <button 
                  onClick={dismissDiscount}
                  className="w-full text-[10px] text-gray-400 hover:text-gray-600 underline decoration-dotted"
                >
                  No thanks, I'll pay full price
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 2. COMMUNITY POPUP (Free Study Vault) */}
      {showCommunityPopup && (
        <div className="fixed bottom-4 right-4 z-[100] max-w-[240px] w-full animate-in slide-in-from-right-10 duration-700">
           <Card className="shadow-2xl border-l-4 border-l-[#8B4513] border-t-0 border-r-0 border-b-0 bg-white/95 backdrop-blur overflow-hidden">
             <div className="absolute top-0 right-0 p-2">
                <button onClick={dismissCommunity} className="text-gray-400 hover:text-red-500 transition-colors">
                  <X className="w-4 h-4" />
                </button>
             </div>
             <CardContent className="p-4 space-y-3">
                <div className="flex items-center space-x-2">
                   <div className="w-8 h-8 bg-gradient-to-br from-[#8B4513] to-amber-600 rounded-lg flex items-center justify-center text-white shadow-lg">
                      <span className="text-xs font-bold">Free</span>
                   </div>
                   <h4 className="font-bold text-sm text-gray-900 leading-none">Study Vault <br/><span className="text-[10px] text-amber-600 font-normal">Updated Content</span></h4>
                </div>
                
                <div className="text-xs text-gray-600 space-y-1 font-medium">
                   <div className="flex items-center"><CheckCircle2 className="w-3 h-3 text-green-500 mr-1"/> Big 4 Subjects</div>
                   <div className="flex items-center"><CheckCircle2 className="w-3 h-3 text-green-500 mr-1"/> Civil Tech & EGD</div>
                   <div className="flex items-center"><CheckCircle2 className="w-3 h-3 text-green-500 mr-1"/> FL Studio Files</div>
                </div>

                <Button 
                  size="sm" 
                  className="w-full bg-[#8B4513] hover:bg-[#6F370F] text-white font-bold text-xs h-8"
                  onClick={() => window.open("https://collective.chrizeecry.com/meet-and-great-the-community", "_blank")}
                >
                  Access Now
                </Button>
                <div className="text-[9px] text-center text-gray-400 italic">
                  Join 900+ Students
                </div>
             </CardContent>
           </Card>
        </div>
      )}

      {/* 3. MENTORSHIP POPUP (New) */}
      {showMentorshipPopup && (
        <div className="fixed bottom-4 left-4 z-[100] max-w-[280px] w-full animate-in slide-in-from-left-10 duration-700">
          <Card className="shadow-2xl border-none bg-[#0a0a0a] text-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/20 to-transparent pointer-events-none"></div>
             <div className="absolute top-2 right-2 z-20">
                <button onClick={dismissMentorship} className="text-gray-500 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
             </div>
             <CardContent className="p-5 relative z-10 space-y-4">
                <div>
                   <Badge className="bg-amber-500 text-black text-[10px] font-black uppercase mb-2">My Story</Badge>
                   <h4 className="font-bold text-base leading-tight">Don't Walk Alone.</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                   "I failed twice before I succeeded. Mentorship was the bridge. Let me guide your engineering journey."
                </p>
                <div className="flex space-x-2">
                   <Button 
                     size="sm" 
                     className="flex-1 bg-white text-black hover:bg-gray-200 font-bold text-xs"
                     onClick={() => {
                        const storySection = document.getElementById('story') || document.getElementById('about-founder');
                        storySection?.scrollIntoView({ behavior: 'smooth' });
                     }}
                   >
                     Read Story
                   </Button>
                   <Button 
                     size="sm" 
                     variant="outline"
                     className="flex-1 border-white/20 text-white hover:bg-white/10 font-bold text-xs"
                     onClick={() => window.open("https://wa.me/27736043894", "_blank")}
                   >
                     Connect
                   </Button>
                </div>
                <button 
                  onClick={dismissMentorship}
                  className="w-full text-center text-[10px] text-gray-600 hover:text-gray-400 mt-1 transition-colors"
                >
                  I'll figure it out myself
                </button>
             </CardContent>
          </Card>
        </div>
      )}

      {/* COOKIE CONSENT */}
      {showCookieConsent && (
        <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
          <div className="max-w-4xl mx-auto bg-slate-900/95 backdrop-blur-md text-white p-4 md:p-6 rounded-2xl shadow-2xl border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xl md:text-2xl">🍪</span>
              </div>
              <div>
                <h4 className="font-bold text-sm md:text-lg">Your Privacy & Growth</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  We use cookies to optimize your learning journey.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                className="flex-1 md:flex-none bg-slate-700 hover:bg-slate-600 text-white border-none font-medium transition-colors"
                onClick={() => {
                  localStorage.setItem("cookie-consent", "declined");
                  setShowCookieConsent(false);
                }}
              >
                Decline
              </Button>
              <Button 
                className="flex-1 md:flex-none bg-gradient-to-r from-amber-500 to-orange-500 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-6 md:px-8"
                onClick={() => {
                  localStorage.setItem("cookie-consent", "accepted");
                  setShowCookieConsent(false);
                }}
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
