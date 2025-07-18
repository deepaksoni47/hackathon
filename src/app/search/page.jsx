"use client";
import { useState } from "react";
import AISearchBar from "@/components/AISearchBar";

export default function Home() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setResponse(""); // clear old response
    const res = await fetch("/api/ai-search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    setResponse(data.answer);
    setLoading(false);
  };

  return (
    <div className="max-w-3xl w-full px-4">
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6">🔍 Ask AI Anything</h1>
        <AISearchBar onSearch={handleSearch} />
        <div className="mt-8 max-w-2xl w-full bg-white p-6 rounded-xl shadow-lg min-h-[120px]">
          {loading ? (
            <p className="text-gray-500">⏳ Generating response...</p>
          ) : response ? (
            <>
              <h2 className="text-lg font-semibold mb-2">AI Response:</h2>
              <p className="text-gray-800 whitespace-pre-line">{response}</p>
            </>
          ) : (
            <p className="text-gray-400 italic">Try asking a question...</p>
          )}
        </div>
      </div>
    </div>
  );
}
