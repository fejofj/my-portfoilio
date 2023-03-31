'use client';
import { Lora, Roboto } from "@next/font/google";
import Image from "next/image";


const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {


  return (
    <div className=" h-[15rem] bg-bgColor">
      <div className="h-1 bg-yellow w-screen"></div>
      <div
        className={` ${lora.className}  text-4xl flex flex-col gap-4 justify-center text-yellow items-center pt-[5rem] `}
      >
        <div className="flex gap-4 justify-center">
          <Image
            onClick={() =>
              window.open("https://www.instagram.com/febin.k.joseph/", "_blank")
            }
            src="/insta_icon.png"
            width={20}
            height={20}
            alt="insta"
          />

          <Image
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/febin-joseph-b6895321b",
                "_blank"
              )
            }
            src="/linkedin-512.png"
            width={20}
            height={20}
            alt="linked in"
          />
        </div>
        <h1>"Thanks for scrolling"</h1>
        <h1 className={`${roboto.className} text-base text-white`}>👋🏼</h1>
      </div>
    </div>
  );
}
