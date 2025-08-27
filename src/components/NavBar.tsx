"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Profile from "../../public/profileImg.png"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarImage } from "./ui/avatar";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#aboutMe",
    label: "About",
  },
  {
    href: "#contactMe",
    label: "Contact",
  },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <nav className="px-5 lg;px-20  flex h-14 items-center justify-between border-b-2  border-b-[#373c44]">
        {/* Mobile Navbar */}
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col space-y-2 pt-8">
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <Button variant="ghost" className="w-full justify-start">
                    {route.label}
                  </Button>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop Navbar */}
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold">
            <Avatar >
              <AvatarImage src="profileImg.png" alt="profile"/> 
            </Avatar>
          </Link>
        </div>

        {/* Navigation Menus and Buttons */}
        <div className="flex items-center">
          <NavigationMenu className="hidden lg:flex ">
            <NavigationMenuList className="gap-5">
              {routes.map((route) => (
                <NavigationMenuItem key={route.href}>
                  <Link href={route.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {route.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>
    </header>
  );
}
