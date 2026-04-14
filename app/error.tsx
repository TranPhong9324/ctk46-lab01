"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-24 text-center">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Đã xảy ra lỗi hệ thống
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {error.message ||
          "Ứng dụng gặp sự cố ngoài mong muốn. Vui lòng thử lại."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}
