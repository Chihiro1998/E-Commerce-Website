"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navLinks } from "@/lib/constants";

const NavBar = () => {
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-purple-1 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium ${
              pathname === link.url ? "text-pink-100" : "text-purple-2"
            }`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <Menu className="cursor-pointer md:hidden" />
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
