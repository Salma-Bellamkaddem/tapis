"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(json.error || "Could not sign in.");
      } else {
        router.push("/admin/orders");
        router.refresh();
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#FAF9F6] min-h-[70vh] py-20 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto bg-white border border-[#A44E36]/20 rounded-2xl p-6 space-y-4"
      >
        <h1 className="font-serif text-2xl text-gray-900">Admin sign in</h1>
        <div>
          <label htmlFor="password" className="block text-xs font-bold tracking-widest uppercase text-gray-700 mb-1.5">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-[#A44E36]/30 bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-[#A44E36]"
          />
        </div>
        {error && (
          <p role="alert" className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#A44E36] text-white py-3 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-[#8a3f2b] transition-colors disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}