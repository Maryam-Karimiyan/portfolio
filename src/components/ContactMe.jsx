import Image from "next/image";
import Walking from "../../public/walking.png";
import VectorFlash from "../../public/VectorFlash.png";
import KeyBoard from "../../public/keyboard.png";
import Mail from "../../public/mail.png";
import { Label } from "./ui/label";
import { Input, Textarea } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

function ContactMe() {
  return (
    <div id="contactMe" className="p-15 flex justify-center lg:justify-between items-start h-fit flex-wrap">
      <div>
        <h1 className="scroll-m-20 text-left text-3xl md:text-6xl font-extrabold tracking-tight text-balance">
          Got a project in <span className="text-[#00adb5] block">mind?</span>
        </h1>
        <div className="flex justify-center items-center md:ml-25">
          <Image
            src={VectorFlash}
            alt="flash"
            width={50}
            className="rotate-310 animate-bounce transform -scale-x-100"
          />
          <Image
            src={Walking}
            alt="Walking"
            width={250}
            className="inline ml-5"
          />
        </div>
      </div>
      <div className="flex gap-3 flex-col">
        <Image
          src={KeyBoard}
          alt="keyBoard"
          width={60}
          className="relative left-25 animate-pulse"
        />
        <div className="grid grid-cols-2 w-full flex-wrap gap-5">
          <div className="grid gap-3">
            <Label htmlFor="name">Your name</Label>
            <Input id="name" placeholder="Name" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Your email</Label>
            <Input id="email" placeholder="Email" />
          </div>
          <div className="w-full grid gap-3 col-span-2">
            <Label htmlFor="message">Your Message</Label>
            <Textarea id="message" placeholder="Message" className="min-h-64" />
          </div>
          <Button className="bg-[#00adb5] rounded-4xl cursor-pointer">Send Message <Send /></Button>
        </div>
        <Image
          src={Mail}
          alt="mail"
          width={40}
          className="relative top-10 right-15 place-self-end animate-pulse"
        />
      </div>
    </div>
  );
}

export default ContactMe;
