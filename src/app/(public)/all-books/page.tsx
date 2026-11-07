


import Link from "next/link";
import type { Metadata } from "next";
import type { TBook } from "@/lib/dataType";

import { BookOpen, ArrowLeft } from "lucide-react";
import SearchAllBooks from "../_Components/searchAllBooks/SearchAllBooks";

export const metadata: Metadata = {
  title: "BookNook | All Books",
  description: "Explore all books available at BookNook.",
};

const AllBooks = async ({searchParams,}: {searchParams: 
  Promise<{ search?: string }>;}) => {

  const { search = "" } = await searchParams;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/all-books`,
    { cache: "no-store" }
  );

  const BooksData: TBook[] = await res.json();

  return (
    <section className="min-h-screen bg-[#FAF0DF] px-4 py-12 text-[#49372D] dark:bg-[#202820] dark:text-[#FAF0DF]">
      <div className="container mx-auto">

        {/* Page Heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A9B49A]/30 text-[#69745D]">
            <BookOpen size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Books
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#85896B] sm:text-base">
            Discover your next favorite read from our growing collection of
            books.
          </p>

          {/* Back to Home */}
          <Link
            href="/"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl border border-[#D8C8A9] px-4 py-2.5 text-sm font-medium text-[#49372D] transition hover:bg-[#F0E2D4] dark:border-[#626B50] dark:text-[#FAF0DF] dark:hover:bg-[#46513F]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Search, Filters and Books */}
        <SearchAllBooks
          key={search}
          books={BooksData}
          initialSearch={search}
        />

      </div>
    </section>
  );
};

export default AllBooks;
