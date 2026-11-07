"use client";

import { motion } from "framer-motion";
import { Star, Quote, BookOpen } from "lucide-react";

const reviews = [
  {
    name: "Sophia Williams",
    role: "Avid Reader",
    initials: "SW",
    book: "The Silent Patient",
    rating: 5,
    review:
      "BookNook has become my favorite place to discover new stories. The collection is wonderful, and I always find something worth reading.",
  },
  {
    name: "Oliver James",
    role: "Book Enthusiast",
    initials: "OJ",
    book: "Atomic Habits",
    rating: 5,
    review:
      "A beautiful reading experience! I found some amazing books here that I wouldn't have discovered otherwise. Highly recommended!",
  },
  {
    name: "Emily Carter",
    role: "Regular Customer",
    initials: "EC",
    book: "The Alchemist",
    rating: 5,
    review:
      "I love exploring the different categories. BookNook makes finding my next favorite book feel effortless and enjoyable.",
  },
];

const ReadersReviews = () => {
  
  return (

    <section className="bg-warm-ivory py-8 transition-colors duration-300 dark:bg-[#30392F] sm:py-10 mt-8 lg:my-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold tracking-[0.3em] text-deep-olive dark:text-sunny-yellow">
            WORDS FROM OUR READERS
          </p>

          <h2 className="text-3xl font-bold text-coffee-brown dark:text-warm-ivory sm:text-4xl">
            Stories Worth Sharing.
          </h2>

          <p className="mt-4 text-sm leading-7 text-coffee-brown/70 dark:text-warm-ivory/65 sm:text-base">
            Every book creates a different journey. Here's what our readers have
            to say about their BookNook experience.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-terracotta/40 bg-white/60 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg dark:border-[#69745D] dark:bg-[#3F4A3A]"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta/30 text-lg font-bold text-coffee-brown dark:bg-[#69745D] dark:text-warm-ivory">
                  {review.initials}
                </div>

                <Quote
                  size={30}
                  className="text-terracotta/70 dark:text-muted-sage"
                />
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-sunny-yellow text-sunny-yellow"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="min-h-28 text-sm leading-7 text-coffee-brown/80 dark:text-warm-ivory/75">
                "{review.review}"
              </p>

              <div className="my-5 h-px bg-terracotta/40 dark:bg-[#69745D]" />

              {/* Reader Details */}
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-bold text-coffee-brown dark:text-warm-ivory">
                    {review.name}
                  </h3>
                  <p className="mt-1 text-xs text-coffee-brown/60 dark:text-warm-ivory/55">
                    {review.role}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 rounded-full bg-muted-sage/20 px-3 py-2 text-xs font-medium text-deep-olive dark:bg-[#69745D]/40 dark:text-sunny-yellow">
                  <BookOpen size={14} />
                  {review.book}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 text-center text-sm text-coffee-brown/60 dark:text-warm-ivory/50"
        >
          Your next favorite book is waiting to be discovered.
        </motion.p>
      </div>
    </section>
  );
};

export default ReadersReviews;
