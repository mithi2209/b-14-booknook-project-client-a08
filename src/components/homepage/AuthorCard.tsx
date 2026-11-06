

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { authorsData } from "@/lib/authorsData";



type Author = (typeof authorsData)[number];

type Props = {
  author: Author;
  index: number;
};

const AuthorCard = ({ author, index }: Props) => {

    return (
         <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="group overflow-hidden rounded-2xl border border-[#DCCDBB]/70 bg-[#FFFCF7] shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-[#53604F] dark:bg-[#303A30]"
    >
      {/* Author Image */}
      <div className="relative aspect-[4/4.5] overflow-hidden">
        <Image
          src={author.image}
          alt={author.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Author number */}
        <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-black/20 px-3 py-1.5 font-serif text-xs text-white backdrop-blur-md">
          0{index + 1}
        </span>

        {/* Decorative icon */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#49372D] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#A46A4F] group-hover:text-white">
          <ArrowUpRight size={19} />
        </div>
      </div>

      {/* Author Information */}
      <div className="p-5 sm:p-6">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A46A4F] dark:text-[#D6A078]">
          {author.genre}
        </p>

        <h3 className="font-serif text-2xl font-semibold tracking-tight text-[#49372D] dark:text-[#F5EBDD]">
          {author.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#786B5D] dark:text-[#D2C8B8]">
          {author.description}
        </p>

        <div className="mt-5 h-px w-full bg-[#E8DED1] transition-all duration-500 group-hover:bg-[#A46A4F] dark:bg-[#53604F]" />
      </div>
    </motion.div>
    );
};

export default AuthorCard;