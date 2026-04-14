export interface Project {
  id: string;
  title: string;
  description: string;
  content: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    id: "devops-cicd",
    title: "Nền tảng DevOps CI/CD",
    description:
      "Thiết lập pipeline tự động build, test và deploy ứng dụng web với Docker và GitHub Actions.",
    content: `Dự án tập trung xây dựng quy trình CI/CD hoàn chỉnh cho ứng dụng web.

Các phần chính đã triển khai:
- Tự động kiểm tra code quality với ESLint
- Build Docker image cho môi trường triển khai
- Deploy tự động lên VPS sau khi pass test
- Cấu hình Nginx reverse proxy và SSL

Kết quả đạt được:
- Giảm đáng kể thời gian deploy thủ công
- Tăng độ ổn định khi release phiên bản mới`,
    tech: ["GitLab", "Docker", "Nginx", "Linux"],
  },
  {
    id: "google-apps-script",
    title: "Tự động hóa Google Apps Script",
    description:
      "Xây dựng hệ thống xử lý biểu mẫu và gửi email báo cáo tự động cho nhóm học tập.",
    content: `Dự án sử dụng Google Apps Script để xử lý dữ liệu học tập tự động.

Chức năng nổi bật:
- Đồng bộ dữ liệu từ Google Forms về Google Sheets
- Làm sạch và chuẩn hóa dữ liệu trước khi thống kê
- Tự động gửi báo cáo tuần qua email

Dự án giúp tiết kiệm thời gian tổng hợp thủ công và hạn chế sai sót dữ liệu.`,
    tech: ["Google Apps Script", "Google Sheets", "Gmail API"],
  },
  {
    id: "web-du-lich-da-lat",
    title: "Website Du lịch Đà Lạt",
    description:
      "Trang web giới thiệu địa điểm, lịch trình và trải nghiệm du lịch tại Đà Lạt với giao diện responsive.",
    content: `Website cung cấp thông tin du lịch theo nhóm nhu cầu: ăn uống, tham quan, nghỉ dưỡng.

Những phần đã hoàn thiện:
- Danh sách địa điểm theo chủ đề
- Trang chi tiết địa điểm với hình ảnh và mô tả
- Gợi ý lịch trình theo số ngày
- Giao diện responsive cho mobile và desktop

Mục tiêu là tạo trải nghiệm tra cứu nhanh và trực quan cho người dùng.`,
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
