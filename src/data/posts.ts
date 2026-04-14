export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Trần Văn Ngọc Phong",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Trần Văn Ngọc Phong",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Trần Văn Ngọc Phong",
  },
  {
    slug: "devops-ci-cd-cho-sinh-vien",
    title: "DevOps cho sinh viên: Bắt đầu với CI/CD từ dự án nhỏ",
    excerpt:
      "Hướng dẫn từng bước để áp dụng CI/CD vào dự án cá nhân bằng GitHub Actions và Docker.",
    content: `DevOps không chỉ dành cho doanh nghiệp lớn. Với dự án cá nhân, bạn vẫn có thể áp dụng CI/CD để tiết kiệm thời gian và giảm lỗi khi triển khai.

Quy trình mình đang dùng:
1. Push code lên GitHub
2. GitHub Actions tự động chạy lint + test
3. Build Docker image
4. Triển khai lên VPS

Lợi ích rõ rệt:
- Giảm thao tác thủ công khi deploy
- Phát hiện lỗi sớm trước khi đưa lên production
- Tạo thói quen làm việc chuyên nghiệp ngay từ khi còn đi học`,
    date: "2025-02-08",
    category: "Công nghệ",
    author: "Trần Văn Ngọc Phong",
  },
  {
    slug: "tu-hoc-google-apps-script",
    title: "Tự học Google Apps Script qua bài toán thực tế",
    excerpt:
      "Cách mình dùng Google Apps Script để tự động hóa việc tổng hợp dữ liệu và gửi email báo cáo.",
    content: `Google Apps Script là công cụ rất phù hợp cho các tác vụ tự động hóa nhanh.

Trong một bài tập nhóm, mình dùng Apps Script để:
- Đọc dữ liệu từ Google Form
- Chuẩn hóa dữ liệu và ghi vào Google Sheets
- Tự động gửi email tổng hợp mỗi tuần

Kinh nghiệm rút ra:
1. Thiết kế dữ liệu bảng tính rõ ràng từ đầu
2. Viết hàm nhỏ, dễ test
3. Dùng trigger theo lịch thay vì chạy thủ công

Đây là một kỹ năng hữu ích cho cả học tập và công việc sau này.`,
    date: "2025-02-14",
    category: "Học tập",
    author: "Trần Văn Ngọc Phong",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
