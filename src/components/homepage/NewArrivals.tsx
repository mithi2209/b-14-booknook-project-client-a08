import Image from "next/image";
import Link from "next/link";

import { TBook } from "@/lib/dataType";
import { ArrowRight, BookOpen } from "lucide-react";
import BooksCard from "../shared/BooksCard";

const NewArrivals = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/new-arrivals`,
    { cache: "no-store" },
  );

  const books: TBook[] = await res.json();

  return (
    <section className=" py-16 bg-[#FAF0DF]  dark:bg-[#202820]md:py-20">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#78845b] ">
            New Added Books
          </p>

          <h2 className="text-3xl text-coffee-brown font-bold dark:text-warm-ivory md:text-4xl">
            New Arrivals
          </h2>

          <p className="mt-3 text-stone-500 dark:text-stone-400">
            Explore the latest additions to our book collection.
          </p>
        </div>

        {books.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {books.map((book) => (
              <BooksCard key={book._id} book={book} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <BookOpen className="mx-auto mb-3 text-stone-400" size={36} />
            <p className="text-stone-500 dark:text-stone-400">
              No new arrivals available yet.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 rounded-lg bg-[#78845b] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#657149]"
          >
            See All Books
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
