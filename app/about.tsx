import Image from "next/image";
import { Lora, Roboto, Roboto_Condensed } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
});


const roboto = Roboto({
    weight:['400'],
  subsets: ["latin"],
});

export function About() {
  return (
    <div className="bg-darkBg p-20">
      <h1 className={`${lora.className} text-3xl text-white font-semibold`}>
        About
      </h1>
      <div className="flex pt-3">
        <div className="text-yellow">
          <div className="  w-12 h-[2px]  rounded  bg-yellow mr-3 mt-3 pr-2 "></div>
        </div>
        <div className={`${roboto.className} text-white ml-0`}>
          Experienced app developer with 2 years of experience in mobile
          application development for{" "}
          <span className="text-yellow">iOS and Android platforms</span>.
          Proficient in programming languages such as{" "}
          <span className="text-yellow">Kotlin, Java, Dart</span>. Skilled in
          developing intuitive and user-friendly interfaces, implementing
          backend functionality, and integrating third-party APIs. Passionate
          about keeping up with the latest trends and technologies in the mobile
          app development space. Strong communicator with experience
          collaborating with cross-functional teams.
        </div>
      </div>
      <div className="flex pt-[3rem] items-center justify-center">
        <h1 className={`${lora.className} text-3xl text-white font-semibold`}>
          My Skills
        </h1>
      </div>
      <div className="container mx-auto p-7 lg:w-[60%]">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
         
          <div className=" container flex justify-center p-10  text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                src="/flutter.png"
                alt="flutter icon"
              />
              <h1 className="pt-2 text-white text-base">Flutter</h1>
            </div>
          </div>
          <div className="flex justify-center p-10 text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                src="/kotlin.png"
                alt="kotlin icon"
              />
              <h1 className="pt-2 text-white text-base">Kotlin</h1>
            </div>
          </div>
          <div className="flex justify-center p-10 text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                src="/nextjs.png"
                alt="flutter icon"
              />
              <h1 className="pt-2 text-white text-base">Next js</h1>
            </div>
          </div>
          <div className="flex justify-center p-10 text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                src="/html.png"
                alt="html icon"
              />
              <h1 className="pt-2 text-white text-base">Html</h1>
            </div>
          </div>
          <div className="flex justify-center p-10 text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col items-center">
              <Image
                width={50}
                height={50}
                src="/tailwind.png"
                alt="tailwind icon"
              />
              <h1 className="pt-2 text-white text-base">Tailwind CSS</h1>
            </div>
          </div>
          <div className="flex justify-center p-10 text-6xl bg-containerBg shadow-md rounded-xl">
            <div className="flex flex-col justify-center items-center">
              <Image
                width={50}
                height={50}
                src="/git.png"
                alt="git icon"
              />
              <h1 className="pt-2 text-white text-base">Git</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
