const projects = [
  {
    title: "Nền tảng DevOps CI/CD",
    description:
      "Thiết lập pipeline tự động build, test và deploy ứng dụng web với Docker và GitHub Actions.",
    tech: ["Gitlab", "Docker", "Nginx", "Linux"],
  },
  {
    title: "Tự động hóa Google Apps Script",
    description:
      "Xây dựng hệ thống xử lý biểu mẫu và gửi email báo cáo tự động cho nhóm học tập.",
    tech: ["Google Apps Script", "Google Sheets", "Gmail API"],
  },
  {
    title: "Website Du lịch Đà Lạt",
    description:
      "Trang web giới thiệu địa điểm, lịch trình và trải nghiệm du lịch tại Đà Lạt với giao diện responsive.",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
