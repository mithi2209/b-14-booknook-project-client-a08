


"use client";

import Image from "next/image";
import Link from "next/link";
import { useState , useEffect} from "react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

import {
  BookOpen,
  CalendarDays,
  RotateCcw,
} from "lucide-react";

import formatDate from "@/lib/formateDate";
import type { TBorrowedBook } from "@/lib/dataType";

type BorrowedBooksProps = {
  books: TBorrowedBook[];
};

const BorrowedBooksCard = ({ books }: BorrowedBooksProps) => {

    const { data: session } = authClient.useSession();

    const userEmail = session?.user?.email;

    const [activeBooks, setActiveBooks] = useState(books);

    const [isReturning, setIsReturning] = useState<string | null>(null);



    // borrowing book returned -->
    const handleBookReturn = async (id: string) => {

      if (!userEmail) {
        toast.error("Please login first");
        return;
      }

    try {
      setIsReturning(id);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/return-book/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userEmail: userEmail,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to return book!");
        return;
      }

      // remove the returned book from the current list
      setActiveBooks((prevBooks) =>
        prevBooks.filter((book) => book._id !== id)
      );

        toast.success(data.message || "Book returned successfully!");
    } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsReturning(null);
    }
  };


  return (

    <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">

      {/* Section heading */}
      <div className="flex flex-col gap-4 border-b border-border p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-lg font-bold text-foreground">
            Borrowing History
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Books currently borrowed from BookNook.
          </p>
        </div>

        <Link
          href="/all-books"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 sm:w-fit"
        >
          <BookOpen size={17} />
          Browse Books To Borrow
        </Link>
      </div>

      {/* Empty state */}
      {activeBooks.length === 0 && (
        <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BookOpen size={30} />
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            No borrowed books to show
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            You have not borrowed any books yet. Browse books and borrow one
            to see it here.
          </p>
        </div>
      )}

      {/* Books */}
      {activeBooks.length > 0 && (
        <>
          {/* Desktop table: large screens */}
          <div className="hidden overflow-x-auto lg:block">
            <table className="w-full text-left">
              <thead className="bg-muted/50">
                <tr className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Book</th>
                  <th className="px-5 py-4">Title</th>
                  <th className="px-5 py-4">Borrow Date</th>
                  <th className="px-3 py-4">Expected Return Date</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {activeBooks.map((book) => (
                  <tr
                    key={book._id}
                    className="transition hover:bg-muted/30"
                  >
                    {/* Book image */}
                    <td className="px-6 py-4">
                      <div className="relative flex h-28 w-24 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted p-2">
                        {book.bookImage && (
                          <Image
                            src={book.bookImage}
                            alt={book.bookTitle}
                            fill
                            sizes="96px"
                            className="object-contain p-2"
                          />
                        )}
                      </div>
                    </td>

                    {/* Title */}
                    <td className="max-w-56 px-5 py-4">
                      <p className="wrap-break-word font-semibold text-foreground">
                        {book.bookTitle}
                      </p>

                      <p className="mt-1 break-all text-xs text-muted-foreground">
                        Book ID: {book.bookId}
                      </p>
                    </td>

                    {/* Borrow date */}
                    <td className="whitespace-nowrap px-5 py-4 text-sm text-muted-foreground">
                       {formatDate(book.borrowDate)}
                    </td>

                    {/* Return date */}
                    <td className="whitespace-nowrap px-5 py-4 text-sm text-muted-foreground">
                      {formatDate(book.expectedReturnDate)}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span className="whitespace-nowrap rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                        Borrowed
                      </span>
                    </td>

                    {/* Return button desktop */}
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => handleBookReturn(book._id)}
                        disabled={isReturning === book._id}
                        className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-muted-sage px-4 py-2.5 text-sm font-semibold text-coffee-brown shadow-sm transition-all duration-200 hover:bg-deep-olive hover:text-warm-ivory dark:text-background"
                      >
                        <RotateCcw size={15} />
                         {isReturning === book._id ? "Returning..." : "Return Book"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Responsive cards: mobile and medium screens */}
          <div className="grid grid-cols-1 gap-4 p-3 sm:p-5 lg:hidden">
            {activeBooks.map((book) => (
              <div
                key={book._id}
                className="flex min-w-0 flex-col gap-4 rounded-xl border border-border bg-background p-3 sm:flex-row sm:items-start sm:gap-5 sm:p-5"
              >
                {/* Book image */}
                <div className="relative flex h-44 w-full shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-muted p-2 sm:h-40 sm:w-32 md:h-48 md:w-36">
                  {book.bookImage && (
                    <Image
                      src={book.bookImage}
                      alt={book.bookTitle}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 144px"
                      className="object-contain p-2"
                    />
                  )}
                </div>

                {/* Book information */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="wrap-break-word text-base font-semibold text-foreground sm:text-lg">
                    {book.bookTitle}
                  </h3>

                  <p className="mt-1 break-all text-xs text-muted-foreground">
                    Book ID: {book.bookId}
                  </p>

                  {/* Dates */}
                  <div className="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">

                    {/* borrow date mobile */}
                    <div className="flex min-w-0 items-start gap-2">
                      <CalendarDays
                        size={16}
                        className="mt-0.5 shrink-0 text-muted-foreground"
                      />

                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                          Borrow Date
                        </p>

                        <p className="wrap-break-word font-medium text-foreground">
                           {formatDate(book.borrowDate)}
                        </p>
                      </div>
                    </div>
                    
                    {/* return date mobile */}
                    <div className="flex min-w-0 items-start gap-2">
                      <CalendarDays
                        size={16}
                        className="mt-0.5 shrink-0 text-muted-foreground"
                      />

                      <div className="min-w-0">
                        <p className="text-xs text-muted-foreground">
                         Expected Return Date
                        </p>

                        <p className="wrap-break-word font-medium text-foreground">
                          {formatDate(book.expectedReturnDate)}
                        </p>
                      </div>
                    </div>

                  </div>

                  {/* Status and action */}
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                      Borrowed
                    </span>

                    {/* Return button */}
                    <button
                      type="button"
                      onClick={() => handleBookReturn(book._id)}
                      disabled={isReturning === book._id}
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-muted-sage px-4 py-2.5 text-sm font-semibold text-coffee-brown shadow-sm transition-all duration-200 hover:bg-deep-olive hover:text-warm-ivory dark:text-background"
                    >
                      <RotateCcw size={15} />
                       {isReturning === book._id ? "Returning..." : "Return Book"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default BorrowedBooksCard;
