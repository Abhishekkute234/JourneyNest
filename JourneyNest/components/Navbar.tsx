"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Compass className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl">JourneyNest</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/tours" className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                Tours
              </Link>
              <Link href="/about" className="text-foreground/60 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Button>Agent</Button>
              <Button>Upcomming tours</Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground/60 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-foreground hover:text-foreground/60 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/tours" className="text-foreground hover:text-foreground/60 block px-3 py-2 rounded-md text-base font-medium">
              Tours
            </Link>
            <Link href="/about" className="text-foreground hover:text-foreground/60 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Button>Agent</Button>
              <Button>Upcomming tours</Button>
          </div>
        </div>
      )}
    </nav>
  );
}