import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="mx-auto w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center animate-bounce mb-6">
        <Image src="/globe.svg" alt="404 illustration" width={44} height={44} />
      </div>

      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700 mb-3">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này. Hãy quay về
        trang chủ để tiếp tục khám phá nội dung.
      </p>

      <Link
        href="/"
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
