"use client";

import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navItems = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-5">
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#120D22]/80 backdrop-blur-2xl md:rounded-full"
      >
        <div className="flex h-16 items-center justify-between px-7">
          {/* Logo */}

          <a
            href="#home"
            className="text-lg font-bold tracking-wider"
          >
            <span className="text-violet-400">S</span>D
          </a>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="text-sm text-gray-300 transition hover:text-violet-400"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-white/10 md:hidden"
            >
              <div className="flex flex-col px-7 py-6">
                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-lg text-gray-300 transition hover:text-violet-400"
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}