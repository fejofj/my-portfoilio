import { lora, roboto } from "./fonts";

const skillGroups = [
  {
    title: "Backend",
    skills: ["Node.js", "Moleculer.js", "Express.js", "REST APIs", "SOAP APIs"],
  },
  {
    title: "Architecture",
    skills: [
      "Microservices",
      "Distributed Systems",
      "Service Orchestration",
      "Async Processing",
    ],
  },
  {
    title: "Data & Messaging",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Apache Kafka", "BullMQ"],
  },
  {
    title: "Cloud & Quality",
    skills: ["AWS", "Docker", "CI/CD", "Jest", "Git"],
  },
  {
    title: "Telecom",
    skills: [
      "TM Forum",
      "Service Enablement",
      "Device Integration",
      "Service Lifecycle",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-darkBg px-4 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-20">
      <h1 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold`}>
        About
      </h1>
      <div className="flex pt-3 gap-3">
        <div className="text-yellow shrink-0">
          <div className="w-8 sm:w-12 h-[2px] rounded bg-yellow mt-3"></div>
        </div>
        <p
          className={`${roboto.className} text-sm sm:text-base text-white leading-relaxed`}
        >
          Backend Senior Software Engineer with{" "}
          <span className="text-yellow">5 years of experience</span> building{" "}
          <span className="text-yellow">Node.js</span> services for telecom
          systems. I develop REST and SOAP integrations, microservices,
          asynchronous workflows, and service orchestration using Node.js,
          Moleculer.js, PostgreSQL, Kafka, Redis, BullMQ, Docker, and AWS. I
          own work from technical design and API development through testing,
          CI/CD, deployment, and production support, collaborating with
          architects, customers, and network-device vendors.
        </p>
      </div>

      <div className="flex pt-10 sm:pt-12 items-center justify-center">
        <h2 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold`}>
          My Skills
        </h2>
      </div>

      <div className="mx-auto pt-7 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="bg-containerBg shadow-md rounded-xl p-5 sm:p-6"
          >
            <h3 className={`${lora.className} text-yellow text-lg mb-3`}>
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`${roboto.className} text-xs sm:text-sm text-white border border-white/20 rounded-full px-3 py-1`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
