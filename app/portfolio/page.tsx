"use client";

import { motion } from "framer-motion";
import ImageGallery from "@/components/ImageGallery";
import { getAssetPath } from "@/lib/utils";

const portfolioImages = [
  {
    id: 1,
    src: getAssetPath("/images/nyc-apartment-1.jpg"),
    title: "Living Space",
    category: "NYC Apartment",
  },
  {
    id: 2,
    src: getAssetPath("/images/nyc-apartment-2.jpg"),
    title: "Interior Detail",
    category: "NYC Apartment",
  },
  {
    id: 3,
    src: getAssetPath("/images/nyc-apartment-3.jpg"),
    title: "Main Room",
    category: "NYC Apartment",
  },
  {
    id: 4,
    src: getAssetPath("/images/nyc-apartment-4.jpg"),
    title: "Elegant Design",
    category: "NYC Apartment",
  },
  {
    id: 5,
    src: getAssetPath("/images/nyc-apartment-5.jpg"),
    title: "Warm Tones",
    category: "NYC Apartment",
  },
  {
    id: 6,
    src: getAssetPath("/images/nyc-apartment-6.jpg"),
    title: "Natural Light",
    category: "NYC Apartment",
  },
  {
    id: 7,
    src: getAssetPath("/images/beach-house-1.jpg"),
    title: "Coastal Living",
    category: "Mantoloking",
  },
  {
    id: 8,
    src: getAssetPath("/images/beach-house-3.jpg"),
    title: "Open Plan",
    category: "Mantoloking",
  },
  {
    id: 9,
    src: getAssetPath("/images/beach-house-4.jpg"),
    title: "Seaside Details",
    category: "Mantoloking",
  },
  {
    id: 10,
    src: getAssetPath("/images/beach-house-5.jpg"),
    title: "Bright Interior",
    category: "Mantoloking",
  },
  {
    id: 11,
    src: getAssetPath("/images/beach-house-6.jpg"),
    title: "Relaxed Living",
    category: "Mantoloking",
  },
  {
    id: 12,
    src: getAssetPath("/images/beach-house-7.jpg"),
    title: "Airy Space",
    category: "Mantoloking",
  },
  {
    id: 13,
    src: getAssetPath("/images/beach-house-8.jpg"),
    title: "Coastal Palette",
    category: "Mantoloking",
  },
  {
    id: 14,
    src: getAssetPath("/images/beach-house-9.jpg"),
    title: "Textured Comfort",
    category: "Mantoloking",
  },
  {
    id: 15,
    src: getAssetPath("/images/beach-house-10.jpg"),
    title: "Ocean Views",
    category: "Mantoloking",
  },
  {
    id: 16,
    src: getAssetPath("/images/ridgewood-2.jpg"),
    title: "Modern Design",
    category: "Ridgewood",
  },
  {
    id: 17,
    src: getAssetPath("/images/ridgewood-3.jpg"),
    title: "Refined Interior",
    category: "Ridgewood",
  },
  {
    id: 18,
    src: getAssetPath("/images/ridgewood-4.jpg"),
    title: "Elegant Details",
    category: "Ridgewood",
  },
  {
    id: 19,
    src: getAssetPath("/images/ridgewood-6.jpg"),
    title: "Sophisticated Design",
    category: "Ridgewood",
  },
  {
    id: 20,
    src: getAssetPath("/images/ridgewood-7.jpg"),
    title: "Living Room",
    category: "Ridgewood",
  },
  {
    id: 21,
    src: getAssetPath("/images/ridgewood-8.jpg"),
    title: "Kitchen & Dining",
    category: "Ridgewood",
  },
  {
    id: 22,
    src: getAssetPath("/images/ridgewood-9.jpg"),
    title: "Cozy Corner",
    category: "Ridgewood",
  },
  {
    id: 23,
    src: getAssetPath("/images/ridgewood-10.jpg"),
    title: "Finishing Touches",
    category: "Ridgewood",
  },
];

export default function Portfolio() {
  return (
    <div className="pt-28 md:pt-36">
      <section className="pb-32 md:pb-44">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <motion.div
            className="mb-16 md:mb-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-4">
              Work
            </h1>
            <p className="text-warm-600 text-lg max-w-lg">
              A selection of residential projects across New York.
            </p>
          </motion.div>

          <ImageGallery images={portfolioImages} />
        </div>
      </section>
    </div>
  );
}
