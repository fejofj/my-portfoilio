"use client";

import { useState } from "react";
import { roboto } from "./fonts";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-bgColor/95 backdrop-blur-sm px-4 sm:px-8 lg:px-12 py-4">
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="flex flex-row space-x-1 shrink-0">
          <h1 className={`${roboto.className} font-bold text-xl text-white`}>
            Fe
          </h1>
          <h1 className={`${roboto.className} font-bold text-xl text-yellow`}>
            Jo
          </h1>
        </a>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded border border-yellow/60 p-2 text-yellow"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div
          className={`${roboto.className} hidden md:flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {open && (
        <div
          className={`${roboto.className} md:hidden mt-4 flex flex-col gap-3 text-sm text-white border-t border-white/10 pt-4`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-yellow transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
