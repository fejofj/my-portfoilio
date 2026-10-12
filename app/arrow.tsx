import { lora } from "./fonts";

export default function Arrow({ string }: { string: string }) {
  return (
    <div className="arrowed-container items-center flex justify-center text-white">
      <div className="arrow-right"></div>
      <h1 className={`${lora.className} text-xs sm:text-sm`}>{string}</h1>
    </div>
  );
}
