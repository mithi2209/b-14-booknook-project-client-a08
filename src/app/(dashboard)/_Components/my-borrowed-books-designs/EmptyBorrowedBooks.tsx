


import Link from "next/link";
import { BookOpen, LibraryBig } from "lucide-react";

const EmptyBorrowedBooks = () => {

  return (

    <section className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-border bg-card px-5 py-12 text-center shadow-sm sm:px-8">
      {/* Icon */}
      <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <LibraryBig size={44} strokeWidth={1.5} className="text-primary" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
        Your Reading Journey Starts Here!
      </h2>

      {/* Description */}
      <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
        You haven't borrowed any books yet. Explore our collection, discover
        your next favorite read, and start building your reading journey with
        BookNook.
      </p>

      {/* Button */}
      <Link
        href="/all-books"
        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
      >
        <BookOpen size={18} />
        Explore Books
      </Link>

      {/* Footer text */}
      <p className="mt-6 text-xs text-muted-foreground">
        Every great adventure begins with a book.
      </p>
    </section>
  );
};

export default EmptyBorrowedBooks;
