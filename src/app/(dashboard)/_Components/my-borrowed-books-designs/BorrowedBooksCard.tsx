


"use client";

import Image from "next/image";

import { BookOpen,
    CalendarDays,
    LoaderCircle } from "lucide-react";

import formatDate from "@/lib/formateDate";
import { TBorrowedBook } from "@/lib/dataType";



type BorrowedBooksProps = {
  books: TBorrowedBook[];
  loading: boolean;
};



const BorrowedBooksCard = ({books,loading,}: BorrowedBooksProps)  => {

    return (
          <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {/* Section heading */}
      <div className="flex flex-col gap-4 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <h2 className="text-lg font-bold text-foreground">
            Borrowing History
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Books currently borrowed from BookNook.
          </p>
        </div>

        <button
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <BookOpen size={17} />
              Load My Borrowed Books
            </>
          )}
        </button>
      </div>

      {/* Empty state */}
      {!loading && books.length === 0 && (
        <div className="flex flex-col items-center justify-center px-5 py-16 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <BookOpen size={30} />
          </div>

          <h3 className="text-lg font-semibold text-foreground">
            No borrowed books to show
          </h3>

          <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
            Click the button above to load your borrowed books. If you have not
            borrowed any books yet, they will appear here after borrowing.
          </p>
        </div>
      )}

      {/* Desktop table */}
      {books.length > 0 && (
        <>
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-left">
              <thead className="bg-muted/50">
                <tr className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="px-6 py-4">Book</th>
                  <th className="px-6 py-4">Title</th>
                  <th className="px-6 py-4">Borrow Date</th>
                  <th className="px-6 py-4">Return Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-border">
                {books.map((book) => (
                  <tr
                    key={book._id}
                    className="transition hover:bg-muted/30"
                  >
                    <td className="px-6 py-4">
                      <div className="relative h-16 w-12 overflow-hidden rounded-lg border border-border bg-muted">
                        {book.bookImage && (
                          <Image
                            src={book.bookImage}
                            alt={book.bookTitle}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-semibold text-foreground">
                        {book.bookTitle}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Book ID: {book.bookId}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {formatDate(book.borrowDate)}
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {formatDate(book.returnDate)}
                    </td>

                    <td className="px-6 py-4">
                      <span className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                        Borrowed
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="space-y-4 p-4 md:hidden">
            {books.map((book) => (
              <div
                key={book._id}
                className="flex gap-4 rounded-xl border border-border bg-background p-4"
              >
                <div className="relative h-28 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                  {book.bookImage && (
                    <Image
                      src={book.bookImage}
                      alt={book.bookTitle}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="line-clamp-2 font-semibold text-foreground">
                    {book.bookTitle}
                  </h3>

                  <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <CalendarDays size={14} />
                      Borrowed: {formatDate(book.borrowDate)}
                    </p>

                    <p className="flex items-center gap-2">
                      <CalendarDays size={14} />
                      Return: {formatDate(book.returnDate)}
                    </p>
                  </div>

                  <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Borrowed
                  </span>
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