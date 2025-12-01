"use client";

import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/nyc-apartment-1.jpg"
            alt="Luxurious interior design"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Beach House Interiors
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-balance">
            Residential interior design in New York
          </p>
          <Link
            href="/portfolio"
            className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
          >
            View Our Work
          </Link>
        </motion.div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/images/ridgewood-1.jpg"
                  alt="Modern living room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl font-serif font-bold mb-6">
                Your Space, Beautifully Designed
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Specializing in residential interiors throughout New York, creating spaces
                that reflect your personal style and enhance everyday living.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From full home renovations to single room refreshes, each project receives
                dedicated attention and creative problem-solving.
              </p>
              <Link
                href="/portfolio"
                className="inline-block border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                View Our Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Ready to transform your space? Get in touch to discuss your project
            </p>
            <Link
              href="/contact"
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}