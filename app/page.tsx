import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

/**
 * Home Page Component
 * 
 * Landing page for SkillBoost - an AI-powered learning platform.
 * Features a clean, modern design with:
 * - Top navigation bar with branding and auth buttons
 * - Hero section with compelling value proposition
 * - Call-to-action buttons for user registration and login
 * 
 * @returns {JSX.Element} The main landing page component
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#333333] flex flex-col">
      {/* Header */}
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-10 py-20 grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <div className="col-span-12 lg:col-span-6">
            <h1 className="font-heading font-semibold text-[48px] leading-tight text-primary">SkillBoost</h1>
            <h2 className="font-heading mt-3 text-[22px] font-normal text-[#444444]">Change the level of learning.</h2>
            <p className="mt-5 text-[18px] leading-8 text-gray-600 max-w-[600px]">
              SkillBoost helps students, professionals, and institutions learn, practice, and achieve excellence through personalized guidance, reasoning activities, and assessments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-bold text-white shadow hover:shadow-md">Get Started</Link>
              <Link href="#" className="inline-flex items-center justify-center rounded-md border border-primary text-primary px-6 py-3 text-sm font-semibold bg-white hover:bg-[#F8F9FA]">See Demo</Link>
            </div>
          </div>
          {/* Right illustration */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl bg-gradient-to-br from-[#F0F6FF] to-[#E6F0FA] border border-blue-200 flex items-center justify-center">
              <Image src="/illustrations/hero-learning.svg" alt="Digital learning illustration" width={560} height={360} className="w-auto h-[70%]" />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-10 py-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl font-semibold text-primary">Powerful Features</h3>
            <p className="mt-2 text-gray-600">Everything you need for modern, effective learning.</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {[
              { title: "Personalized Learning Paths", icon: "/icons/personalized.svg" },
              { title: "Reasoning & Critical Thinking", icon: "/icons/reasoning.svg" },
              { title: "Interactive Tests & Assessments", icon: "/icons/interactive.svg" },
              { title: "Progress Tracking & Reports", icon: "/icons/interactive.svg" },
            ].map((f, i) => (
              <div key={i} className="col-span-12 sm:col-span-6 lg:col-span-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="h-12 w-12 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-4 border border-accent/20" aria-hidden>
                  <Image src={f.icon} alt="" width={24} height={24} />
                </div>
                <h4 className="font-heading text-[20px] font-semibold text-[#222]">{f.title}</h4>
                <p className="mt-2 text-[16px] leading-7 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis orci.</p>
                <div className="mt-4 h-0.5 w-12 bg-primary/30 rounded" aria-hidden />
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof: Testimonials */}
        <section className="bg-[#F8F9FA] border-t border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-10 py-20">
            <div className="text-center mb-10">
              <h3 className="font-heading text-3xl font-semibold text-primary">What People Say</h3>
              <p className="mt-2 text-gray-600">From students, professors, and investors.</p>
            </div>
            <div className="grid grid-cols-12 gap-6">
              {[
                { role: "Student", quote: "SkillBoost made practicing fun and effective. My scores improved in weeks!" },
                { role: "Professor", quote: "A robust tool for structured learning and insightful assessment." },
                { role: "Investor", quote: "Clear value proposition with scalable impact in edtech." },
              ].map((t, i) => (
                <div key={i} className="col-span-12 md:col-span-4 rounded-xl bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20 shrink-0" aria-hidden />
                    <p className="text-gray-700">“{t.quote}”
                      <span className="block mt-3 font-heading text-sm font-semibold text-gray-900">{t.role}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Logos row */}
            <div className="mt-12 text-center">
              <div className="text-sm text-gray-600 mb-4">Trusted by Universities and Organizations</div>
              <div className="grid grid-cols-12 gap-6 items-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="col-span-6 sm:col-span-3 lg:col-span-2 h-14 bg-gray-200 rounded" aria-label="Partner logo placeholder" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-10 py-20">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl font-semibold text-primary">Simple, Transparent Pricing</h3>
            <p className="mt-2 text-gray-600">Choose the plan that fits your needs.</p>
          </div>
          <div className="grid grid-cols-12 gap-6">
            {[
              { name: "Basic", price: "Free", features: ["Core practice modules", "Basic analytics", "Email support"] },
              { name: "Pro", price: "$12/mo", features: ["Advanced modules", "Detailed reports", "Priority support"] },
              { name: "Enterprise", price: "Contact us", features: ["Institutional onboarding", "Custom analytics", "Dedicated success manager"] },
            ].map((p, i) => (
              <div key={i} className={`col-span-12 md:col-span-4 rounded-2xl border p-6 shadow-sm bg-white text-center ${i===1 ? 'border-accent ring-1 ring-accent/30 shadow-md' : 'border-gray-200'}`}>
                <h4 className="font-heading text-xl font-semibold text-gray-900">{p.name}</h4>
                <div className="mt-2 text-3xl font-heading text-primary">{p.price}</div>
                <ul className="mt-4 space-y-2 text-[15px] text-gray-700 text-left max-w-xs mx-auto">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Image src="/icons/check.svg" alt="" width={16} height={16} className="mt-1" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="#" className={`inline-flex w-full items-center justify-center rounded-md px-5 py-2.5 text-sm font-bold shadow ${i===1 ? 'bg-accent text-white hover:shadow-md' : 'border border-primary text-primary hover:bg-[#F8F9FA]'}`}>Choose {p.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-gradient-to-r from-primary to-accent">
          <div className="mx-auto max-w-7xl px-10 py-16 text-center text-white">
            <h3 className="font-heading text-3xl font-semibold">Ready to elevate learning?</h3>
            <p className="mt-2 text-white/70">Start your journey with SkillBoost today.</p>
            <div className="mt-8">
              <Link href="/register" className="inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-sm font-bold text-primary shadow hover:shadow-md">Get Started</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-10 py-16 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900 inline-block pb-1 border-b-2 border-accent">Company</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#about" className="hover:text-accent">About</Link></li>
              <li><Link href="#" className="hover:text-accent">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900 inline-block pb-1 border-b-2 border-accent">Product</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Students</Link></li>
              <li><Link href="#" className="hover:text-accent">Institutions</Link></li>
              <li><Link href="#" className="hover:text-accent">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900 inline-block pb-1 border-b-2 border-accent">Resources</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Docs</Link></li>
              <li><Link href="#" className="hover:text-accent">Help Center</Link></li>
              <li><Link href="#" className="hover:text-accent">Community</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900 inline-block pb-1 border-b-2 border-accent">Legal</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Terms</Link></li>
              <li><Link href="#" className="hover:text-accent">Privacy</Link></li>
              <li><Link href="#" className="hover:text-accent">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-10 py-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons placeholders */}
          <div className="flex items-center gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-8 rounded-full bg-gray-200" aria-label="Social icon placeholder" />
            ))}
          </div>
          <div className="text-sm text-gray-500">© SkillBoost 2025. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
