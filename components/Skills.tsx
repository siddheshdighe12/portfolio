"use client";

import { motion } from "framer-motion";
import TechOrbit from "./TechOrbit";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#090511] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Technologies I Love
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Passionate about building modern applications using the latest
            frontend, backend and cloud technologies.
          </p>

        </motion.div>

        <div className="mt-20">

          <TechOrbit />

        </div>

      </div>

    </section>
  );
}