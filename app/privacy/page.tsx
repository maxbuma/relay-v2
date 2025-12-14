import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicy() {
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

      {/* Privacy Policy Content */}
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-black text-slate-900 mb-8">Relay Privacy Policy</h1>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information Collection</h2>
            <p className="text-slate-700 leading-relaxed">
              We collect name, phone number, and email to provide AI receptionist services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Use of Information</h2>
            <p className="text-slate-700 leading-relaxed">
              Your phone number is used to send SMS notifications regarding missed calls, appointments, and service
              updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Sharing</h2>
            <p className="text-slate-700 leading-relaxed">
              No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All
              other categories exclude text messaging originator opt-in data and consent; this information will not be
              shared with any third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Opt-Out</h2>
            <p className="text-slate-700 leading-relaxed">
              You may opt out of SMS communications at any time by replying STOP.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Last Updated: January 2025
              <br />
              For questions about this privacy policy, please contact us at{" "}
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
