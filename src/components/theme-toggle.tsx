"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      aria-label="Chuyển đổi giao diện sáng tối"
    >
      <span>{isDark ? "🌙" : "☀"}</span>
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
