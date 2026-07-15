"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#090511] pt-32 pb-24"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[150px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-16 px-6 lg:flex-row">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >

          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            👋 Hello, I'm Siddhesh
          </span>

          <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
            Hi, I'm
            <br />

            <span className="text-violet-400">
              Siddhesh Dighe
            </span>

            <br />

            <span className="text-white">
              Full Stack
            </span>

            <br />

            <span className="text-gray-300">
              Developer
            </span>
          </h1>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            Computer Science Engineering student and Full Stack Developer
            with internship experience at Code Alpha. Passionate about
            building modern web and mobile applications using React,
            Next.js, React Native, Node.js, Express.js and MongoDB.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="#projects"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-700 to-violet-500 px-7 py-4 font-semibold transition hover:scale-105"
            >
              View Projects
              <ArrowRight size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 rounded-full border border-violet-500 px-7 py-4 font-semibold transition hover:bg-violet-600/20"
            >
              Resume
              <Download size={18} />
            </a>

          </div>

          <div className="mt-10 flex gap-5">

            <a
              href="https://github.com/siddheshdighe12"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:bg-violet-600"
            >
              <FaGithub size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/siddhesh-dighe-a7042737a/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 p-4 transition hover:bg-violet-600"
            >
              <FaLinkedin size={22} />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >

          {/* Glow */}

          <div className="absolute h-[360px] w-[360px] rounded-full bg-violet-600/30 blur-[100px]" />

          {/* Outer Ring */}

          <div className="relative flex h-[360px] w-[360px] items-center justify-center rounded-full border border-violet-500/20 bg-white/5 backdrop-blur-xl">

            {/* Inner Ring */}

            <div className="flex h-[300px] w-[300px] items-center justify-center rounded-full border border-violet-500/20">

              {/* Image */}

              <div className="relative h-[250px] w-[250px] overflow-hidden rounded-full border-4 border-violet-500 shadow-[0_0_80px_rgba(139,92,246,.7)]">

                <Image
                  src="/profile.png.png"
                  alt="Siddhesh Dighe"
                  width={250}
                  height={250}
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

          {/* Badge */}

          {/* Badge */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute -left-5 bottom-10 rounded-full border border-violet-500/20 bg-[#171028] px-5 py-3"
          >
            <span className="text-sm font-semibold text-violet-300">
              Full Stack Developer
            </span>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}