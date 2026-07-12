"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B0615] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">

        <div>
          <h2 className="text-2xl font-bold text-violet-400">
            Siddhesh Dighe
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            Web Developer • React • Next.js • React Native
          </p>
        </div>

        <div className="flex gap-5">

          <a
            href="https://github.com/siddheshdighe12"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 p-3 transition hover:bg-violet-600"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/siddhesh-dighe-3a1428358/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/5 p-3 transition hover:bg-violet-600"
          >
            <FaLinkedin size={20} />
          </a>

        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Siddhesh Dighe. All rights reserved.
        </p>

      </div>
    </footer>
  );
}