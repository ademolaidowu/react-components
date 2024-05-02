"use client";
import { Input } from "@/components/input";

export default function Home() {
  return (
    <main className="w-full min-h-screen p-24">
      <div className="w-full mx-auto max-w-xl bg-blue-100 flex flex-col gap-16 p-8">
        <Input
          name="Email"
          type="email"
          label="Email"
          placeholder="Enter your email address"
        />
      </div>
    </main>
  );
}
