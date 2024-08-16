import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="fixed w-full max-w-7xl bottom-0 sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 EpicAnimeVault - Shaheer Mansoor</p>
      <Link href={"/"} target="_blank">
        <Image src="./logo.svg" alt="logo" width={47} height={44} className="object-contain" />
      </Link>
      <div className="flex items-center gap-6">
        <Link href={"https://github.com/Shaheer5"} target="_blank">
          <Image src="./github.svg" alt="logo" width={19} height={19} className="object-contain" />
        </Link>
        <Link href={"https://www.instagram.com/shaheer.mansoor/"} target="_blank">
          <Image src="./instagram.svg" alt="logo" width={19} height={19} className="object-contain" />
        </Link>
        <Link href={"https://twitter.com/ShaheerMansoor2"} target="_blank">
          <Image src="./twitter.svg" alt="logo" width={19} height={19} className="object-contain" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
