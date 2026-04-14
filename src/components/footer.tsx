export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm space-y-2">
        <p>
          © 2025 — Trần Văn Ngọc Phong | CTK46 — Các công nghệ mới trong PTPM
        </p>
        <p className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/TranPhong9324"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600"
          >
            GitHub
          </a>
          <a href="mailto:2212441@dlu.edu.vn" className="hover:text-blue-600">
            2212441@dlu.edu.vn
          </a>
        </p>
      </div>
    </footer>
  );
}
