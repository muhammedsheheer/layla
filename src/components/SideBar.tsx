"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  useEffect(() => {
    const d = localStorage.getItem("positiond");
    if (d !== null) {
      setPositiond(d);
    }
  }, []);
  const [positiond, setPositiond] = useState<string>("");
  useEffect(() => {
    if (positiond) {
      localStorage.setItem("positiond", positiond);
    }
  }, [positiond]);
  const pathname = usePathname();

  const [positiondn, setPositiondn] = useState(() => {
    if (pathname.includes("main-menu")) return "main-menu";
    if (pathname.includes("takeout-menu")) return "takeout-menu";
    if (pathname.includes("kids-menu")) return "kids-menu";
    if (pathname.includes("drinks-menu")) return "drinks-menu";
    if (pathname.includes("dessert-menu")) return "dessert-menu";
    return "";
  });
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-[300px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle>
            <Image
              src="/images/logo.png"
              width={162}
              height={35}
              alt="Foodo"
              className="w-36"
            />
          </SheetTitle>
          <SheetDescription className="flex w-full flex-col items-center justify-center gap-7 pt-14">
            <Link
              href="/"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Order Online
            </Link>
            {/* <Link
              href="/about-us"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Our Story
            </Link> */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white">
                  Menus
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 w-56 rounded-none border-[#CDAE64] bg-[#000] hover:cursor-pointer">
                <DropdownMenuRadioGroup
                  value={positiond}
                  onValueChange={setPositiond}
                >
                  <Link href="/main-menu">
                    <DropdownMenuRadioItem value="carte">
                      Main Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/takeout-menu">
                    <DropdownMenuRadioItem value="lunch">
                      Takeout Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/kids-menu">
                    <DropdownMenuRadioItem value="lunch">
                      Kids Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/drinks-menu">
                    <DropdownMenuRadioItem value="lunch">
                      Drinks & Cocktail Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/dessert-menu">
                    <DropdownMenuRadioItem value="lunch">
                      Dessert & Hot Drinks Menu
                    </DropdownMenuRadioItem>
                  </Link>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <div className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white">
                  Menus
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-4 w-56 rounded-none border-[#CDAE64] bg-[#000] hover:cursor-pointer">
                <DropdownMenuRadioGroup
                  value={positiondn}
                  onValueChange={setPositiondn}
                >
                  <Link href="/main-menu">
                    <DropdownMenuRadioItem value="main-menu">
                      Main Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/takeout-menu">
                    <DropdownMenuRadioItem value="takeout-menu">
                      Takeout Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/kids-menu">
                    <DropdownMenuRadioItem value="kids-menu">
                      Kids Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/drinks-menu">
                    <DropdownMenuRadioItem value="drinks-menu">
                      Drinks & Cocktail Menu
                    </DropdownMenuRadioItem>
                  </Link>
                  <Link href="/dessert-menu">
                    <DropdownMenuRadioItem value="dessert-menu">
                      Dessert & Hot Drinks Menu
                    </DropdownMenuRadioItem>
                  </Link>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/contact"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Contact
            </Link>
            <Link
              href="/table-booking"
              className="flex w-full justify-center p-0 text-center font-times_new_roman text-3xl font-normal text-white"
            >
              Reservation
            </Link>
            {/* <Link
              href=""
              className="font-playfair flex w-full justify-start p-0 text-3xl font-normal text-white"
            >
              Food & Drinks
            </Link> */}

            {/* <Button
                            variant="link"
                            className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                            asChild
                        >
                            <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                        </Button>
                        <Button
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                            asChild
                        >
                            <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                        >
                            <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                        </Button>
                        <Button
                            asChild
                            variant="link"
                            className="w-full flex justify-start p-0 uppercase text-accent text-white"
                        >
                            <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                        </Button> */}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
