export default function Skills() {
  const skills = [
    "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "JavaScript",
    "HTML5 / CSS3", "Tailwind CSS", "Framer Motion", "Bootstrap", "Vibe Coding",
    "PHP", "MySQL", "REST APIs", "bcrypt", "Git & GitHub", "Vercel", "JWT Authentication",
    "Full-Stack Development", "Database Management (DBMS)",
    "QR Code Integration", "Project Management"
  ];

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-tight">
          Tools & Technologies
        </h2>
        <p className="text-neutral-400 font-light mb-12 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
          My technical arsenal for building scalable, user-centric web applications and robust backend systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-neutral-300 font-medium backdrop-blur-sm hover:bg-white/10 hover:text-white hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
