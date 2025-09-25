import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/**
 * Root Layout Component
 * 
 * This is the root layout that wraps all pages in the application.
 * It sets up:
 * - Global fonts (Geist Sans and Geist Mono)
 * - Application metadata (title, description, etc.)
 * - Global CSS imports including Tailwind
 * - HTML structure and body styling
 */

// Font configurations for optimal typography
const geistSans = Geist({
  variable: "--font-geist-sans", // CSS variable for the sans-serif font
  subsets: ["latin"], // Load only Latin characters for performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono", // CSS variable for the monospace font
  subsets: ["latin"], // Load only Latin characters for performance
});

// Application metadata for SEO and social sharing
export const metadata: Metadata = {
  title: "SkillBoost", // Page title shown in browser tab
  description: "Practice Aptitude, Reasoning & Coding with AI", // Meta description for search engines
};

/**
 * Root Layout Function
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render
 * @returns {JSX.Element} The root HTML structure
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
