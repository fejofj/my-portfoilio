import { lora, roboto } from "./fonts";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 bg-containerBg px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
      <h1 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold`}>
        Education
      </h1>
      <div className={`${roboto.className} mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6`}>
        <article className="bg-darkBg rounded-xl p-5 sm:p-6 min-w-0">
          <p className="text-yellow text-sm">Graduated June 2026</p>
          <h2 className={`${lora.className} text-xl sm:text-2xl text-white pt-1`}>
            Master of Computer Applications
          </h2>
          <p className="text-sm sm:text-base text-white pt-1">
            Indira Gandhi National Open University, New Delhi
          </p>
          <p className="text-xs sm:text-sm text-lightText pt-3 leading-relaxed">
            Coursework: Artificial Intelligence, Cloud Computing, Mobile
            Computing, Data Science
          </p>
        </article>
        <article className="bg-darkBg rounded-xl p-5 sm:p-6 min-w-0">
          <p className="text-yellow text-sm">Graduated April 2021</p>
          <h2 className={`${lora.className} text-xl sm:text-2xl text-white pt-1`}>
            Bachelor of Computer Applications
          </h2>
          <p className="text-sm sm:text-base text-white pt-1">
            NSS College Rajakumari, Idukki, Kerala
          </p>
          <p className="text-xs sm:text-sm text-lightText pt-3 leading-relaxed">
            Coursework: Data Structures and Algorithms, Object-Oriented
            Programming, Database Management Systems, Computer Networks,
            Operating Systems
          </p>
        </article>
      </div>

      <h2 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold pt-12`}>
        Achievements
      </h2>
      <ul className={`${roboto.className} mt-6 space-y-3 text-sm sm:text-base text-lightText list-disc pl-5`}>
        <li>
          <span className="text-white">Promotion:</span> Promoted to Senior
          Software Engineer for consistent delivery, distributed microservices
          expertise, telecom integration ownership, and peer mentorship.
        </li>
        <li>
          <span className="text-white">Award:</span> Employee of the Month —
          April 2026.
        </li>
        <li>
          <span className="text-white">Certification:</span> Node.js, Express,
          MongoDB &amp; More: The Complete Bootcamp.
        </li>
      </ul>
    </section>
  );
}
