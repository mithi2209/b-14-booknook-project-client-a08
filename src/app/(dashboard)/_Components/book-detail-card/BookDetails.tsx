



"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  UserRound,
} from "lucide-react";
import { TBook } from "@/lib/dataType";
import BookBorrowModal from "./BookBorrowModal";
import { useState , useEffect } from "react";


type BookDetailsProps = {
  book: TBook;
};

const BookDetails = ({ book }: BookDetailsProps) => {

  const router = useRouter();

    // TotalCopies when borrowing or returning
    const [currentCopies, setCurrentCopies] = useState(
      Number(book.AvailableCopies) || 0
    );

    useEffect(() => {
      setCurrentCopies(Number(book.AvailableCopies) || 0);
    }, [book.AvailableCopies]);

  const copiesLeft = Math.max(currentCopies, 0);

  return (

    <section className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-[#85896B]"
        >
          <ArrowLeft size={18} />
          Back to Books
        </button>

        {/* Main Book Details Card */}
        <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-lg md:grid-cols-2">

          {/* Book Image Section */}
          <div className="relative flex items-center justify-center bg-[#FAF0DF] p-8 dark:bg-[#292820] sm:p-12">

            <div className="absolute left-5 top-5 rounded-full bg-[#85896B]/15 px-4 py-2 text-xs font-semibold text-[#73775B] dark:text-[#D1DDBB] border border-border-bg-card dark:border-[#85896B]/30">
              {book.Category}
            </div>

            <div className="flex h-87.5 w-full items-center justify-center sm:h-120">
              <img
                src={book.Image}
                alt={book.Title}
                className="h-full max-w-full rounded-xl object-contain shadow-xl transition duration-500 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Book Information Section */}
          <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">

            {/* Category */}
            <span className="mb-5 w-fit rounded-full bg-[#85896B]/15 px-4 py-2 text-sm font-semibold text-[#73775B] dark:text-[#C5CCAE] border border-border-bg-card dark:border-[#85896B]/30">
              {book.Category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {book.Title}
            </h1>

            {/* Author */}
            <p className="mt-3 text-base text-muted-foreground">
              Written by{" "}
              <span className="font-semibold text-foreground">
                {book.Author}
              </span>
            </p>

            {/* Copies Left */}
            <div className="mt-7 flex items-center justify-between rounded-2xl border border-border-bg-card dark:border-[#85896B]/30 bg-[#85896B]/10 p-4">
              <div className="flex items-center gap-3">

                <div className="rounded-xl dark:text-[#D1DDBB] bg-[#85896B]/20 p-3 text-[#85896B]">
                  <BookOpen size={22} />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    Copies Left
                  </p>

                  <p className="text-xl font-bold text-foreground">
                    {copiesLeft}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                      {copiesLeft === 1 ? "copy" : "copies"}
                    </span>
                  </p>
                </div>
              </div>

              <span
                className={`rounded-full px-3 py-1.5 text-xs font-semibold border border-border-bg-card dark:border-[#85896B]/30 ${
                  copiesLeft > 0
                    ? "bg-[#85896B]/20 text-[#66704F] dark:text-[#D1DDBB]"
                    : "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300"
                }`}
              >
                {copiesLeft > 0 ? "Available" : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-bold text-foreground">
                About This Book
              </h2>

              <p className="whitespace-pre-line text-sm leading-7 text-muted-foreground sm:text-base">
                {book.Description}
              </p>
            </div>

            {/* Added By */}
            <div className="mt-7 flex items-center gap-3 border-t border-border pt-6">
              <div className="rounded-full dark:text-[#D1DDBB] bg-[#85896B]/15 p-3 text-[#85896B]">
                <UserRound size={21} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Added By
                </p>

                <p className="font-semibold text-foreground">
                  {book?.userName || "BookNook Member"}
                </p>
                
                <p className="text-sm text-muted-foreground">
                  {book?.userEmail || "BookNook Member"}
                </p>
              </div>
            </div>

            {/* Borrow Button */}
            <div className="mt-8">
              {copiesLeft > 0 ? (
                <BookBorrowModal
                    book={{ ...book, AvailableCopies: currentCopies }}
                    setCurrentCopies={setCurrentCopies} />
                ) : (
                <button
                  disabled
                  className="w-full cursor-not-allowed rounded-full bg-muted px-6 py-3.5 font-semibold text-muted-foreground"
                >
                  Currently Unavailable
                </button>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;