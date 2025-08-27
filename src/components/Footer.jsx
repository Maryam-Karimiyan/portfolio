import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Github,
  Instagram,
  Linkedin,
  Phone,
  Send,
  User,
  Youtube,
} from "lucide-react";

function Footer() {
  const routes = [
    {
      href: "/",
      label: "Home",
      icon: <Send size={15} />,
    },
    {
      href: "#aboutMe",
      label: "About",
      icon: <User size={15} />,
    },
    {
      href:"tel:09371120049",
      label: "Contact",
      icon: <Phone size={15} />,
    },
  ];
  const socialMedia = [
    {
      href: "https://www.linkedin.com/in/maryam-karimiyan-799670a0/",
      icon: <Linkedin size={10}/>,
    },
    {
      href: "https://www.instagram.com/ofogh.maryam14/",
      icon: <Instagram size={10} />,
    },
    {
      href: "https://github.com/Maryam-Karimiyan",
      icon: <Github size={10} />,
    },
    {
      href: "#",
      icon: <Youtube size={10} />,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center py-28 gap-5">
      <NavigationMenu className="flex">
        <NavigationMenuList className="gap-10">
          {routes.map((route) => (
            <NavigationMenuItem
              className="flex justify-center items-center"
              key={route.href}
            >
              {route.icon}
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} ml-[-10px] bg-transparent`}>
                  {route.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="flex">
        <NavigationMenuList className="gap-5">
          {socialMedia.map((item, index) => (
            <NavigationMenuItem
              className="flex justify-center items-center"
              key={item.href}
            >
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} bg-[#393e46] rounded-[50%] w-10 h-10`}>
                  {item.icon}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Footer;
