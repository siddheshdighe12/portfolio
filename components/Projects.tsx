"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectSlider({
  images,
  title,
  mobile,
}: {
  images: string[];
  title: string;
  mobile: boolean;
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="group relative overflow-hidden rounded-2xl">

      {mobile ? (

        <div className="flex h-[320px] items-center justify-center rounded-2xl bg-[#171028]">

          <img
            src={images[current]}
            alt={title}
            className="h-[290px] rounded-2xl shadow-2xl transition duration-500 group-hover:scale-105"
          />

        </div>

      ) : (

        <img
          src={images[current]}
          alt={title}
          className="h-[320px] w-full rounded-2xl border border-white/10 object-cover transition duration-500 group-hover:scale-105"
        />

      )}

      {images.length > 1 && (

        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">

          {images.map((_, index) => (

            <div
              key={index}
              className={`h-2.5 w-2.5 rounded-full transition ${current === index
                  ? "bg-white"
                  : "bg-white/40"
                }`}
            />

          ))}

        </div>

      )}

    </div>
  );
}

type Project = {
  title: string;
  images: string[];
  mobile: boolean;
  description: string;
  tech: string[];
  github: string;
  live: string;
};

const projects: Project[] = [
  {
    title: "AI Resume Analyzer",

    mobile: false,

    images: [
      "/projects/resume-login.png",
      "/projects/resume-dashboard.png",
    ],

    description:
      "A Full Stack AI-powered Resume Analyzer that evaluates ATS compatibility, detects missing keywords, analyzes resume quality and generates personalized improvement suggestions using Google Gemini AI.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini AI",
      "JWT",
    ],

    github: "https://github.com/siddheshdighe12",

    live: "https://resume-analyzer-bvxx2ekht-siddhesh3.vercel.app/",
  },

  {
    title: "E-Commerce App",

    mobile: true,

    images: [
      "/projects/ecommerce.png",
    ],

    description:
      "Modern shopping application featuring authentication, cart management, REST APIs and responsive UI built with React Native.",

    tech: [
      "React Native",
      "Redux",
      "MongoDB",
      "REST API",
    ],

    github: "https://github.com/siddheshdighe12",

    live: "#",
  },

  {
    title: "Weather App",

    mobile: true,

    images: [
      "/projects/weather.jpeg",
      "/projects/weather2.jpeg",
    ],

    description:
      "Modern Weather App providing real-time weather updates, search, humidity, pressure, wind speed and visibility using OpenWeather API.",

    tech: [
      "React Native",
      "JavaScript",
      "OpenWeather API",
      "AsyncStorage",
    ],

    github: "https://github.com/siddheshdighe12",

    live: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#090511] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-violet-400">
            Portfolio
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Here are some of my recent projects built with modern web,
            mobile and AI technologies.
          </p>

        </div>

        {/* Projects */}

        <div className="mt-20 space-y-20">

          {projects.map((project, index) => (

            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: .7,
                delay: index * .15,
              }}
              className={`grid items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:grid-cols-2 ${index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
                }`}
            >

              {/* Image Slider */}

              <ProjectSlider
                images={project.images}
                title={project.title}
                mobile={project.mobile}
              />
              {/* Content */}

              <div>

                <p className="text-sm uppercase tracking-[5px] text-violet-400">
                  Featured Project
                </p>

                <h3 className="mt-3 text-4xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-gray-400">
                  {project.description}
                </p>

                {/* Tech */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-violet-500/20 bg-violet-600/10 px-4 py-2 text-sm text-violet-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 transition hover:border-violet-500"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}