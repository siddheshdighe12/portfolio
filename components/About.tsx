"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Trophy,
} from "lucide-react";

const cards = [
  {
    icon: <GraduationCap size={28} />,
    title: "Education",
    value: "B.Tech CSE",
    text: "UKA Tarsadia University\nCGPA : 7.5",
  },
  {
    icon: <Briefcase size={28} />,
    title: "Experience",
    value: "Code Alpha",
    text: "Web Developer Internship",
  },
  {
    icon: <Code2 size={28} />,
    title: "Projects",
    value: "3+",
    text: "Full Stack & Mobile Apps",
  },
  {
    icon: <Trophy size={28} />,
    title: "Goal",
    value: "Full Stack",
    text: "Building Modern Products",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#090511] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-violet-400">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Passionate Full Stack Developer
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-400">
            I'm Siddhesh Dighe, a Computer Science Engineering student
            passionate about developing scalable web and mobile
            applications. I enjoy transforming ideas into real-world
            products using modern technologies.
          </p>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">

                {card.icon}

              </div>

              <h3 className="mt-6 text-xl font-semibold">

                {card.title}

              </h3>

              <h4 className="mt-3 text-3xl font-bold text-violet-400">

                {card.value}

              </h4>

              <p className="mt-4 whitespace-pre-line leading-8 text-gray-400">

                {card.text}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}