import Image from "next/image";
import { Lora, Roboto, Roboto_Condensed } from "@next/font/google";
import Arrow from "./arrow";

const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Experience() {
  return (
    <div className="h-max bg-containerBg">
      <div className="px-12 md:px-15 lg:px-20 py-10">
        <h1 className={`${lora.className} text-3xl text-white font-semibold `}>
          Experience
        </h1>
      </div>

      <div className="justify-center pt-1 px-8 pb-10 xl:px-[10rem] md:px-[10rem] lg:px-[20rem]">
        <div className="flex  space-x-10 items-start justify-start">
          <div className="flex space-x-8 items-start justify-center ">
            <Arrow string="Present" />
            <div className="flex flex-col h-full items-center justify-center">
              <div className="items-center justify-center shadow-lg  shadow-orange-200 bg-yellow w-4 h-4 rounded-full"></div>
              <div className="mt-3 w-[2px] h-[12rem]   rounded  bg-white  "></div>
            </div>
          </div>
          <div className="justify-start items-start">
            <h1 className="text-xl md:text-3xl lg:text-3xl text-white">
              Android developer
            </h1>
            <h1 className="text-sm md:text-base lg:text-base pt-1 text-white">
              Innovation Incubator Advisory, Trivandrum, Kerala
            </h1>
            <h1 className="text-xs md:text-base lg:text-base pt-5 text-lightText">
              Develop, design, and maintain mobile applications for iOS and
              Android platforms, utilising programming languages such as Dart,
              Flutter SDK, Kotlin. Collaborate with clients to understand their
              specific needs and develop customised solutions. Conduct testing
              and debugging to ensure optimal performance and user experience.
            </h1>
          </div>
        </div>

        <div className="flex pt-[1rem] space-x-10 items-start justify-start">
          <div className="flex space-x-8 items-start justify-center ">
            <Arrow string="2021" />
            <div className="flex flex-col h-full items-center justify-center">
              <div className="items-center justify-center shadow-lg  shadow-orange-200 bg-yellow w-4 h-4 rounded-full"></div>
              <div className="mt-3 w-[2px] h-[12rem]   rounded  bg-white  "></div>
            </div>
          </div>
          <div className="justify-start items-start">
            <h1 className=" text-xl md:text-3xl lg:text-3xl text-white">
              Android developer Intern{" "}
            </h1>
            <span className="text-base text-yellow">(June - August)</span>
            <h1 className="text-sm md:text-base lg:text-base pt-1 text-white">
              Innovation Incubator Advisory, Trivandrum, Kerala
            </h1>
            <h1 className="text-xs md:text-base lg:text-base pt-5 text-lightText">
              Assisted in the development and design of mobile applications for
              Android platforms, using programming languages such as Kotlin.
              Assisted with research into new technologies and programming
              trends.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
