import Image from "next/image";
import BgImg from "../../public/public/bgimg.png";
function RecentWorks() {
  return (
    <div className="">
      <Image
        src={BgImg}
        alt="Background image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
}

export default RecentWorks;
