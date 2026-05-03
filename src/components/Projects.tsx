import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Inventrix",
    description: "Full-stack retail management system with real-time inventory, QR tracking, and analytics. Built with MERN stack.",
    image: "/projects/inventrix.png",
    link: "https://github.com/ManageMatic/Inventrix",
  },
  {
    id: 2,
    title: "QuickNote",
    description: "Fast, lightweight note-taking web app built with React.js and Express.js for instant cross-device access.",
    image: "/projects/quicknote.png",
    link: "https://github.com/ManageMatic/QuickNote",
  },
  {
    id: 3,
    title: "TextUtils",
    description: "A highly responsive text utility web application to manage and format your text efficiently.",
    image: "/projects/textutils.png",
    link: "https://github.com/ManageMatic/TextUtils",
  },
  {
    id: 4,
    title: "WorldWrap",
    description: "An experimental web project showcasing interactive front-end development techniques.",
    image: "/projects/worldwrap.png",
    link: "https://github.com/ManageMatic/WorldWrap",
  },
];

export default function Projects() {
  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(138,43,226,0.15)] hover:border-white/20"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
