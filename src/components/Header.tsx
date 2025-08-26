import MixedImages from "./MixedImages";
import DoodlesMixedRound from "../../public/doodles-mixed-round.png";
import ProfileImage from "../../public/ProfileImage.png";
import VectorFlash from "../../public/VectorFlash.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
function Header() {
  return (
    <div className="px-15 flex justify-center lg:justify-between items-start h-fit flex-wrap">
      <div className="flex items-center mt-20">
        <Image
          className="rotate-[-169.51°]"
          src={VectorFlash}
          width={60}
          alt="vector-flash"
        />
        <div>
          <h1 className="relative bottom-10 md:bottom-7 scroll-m-20 text-left text-3xl md:text-6xl font-extrabold tracking-tight text-balance">
            CREATIVE UI <span className="text-[#00adb5] block">DESIGNER</span>
          </h1>

          <div className="flex gap-3 flex-wrap">
            <Button className="bg-[#00adb5] rounded-3xl text-shadow-lg">
              Hire Me
            </Button>
            <Link
              href={"/Maryam-Karimiyan-resume.pdf"}
              download={"Maryam-Karimiyan-resume.pdf"}
            >
              <Button className="bg-[#343840] rounded-3xl text-shadow-lg">
                Download CV <Download />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <MixedImages
          frontImgWidth={250}
          backImgWidth={350}
          backImg={DoodlesMixedRound}
          frontImg={ProfileImage}
        />
      </div>
    </div>
  );
}

export default Header;
