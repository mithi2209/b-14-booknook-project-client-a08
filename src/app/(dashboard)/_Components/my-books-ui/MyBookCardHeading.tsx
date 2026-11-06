
import { TBook } from "@/lib/dataType";

import MyBookCardsSection from "./MyBookCardsSection";

import { BookOpen, LibraryBig, Sparkles } from "lucide-react";


type Props = {
  books: TBook[];
  onBookUpdated: (updatedBook: TBook) => void;
  onBookDeleted: (bookId: string) => void;
};


const MyBookCardHeading = ({ books , onBookUpdated , onBookDeleted }: Props) => {

  return (
    <section className="mt-12 space-y-6 sm:mt-12 sm:space-y-7 lg:mt-16">
      {/* Card Section Heading */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
        {/* Heading Content */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          {/* Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-deep-olive/20 bg-deep-olive/10 text-deep-olive shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl dark:border-terracotta/25 dark:bg-terracotta/15 dark:text-terracotta">
            <LibraryBig size={24} strokeWidth={1.8} />
          </div>

          {/* Text */}
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <Sparkles
                size={13}
                className="shrink-0 text-deep-olive dark:text-terracotta"
              />

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-deep-olive dark:text-terracotta sm:text-[10px] sm:tracking-[0.2em]">
                Your Books Library
              </span>
            </div>

            <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-2xl">
              Your Bookshelf
            </h3>

            <p className="mt-1 text-[11px] text-muted-foreground sm:text-sm">
              Every book, all in one place.
            </p>
          </div>
        </div>

        {/* Book Count */}
        <div className="flex w-full justify-end sm:w-auto sm:shrink-0">
          <div className="group flex items-center gap-3 rounded-2xl border border-deep-olive/25 bg-linear-to-br from-[#FFFDF7] to-[#E9EBDD]/70 px-3 py-2.5 shadow-sm transition-all duration-300 hover:border-deep-olive/40 hover:shadow-md sm:px-4 sm:py-3 dark:border-terracotta/25 dark:from-card dark:to-dusty-rose/15">
            {/* Book Icon */}
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep-olive text-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 dark:bg-terracotta dark:text-coffee-brown">
              <BookOpen size={20} />
            </div>

            {/* Count */}
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-deep-olive dark:text-foreground">
                {books.length}
              </span>

              <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                {books.length === 1 ? "Book" : "Books"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Book Cards */}
      <MyBookCardsSection   
        books={books}
        onBookUpdated={onBookUpdated} 
        onBookDeleted={onBookDeleted} />

    </section>
  );
};

export default MyBookCardHeading;
