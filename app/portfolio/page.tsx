"use client";

import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const portfolioImages = [
  {
    id: 1,
    src: "/images/nyc-apartment-1.jpg",
    title: "NYC Apartment - Living Space",
    category: "NYC Apartment",
  },
  {
    id: 2,
    src: "/images/nyc-apartment-2.jpg",
    title: "NYC Apartment - Interior Detail",
    category: "NYC Apartment",
  },
  {
    id: 3,
    src: "/images/nyc-apartment-3.jpg",
    title: "NYC Apartment - Main Room",
    category: "NYC Apartment",
  },
  {
    id: 4,
    src: "/images/nyc-apartment-4.jpg",
    title: "NYC Apartment - Elegant Design",
    category: "NYC Apartment",
  },
  {
    id: 5,
    src: "/images/beach-house-1.jpg",
    title: "Beach House - Coastal Living",
    category: "Beach House",
  },
  {
    id: 6,
    src: "/images/beach-house-2.jpg",
    title: "Beach House - Relaxed Interior",
    category: "Beach House",
  },
  {
    id: 7,
    src: "/images/ridgewood-1.jpg",
    title: "Ridgewood - Contemporary Space",
    category: "Ridgewood",
  },
  {
    id: 8,
    src: "/images/ridgewood-2.jpg",
    title: "Ridgewood - Modern Design",
    category: "Ridgewood",
  },
  {
    id: 9,
    src: "/images/ridgewood-3.jpg",
    title: "Ridgewood - Refined Interior",
    category: "Ridgewood",
  },
  {
    id: 10,
    src: "/images/ridgewood-4.jpg",
    title: "Ridgewood - Elegant Details",
    category: "Ridgewood",
  },
  {
    id: 11,
    src: "/images/ridgewood-5.jpg",
    title: "Ridgewood - Stylish Living",
    category: "Ridgewood",
  },
  {
    id: 12,
    src: "/images/ridgewood-6.jpg",
    title: "Ridgewood - Sophisticated Design",
    category: "Ridgewood",
  },
];

export default function Portfolio() {
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
              Recent Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of recent residential projects
            </p>
          </motion.div>

          <ImageGallery images={portfolioImages} />
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-serif font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch to discuss your project
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-md text-lg font-medium transition-colors"
            >
              Contact
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}