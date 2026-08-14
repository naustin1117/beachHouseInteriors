"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getAssetPath } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      {/* Hero - Full viewport, cinematic */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={getAssetPath("/images/nyc-apartment-1.jpg")}
            alt="Luxurious interior design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </div>

        <motion.div
          className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 pb-16 md:pb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif text-white mb-4 max-w-4xl leading-[0.95]">
            Interiors that feel like home
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-xl mt-6">
            Residential design in New York — spaces crafted around how you actually live.
          </p>
        </motion.div>
      </section>

      {/* About Section - Asymmetric layout */}
      <section className="py-32 md:py-44">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-xs font-medium tracking-widest uppercase text-warm-500 mb-6">
                Approach
              </p>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight mb-8">
                Your space should feel intentional, not decorated.
              </h2>
              <p className="text-warm-600 text-lg leading-relaxed mb-6">
                Every project starts with how you live — your routines, what you collect, 
                how light moves through your rooms. The design follows from there.
              </p>
              <p className="text-warm-600 text-lg leading-relaxed">
                From full renovations to single-room transformations, each space 
                gets the same level of care and creative attention.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={getAssetPath("/images/ridgewood-2.jpg")}
                  alt="Modern living room"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="pb-32 md:pb-44">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div
            className="flex items-end justify-between mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-warm-500 mb-3">
                Selected Projects
              </p>
              <h2 className="text-3xl md:text-4xl font-serif">Recent Work</h2>
            </div>
            <Link
              href="/portfolio"
              className="hidden md:inline-block text-sm font-medium text-warm-600 hover:text-warm-900 border-b border-warm-300 hover:border-warm-900 pb-0.5 transition-colors duration-300"
            >
              View all projects
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { src: "/images/nyc-apartment-2.jpg", title: "NYC Apartment", subtitle: "Upper West Side" },
              { src: "/images/beach-house-1.jpg", title: "Mantoloking", subtitle: "Beach House" },
              { src: "/images/ridgewood-3.jpg", title: "Ridgewood", subtitle: "Contemporary Living" },
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href="/portfolio" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-warm-200">
                    <Image
                      src={getAssetPath(project.src)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="text-base font-medium text-warm-900">
                      {project.title}
                    </h3>
                    <span className="text-sm text-warm-500">{project.subtitle}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/portfolio"
              className="text-sm font-medium text-warm-600 border-b border-warm-300 pb-0.5"
            >
              View all projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA - Minimal, confident */}
      <section className="bg-warm-900 text-white py-32 md:py-44">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-white/60 text-lg mb-10 max-w-lg">
              Let's talk about what you're envisioning for your space.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-sm font-medium tracking-wide uppercase border border-white/30 hover:border-white px-8 py-4 transition-colors duration-300"
            >
              Get in touch
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
