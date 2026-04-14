"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Dự án" },
    { href: "/skills", label: "Kỹ năng" },
    { href: "/contact", label: "Liên hệ" },
  ];

  return (
    <nav className="bg-white/95 dark:bg-gray-900/95 shadow-sm border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-bold text-emerald-600 dark:text-emerald-400"
          >
            Trần Văn Ngọc Phong
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors"
            aria-label="Mở menu điều hướng"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-3 border-t border-gray-200 dark:border-gray-800 pt-3 flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="px-2 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-emerald-50 dark:hover:bg-gray-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
