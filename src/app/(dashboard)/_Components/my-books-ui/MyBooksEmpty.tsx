


import Link from "next/link";

import { BookOpen, BookPlus, Library } from "lucide-react";

const MyBooksEmpty = () => {

  return (

    <section className=" my-0 lg:my-40">
      <div className="relative overflow-hidden rounded-3xl border border-terracotta/30 bg-linear-to-br from-card via-warm-ivory to-terracotta/20 px-5 py-12 text-center dark:from-card dark:via-background dark:to-deep-olive/30 sm:px-10 sm:py-16">
        {/* Decorative circles */}
        <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-terracotta/20 blur-3xl" />

        <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-muted-sage/20 blur-3xl" />

        <div className="relative mx-auto max-w-lg">
          {/* Illustration */}
          <div className="relative mx-auto mb-7 flex h-32 w-32 items-center justify-center rounded-full bg-terracotta/20 sm:h-40 sm:w-40">
            <div className="absolute inset-3 rounded-full border border-terracotta/30" />

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-card shadow-lg sm:h-24 sm:w-24">
              <BookOpen
                size={48}
                strokeWidth={1.5}
                className="text-terracotta"
              />
            </div>

            <div className="absolute -right-1 top-5 flex h-10 w-10 items-center justify-center rounded-xl bg-sunny-yellow/60 text-coffee-brown shadow-sm">
              <Library size={19} />
            </div>

            <div className="absolute -bottom-1 left-2 flex h-9 w-9 items-center justify-center rounded-xl bg-muted-sage/40 text-foreground">
              <BookOpen size={17} />
            </div>
          </div>

          {/* Empty state content */}
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-3 py-1.5 text-xs font-semibold text-secondary-foreground">
            <Library size={14} />
            Your Personal Library
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            No Books Yet!
          </h2>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
            Your library is waiting for its first story. Add a book and start
            building your own wonderful collection.
          </p>

          <Link href="/add-books">
            <button
              type="button"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              <BookPlus size={18} />
              Add Your First Book
            </button>
          </Link>

          <p className="mt-4 text-xs text-muted-foreground">
            Every great library starts with one book.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyBooksEmpty;
