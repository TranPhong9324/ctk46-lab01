export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Tran Van Ngoc Phong</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212441</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46A</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Thường thích nhưng nơi yên tĩnh để đọc sách.
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi!
          </p>
        </div>

        <section className="mt-6 text-left bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">Sở thích và mục tiêu học tập</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Sở thích</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Đọc sách ở những nơi yên tĩnh</li>
              <li>Tìm hiểu công nghệ mới trong phát triển phần mềm</li>
              <li>Luyện tập tư duy giải quyết vấn đề qua bài tập lập trình</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Mục tiêu học tập</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Nắm vững nền tảng Next.js và React trong kỳ học này</li>
              <li>Xây dựng sản phẩm web có giao diện rõ ràng, dễ sử dụng</li>
              <li>Rèn luyện thói quen viết code sạch và có cấu trúc</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
