import Link from "next/link";

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
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Logo placeholder */}
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" aria-hidden />
            <span className="text-xl font-heading font-semibold tracking-tight text-primary">SkillBoost</span>
          </Link>
          {/* Right: Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-accent">Home</Link>
            <Link href="#about" className="hover:text-accent">About</Link>
            <Link href="#features" className="hover:text-accent">Features</Link>
            <Link href="#pricing" className="hover:text-accent">Pricing</Link>
            <Link href="#contact" className="hover:text-accent">Contact</Link>
            <Link href="/register" className="inline-flex items-center rounded-md bg-accent px-4 py-2 font-medium text-white shadow hover:opacity-90">Get Started</Link>
          </nav>
          {/* Mobile menu button (placeholder) */}
          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded border border-gray-300" aria-label="Open Menu">
            <span className="block h-0.5 w-5 bg-gray-700 mb-1" />
            <span className="block h-0.5 w-5 bg-gray-700 mb-1" />
            <span className="block h-0.5 w-5 bg-gray-700" />
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <h1 className="font-heading text-5xl sm:text-6xl font-extrabold tracking-tight text-primary">SkillBoost</h1>
            <h2 className="font-heading mt-3 text-2xl sm:text-3xl font-semibold text-gray-800">Change the level of learning.</h2>
            <p className="mt-5 text-lg text-gray-600 max-w-xl">
              SkillBoost helps students, professionals, and institutions learn, practice, and achieve excellence through personalized guidance, reasoning activities, and assessments.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/register" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow hover:opacity-90">Get Started</Link>
              <Link href="#" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50">See Demo</Link>
            </div>
          </div>
          {/* Right illustration placeholder */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200">
            <div className="absolute inset-6 rounded-lg border-2 border-dashed border-blue-300 flex items-center justify-center text-blue-500">
              <span className="text-sm">Illustration Placeholder (Digital Learning Theme)</span>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl font-bold text-primary">Powerful Features</h3>
            <p className="mt-2 text-gray-600">Everything you need for modern, effective learning.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Personalized Learning Paths" },
              { title: "Reasoning & Critical Thinking" },
              { title: "Interactive Tests & Assessments" },
              { title: "Progress Tracking & Reports" },
            ].map((f, i) => (
              <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition">
                <div className="h-10 w-10 rounded bg-accent/20 text-accent flex items-center justify-center mb-4" aria-hidden>
                  <span className="text-xs">Icon</span>
                </div>
                <h4 className="font-heading text-lg font-semibold text-gray-900">{f.title}</h4>
                <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis orci.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Proof: Testimonials */}
        <section className="bg-gray-50 border-t border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-10">
              <h3 className="font-heading text-3xl font-bold text-primary">What People Say</h3>
              <p className="mt-2 text-gray-600">From students, professors, and investors.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { role: "Student", quote: "SkillBoost made practicing fun and effective. My scores improved in weeks!" },
                { role: "Professor", quote: "A robust tool for structured learning and insightful assessment." },
                { role: "Investor", quote: "Clear value proposition with scalable impact in edtech." },
              ].map((t, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 border border-primary/20" aria-hidden />
                    <div>
                      <div className="font-heading font-semibold text-gray-900">{t.role}</div>
                      <div className="text-xs text-gray-500">@placeholder</div>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">“{t.quote}”</p>
                </div>
              ))}
            </div>

            {/* Logos row */}
            <div className="mt-12 text-center">
              <div className="text-sm text-gray-600 mb-4">Trusted by universities and organizations</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded" aria-label="Partner logo placeholder" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-10">
            <h3 className="font-heading text-3xl font-bold text-primary">Simple, Transparent Pricing</h3>
            <p className="mt-2 text-gray-600">Choose the plan that fits your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Basic", price: "Free", features: ["Core practice modules", "Basic analytics", "Email support"] },
              { name: "Pro", price: "$12/mo", features: ["Advanced modules", "Detailed reports", "Priority support"] },
              { name: "Enterprise", price: "Contact us", features: ["Institutional onboarding", "Custom analytics", "Dedicated success manager"] },
            ].map((p, i) => (
              <div key={i} className={`rounded-xl border p-6 shadow-sm bg-white ${i===1 ? 'border-accent ring-1 ring-accent/30' : 'border-gray-200'}`}>
                <h4 className="font-heading text-xl font-semibold text-gray-900">{p.name}</h4>
                <div className="mt-2 text-2xl font-heading text-primary">{p.price}</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="#" className={`inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow ${i===1 ? 'bg-accent text-white hover:opacity-90' : 'border border-gray-300 hover:bg-gray-50'}`}>Choose {p.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center text-white">
            <h3 className="font-heading text-3xl font-bold">Ready to elevate learning?</h3>
            <p className="mt-2 text-white/90">Start your journey with SkillBoost today.</p>
            <div className="mt-6">
              <Link href="/register" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-primary shadow hover:opacity-90">Get Started</Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900">Company</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#about" className="hover:text-accent">About</Link></li>
              <li><Link href="#" className="hover:text-accent">Careers</Link></li>
              <li><Link href="#" className="hover:text-accent">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900">Product</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Students</Link></li>
              <li><Link href="#" className="hover:text-accent">Institutions</Link></li>
              <li><Link href="#" className="hover:text-accent">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900">Resources</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Docs</Link></li>
              <li><Link href="#" className="hover:text-accent">Help Center</Link></li>
              <li><Link href="#" className="hover:text-accent">Community</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-heading text-sm font-semibold text-gray-900">Legal</h5>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-accent">Terms</Link></li>
              <li><Link href="#" className="hover:text-accent">Privacy</Link></li>
              <li><Link href="#" className="hover:text-accent">Security</Link></li>
            </ul>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Social icons placeholders */}
          <div className="flex items-center gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-8 rounded-full bg-gray-200" aria-label="Social icon placeholder" />
            ))}
          </div>
          <div className="text-sm text-gray-500">© {new Date().getFullYear()} SkillBoost. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
