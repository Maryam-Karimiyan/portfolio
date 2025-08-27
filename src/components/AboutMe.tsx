import MixedImages from "./MixedImages";
import DoodleItems from "../../public/doodle-items.png";
import SittingTable from "../../public/sittingtable.png";
import Note from "../../public/note.png";
import LightBulb from "../../public/lightbulb.png";
import VectorFlash from "../../public/VectorFlash.png";

import Image from "next/image";
function AboutMe() {
  return (
    <div id="aboutMe" className="px-15 flex justify-center lg:justify-between items-start h-fit flex-wrap">
      <div>
        <Image
          src={Note}
          alt="note"
          width={60}
          className="mb-5 animate-bounce"
        />
        <h1 className="scroll-m-20 text-left text-3xl md:text-6xl font-extrabold tracking-tight text-balance">
          ABOUT <span className="text-[#00adb5]">ME</span>
          <Image
            src={LightBulb}
            alt="lightbulb"
            width={60}
            className="inline ml-5 animate-ping"
          />
        </h1>

        <p className="w-100">
          A web developer eager to learn and enjoy experience new challenges
          which makes things that are new and creative with a passion for
          front-end JavaScript development
        </p>
        <Image
          src={VectorFlash}
          alt="flash"
          width={60}
          className="rotate-150 animate-bounce transform -scale-x-100 ml-50"
        />
      </div>
      <MixedImages
        frontImgWidth={300}
        backImgWidth={400}
        backImg={DoodleItems}
        frontImg={SittingTable}
      />
    </div>
  );
}

export default AboutMe;
