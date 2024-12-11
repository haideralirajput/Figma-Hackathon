"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link"; // Import Link for navigation
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* Logo */}
      <div className="text-center pt-6">
        <Link href="/">
          <a className="text-2xl font-bold text-[#FF9F0D]">
            Food<span className="text-white">tuck</span>
          </a>
        </Link>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex items-center justify-between flex-1">
          <div className="flex space-x-6 hidden lg:flex">
            <Link href="/">
              <a className="relative group transition">Home</a>
            </Link>
            <Link href="/manu">
              <a className="relative group transition hover:text-[#FF9F0D]">Menu</a>
            </Link>
            <Link href="/blog">
              <a className="relative group transition hover:text-[#FF9F0D]">Blog</a>
            </Link>
            <Link href="/pages">
              <a className="relative group transition hover:text-[#FF9F0D]">Pages</a>
            </Link>
            <Link href="/about">
              <a className="relative group transition hover:text-[#FF9F0D]">About</a>
            </Link>
            <Link href="/shop">
              <a className="relative group transition hover:text-[#FF9F0D]">Shop</a>
            </Link>
            <Link href="/contact">
              <a className="relative group transition hover:text-[#FF9F0D]">Contact</a>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-full ml-6 lg:w-[250px] sm:w-full">
            <div className="flex w-full items-center px-3 py-2 rounded-full sm:w-full lg:w-[250px] outline outline-2 outline-[#FF9F0D]">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
              />
              <IoSearch className="text-white ml-3 text-3xl" />
            </div>
            <div className="lg:block ml-4 sm:hidden hidden">
              <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition" />
            </div>
          </div>

          {/* Mobile Menu Trigger (Sheet) */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <button onClick={() => setIsOpen(!isOpen)} className="text-[#FF9F0D] text-3xl ml-4">
                  &#9776;
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-3/4 sm:w-1/2 bg-black text-white p-6 transition-all transform duration-300 ease-in-out"
              >
                <SheetHeader>
                  <div className="flex items-center mb-5 justify-between w-[90%] mt-5">
                    <SheetTitle className="text-2xl font-bold mb-6">
                      <Link href="/">
                        <a className="text-2xl font-bold text-[#FF9F0D]">
                          Food<span className="text-white">tuck</span>
                        </a>
                      </Link>
                    </SheetTitle>
                    <div className="sm:block sm:ml-4 mb-4">
                      <PiHandbagBold className="text-[#FF9F0D] text-2xl hover:text-[#FF9F0D] transition" />
                    </div>
                  </div>

                  <SheetDescription>
                    <div className="flex flex-col space-y-4">
                      <Link href="/">
                        <a className="hover:text-[#FF9F0D] text-2xl">Home</a>
                      </Link>
                      <Link href="/manu">
                        <a className="hover:text-[#FF9F0D] text-2xl">Menu</a>
                      </Link>
                      <Link href="/blog">
                        <a className="hover:text-[#FF9F0D] text-2xl">Blog</a>
                      </Link>
                      <Link href="/pages">
                        <a className="hover:text-[#FF9F0D] text-2xl">Pages</a>
                      </Link>
                      <Link href="/about">
                        <a className="hover:text-[#FF9F0D] text-2xl">About</a>
                      </Link>
                      <Link href="/shop">
                        <a className="hover:text-[#FF9F0D] text-2xl">Shop</a>
                      </Link>
                      <Link href="/contact">
                        <a className="hover:text-[#FF9F0D] text-2xl">Contact</a>
                      </Link>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
