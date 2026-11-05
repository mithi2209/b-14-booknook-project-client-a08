

"use client";

import { TBook } from "@/lib/dataType";
import { AlertTriangle, Trash2, X } from "lucide-react";


type DeleteBookModalProps = {
  book: TBook;
  setShowDelete: (value: boolean) => void;
};


const DeleteBookModal = ({ book , setShowDelete }: DeleteBookModalProps ) => {

    return (

         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-deep-olive/20 bg-[#FFFDF7] shadow-2xl dark:border-terracotta/20 dark:bg-card">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-deep-olive/15 px-5 py-4 dark:border-terracotta/20">

          <div className="flex items-center gap-2">
            <AlertTriangle
              size={20}
              className="text-rose-600 dark:text-rose-400"
            />
            <h2 className="font-bold text-foreground">
              Delete Book
            </h2>
          </div>

          <button
            type="button"
            
            className="rounded-lg p-2 text-muted-foreground transition hover:bg-deep-olive/10 dark:hover:bg-terracotta/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">

          <div className="flex items-center gap-3 rounded-xl border border-deep-olive/15 bg-deep-olive/5 p-3 dark:border-terracotta/20 dark:bg-terracotta/5">

            <div className="h-16 w-12 shrink-0 overflow-hidden rounded-lg bg-secondary">
              {book.Image ? (
                <img
                  src={book.Image}
                  alt={book.Title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <Trash2 size={18} className="text-muted-foreground" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <h3 className="line-clamp-2 text-sm font-bold text-foreground">
                {book.Title}
              </h3>

              <p className="mt-1 text-xs text-muted-foreground">
                By {book.Author}
              </p>
            </div>

          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Are you sure you want to delete this book? This action cannot be undone.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              type="button"
              onClick={() => setShowDelete(false)}
              className="rounded-xl border border-deep-olive/25 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-deep-olive/10 dark:border-terracotta/30 dark:hover:bg-terracotta/10"
            >
              Cancel
            </button>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700"
            >
              <Trash2 size={16} />
              Yes, Delete
            </button>

          </div>

        </div>
      </div>
    </div>
    );
};

export default DeleteBookModal;




