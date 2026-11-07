"use client";

import { toast } from "sonner";
import { useState } from "react";
import { TBook } from "@/lib/dataType";
import { authClient } from "@/lib/auth-client";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { getTokenFromClient } from "@/lib/getTokenFromClient";

type DeleteBookModalProps = {
  book: TBook;
  setShowDelete: (value: boolean) => void;
  onBookDeleted: (bookId: string) => void;
};

const DeleteBookModal = ({
  book,
  setShowDelete,
  onBookDeleted,
}: DeleteBookModalProps) => {
  const { data: session } = authClient.useSession();

  const userEmail = session?.user?.email;

  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBook = async () => {
    if (!userEmail) {
      toast.error("Please login first");
      return;
    }

    try {
      setIsDeleting(true);

      // token from client
      const token = await getTokenFromClient();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/delete-book/${book._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization : `Bearer ${token}`,
          },
          body: JSON.stringify({ userEmail }),
        },
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Failed to delete book");
        return;
      }

      onBookDeleted(book._id);

      toast.success("Book deleted successfully!");

      setShowDelete(false);
    } catch (error) {
      console.log(error);
      toast.error("Book deleted unsuccessful!");
    } finally {
      setIsDeleting(false);
    }
  };

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
            <h2 className="font-bold text-foreground">Delete Book</h2>
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
            Are you sure you want to delete this book? This action cannot be
            undone.
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

            {/* delete btn */}
            <button
              type="button"
              onClick={handleDeleteBook}
              disabled={isDeleting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-rose-700"
            >
              <Trash2 size={16} />
              {isDeleting ? "Deleting..." : "Yes, Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default DeleteBookModal;
