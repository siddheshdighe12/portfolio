"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const icons = [
  { icon: <FaReact />, angle: 0, color: "#61DBFB" },
  { icon: <SiNextdotjs />, angle: 45, color: "#ffffff" },
  { icon: <FaNodeJs />, angle: 90, color: "#3C873A" },
  { icon: <SiMongodb />, angle: 135, color: "#4DB33D" },
  { icon: <SiTypescript />, angle: 180, color: "#3178C6" },
  { icon: <SiTailwindcss />, angle: 225, color: "#38BDF8" },
  { icon: <FaGitAlt />, angle: 270, color: "#F1502F" },
  { icon: <FaGithub />, angle: 315, color: "#ffffff" },
];

export default function Orbit() {
  return (
    <div className="relative flex h-[360px] items-center justify-center overflow-hidden">

      {/* Glow */}

      <div className="absolute h-44 w-44 rounded-full bg-violet-600/40 blur-[90px]" />

      {/* Outer Ring */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
        className="absolute h-[260px] w-[260px] rounded-full border border-violet-500/20"
      >

        {icons.map((item, index) => {
          const radius = 130;

          const x =
            radius *
            Math.cos((item.angle * Math.PI) / 180);

          const y =
            radius *
            Math.sin((item.angle * Math.PI) / 180);

          return (
            <div
              key={index}
              className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-violet-500/20 bg-[#171028] text-2xl backdrop-blur-xl"
              style={{
                left: `calc(50% + ${x}px - 24px)`,
                top: `calc(50% + ${y}px - 24px)`,
                color: item.color,
              }}
            >
              {item.icon}
            </div>
          );
        })}
      </motion.div>

      {/* Inner Ring */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 18,
        }}
        className="absolute h-[180px] w-[180px] rounded-full border border-violet-500/10"
      />

      {/* Center */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="relative z-20 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 to-violet-500 text-4xl font-bold shadow-[0_0_60px_rgba(139,92,246,.8)]"
      >
        SD
      </motion.div>
    </div>
  );
}