import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  // Middleware should protect this route, but we keep a safe fallback UI
  const name = session?.user?.name || session?.user?.email || "User";

  return (
    <div className="mx-auto max-w-7xl px-10 py-16">
      <h1 className="font-heading text-3xl font-semibold text-primary">Welcome, {name}</h1>
      <p className="mt-2 text-gray-600">
        This is your dashboard. We will add progress insights, recent activity, and quick actions here.
      </p>
      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-xl font-semibold text-[#222]">Getting Started</h2>
          <p className="mt-2 text-sm text-gray-600">Start a new practice set or explore recommended modules.</p>
        </div>
        <div className="col-span-12 md:col-span-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-xl font-semibold text-[#222]">Recent Activity</h2>
          <p className="mt-2 text-sm text-gray-600">Your latest attempts and progress will appear here.</p>
        </div>
      </div>
    </div>
  );
}
