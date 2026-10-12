import { lora, roboto } from "./fonts";

const projects = [
  {
    title: "CDG SAM 2.0",
    stack: "Node.js, Moleculer.js, Kafka, BullMQ, Redis, PostgreSQL, AWS, Docker",
    points: [
      "Backend services for telecom service enablement and lifecycle workflows, including activation and temporary disconnect/reconnect.",
      "REST and SOAP integrations with heterogeneous network devices, plus asynchronous job orchestration, retries, validation, reconciliation, and failure handling.",
      "TM Forum-aligned service management concepts for consistent lifecycle operations and interoperability.",
      "AI-assisted development with Claude Code, Kiro, and ChatGPT to speed implementation, investigations, refactors, and tests.",
    ],
  },
  {
    title: "Maia Care",
    stack: "Node.js, Flutter, REST APIs, Git",
    points: [
      "Cross-platform Flutter applications for web, iOS, and Android with consistent behavior across platforms.",
      "REST API integration with efficient data handling, error handling, and state management.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 bg-darkBg px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
      <h1 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold`}>
        Key Projects
      </h1>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-containerBg rounded-xl p-5 sm:p-7 shadow-md min-w-0"
          >
            <h2 className={`${lora.className} text-xl sm:text-2xl text-yellow`}>
              {project.title}
            </h2>
            <p className={`${roboto.className} text-xs sm:text-sm text-white/80 pt-2`}>
              {project.stack}
            </p>
            <ul
              className={`${roboto.className} pt-4 space-y-2 text-xs sm:text-sm text-lightText list-disc pl-4 sm:pl-5`}
            >
              {project.points.map((point) => (
                <li key={point} className="leading-relaxed">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
