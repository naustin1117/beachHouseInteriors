"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  return (
    <div className="pt-24">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Interested in working together? Contact Tina Telesco to discuss your project
            </p>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-accent-600 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="text-left">
                  <p className="text-sm text-gray-500 mb-1">Call or Text</p>
                  <a
                    href="tel:+12016571664"
                    className="text-3xl font-serif font-bold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    (201) 657-1664
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}