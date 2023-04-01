import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Navbar() {
  return (
    <nav className="flex flex-row row-span-2 space-x-1 bg-bgColor px-[2rem] pt-[2rem]">
      <h1 className={`${roboto.className} font-bold text-xl text-white`}>Fe</h1>
      <h1 className={`${roboto.className} font-bold text-xl text-yellow`}>Jo</h1>
    </nav>
  );
}
