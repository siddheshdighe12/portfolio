"use client";

import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiPostman,
  SiFigma,
  SiVercel,
  SiRender,
} from "react-icons/si";

/* Middle Ring */

const skills = [
  {
    icon: <FaReact />,
    color: "#61DAFB",
    top: "8%",
    left: "50%",
  },
  {
    icon: <SiNextdotjs />,
    color: "#ffffff",
    top: "20%",
    left: "80%",
  },
  {
    icon: <FaNodeJs />,
    color: "#3C873A",
    top: "50%",
    left: "90%",
  },
  {
    icon: <SiMongodb />,
    color: "#47A248",
    top: "80%",
    left: "78%",
  },
  {
    icon: <SiTypescript />,
    color: "#3178C6",
    top: "92%",
    left: "50%",
  },
  {
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    top: "80%",
    left: "22%",
  },
  {
    icon: <FaGitAlt />,
    color: "#F1502F",
    top: "50%",
    left: "10%",
  },
  {
    icon: <FaGithub />,
    color: "#ffffff",
    top: "20%",
    left: "20%",
  },
];

/* Outer Ring */

const outerSkills = [
  {
    icon: <SiExpress />,
    color: "#ffffff",
    top: "5%",
    left: "50%",
  },
  {
    icon: <SiVercel />,
    color: "#ffffff",
    top: "18%",
    left: "82%",
  },
  {
    icon: <SiRender />,
    color: "#46E3B7",
    top: "50%",
    left: "96%",
  },
  {
    icon: <SiPostman />,
    color: "#FF6C37",
    top: "82%",
    left: "82%",
  },
  {
    icon: <FaDocker />,
    color: "#2496ED",
    top: "95%",
    left: "50%",
  },
  {
    icon: <SiFigma />,
    color: "#F24E1E",
    top: "82%",
    left: "18%",
  },
  {
    icon: <SiExpress />,
    color: "#ffffff",
    top: "50%",
    left: "4%",
  },
  {
    icon: <SiRender />,
    color: "#46E3B7",
    top: "18%",
    left: "18%",
  },
];

export default function TechOrbit() {
  return (
    <div className="relative mx-auto h-[560px] w-[560px]">

      {/* Glow */}

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/30 blur-[120px]" />

      {/* OUTERMOST RING */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/10"
      >
        {outerSkills.map((item, index) => (
          <div
            key={index}
            className="absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#171028] text-xl backdrop-blur-xl"
            style={{
              top: item.top,
              left: item.left,
              color: item.color,
            }}
          >
            {item.icon}
          </div>
        ))}
      </motion.div>

      {/* MIDDLE RING */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/20"
      >
        {skills.map((item, index) => (
          <div
            key={index}
            className="absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#171028] text-2xl backdrop-blur-xl"
            style={{
              top: item.top,
              left: item.left,
              color: item.color,
            }}
          >
            {item.icon}
          </div>
        ))}
      </motion.div>

      {/* INNER RING */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-500/10"
      />

      {/* CENTER */}

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 via-violet-600 to-purple-500 text-5xl font-bold shadow-[0_0_80px_rgba(139,92,246,.7)]"
      >
        SD
      </motion.div>

    </div>
  );
}