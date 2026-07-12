"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
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
        transition={{ duration: .7 }}
        className="w-full max-w-6xl rounded-full border border-white/10 bg-[#120D22]/80 backdrop-blur-2xl"
      >

        <div className="flex h-16 items-center justify-between px-7">

          {/* Logo */}

          <a
            href="#home"
            className="text-lg font-bold tracking-wider"
          >
            <span className="text-violet-400">S</span>D
          </a>

          {/* Desktop */}

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

          {/* Resume */}

          <a
            href="/resume.pdf"
            className="hidden rounded-full bg-violet-600 px-5 py-2 text-sm transition hover:bg-violet-500 md:block"
          >
            Resume
          </a>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>

        </div>

        {open && (
          <div className="border-t border-white/10 px-7 py-6 md:hidden">

            <div className="flex flex-col gap-5">

              {navItems.map((item)=>(
                <a
                  key={item.title}
                  href={item.href}
                  onClick={()=>setOpen(false)}
                  className="text-gray-300"
                >
                  {item.title}
                </a>
              ))}

            </div>

          </div>
        )}

      </motion.nav>

    </header>
  );
}