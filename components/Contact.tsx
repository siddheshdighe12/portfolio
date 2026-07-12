"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function Contact() {

  const form = useRef<HTMLFormElement>(null);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted");

    if (!form.current) return;

    setLoading(true);
    setStatus("");

    try {
      const result = await emailjs.sendForm(
        "service_hbh4oc9",
        "template_eyf3mxo",
        form.current,
        "PHPZRo4RUcupGw6HT"
      );

      console.log("SUCCESS:", result);

      alert("Email Sent Successfully!");

      toast.success("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EMAILJS ERROR:", error);

      alert("Check console for error");

      toast.error("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (

    <section
      id="contact"
      className="bg-[#0B0615] py-24 px-6 text-white"
    >

      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-sm uppercase tracking-[5px] text-violet-400">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-4 text-gray-400">
            Feel free to contact me for internships,
            freelance work or collaborations.
          </p>

        </motion.div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <div className="space-y-8">

              <div className="flex gap-5">

                <Mail className="text-violet-400" />

                <div>
                  <h3>Email</h3>
                  <p className="text-gray-400">
                    23amtics378@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <Phone className="text-violet-400" />

                <div>
                  <h3>Phone</h3>
                  <p className="text-gray-400">
                    +91 7276083640
                  </p>
                </div>

              </div>

              <div className="flex gap-5">

                <MapPin className="text-violet-400" />

                <div>
                  <h3>Location</h3>
                  <p className="text-gray-400">
                    Nashik, Maharashtra
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >

            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-white/10 bg-[#171028] p-4 outline-none transition focus:border-violet-500"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-white/10 bg-[#171028] p-4 outline-none transition focus:border-violet-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-xl border border-white/10 bg-[#171028] p-4 outline-none transition focus:border-violet-500"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Write your message..."
              required
              className="w-full rounded-xl border border-white/10 bg-[#171028] p-4 outline-none transition focus:border-violet-500"
            />

            {status === "success" && (
              <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-green-400">
                ✅ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
                ❌ Failed to send message. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-medium transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send size={18} />

              {loading ? "Sending..." : "Send Message"}

            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}