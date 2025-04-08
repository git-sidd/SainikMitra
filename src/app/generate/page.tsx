"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Generate() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    router.push(`/getcertificate?name=${encodeURIComponent(name.trim())}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-green-100 px-4">
      <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-md">
        {/* Indian Flag */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_India.png"
            alt="Indian Flag"
            className="w-20 h-14 object-cover border border-gray-300 rounded"
          />
        </div>

        <h1 className="text-3xl font-bold text-center text-orange-600 mb-2">
          वीरों को नमन 
        </h1>
        <p className="text-center text-gray-700 mb-6 text-sm">
          Enter your name below to generate your certificate in honor of our brave martyrs.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
          >
            View Certificate
          </button>
        </form>

        <div className="text-center text-xs text-gray-400 mt-6">
          Designed to honor the sacrifices of our soldiers. Jai Hind 🇮🇳
        </div>
      </div>
    </div>
  );
}
