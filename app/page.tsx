import Link from "next/link";
import CopyButton from "@/src/components/copy-button";
import Counter from "@/src/components/counter";
import ThemeToggle from "@/src/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-emerald-100 dark:bg-emerald-900/40 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl font-semibold text-emerald-700 dark:text-emerald-300">
            TP
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Xin chào! Tôi là{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Trần Văn Ngọc Phong
          </span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-3 max-w-2xl mx-auto">
          Kỹ sư Công nghệ thông tin (2021-2026) tại Đại học Đà Lạt.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          MSSV: 2212441. Quan tâm phát triển web full-stack, tự động hóa với
          Google Apps Script và quy trình DevOps thực tế.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-gray-300 dark:border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Next.JS App Router",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Node.js + Express",
            "PostgreSQL / MongoDB",
            "Google Apps Script",
            "GitHub Actions + Docker",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Đọc Blog của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
        </p>
        <Link
          href="/blog"
          className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
        >
          Xem blog →
        </Link>
      </div>

      {/* Interactive component */}
      <div className="mt-10 flex flex-col items-center gap-3">
        <h2 className="text-lg font-semibold">Bộ đếm tương tác</h2>
        <Counter />
        <div className="flex flex-wrap justify-center gap-3 pt-3">
          <ThemeToggle />
          <CopyButton text="2212441@dlu.edu.vn" />
        </div>
      </div>
    </div>
  );
}
