export default function Skills() {
  const skillGroups = [
    {
      label: "Frontend",
      color: "text-blue-400 bg-blue-400/10 border-blue-400/20",
      skills: [
        "React.js", "Next.js", "TypeScript", "JavaScript",
        "HTML5 / CSS3", "Tailwind CSS", "Framer Motion", "Bootstrap",
      ],
    },
    {
      label: "Backend & Database",
      color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
      skills: [
        "Node.js", "Express.js", "PHP", "MongoDB", "MySQL",
        "REST APIs", "JWT Authentication", "bcrypt",
      ],
    },
    {
      label: "Data & Analytics",
      color: "text-purple-400 bg-purple-400/10 border-purple-400/20",
      skills: [
        "Data Analysis", "Exploratory Data Analysis (EDA)",
        "Data Visualization (Tableau)", "Data Modeling",
        "Predictive Analytics", "Model Selection", "Model Validation",
        "Data Quality Management", "Data Interpretation",
        "Spreadsheet Skills (Excel)", "Data Structures", "Log Analysis",
        "Python Programming",
      ],
    },
    {
      label: "AI & Strategy",
      color: "text-pink-400 bg-pink-400/10 border-pink-400/20",
      skills: [
        "AI Analytics", "AI Strategy", "Process Automation",
        "Strategic Thinking", "Decision Making", "Ethical Reasoning",
        "Regulatory Compliance", "Analytical Reporting",
        "Business Communication",
      ],
    },
    {
      label: "Cloud & Security",
      color: "text-orange-400 bg-orange-400/10 border-orange-400/20",
      skills: [
        "AWS Cloud", "Web Security", "Computer Networking", "Vercel",
      ],
    },
    {
      label: "Tools & Other",
      color: "text-rose-400 bg-rose-400/10 border-rose-400/20",
      skills: [
        "Git & GitHub", "QR Code Integration", "Full-Stack Development",
        "Database Management (DBMS)", "Project Management", "Vibe Coding",
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Tools & Technologies
          </h2>
          <p className="text-neutral-400 font-light max-w-2xl mx-auto text-base sm:text-lg">
            My technical arsenal for building scalable, user-centric web
            applications and robust backend systems.
          </p>
        </div>

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p
                className={`text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full inline-block border ${group.color}`}
              >
                {group.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
