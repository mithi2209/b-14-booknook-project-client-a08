

import Link from "next/link";
import { BookOpen, ArrowLeft, Sparkles } from "lucide-react";

const NotFoundPage = () => {
  return (

    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-warm-ivory px-4 transition-colors duration-300 dark:bg-[#30392F]">
        
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-terracotta/20 blur-3xl dark:bg-muted-sage/10" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sunny-yellow/20 blur-3xl dark:bg-deep-olive/20" />

      <div className="container relative mx-auto flex flex-col items-center text-center">
        {/* Book Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-terracotta/30 text-deep-olive shadow-sm dark:bg-[#3F4A3A] dark:text-sunny-yellow dark:shadow-lg dark:shadow-black/10">
          <BookOpen size={38} strokeWidth={1.5} />
        </div>

        {/* 404 */}
        <div className="relative">
          <h1 className="text-8xl font-extrabold tracking-tight text-deep-olive dark:text-sunny-yellow sm:text-9xl">
            404
          </h1>
          <Sparkles
            size={25}
            className="absolute -right-7 top-2 text-terracotta dark:text-sunny-yellow"
          />
        </div>

        <p className="mt-3 text-xs font-bold tracking-[0.3em] text-deep-olive dark:text-muted-sage">
          PAGE NOT FOUND
        </p>

        <h2 className="mt-4 text-2xl font-bold text-coffee-brown dark:text-warm-ivory sm:text-3xl">
          Oops! This page is missing.
        </h2>

        <p className="mt-3 max-w-md text-sm leading-7 text-coffee-brown/70 dark:text-warm-ivory/65 sm:text-base">
          Looks like this page has wandered off the bookshelf. Don't worry,
          there's still a world of stories waiting for you.
        </p>

        {/* Back to Home */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coffee-brown px-7 py-3.5 text-sm font-semibold text-warm-ivory shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-deep-olive hover:shadow-lg dark:bg-sunny-yellow dark:text-coffee-brown dark:shadow-sunny-yellow/10 dark:hover:bg-terracotta"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="mt-12 h-px w-24 bg-terracotta dark:bg-muted-sage/40" />

        <p className="mt-5 text-[10px] font-semibold tracking-[0.25em] text-deep-olive/60 dark:text-warm-ivory/40">
          BOOKNOOK — YOUR NEXT CHAPTER AWAITS
        </p>
      </div>
    </section>
  );
};

export default NotFoundPage;
