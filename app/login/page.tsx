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
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-3xl font-semibold text-primary">Login</h1>
        <p className="mt-2 text-gray-600">Sign in to continue to SkillBoost.</p>

        <div className="mt-6 grid gap-3">
          <button
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-[#F8F9FA]"
          >
            Continue with Google
          </button>
          <button
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold hover:bg-[#F8F9FA]"
          >
            Continue with GitHub
          </button>
        </div>

        <div className="my-6 h-px w-full bg-gray-200" />

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
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
            className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white shadow hover:shadow-md disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600">
          Don&apos;t have an account? {" "}
          <Link href="/register" className="text-accent hover:underline">Register</Link>
        </p>
      </div>
    </div>
  );
}
