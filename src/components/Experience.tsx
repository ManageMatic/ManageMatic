export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Web Development Intern",
      company: "Dominant Infotech",
      date: "Jul 2023 – Aug 2023",
      location: "Surat, Gujarat, India",
      description: "Implemented CRUD operations using PHP and MySQL. Focused on improving backend efficiency, database connectivity, and API integration. Gained practical experience in testing and debugging functional and optimized modules.",
      type: "Work",
    },
    {
      id: 2,
      role: "Bachelor of Engineering (B.E.), Information Technology",
      company: "Gujarat Technological University (GTU)",
      date: "Aug 2024 – 2027",
      location: "Gujarat, India",
      description: "Pursuing BE in IT with a focus on full-stack development, software engineering principles, and scalable web architectures.",
      type: "Education",
    },
    {
      id: 3,
      role: "Diploma, Information Technology",
      company: "Uka Tarsadia University",
      date: "Sep 2021 – May 2024",
      location: "Gujarat, India",
      description: "Built a strong foundation in computer science, database management systems, and programming logic.",
      type: "Education",
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-12 md:mb-16 tracking-tight text-center md:text-left">
          Experience & Education
        </h2>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-0">
              {/* Timeline line for mobile */}
              <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-white/10" />
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-purple-500" />

              <div className="flex flex-col md:flex-row md:justify-between md:items-start group">
                <div className="md:w-1/3 mb-4 md:mb-0 md:pr-8 md:text-right">
                  <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {exp.company}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1">{exp.date}</p>
                  <p className="text-neutral-600 text-xs mt-1 uppercase tracking-wider font-semibold">
                    {exp.type}
                  </p>
                </div>
                
                {/* Timeline node for desktop */}
                <div className="hidden md:flex flex-col items-center mr-8">
                  <div className="w-3 h-3 rounded-full bg-white/20 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all z-10" />
                  <div className="w-px h-full bg-white/10 -mt-2 group-hover:bg-purple-500/30 transition-colors" />
                </div>

                <div className="md:w-2/3 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm group-hover:bg-white/[0.07] transition-colors">
                  <h4 className="text-lg font-medium text-white mb-2">{exp.role}</h4>
                  <p className="text-neutral-400 font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
