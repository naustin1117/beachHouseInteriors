"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="pb-32 md:pb-44">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
                Let's talk
              </h1>
              <p className="text-warm-600 text-lg max-w-lg leading-relaxed">
                Whether you're starting a renovation, refreshing a room, or just exploring 
                ideas — I'd love to hear about your project.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="space-y-12">
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-warm-500 mb-3">
                    Call or Text
                  </p>
                  <a
                    href="tel:+12016571664"
                    className="text-2xl md:text-3xl font-serif text-warm-900 hover:text-warm-600 transition-colors duration-300"
                  >
                    (201) 657-1664
                  </a>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-warm-500 mb-3">
                    Principal
                  </p>
                  <p className="text-lg text-warm-900">Tina Telesco</p>
                </div>

                <div>
                  <p className="text-xs font-medium tracking-widest uppercase text-warm-500 mb-3">
                    Based in
                  </p>
                  <p className="text-lg text-warm-900">New York</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
