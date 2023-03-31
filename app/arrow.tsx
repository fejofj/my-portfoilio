import { Lora, Roboto, Roboto_Condensed } from "@next/font/google";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

const lora = Lora({
  subsets: ["latin"],
});

export default function Arrow({ string }: { string: string }) {
  return (
    <div className="arrowed-container items-center flex justify-center text-white">
      <div className="arrow-right"></div>
      <h1 className={`${lora.className}`}>{string}</h1>
    </div>
  );
}
