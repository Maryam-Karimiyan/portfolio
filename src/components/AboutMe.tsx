import MixedImages from "./MixedImages";
import DoodleItems from "../../public/doodle-items.png";
import SittingTable from "../../public/sittingtable.png";
import Image from "next/image";
function AboutMe() {
  return (
    <div className="px-15 flex justify-center lg:justify-between items-start h-fit flex-wrap">
      <div className="">
        <div>
          <h1 className="relative bottom-10 md:bottom-7 scroll-m-20 text-left text-3xl md:text-6xl font-extrabold tracking-tight text-balance">
            ABOUT <span className="text-[#00adb5]">ME</span>
          </h1>

          <p className="leading-7">
            A web developer eager to learn and enjoy experience new challenges
            which makes things that are new and creative with a passion for
            front-end JavaScript development
          </p>
        </div>
      </div>

      <div>
        <MixedImages
          frontImgWidth={250}
          backImgWidth={350}
          backImg={DoodleItems}
          frontImg={SittingTable}
        />
      </div>
    </div>
  );
}

export default AboutMe;
