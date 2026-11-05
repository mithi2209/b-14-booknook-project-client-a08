"use client";

import {
  Eye,
  BookOpen,
  CalendarDays,
  Edit3,
  Library,
  Trash2,
  UserRound,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import type { TBook } from "@/lib/dataType";
import EditBookForm from "./EditBookForm";
import DeleteBookModal from "./DeleteBookModal";

type Props = {
  book: TBook;
  onBookUpdated: (updatedBook: TBook) => void;
  onBookDeleted: (bookId: string) => void ;

};

const MyBookCard = ({ book, onBookUpdated , onBookDeleted}: Props) => {

  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <>
      <article className="group relative overflow-hidden rounded-2xl border border-deep-olive/20 bg-linear-to-br from-[#FFFDF7] via-card to-[#E9EBDD]/50 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-olive/40 hover:shadow-lg hover:shadow-deep-olive/10 dark:border-terracotta/20 dark:from-warm-ivory dark:via-card dark:to-dusty-rose/20 dark:hover:border-terracotta/40">
        {/* Decorative Background */}
        <div className="pointer-events-none absolute -right-12 -top-14 h-36 w-36 rounded-full bg-deep-olive/10 blur-3xl transition-all duration-500 group-hover:bg-deep-olive/20 dark:bg-terracotta/10 dark:group-hover:bg-terracotta/20" />

        {/* Main Content */}
        <div className="relative flex gap-3 p-3 sm:gap-4 sm:p-4">
          {/* Book Cover */}
          <div className="relative h-32 w-21 shrink-0 overflow-hidden rounded-xl bg-secondary shadow-sm sm:h-40 sm:w-28">
            {book.Image ? (
              <img
                src={book.Image}
                alt={book.Title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <BookOpen size={28} className="text-muted-foreground" />
                <span className="text-[9px] text-muted-foreground">
                  No Cover
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />

            {/* BOOKNOOK Top Label */}
            <div className="absolute inset-x-0 top-0 flex justify-center px-1 pt-2">
              <span className="rounded-full border border-white/30 bg-black/35 px-2 py-1 text-[8px] font-semibold tracking-wider text-white backdrop-blur-sm sm:text-[9px]">
                BOOKNOOK
              </span>
            </div>
          </div>

          {/* Book Information */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* Category */}
            <span className="w-fit max-w-full truncate rounded-full border border-deep-olive/25 bg-deep-olive/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-deep-olive dark:border-terracotta/25 dark:bg-terracotta/10 dark:text-foreground">
              {book.Category}
            </span>

            {/* Title */}
            <h3 className="mt-2 line-clamp-2 text-sm font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-deep-olive dark:group-hover:text-terracotta sm:text-base">
              {book.Title}
            </h3>

            {/* Author */}
            <p className="mt-1.5 flex min-w-0 items-center gap-1.5 text-xs text-muted-foreground">
              <UserRound
                size={13}
                className="shrink-0 text-deep-olive dark:text-terracotta"
              />
              <span className="truncate">{book.Author}</span>
            </p>

            {/* Divider */}
            <div className="my-2.5 h-px bg-linear-to-r from-deep-olive/30 via-border to-transparent dark:from-terracotta/40" />

            {/* Copies Information */}
            <div className="grid grid-cols-2 gap-2">
              {/* Total Copies */}
              <div className="rounded-lg border border-deep-olive/15 bg-[#F3F1E7] p-2 dark:border-terracotta/20 dark:bg-background/70">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Library
                    size={12}
                    className="shrink-0 text-deep-olive dark:text-terracotta"
                  />
                  <span className="text-[9px] font-semibold sm:text-[10px]">
                    Total
                  </span>
                </div>

                <p className="mt-1 text-lg font-bold text-foreground">
                  {book.TotalCopies}
                </p>
              </div>

              {/* Available Copies */}
              <div className="rounded-lg border border-muted-sage/40 bg-muted-sage/20 p-2 dark:border-muted-sage/30 dark:bg-muted-sage/15">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <BookOpen
                    size={12}
                    className="shrink-0 text-deep-olive dark:text-muted-sage"
                  />
                  <span className="text-[9px] font-semibold sm:text-[10px]">
                    Available
                  </span>
                </div>

                <p className="mt-1 text-lg font-bold text-foreground">
                  {book.AvailableCopies}
                </p>
              </div>
            </div>

            {/* Added Date */}
            {book.createdAt && (
              <p className="mt-auto flex items-center gap-1 pt-2 text-[10px] text-muted-foreground">
                <CalendarDays
                  size={12}
                  className="shrink-0 text-deep-olive dark:text-terracotta"
                />
                Added{" "}
                {new Date(book.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                })}
              </p>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="relative flex items-center justify-between gap-2 border-t border-deep-olive/15 bg-linear-to-r from-deep-olive/5 via-[#E9EBDD]/50 to-[#FFFDF7] px-3 py-2.5 dark:border-terracotta/20 dark:from-terracotta/5 dark:via-dusty-rose/15 dark:to-warm-ivory/70 sm:px-4">
          {/* View Details Link - Left Side */}
          <Link
            href={`/book-details/${book._id}`}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-bold text-coffee-brown transition-all duration-200 hover:bg-deep-olive/20 hover:text-[#6F7658] dark:text-terracotta dark:hover:bg-terracotta/10 dark:hover:text-foreground outline"
          >
            <Eye size={14} />
            View Details
          </Link>

          {/* Edit and Delete - Right Side */}
          <div className="flex items-center gap-2">
            {/* Edit Button */}
            <button
              type="button"
              onClick={() => {
                setShowDelete(false);
                setShowEdit(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-deep-olive/40 bg-deep-olive px-3 py-2 text-xs font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-deep-olive hover:bg-[#6F7658] hover:shadow-md hover:shadow-deep-olive/20 active:translate-y-0 dark:border-terracotta/50 dark:bg-linear-to-br dark:from-terracotta/25 dark:to-dusty-rose/35 dark:text-foreground dark:hover:border-terracotta dark:hover:from-terracotta dark:hover:to-terracotta/80 dark:hover:text-white"
            >
              <Edit3 size={14} />
              Edit
            </button>

            {/* Delete Button */}
            <button
              type="button"
              onClick={() => {
                setShowEdit(false);
                setShowDelete(true);
              }}
              className="inline-flex items-center gap-1.5 rounded-lg border border-rose-300/70 bg-[#F8E8E4] px-3 py-2 text-xs font-bold text-[#98534C] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-600 hover:bg-rose-600 hover:text-white hover:shadow-md hover:shadow-rose-500/20 active:translate-y-0 dark:border-rose-400/50 dark:bg-linear-to-br dark:from-rose-100 dark:to-rose-200/70 dark:text-rose-800 dark:hover:border-rose-600 dark:hover:from-rose-600 dark:hover:to-rose-700 dark:hover:text-white"
            >
              <Trash2 size={14} />
              Delete
            </button>
          </div>
        </div>

      </article>

      {/*  modals OUTSIDE the article */}

      {showEdit && (
        <EditBookForm
          book={book}
          setShowEdit={setShowEdit}
          onBookUpdated={onBookUpdated}
        />
      )}

      {showDelete && (
        <DeleteBookModal 
          book={book} 
          setShowDelete={setShowDelete} 
          onBookDeleted={onBookDeleted}/>
      )}
    </>
  );
};

export default MyBookCard;
