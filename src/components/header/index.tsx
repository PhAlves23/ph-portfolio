"use client";
import { useEffect, useRef, useState } from "react";
import { headerLinks } from "@/mocks";
import Image from "next/image";
import { Twirl as Hamburger } from "hamburger-react";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import {
  menuDesktopItemVariants,
  menuMobileItemVariants,
  menuVariants,
} from "@/animations/motion";
import Link from "next/link";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLGScreen = useMediaQuery({ minWidth: 1024 });
  const [showMenu, setShowMenu] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    if (isLGScreen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isLGScreen]);

  useEffect(() => {
    if (isOpen && !isLGScreen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [isOpen, isLGScreen]);

  const handleSelectedMenuItem = () => {
    if (!isLGScreen) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos - prevScrollPos.current;
      if (isScrollingUp <= -0 || currentScrollPos === 0) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`sticky left-0 right-0 top-0 lg:sticky bg-black lg:bg-black/70 z-10 ${
        showMenu ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="w-full flex justify-between items-center container-custom p-5 xl:px-0">
        <div className="w-full flex justify-between items-center">
          <motion.div
            initial={{
              x: -400,
              y: 0,
              scale: 1,
            }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
            }}
          >
            <Link href="/home">
              <Image src="/logo.svg" width={113} height={43} alt="Logo image" />
            </Link>
          </motion.div>
          <div className="lg:hidden">
            <Hamburger toggled={isOpen} toggle={setIsOpen} rounded />
          </div>
        </div>
        <nav>
          {isOpen && (
            <motion.ul
              variants={menuVariants}
              initial="closed"
              animate={isOpen ? "open" : "closed"}
              className="fixed inset-0 flex flex-col justify-center items-center gap-12 font-semibold text-white bg-black top-[91px] text-2xl lg:bg-transparent lg:text-base lg:flex-row lg:static"
            >
              {headerLinks.map(({ id, label, path }) => (
                <motion.li
                  variants={
                    isLGScreen
                      ? menuDesktopItemVariants
                      : menuMobileItemVariants
                  }
                  key={id}
                  onClick={handleSelectedMenuItem}
                >
                  <a href={path}>{label}</a>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </nav>
      </div>
    </header>
  );
};
