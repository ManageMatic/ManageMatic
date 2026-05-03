export default function Certificates() {
  const certs = [
    {
      id: 1,
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata × Forage",
      date: "October 27th, 2025",
      badges: ["TATA", "Forage"],
      tasks: [
        "Exploratory data analysis and risk profiling",
        "Predicting delinquency with AI",
        "Business report and data storytelling for collections strategy",
        "Implementing an AI-driven collections strategy",
      ],
    },
    {
      id: 2,
      title: "CREATO Hackathon 2023 — Award for Future Potential",
      issuer: "ISTE Gujarat Section × B & B Institute of Technology",
      date: "March 25th, 2023",
      badges: ["ISTE", "CREATO"],
      tasks: [
        "State Level Programming Competition for Diploma Engineering Students",
        "Recognized for outstanding future potential among competing teams",
        "Organized by Indian Society for Technical Education (ISTE), Gujarat Section",
      ],
    },
    {
      id: 3,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training and Certification",
      date: "December 20th, 2024",
      badges: ["AWS", "Training"],
      tasks: [
        "Core AWS cloud concepts and services",
        "Cloud architecture and deployment models",
        "AWS security, compliance, and pricing fundamentals",
      ],
    },
    {
      id: 4,
      title: "Job Roles in the Cloud",
      issuer: "AWS Training and Certification",
      date: "December 20th, 2024",
      badges: ["AWS", "Training"],
      tasks: [
        "Understanding cloud-based job roles and responsibilities",
        "Career pathways in AWS cloud ecosystem",
        "Skills mapping for cloud professionals",
      ],
    },
    {
      id: 5,
      title: "Getting Started with Cloud Acquisition",
      issuer: "AWS Training and Certification",
      date: "December 20th, 2024",
      badges: ["AWS", "Training"],
      tasks: [
        "Cloud procurement strategies and best practices",
        "Evaluating cloud service providers",
        "Cloud acquisition frameworks and governance",
      ],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-12 md:mb-16 tracking-tight text-center md:text-left">
          Licenses & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-colors" />

              {/* Issuer badges */}
              {cert.badges && cert.badges.length > 0 && (
                <div className="flex items-center gap-2 mb-5 relative z-10 flex-wrap">
                  <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {cert.badges[0]}
                  </span>
                  {cert.badges.length > 1 && (
                    <>
                      <span className="text-neutral-600">×</span>
                      <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                        {cert.badges[1]}
                      </span>
                    </>
                  )}
                </div>
              )}

              <h3 className="text-xl font-semibold text-white mb-1 relative z-10">
                {cert.title}
              </h3>
              <p className="text-neutral-400 font-medium mb-5 relative z-10">
                Certificate of Completion
              </p>

              {/* Tasks */}
              <ul className="mb-5 relative z-10 space-y-1">
                {cert.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    {task}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="flex flex-col gap-1 text-sm text-neutral-500 font-light relative z-10 border-t border-white/5 pt-4">
                <span>Issued: {cert.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}