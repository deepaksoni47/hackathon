import React, { useState } from "react";

const AISearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    await onSearch(query);
    setLoading(false);
    setQuery("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row items-center gap-3"
    >
           {" "}
      <input
        maxLength={200}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search with AI..."
        className="w-full flex-1 px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base placeholder:text-gray-400 dark:placeholder:text-gray-500"
      />
           {" "}
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
                {loading ? "Thinking..." : "Ask"}     {" "}
      </button>
           {" "}
      {query.length >= 190 && (
        <p className="text-sm text-red-500 self-start">
          Character limit approaching!
        </p>
      )}
         {" "}
    </form>
  );
};

export default AISearchBar;
