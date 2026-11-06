"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, BookOpen } from "lucide-react";
import type { TBook } from "@/lib/dataType";
import BooksCard from "@/components/shared/BooksCard";

type Props = {
  books: TBook[];
  initialSearch: string;
};

const SearchAllBooks = ({ books, initialSearch }: Props ) => {

      const [searchBook, setSearchBook] = useState(initialSearch);
        const [selectedCategory, setSelectedCategory] = useState("all");
  const [availability, setAvailability] = useState("all");

  const categories = [
    ...new Set(books.map((book) => book.Category).filter(Boolean)),
  ];

  const filteredBooks = books.filter((book) => {
    const search = searchBook.toLowerCase();

    const matchesSearch =
      (book.Title ?? "").toLowerCase().includes(search) ||
      (book.Author ?? "").toLowerCase().includes(search);

       const matchesCategory =
      selectedCategory === "all" || book.Category === selectedCategory;

        const matchesAvailability =
        availability === "all" ||
        (availability === "available" && Number(book.AvailableCopies) > 0) ||
        (availability === "unavailable" && Number(book.AvailableCopies) <= 0);

    return matchesSearch && matchesCategory && matchesAvailability;
  });

    return (
        <>
      {/* Search and Filters */}
      <div className="mb-8 rounded-2xl border border-[#E2D4BE] bg-[#FFF9EF] p-4 shadow-sm dark:border-[#46513F] dark:bg-[#293329] sm:p-6">

        <div className="mb-5 flex items-center gap-2">
          <SlidersHorizontal
            size={18}
            className="text-[#A46A4F] dark:text-[#D6A078]"
          />
          <h3 className="font-semibold">Find Your Next Read</h3>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          {/* Search */}
          <div className="relative">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#85896B]"
            />
            <input
              type="text"
              value={searchBook}
              onChange={(e) => setSearchBook(e.target.value)}
              placeholder="Search by title or author..."
              className="w-full rounded-xl border border-[#D8C8A9] bg-white py-3 pl-11 pr-4 text-sm text-[#49372D] outline-none transition focus:border-[#A46A4F] dark:border-[#59634F] dark:bg-[#202820] dark:text-[#FAF0DF]"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full rounded-xl border border-[#D8C8A9] bg-white px-4 py-3 text-sm text-[#49372D] outline-none dark:border-[#59634F] dark:bg-[#202820] dark:text-[#FAF0DF]"
          >
            <option value="all">All Categories</option>

            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          {/* Availability Filter */}
          <select
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            className="w-full rounded-xl border border-[#D8C8A9] bg-white px-4 py-3 text-sm text-[#49372D] outline-none dark:border-[#59634F] dark:bg-[#202820] dark:text-[#FAF0DF]"
          >
            <option value="all">All Books</option>
            <option value="available">Available Books</option>
            <option value="unavailable">Unavailable Books</option>
          </select>
        </div>

        {/* Clear Filters */}
        {(searchBook || selectedCategory !== "all" || availability !== "all") && (
          <button
            type="button"
            onClick={() => {
              setSearchBook("");
              setSelectedCategory("all");
              setAvailability("all");
            }}
            className="mt-4 text-sm font-medium text-[#A46A4F] transition hover:underline dark:text-[#D6A078]"
          >
            Clear all filters
          </button>
        )}
      </div>

      {/* Book Count */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">All Books</h2>

        <p className="text-sm text-[#85896B]">
          {filteredBooks.length} of {books.length} books
        </p>
      </div>

      {/* Filtered Books */}
      {filteredBooks.length === 0 ? (
        <div className="py-20 text-center">
          <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#85896B]" />

          <h3 className="text-xl font-semibold">
            No Matching Books Found
          </h3>

          <p className="mt-2 text-sm text-[#85896B]">
            Try changing your search or filters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBooks.map((book) => (
            <BooksCard key={book._id} book={book} />
          ))}
        </div>
      )}
    </>

    );
};

export default SearchAllBooks;