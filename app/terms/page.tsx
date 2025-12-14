import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="font-black text-2xl text-slate-900 tracking-tight">
              RELAY
            </Link>
            <Link href="/">
              <Button variant="ghost" className="text-slate-600 hover:text-slate-900">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Relay Terms of Service</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance</h2>
            <p className="text-slate-700 leading-relaxed">By using Relay, you agree to these terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Communications</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree to receive business communications from us via SMS and email. You can opt-out of SMS by replying
              STOP.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Usage</h2>
            <p className="text-slate-700 leading-relaxed">
              You agree not to use Relay for any illegal purposes or to harass others.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Liability</h2>
            <p className="text-slate-700 leading-relaxed">
              Relay is provided 'as is'. We are not liable for missed calls or business losses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">These terms are governed by the laws of Washington State.</p>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Last Updated: January 2025
              <br />
              For questions about these terms, please contact us at{" "}
              <a href="mailto:support@relay.com" className="text-[#0047AB] hover:underline">
                support@relay.com
              </a>
              <br />
              <br />
              Relay
              <br />
              1919 Queen Anne Ave N
              <br />
              Seattle, WA 98109
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
