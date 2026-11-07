"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import categoryImage from "@/assets/images/topCategoriesImage.jpg";

const categories = [
  { name: "Fiction", slug: "fiction" },
  { name: "Science", slug: "science" },
  { name: "History", slug: "history" },
  { name: "Mystery", slug: "mystery" },
  { name: "Romance", slug: "romance" },
  { name: "Art & Design", slug: "art-design" },
  { name: "Kid", slug: "kid" },
  { name: "Others", slug: "others" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const TopCategories = () => {
  
  return (
    <section className="bg-deep-olive px-4 py-9 transition-colors duration-300 sm:py-14">
      <div className="container mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mb-5 flex items-start justify-between"
        >
          <div>
            <p className="mb-2 text-[11px] font-semibold tracking-[0.2em] text-sunny-yellow dark:text-warm-ivory">
              BOOKNOOK COLLECTIONS
            </p>

            <h2 className="text-2xl font-bold text-warm-ivory dark:text-warm-ivory sm:text-3xl lg:text-4xl">
              A world beyond the pages.
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-warm-ivory/85 dark:text-warm-ivory/75">
              Thoughtfully selected collections for curious minds and passionate
              readers.
            </p>
          </div>

          <span className="hidden text-xs font-medium text-sunny-yellow dark:text-warm-ivory sm:block">
            01 — 08
          </span>
        </motion.div>

        {/* Book Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mb-6 h-28 overflow-hidden rounded-xl sm:h-100"
        >
          <Image
            src={categoryImage}
            alt="A beautiful collection of books"
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Category Heading */}
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-warm-ivory sm:text-xl">
            Explore our genres
          </h3>

          <Link
            href="/categories"
            className="flex items-center gap-1 text-xs font-semibold text-sunny-yellow transition-colors hover:text-terracotta dark:text-warm-ivory dark:hover:text-sunny-yellow"
          >
            DISCOVER ALL
            <ArrowUpRight size={15} />
          </Link>
        </div>

        {/* Category List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-10 sm:grid-cols-2"
        >
          {categories.map((category, index) => (

            <motion.div key={category.slug} variants={itemVariants}>
              
                <Link
                 href={`/categories/${category.slug}`}
                className="group flex items-center gap-3 border-b border-warm-ivory/30 py-3 transition-all duration-300 hover:pl-2 dark:border-warm-ivory/20"
              >
                <span className="text-[11px] text-sunny-yellow dark:text-warm-ivory/80">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex-1 text-base font-medium text-warm-ivory transition-colors group-hover:text-sunny-yellow dark:text-warm-ivory dark:group-hover:text-sunny-yellow sm:text-lg">
                  {category.name}
                </span>

                <ArrowUpRight
                  size={17}
                  className="text-warm-ivory/80 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sunny-yellow"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopCategories;
