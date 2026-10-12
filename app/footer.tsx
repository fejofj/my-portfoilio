"use client";
import { Lora, Roboto } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 bg-bgColor">
      <div className="h-1 bg-yellow w-full"></div>
      <div
        className={`${lora.className} px-4 sm:px-8 py-12 sm:py-16 flex flex-col gap-5 justify-center items-center text-center`}
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-yellow">
          Let&apos;s work together
        </h2>
        <p className={`${roboto.className} text-sm sm:text-base text-lightText max-w-xl`}>
          Backend Senior Software Engineer based in Kerala, India. Open to
          technical conversations around Node.js, microservices, and telecom
          platforms.
        </p>
        <a
          href="mailto:febinjkf@gmail.com"
          className={`${roboto.className} text-yellow text-sm sm:text-base break-all hover:underline`}
        >
          febinjkf@gmail.com
        </a>
        <p className={`${roboto.className} text-xs sm:text-sm text-white/70`}>
          +91 7902957939
        </p>
        <div className="flex flex-wrap gap-5 justify-center items-center pt-2">
          <a
            href="https://www.linkedin.com/in/febin-k-joseph"
            target="_blank"
            rel="noreferrer"
            className={`${roboto.className} text-sm text-white hover:text-yellow`}
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/fejofj"
            target="_blank"
            rel="noreferrer"
            className={`${roboto.className} text-sm text-white hover:text-yellow`}
          >
            GitHub
          </a>
          <a
            href="https://febinjoseph.in"
            target="_blank"
            rel="noreferrer"
            className={`${roboto.className} text-sm text-white hover:text-yellow`}
          >
            febinjoseph.in
          </a>
        </div>
        <p className="text-lg sm:text-2xl text-yellow pt-4">
          Thanks for scrolling
        </p>
      </div>
    </footer>
  );
}
