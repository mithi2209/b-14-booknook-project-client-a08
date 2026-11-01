"use client";

import { BookOpen } from "lucide-react";

const loading = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-warm-ivory px-4 transition-colors duration-300 dark:bg-[#30392F]">
      <div className="flex flex-col items-center text-center">
        {/* Animated Book Icon */}
        <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-terracotta/30 text-deep-olive dark:bg-[#3F4A3A] dark:text-sunny-yellow">
          <BookOpen size={38} strokeWidth={1.5} />

          {/* Spinner */}
          <span className="absolute -inset-2 animate-spin rounded-full border-2 border-transparent border-t-deep-olive dark:border-t-sunny-yellow" />
        </div>

        {/* Loading Text */}
        <h2 className="text-xl font-bold text-coffee-brown dark:text-warm-ivory sm:text-2xl">
          Preparing Your Next Chapter
        </h2>

        <p className="mt-2 text-sm text-coffee-brown/70 dark:text-warm-ivory/65">
          Please wait while we gather your books...
        </p>

        {/* Loading Dots */}
        <div className="mt-6 flex items-center gap-2">
          <span className="h-2 w-2 animate-bounce rounded-full bg-deep-olive dark:bg-sunny-yellow [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-deep-olive dark:bg-sunny-yellow [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-deep-olive dark:bg-sunny-yellow" />
        </div>

        <p className="mt-8 text-[10px] font-semibold tracking-[0.25em] text-deep-olive/60 dark:text-warm-ivory/40">
          BOOKNOOK — YOUR NEXT CHAPTER AWAITS
        </p>
      </div>
    </section>
  );
};

export default loading;
