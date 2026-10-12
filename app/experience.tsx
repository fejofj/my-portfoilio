import { Lora, Roboto } from "@next/font/google";
import Arrow from "./arrow";

const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

const highlights = [
  "Lead backend development for a telecom service enablement platform using Node.js, Moleculer.js, and PostgreSQL.",
  "Modernized legacy telecom workflows into Node.js microservices across service activation, temporary disconnect/reconnect, and service lifecycle operations.",
  "Reduced manual operational effort by 70% with an internal monitoring and analytics application covering logging, third-party log integrations, and health monitoring.",
  "Improved user experience by up to 40% through Node.js microservices that streamlined telecom service workflows and backend processing.",
  "Built REST and SOAP integrations with Nokia, Adtran, Calix, and Metaswitch network devices.",
  "Implemented asynchronous processing with Kafka, BullMQ, and Redis, including retries and failure handling.",
  "Designed validation, reconciliation, and error-handling workflows to keep internal service orders consistent with external network-device state.",
  "Mentored peers and worked with enterprise architects, customers, and telecom vendors on requirements, integrations, and production delivery.",
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 h-max bg-containerBg">
      <div className="px-4 sm:px-8 lg:px-20 py-10 sm:py-12">
        <h1 className={`${lora.className} text-2xl sm:text-3xl text-white font-semibold`}>
          Experience
        </h1>
      </div>

      <div className="px-4 sm:px-8 lg:px-20 xl:px-40 pb-12 sm:pb-16">
        <div className="flex gap-4 sm:gap-8 items-start">
          <div className="hidden lg:flex space-x-6 items-start shrink-0 self-stretch">
            <Arrow string="Present" />
            <div className="flex flex-col items-center self-stretch">
              <div className="shadow-lg shadow-orange-200 bg-yellow w-4 h-4 rounded-full shrink-0"></div>
              <div className="mt-3 w-[2px] flex-1 rounded bg-white/70"></div>
            </div>
          </div>

          <article className={`${roboto.className} min-w-0`}>
            <p className="lg:hidden text-yellow text-sm mb-2">November 2021 – Present</p>
            <h2 className={`${lora.className} text-xl sm:text-2xl lg:text-3xl text-white`}>
              Senior Software Engineer
            </h2>
            <p className="text-sm sm:text-base pt-1 text-white">
              Innovation Incubator Advisory Pvt Ltd, Trivandrum, Kerala
            </p>
            <p className="hidden lg:block text-xs sm:text-sm pt-1 text-yellow">
              November 2021 – Present
            </p>
            <ul className="pt-5 space-y-3 text-xs sm:text-sm lg:text-base text-lightText list-disc pl-4 sm:pl-5">
              {highlights.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
