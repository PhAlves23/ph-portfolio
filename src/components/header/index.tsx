"use client";
import { useState } from "react";
import { headerLinks } from "@/mocks";
import Image from "next/image";
import Hamburger from "hamburger-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-black/70 z-10 backdrop-blur-lg">
      <nav className="flex justify-between items-center container-custom p-5 xl:px-0">
        <a href="#">
          <Image src="/logo.svg" width={113} height={43} alt="Logo image" />
        </a>
        <div className="lg:hidden">
          <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
        </div>
        <ul className="hidden lg:flex lg:gap-5">
          {headerLinks.map(({ id, label, path }) => (
            <li key={id}>
              <a href={path}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
