

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import author1 from "@/assets/images/Author-Photo1.webp";
import author2 from "@/assets/images/author2.jpg";
import author3 from "@/assets/images/author3.jpg";
import author4 from "@/assets/images/author4.jpg";

const authors = [
  {
    name: "Jane Austen",
    genre: "Classic Fiction",
    description: "A timeless voice of romance, society, and human nature.",
    image: author1,
    slug: "jane-austen",
  },
  {
    name: "William Shakespeare",
    genre: "Drama & Poetry",
    description: "The legendary storyteller behind unforgettable plays.",
    image: author2,
    slug: "william-shakespeare",
  },
  {
    name: "Agatha Christie",
    genre: "Mystery & Crime",
    description: "Master of mysteries filled with unexpected twists.",
    image: author3,
    slug: "agatha-christie",
  },
  {
    name: "George Orwell",
    genre: "Literary Fiction",
    description: "A powerful writer exploring society and humanity.",
    image: author4,
    slug: "george-orwell",
  },
];



// Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};


const FeaturedAuthors = () => {
    return (
      <section className="bg-warm-ivory px-4 py-14 transition-colors duration-300 dark:bg-[#30392F] sm:py-20">

      <div className="container mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className=" ">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-deep-olive dark:text-sunny-yellow ">
              MEET THE STORYTELLERS
            </p>

            <h2 className="text-3xl font-bold text-coffee-brown dark:text-warm-ivory sm:text-4xl">
              Featured Authors
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-coffee-brown/75 dark:text-warm-ivory/70">
              Discover the creative minds behind the stories that inspire,
              challenge, and stay with us.
            </p>
          </div>

          <Link
            href="/authors"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-coffee-brown transition-colors hover:text-deep-olive dark:text-sunny-yellow dark:hover:text-terracotta"
          >
            VIEW ALL AUTHORS
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Authors */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {authors.map((author) => (
            <motion.div key={author.name} variants={itemVariants}>
              <Link
                href={`/authors/${author.name.toLowerCase().replaceAll(" ", "-")}`}
                className="group block overflow-hidden rounded-xl border border-terracotta/40 bg-white/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-[#69745D] dark:bg-[#3F4A3A]"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-deep-olive dark:text-sunny-yellow">
                    {author.genre}
                  </p>

                  <h3 className="text-lg font-bold text-coffee-brown transition-colors group-hover:text-deep-olive dark:text-warm-ivory dark:group-hover:text-sunny-yellow">
                    {author.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between border-t border-terracotta/40 pt-3 dark:border-[#69745D]">
                    <span className="text-sm text-coffee-brown/70 dark:text-warm-ivory/65">
                      Explore author
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-deep-olive transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-sunny-yellow"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    );
};

export default FeaturedAuthors;