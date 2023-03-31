import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Navbar() {
  return (
    <nav className=" fixed flex flex-row row-span-2 space-x-1 bg-bgColor px-[3rem] pt-[2rem]">
      <h1 className={`${roboto.className} font-bold text-2xl text-white`}>Fe</h1>
      <h1 className={`${roboto.className} font-bold text-2xl text-yellow`}>Jo</h1>
    </nav>
  );
}
