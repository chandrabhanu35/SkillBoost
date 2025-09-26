/**
 * Registration Page Component
 * 
 * Placeholder page for new user registration.
 * Currently displays a simple heading and description.
 * 
 * TODO: Implement full registration form with:
 * - Full name input field
 * - Email address input field
 * - Password input field with strength indicator
 * - Confirm password field
 * - Terms of service agreement checkbox
 * - Form validation and error handling
 * - Integration with authentication service
 * - Email verification flow
 * 
 * @returns {JSX.Element} The registration page component
 */
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const RegisterSchema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    role: z.enum(["Student", "Professional", "Professor", "Institution Admin"]).optional(),
    email: z.string().email(),
    password: z.string().min(6, "Min 6 characters"),
    confirm: z.string().min(6),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

type RegisterInputs = z.infer<typeof RegisterSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterInputs>({ resolver: zodResolver(RegisterSchema) });

  const onSubmit = async (data: RegisterInputs) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, role: data.role, email: data.email, password: data.password }),
      });
      if (res.ok) {
        router.push("/login");
      } else {
        const j = await res.json().catch(() => ({}));
        setError(j?.error || "Registration failed");
      }
    } catch (e) {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F8F9FA] flex items-start sm:items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-[#111]"><span className="text-primary">Create</span> your account</h1>
          <p className="mt-1 text-sm sm:text-base text-gray-600">Start practicing with personalized insights</p>
        </div>

        {/* Social signups */}
        <div className="grid gap-3">
          <button className="inline-flex h-11 w-full items-center justify-start rounded-full border border-gray-200 bg-white px-4 text-sm font-semibold hover:bg-[#F8F9FA]">
            <img src="/icons/google.svg" alt="" className="mr-3 h-4 w-4" />
            Continue with Google
          </button>
          <button className="inline-flex h-11 w-full items-center justify-start rounded-full bg-black px-4 text-sm font-semibold text-white hover:opacity-95">
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
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <input
            type="text"
            {...register("name")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Full name"
          />
          {errors.name && <p className="-mt-2 text-xs text-red-600">{errors.name.message as string}</p>}

          <select
            {...register("role")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
            defaultValue="Student"
          >
            <option>Student</option>
            <option>Professional</option>
            <option>Professor</option>
            <option>Institution Admin</option>
          </select>

          <input
            type="email"
            {...register("email")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Email address"
          />
          {errors.email && <p className="-mt-2 text-xs text-red-600">{errors.email.message as string}</p>}

          <input
            type="password"
            {...register("password")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Password"
          />
          {errors.password && <p className="-mt-2 text-xs text-red-600">{errors.password.message as string}</p>}

          <input
            type="password"
            {...register("confirm")}
            className="h-11 w-full rounded-full border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Confirm password"
          />
          {errors.confirm && <p className="-mt-2 text-xs text-red-600">{errors.confirm.message as string}</p>}

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-70"
          >
            {loading ? "Creating..." : "Create account"}
          </button>
        </form>
      </div>
    </div>
  );
}
