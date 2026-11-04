"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Globe,
  Star,
  UserRound,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import BookDetailMore from "./BookDetailMore";
import BookBorrowModal from "./BookBorrowModal";
import { TBook } from "@/lib/dataType";


type BookDetailsProps = {
  book: TBook;
};

const BookDetails = ({ book }: BookDetailsProps) => {

  return (
   <section className="min-h-screen bg-background px-4 py-8 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back Navigation */}
        <Link
          href="/all-books"
          className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft size={17} />
          Back to Collection
        </Link>

        {/* Main Book Section */}
        <div className="grid items-stretch gap-5 lg:grid-cols-[320px_1fr]">

          {/* Left: Book Cover */}
          <div className="relative flex min-h-105 items-center justify-center overflow-hidden rounded-2xl bg-[#E8DFC9] p-8 dark:bg-[#46513F] sm:min-h-120 lg:min-h-full">

            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#85896B]/25" />

            <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-[#E8BFA5]/30" />

            <div className="absolute left-5 top-5 rounded-full bg-white/60 px-3 py-1 text-xs font-semibold text-[#49372D] backdrop-blur-sm">
              BookNook Collection
            </div>

            <div className="relative h-85 w-57.5 overflow-hidden rounded-lg shadow-2xl sm:h-97.5 sm:w-65">
              <Image
                src={book ?.Image}
                alt={book.Title}
                fill
                priority
                sizes="(max-width: 640px) 230px, 260px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Book Information */}
          <div className="flex flex-col rounded-2xl border border-border bg-card p-5 sm:p-8 lg:p-9">

            {/* Category & Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge className="border-0 bg-[#A9B49A]/40 px-4 py-1.5 text-[#49372D] dark:bg-[#A9B49A]/30 dark:text-[#FAF0DF]">
                {book?.Category}
              </Badge>

               <div className="flex  items-center gap-1.5 text-sm">
                <Star
                  size={17}
                  className="fill-[#EFCF83] text-[#B88B32]"
                />
                <span className="font-semibold">{book.Rating ?? " "}</span>
                
              </div> 
            </div>

            {/* Title & Author */}
            <div className="mt-6">
              <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[42px]">
                {book.Title}
              </h1>

              <p className="mt-3 text-base text-muted-foreground">
                Written by{" "}
                <span className="font-semibold text-foreground">
                  {book.Author}
                </span>
              </p>
            </div>

            {/* Description */}
            <div className="mt-7">
              <h2 className="mb-2 text-base font-semibold">
                About This Book
              </h2>

              <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {book?.Description}
              </p>
            </div>

            {/* Quick Information */}
            <div className="mt-7 grid grid-cols-3 gap-3 border-y border-border py-5">

              <div>
                <BookOpen
                  size={19}
                  className="mb-2 text-[#85896B] dark:text-[#EFCF83]"
                />
                <p className="text-xs text-muted-foreground">Pages</p>
                <p className="mt-1 text-sm font-semibold">
                  {book.Pages ?? "Not available"}
                </p>
              </div>

              <div>
                <CalendarDays
                  size={19}
                  className="mb-2 text-[#85896B] dark:text-[#EFCF83]"
                />
                <p className="text-xs text-muted-foreground">Published</p>
                <p className="mt-1 text-sm font-semibold">
                  {book.PublicationYear ?? "Not available"}
                </p>
              </div>

              <div>
                <Globe
                  size={19}
                  className="mb-2 text-[#85896B] dark:text-[#EFCF83]"
                />
                <p className="text-xs text-muted-foreground">Language</p>
                <p className="mt-1 text-sm font-semibold">
                  {book.Language ?? "Not available"}
                </p>
              </div>

            </div>

            {/* Price & Borrow */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              <div>
                <p className="text-xs text-muted-foreground">
                  Book Price
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {book.Currency ?? "Not available"} {book.Price ?? "Not available"} 
                </p>
              </div>
              
              <div className="w-full sm:w-56">
                <BookBorrowModal book={book} />
              </div>

            </div>

            {/* Added By */}
            <div className="mt-auto flex items-center gap-3 border-t border-border pt-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A9B49A]/30 text-[#49372D] dark:text-[#FAF0DF]">
                <UserRound size={19} />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Added to BookNook by
                </p>

                <p className="text-sm font-semibold">
                  {book.userName || "Unknown"}
                </p>

                <p className="text-xs text-muted-foreground">
                  {book.userEmail}
                </p>
                
              </div>
            </div>

          </div>
        </div>

        {/* Additional Book Details */}
        <BookDetailMore book={book} />

      </div>
    </section>
  );
};

export default BookDetails;
