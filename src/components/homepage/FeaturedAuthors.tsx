


"use client";

import Image from "next/image";
import Link from "next/link";
import AuthorCard from "./AuthorCard";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { authorsData } from "@/lib/authorsData";




const FeaturedAuthors = () => {

  return (

    <section className="overflow-hidden bg-[#F5F0E7] px-4 py-16 transition-colors duration-300 dark:bg-[#252D25] sm:py-8">

      <div className="container mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#A46A4F] dark:bg-[#D6A078]" />

              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#967052] dark:text-[#D6A078]">
                THE MINDS BEHIND THE MAGIC
              </p>
            </div>

            <h2 className=" text-4xl font-medium tracking-tight text-[#49372D] dark:text-[#F5EBDD] sm:text-5xl lg:text-6xl">
              Meet the <span className="italic text-[#A46A4F] dark:text-[#D6A078]">Authors.</span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#786B5D] dark:text-[#D2C8B8] sm:text-base">
              Every unforgettable story begins with an extraordinary mind.
              Discover the voices that have shaped generations of readers.
            </p>
          </div>

          <Link
            href="/authors"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#A46A4F]/50 pb-2 text-xs font-bold tracking-[0.13em] text-[#49372D] transition-colors hover:border-[#A46A4F] hover:text-[#A46A4F] dark:text-[#F5EBDD] dark:hover:text-[#D6A078]"
          >
            EXPLORE ALL AUTHORS

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        {/* Author Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {authorsData.map((author, index) => (
            <AuthorCard
              key={author.name}
              author={author}
              index={index}
            />
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <div className="mt-10 flex items-center justify-center gap-4 sm:mt-14">
          <span className="h-px flex-1 bg-[#B9A58F]/40 dark:bg-[#69745D]" />

          <p className=" text-sm italic text-[#967052] dark:text-[#D6A078]">
            Stories live forever.
          </p>

          <span className="h-px flex-1 bg-[#B9A58F]/40 dark:bg-[#69745D]" />
        </div>

      </div>
    </section>
  );
};

export default FeaturedAuthors;
