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
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <h1 className="font-heading text-3xl font-semibold text-primary">Register</h1>
        <p className="mt-2 text-gray-600">Create your SkillBoost account.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
          <div>
            <label className="block text-sm text-gray-700">Full Name</label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Jane Doe"
            />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message as string}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-700">Role</label>
            <select
              {...register("role")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent bg-white"
              defaultValue="Student"
            >
              <option>Student</option>
              <option>Professional</option>
              <option>Professor</option>
              <option>Institution Admin</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message as string}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-700">Password</label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
            {errors.password && <p className="mt-1 text-xs text-red-600">{errors.password.message as string}</p>}
          </div>
          <div>
            <label className="block text-sm text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register("confirm")}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="••••••••"
            />
            {errors.confirm && <p className="mt-1 text-xs text-red-600">{errors.confirm.message as string}</p>}
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-5 py-2.5 text-sm font-bold text-white shadow hover:shadow-md disabled:opacity-70"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
