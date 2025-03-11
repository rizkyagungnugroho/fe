"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className=" dark:bg-white-200 ">
      <nav className="container m-auto">
        <div className=" flex items-center justify-between py-2">
          <Image src="/images.png" alt="Logo" width={80} height={80} />

          <div className="text-1xl font-semibold items-center gap-4 hidden md:flex scroll-smooth">
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/about">About</Link>
            </p>
            <p>
              <Link href="/product">Product</Link>
            </p>
            <p>
              <Link href="/team">Teams Page</Link>
            </p>
          </div>
         

          <DropdownMenu>
            {/* jadi tampilan desktop dibuat block kalo mau di tampilan mobile md:hidden */}
            <DropdownMenuTrigger className="block md:hidden scroll-smooth ">
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/product">Product</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/team">Teams Page</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <Button onClick={() => sendGAEvent("cara Jago ngoding", "blog", "EE")}>TEST</Button> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
