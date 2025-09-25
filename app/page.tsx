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
      {/* Navigation Bar - Fixed header with glassmorphism effect */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Brand Logo/Name */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            SkillBoost
          </Link>
          {/* Authentication Navigation */}
          <nav className="flex items-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section - Main value proposition and CTAs */}
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Practice Aptitude, Reasoning & Coding with AI
            </h1>
            {/* Supporting Description */}
            <p className="mt-4 text-lg text-gray-600">
              Personalized practice sets, instant feedback, and targeted learning paths to boost your skills.
            </p>
            {/* Call-to-Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-500"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium hover:bg-gray-50"
              >
                I already have an account
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
