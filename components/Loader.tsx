"use client";

import { motion, AnimatePresence } from "framer-motion";

type LoaderProps = {
  loading: boolean;
};

export default function Loader({ loading }: LoaderProps) {
  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090511]"
        >

          <div className="flex flex-col items-center">

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
              }}
              className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-violet-700 via-violet-600 to-purple-500 text-5xl font-bold shadow-[0_0_80px_rgba(139,92,246,.7)]"
            >
              SD
            </motion.div>

            <motion.p
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="mt-8 text-lg text-violet-300"
            >
              Loading Portfolio...
            </motion.p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}