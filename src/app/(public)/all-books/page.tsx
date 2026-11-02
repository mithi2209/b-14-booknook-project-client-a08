// all books page

import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import BooksCard from "@/components/shared/BooksCard";
import { TBook } from "@/lib/dataType";

export const metadata: Metadata = {
  title: "BookNook | All Books",
  description: "Explore all books available at BookNook.",
};





const AllBooks = async() => {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/all-books`);
    const BooksData: TBook[] = await res.json();

    console.log("we get the data........." ,BooksData);

    return (

 <main className="min-h-screen bg-[#FAF0DF] px-4 py-12 text-[#49372D] dark:bg-[#202820] dark:text-[#FAF0DF]">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-12 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A9B49A]/30 text-[#69745D]">
            <BookOpen size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Explore Our Books
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#85896B] sm:text-base">
            Discover your next favorite read from our
            growing collection of books.
          </p>

        </div>

        {/* Book Count */}
        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-lg font-semibold">
            All Books
          </h2>

          <p className="text-sm text-[#85896B]">
            {BooksData.length} books available
          </p>

        </div>

        {/* Books Grid */}
        {BooksData.length === 0 ? (

          <div className="py-20 text-center">

            <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#85896B]" />

            <h3 className="text-xl font-semibold">
              No Books Available
            </h3>

            <p className="mt-2 text-sm text-[#85896B]">
              Books will appear here when they are added.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

            {BooksData.map((book) => (
              <BooksCard
                key={book._id}
                book={book}
              />
            ))}

          </div>

        )}

      </div>

    </main>
    );
};

export default AllBooks;