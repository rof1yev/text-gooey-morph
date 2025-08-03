"use client";

import { useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";
import { FaExternalLinkAlt } from "react-icons/fa";

const Navbar = () => {
  const handleClick = useCallback(() => {
    window.open("https://github.com/rof1yev/text-gooey-morph", "_blank");
  }, []);

  return (
    <nav className="flex justify-between items-center py-2 px-4 border-b bg-neutral-200">
      <Link href="#" className="flex items-center gap-2 hover:cursor-pointer">
        <Image
          src="/logo.png"
          alt="Logo"
          width={80}
          height={80}
          loading="lazy"
          className="border border-neutral-900 rounded-full"
        />
        <span className="sr-only">@rof1yev</span>
      </Link>

      <Button
        onClick={handleClick}
        variant="outline"
        className="hover:cursor-pointer"
      >
        <FaExternalLinkAlt color="black" /> Source Code
      </Button>
    </nav>
  );
};

export default Navbar;
