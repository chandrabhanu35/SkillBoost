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
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-[#111]">Log in or sign up</h1>
          <p className="mt-1 text-sm sm:text-base text-gray-600">You’ll get smarter responses and can upload files, images, and more.</p>
        </div>

        {/* Providers */}
        <div className="grid gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="inline-flex h-11 w-full items-center justify-start rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold hover:bg-[#F8F9FA]"
          >
            <img src="/icons/google.svg" alt="" className="mr-3 h-4 w-4" />
            Continue with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="inline-flex h-11 w-full items-center justify-start rounded-full bg-black px-4 text-sm font-semibold text-white hover:opacity-95"
          >
            <img src="/icons/github.svg" alt="" className="mr-3 h-4 w-4 invert" />
            Continue with GitHub
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex items-center justify-center gap-4">
          <span className="block h-px w-12 bg-gray-200" />
          <span className="text-xs text-gray-500">OR</span>
          <span className="block h-px w-12 bg-gray-200" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
          <input
            type="email"
            {...register("email")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Email address"
          />
          {errors.email && (
            <p className="-mt-2 text-xs text-red-600">{errors.email.message as string}</p>
          )}
          <input
            type="password"
            {...register("password")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Password"
          />
          {errors.password && (
            <p className="-mt-2 text-xs text-red-600">{errors.password.message as string}</p>
          )}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Continue"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600 text-center">
          Don&apos;t have an account? {" "}
          <Link href="/register" className="text-accent hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
}
