export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <p>
          Mình là <strong>Trần Văn Ngọc Phong</strong>. Bạn có thể liên hệ với
          mình qua các kênh bên dưới.
        </p>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 space-y-2">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:2212441@dlu.edu.vn"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              2212441@dlu.edu.vn
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href="https://github.com/TranPhong9324"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              https://github.com/TranPhong9324
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
