"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
} from "lucide-react";

const experiences = [
  {
    icon: <Briefcase size={24} />,
    title: "Web Developer Intern",
    company: "Code Alpha",
    duration: "2025",
    description:
      "Worked on real-world web applications including E-Commerce Website and Real-Time Chat Application. Collaborated with developers, fixed bugs and implemented new features.",
  },
  {
    icon: <Code2 size={24} />,
    title: "Full Stack Developer",
    company: "Personal Projects",
    duration: "2024 - Present",
    description:
      "Developed multiple web and mobile applications using React, Next.js, React Native, Node.js, Express.js and MongoDB with modern UI and REST APIs.",
  },
  {
    icon: <GraduationCap size={24} />,
    title: "B.Tech Computer Science",
    company: "UKA Tarsadia University",
    duration: "2023 - 2027",
    description:
      "Currently pursuing Bachelor of Technology in Computer Science Engineering with focus on Full Stack Development and Software Engineering.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#090511] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[6px] text-violet-400">
            Experience
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Journey
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            My journey from learning programming to building
            full stack applications and working on real projects.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-20">

          {/* Center Line */}

          <div className="absolute left-6 top-0 h-full w-[2px] bg-violet-600/40"></div>

          <div className="space-y-10">

            {experiences.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                }}
                className="relative ml-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
              >

                {/* Timeline Dot */}

                <div className="absolute -left-[55px] top-9 flex h-12 w-12 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg">

                  {item.icon}

                </div>

                <div className="flex flex-col justify-between gap-3 md:flex-row">

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-violet-400">
                      {item.company}
                    </p>

                  </div>

                  <span className="rounded-full bg-violet-600/20 px-4 py-2 text-sm text-violet-300">
                    {item.duration}
                  </span>

                </div>

                <p className="mt-6 leading-8 text-gray-400">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}