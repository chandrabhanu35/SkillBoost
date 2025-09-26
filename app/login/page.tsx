/**
 * Login Page Component
 * 
 * Placeholder page for user authentication.
 * Currently displays a simple heading and description.
 * 
 * TODO: Implement full login form with:
 * - Email/username input field
 * - Password input field
 * - "Remember me" checkbox
 * - "Forgot password" link
 * - Form validation and error handling
 * - Integration with authentication service
 * 
 * @returns {JSX.Element} The login page component
 */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type LoginInputs = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>({ resolver: zodResolver(LoginSchema) });

  const onSubmit = async (data: LoginInputs) => {
    setError(null);
    setLoading(true);
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
    // next-auth handles redirect, errors are in URL if any
    setLoading(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F9FA] flex items-start sm:items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-primary">Welcome to SkillBoost</h1>
              <p className="mt-1 text-sm sm:text-base text-gray-600">Sign in or create your account to continue</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm font-semibold shadow-inner">Sign in</button>
            <Link href="/register" className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-sm font-semibold hover:bg-[#F8F9FA]">Create account</Link>
          </div>

          {/* OAuth */}
          <div className="mt-5 grid gap-3">
            <button
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              className="inline-flex h-10 w-full items-center justify-start rounded-md border border-gray-200 bg-white px-4 text-sm font-semibold hover:bg-[#F8F9FA]"
            >
              <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
                <img src="/icons/google.svg" alt="" className="h-4 w-4" />
              </span>
              Continue with Google
              <span className="ml-auto text-xs text-gray-500">Recommended</span>
            </button>
            <button
              onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
              className="inline-flex h-10 w-full items-center justify-start rounded-md bg-[#0F172A] px-4 text-sm font-semibold text-white hover:opacity-95"
            >
              <span className="mr-2 inline-flex h-4 w-4 items-center justify-center text-white">
                <img src="/icons/github.svg" alt="" className="h-4 w-4" />
              </span>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center justify-center gap-4">
            <span className="block h-px w-14 bg-gray-200" />
            <span className="text-xs text-gray-500">Or continue with email</span>
            <span className="block h-px w-14 bg-gray-200" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div>
              <label className="block text-sm text-gray-700">Email</label>
              <input
                type="email"
                {...register("email")}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="you@university.edu"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email.message as string}</p>
              )}
            </div>
            <div>
              <label className="block text-sm text-gray-700">Password</label>
              <input
                type="password"
                {...register("password")}
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password.message as string}</p>
              )}
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-1 inline-flex h-10 w-full items-center justify-center rounded-md bg-accent px-5 text-sm font-bold text-white shadow hover:shadow-md disabled:opacity-70"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-5 text-sm text-gray-600">
            Don&apos;t have an account? {" "}
            <Link href="/register" className="text-accent hover:underline">Create one</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
