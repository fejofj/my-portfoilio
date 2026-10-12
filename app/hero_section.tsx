"use client";
import Image from "next/image";
import { Lora, Roboto } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
  return (
    <section
      id="top"
      className={`${roboto.className} bg-bgColor flex min-h-0 flex-1 flex-col items-center gap-3 px-5 pt-2 sm:gap-4 sm:px-8 md:flex-row md:items-stretch md:justify-center md:gap-16 md:pt-0 lg:gap-20 lg:px-16`}
    >
      <div className="flex w-full shrink-0 items-center justify-center md:w-auto md:flex-none">
        <div className="flex items-center justify-center w-full md:w-auto md:shrink-0">
          <div className="space-y-2 max-w-lg text-center md:text-left">
            <div className="flex flex-row space-x-2 sm:space-x-4 justify-center md:justify-start">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-light text-white self-end tracking-wider">
                I&apos;m
              </h1>
              <h1
                className={`${lora.className} text-3xl sm:text-4xl lg:text-5xl text-yellow leading-tight`}
              >
                Febin K Joseph
              </h1>
            </div>

            <h2 className="text-sm sm:text-base text-white py-1 sm:py-2">
              Backend Senior Software Engineer
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/Febin_K_Joseph_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-2 text-yellow border-2 rounded border-yellow hover:bg-yellow hover:text-bgColor transition-colors"
              >
                Resume
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-2 text-white border-2 rounded border-white/40 hover:border-yellow hover:text-yellow transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[460px] flex-1 overflow-hidden sm:w-[min(80vw,460px)] md:mx-0 md:h-full md:min-h-0 md:w-auto md:max-w-none md:flex-none md:aspect-[4/5]">
          <Image
            src="/febin_grey_web.png"
            alt="Febin K Joseph"
            fill
            priority
            sizes="(min-width: 768px) 520px, 88vw"
            className="object-cover object-top md:object-center"
          />
          <div className="absolute bottom-8 right-[22%] flex flex-col items-center z-10 md:bottom-10 md:right-6">
            <div className="w-[0.18rem] h-8 rounded bg-yellow sm:h-16 lg:h-40"></div>
            <a
              className="mt-3 sm:mt-5 text-white hover:text-yellow bg-bgColor/80 rounded p-1"
              href="https://www.linkedin.com/in/febin-k-joseph"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
                aria-hidden="true"
              >
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
              </svg>
            </a>
            <a
              className="mt-3 sm:mt-5 text-white hover:text-yellow bg-bgColor/80 rounded p-1"
              href="https://github.com/fejofj"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
                aria-hidden="true"
              >
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.79 8.21 10.37.6.11.82-.26.82-.58 0-.28-.01-1.03-.02-2.02-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.75.08-.73.08-.73 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.42-1.32.77-1.62-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.82 1.1.82 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.21.7.82.58C20.56 22.29 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          </div>
        </div>
    </section>
  );
}
