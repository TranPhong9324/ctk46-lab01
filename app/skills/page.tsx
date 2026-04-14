const skills = [
  "JavaScript / TypeScript",
  "React / Next.JS",
  "Node.js / Express",
  "Tailwind CSS",
  "Git / GitHub",
  "SQL / PostgreSQL",
  "Google Apps Script",
  "DevOps cơ bản (CI/CD, Docker)",
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Kỹ năng lập trình</h1>
      <ul className="grid sm:grid-cols-2 gap-3">
        {skills.map((skill) => (
          <li key={skill} className="bg-gray-50 border rounded-lg px-4 py-3">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
