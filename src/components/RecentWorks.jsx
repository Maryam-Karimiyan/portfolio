import Image from "next/image";
import Mehritra from "../../public/mehritra.png";
import MaximRes from "../../public/maximRes.png";
import Aps from "../../public/aps.png";
function RecentWorks() {
  const works = [MaximRes, Mehritra, Aps];
  return (
    <div className="bg-[url('/bgimg.png')] bg-repeat bg-center">
      <div className="px-30 py-24">
        <h1 className="scroll-m-20 text-left text-3xl md:text-6xl font-extrabold tracking-tight text-balance">
          My recent <span className="text-[#00adb5]">works</span>
        </h1>
        <div className="flex justify-center items-center flex-wrap flex-3 mt-5 gap-6">
          {works.map((Item, id) => (
            <div
              key={id}
              className="flex justify-center items-center w-64 h-40 cursor-pointer backdrop-blur-[1px] rounded-lg bg-white/30 p-6 hover:scale-150 hover:transition-all"
            >
              <Image
                src={Item}
                alt={`work${id}`}
                width={200}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentWorks;
