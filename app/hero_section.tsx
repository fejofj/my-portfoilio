"use client";
import Image from "next/image";
import { Lora, Roboto, Roboto_Condensed } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Hero() {
  return (
    <div
      className={`${roboto.className} bg-bgColor  md:flex lg:flex items-center h-lvh shadow-lg`}
    >
      <div className="grid items-center justify-center  grid-cols-1 md:grid-cols-2 sm:grid-cols-2 ">
        <div className="pt-8 flex items-center justify-center">
          <div className="space-y-1">
            <div className="flex flex-row space-x-2 lg:space-x-5 md:space-x-5">
              <h1 className="text-xl md:text2-xl lg:text-2xl font-light text-white self-end tracking-wider">
                I'M
              </h1>

              <h1
                className={`${lora.className} text-4xl md:text5-xl lg:text-5xl text-yellow`}
              >
                Febin Joseph
              </h1>
            </div>

            <h1 className="text-sm md:text-base lg:text-base text-white">
              Hybrid & Native mobile application developer
            </h1>
            <div className="pt-4">
              <button
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1DUbDN7kzK3Y-5WZICDBi_DDW7Rdke1fX/view?usp=share_link",
                    "_blank"
                  )
                }
                className="inline-block px-6 pt-1 pb-1  text-yellow  border-2 rounded border-yellow"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        <div className="bottom-1 left-2 right-[4rem]  relative ">
          <Image
            className="bottom-0"
            src="/febin_grey_web.png"
            alt="Picture of the author"
            width={700}
            height={700}
          />
          <div className="absolute bottom-[15%] right-[4rem]">
            <div className="  w-[0.20rem] h-40  rounded  bg-yellow  "></div>
            <Image
              className="mt-5"
              src="/linkedin-512.png"
              alt="linked icon"
              width={30}
              height={30}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/febin-k-joseph",
                  "_blank"
                )
              }
            />
            <Image
              priority
              className="mt-5"
              src="/insta_icon.png"
              alt="linked icon"
              width={30}
              height={30}
              onClick={() =>
                window.open(
                  "https://www.instagram.com/febin.k.joseph/",
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
