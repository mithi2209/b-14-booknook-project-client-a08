"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, Sun, Moon } from "lucide-react";

import AuthButtons from "@/components/shared/AuthButtons";


export const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Books", href: "/all-books"},
  { label: "Add Book", href: "/add-books" },
  { label: "My Books", href: "/my-books" },
  { label: "My Borrowed", href: "/my-borrowed-books" },
];

const Navbar = () => {

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur">
      <div className="container mx-auto grid grid-cols-[1fr_auto] items-center px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex w-fit items-center gap-2"
        >
          <div className="rounded-xl bg-terracotta p-2 dark:bg-warm-ivory">
            <BookOpen className="h-6 w-6 text-coffee-brown dark:text-deep-olive" />
          </div>

          <span className="text-2xl font-bold tracking-tight text-coffee-brown dark:text-warm-ivory">
            BookNook
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors 
                ${
                  pathname === link.href
                    ? "text-deep-olive dark:text-sunny-yellow"
                    : "text-coffee-brown dark:text-warm-ivory "
             }`}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center justify-end gap-3 lg:flex">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full text-coffee-brown hover:bg-muted-sage dark:text-warm-ivory dark:hover:bg-deep-olive"
          >
            <Sun className="hidden h-5 w-5 dark:block" />
            <Moon className="h-5 w-5 dark:hidden" />
          </Button>

            {/* Divider before Profile */}
            <div className="mx-2 h-8 w-px bg-border" />

          {/* user auth btn: login /register/profile */}
          <AuthButtons></AuthButtons>

        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full text-coffee-brown dark:text-warm-ivory"
          >
            <Sun className="hidden h-5 w-5 dark:block" />
            <Moon className="h-5 w-5 dark:hidden" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="text-coffee-brown dark:text-warm-ivory"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
        {isOpen && (
            <div className="
              max-h-[calc(100dvh-4.5rem)]
              overflow-y-auto overscroll-contain
              border-t border-border
              bg-background px-5 py-5 shadow-md lg:hidden
            ">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition-colors 
                  ${
                    pathname === link.href
                      ? "bg-muted-sage dark:bg-deep-olive dark:text-sunny-yellow"
                      : "text-coffee-brown hover:bg-muted-sage hover:text-deep-olive dark:text-warm-ivory dark:hover:bg-deep-olive dark:hover:text-sunny-yellow"
                }`}>
                {link.label}
              </Link>
            ))}
          </div>

           {/* user auth btn: login /register/profile */}
          <div className="mt-5 flex gap-3 border-t border-border pt-5">
              <AuthButtons onNavigate={closeMenu}></AuthButtons>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
