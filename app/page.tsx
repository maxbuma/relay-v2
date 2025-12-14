"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Shield, Clock, Check, Play, Pause } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { TrialSignupDialog } from "@/components/trial-signup-dialog"
import { Toaster } from "sonner"

export default function RelayLanding() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showTrialDialog, setShowTrialDialog] = useState(false)

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-center" />

      {/* Navbar */}
      <nav className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="font-black text-2xl text-slate-900 tracking-tight">RELAY</div>
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={scrollToDemo}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition"
              >
                Demo
              </button>
              <Link href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                How it Works
              </Link>
              <Link href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Pricing
              </Link>
              <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition">
                Contact
              </Link>
              <Button
                onClick={() => setShowTrialDialog(true)}
                className="bg-[#0047AB] hover:bg-[#003a8c] text-white font-semibold"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 text-balance leading-tight">
              Focus on the Job. Let Relay Handle the Phone.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The automated receptionist that sounds professional, filters spam, and books work while you're on a roof
              or under a sink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowTrialDialog(true)}
                size="lg"
                className="bg-[#0047AB] hover:bg-[#003a8c] text-white font-semibold text-base px-8"
              >
                Start Your Free Trial
              </Button>
              <Button
                onClick={scrollToDemo}
                size="lg"
                variant="outline"
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-semibold text-base px-8 bg-transparent"
              >
                Hear a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-20 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Hear Relay in Action</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Listen to how Relay answers your calls with a professional, human-like voice.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto p-8 border-2 border-slate-900 shadow-2xl bg-white">
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-200">
              <div>
                <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Incoming Call</div>
                <div className="text-xl font-bold text-slate-900">Relay</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#0047AB] animate-pulse"></div>
                <span className="text-sm font-medium text-slate-600">Live</span>
              </div>
            </div>

            <div className="flex items-center gap-6 mb-8">
              <Button
                onClick={() => setIsPlaying(!isPlaying)}
                size="lg"
                className="w-16 h-16 rounded-full bg-[#0047AB] hover:bg-[#003a8c] text-white flex-shrink-0"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </Button>

              <div className="flex-1">
                <div className="flex items-end justify-around h-16 gap-1">
                  {[...Array(32)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 rounded-full transition-all duration-300 ${
                        isPlaying ? "bg-[#0047AB]" : "bg-slate-300"
                      }`}
                      style={{
                        height: isPlaying ? `${20 + Math.sin(i * 0.5 + Date.now() / 200) * 30}%` : "30%",
                        transitionDelay: `${i * 20}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Live Transcript</div>
              <p className="text-lg text-slate-900 leading-relaxed font-medium">
                "Hello, this is Relay. How can I help you today?"
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Social Proof / Integrations */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-600 uppercase tracking-wider mb-8">
            Seamlessly integrates with the tools you run on:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-2xl font-bold text-slate-400 grayscale">ServiceTitan</div>
            <div className="text-2xl font-bold text-slate-400 grayscale">Housecall Pro</div>
            <div className="text-2xl font-bold text-slate-400 grayscale">Jobber</div>
            <div className="text-2xl font-bold text-slate-400 grayscale">FieldEdge</div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-8 border-2 border-slate-200 hover:border-[#0047AB] transition-colors">
              <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Sound Like a Fleet.</h3>
              <p className="text-slate-600 leading-relaxed">
                Give every caller a professional greeting, even if you're a one-man shop.
              </p>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 border-2 border-slate-200 hover:border-[#0047AB] transition-colors">
              <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Zero Interruptions.</h3>
              <p className="text-slate-600 leading-relaxed">
                Stop pausing work to answer robo-calls. Relay filters the noise and only notifies you of paying jobs.
              </p>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 border-2 border-slate-200 hover:border-[#0047AB] transition-colors">
              <div className="w-12 h-12 bg-[#0047AB] rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">24/7 Booking.</h3>
              <p className="text-slate-600 leading-relaxed">
                Capture emergency jobs at 2 AM while your competition goes to voicemail.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Simple, Honest Pricing</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              One plan that works for every trade business. No surprises.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Card className="p-10 border-2 border-slate-900 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-[#0047AB] text-white font-bold text-sm px-6 py-2 rounded-full shadow-lg">
                  7-Day Free Trial
                </span>
              </div>

              <div className="text-center mb-8 pt-4">
                <div className="text-5xl font-black text-slate-900 mb-2">$99</div>
                <div className="text-slate-600 font-medium">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-900 font-semibold">24/7 Call Answering</span>
                    <p className="text-sm text-slate-600">No missed leads, even after hours</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-900 font-semibold">Instant SMS Follow-up</span>
                    <p className="text-sm text-slate-600">Automatic text confirmations to customers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-900 font-semibold">Spam Call Filtering</span>
                    <p className="text-sm text-slate-600">AI blocks robocalls and telemarketers</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#0047AB] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-slate-900 font-semibold">Calendar/CRM Integration</span>
                    <p className="text-sm text-slate-600">Syncs with ServiceTitan, Jobber & more</p>
                  </div>
                </li>
              </ul>

              <Button
                onClick={() => setShowTrialDialog(true)}
                className="w-full bg-[#0047AB] hover:bg-[#003a8c] text-white font-semibold text-base py-6"
              >
                Start Your Free Trial
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Product */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#how-it-works" className="text-slate-400 hover:text-white transition text-sm">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-slate-400 hover:text-white transition text-sm">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#contact" className="text-slate-400 hover:text-white transition text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-slate-400 hover:text-white transition text-sm">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-400 hover:text-white transition text-sm">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>support@relayanswering.com</li>
                <li>
                  1919 Queen Anne Ave N
                  <br />
                  Seattle, WA 98109
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm text-slate-400 text-center">© 2025 Relay. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <TrialSignupDialog open={showTrialDialog} onOpenChange={setShowTrialDialog} />
    </div>
  )
}
