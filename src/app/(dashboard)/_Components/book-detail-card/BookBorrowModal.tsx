

"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Mail, UserRound } from "lucide-react";

import { TBook } from "@/lib/dataType";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { authClient } from "@/lib/auth-client";

type Props = {
  book: TBook;
  setCurrentCopies: React.Dispatch<React.SetStateAction<number>>;
};

const BookBorrowModal = ({ book, setCurrentCopies }: Props) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [isBorrowing, setIsBorrowing] = useState(false);
  const [isAlreadyBorrowed, setIsAlreadyBorrowed] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const userEmail = session?.user?.email;

  // Checking if the current user already borrowed this book
  const handleBorrowStats = async () => {
    if (!userEmail) return;

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`,
      );

      if (!res.ok) {
        throw new Error("Failed to check borrowing status");
      }

      const borrowedBooks = await res.json();

      const alreadyBorrowed =
        Array.isArray(borrowedBooks) &&
        borrowedBooks.some(
          (item: { bookId: string }) =>
            String(item.bookId) === String(book._id),
        );

      setIsAlreadyBorrowed(alreadyBorrowed);
    } catch (error) {
      console.error("Borrow status error:", error);
    }
  };

  // Handling button click
  const handleBorrowClick = async () => {
    if (isPending || isBorrowing) return;

    if (!userEmail) {
      toast.error("Please login first!");
      return;
    }

    if (isAlreadyBorrowed) {
      toast.warning("You have already borrowed this book!");
      return;
    }

    // No available copies
    if (Number(book.AvailableCopies) <= 0) {
      toast.error("This book is currently not available!");
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`,
      );

      if (!res.ok) {
        throw new Error("Failed to check borrowing status");
      }

      const borrowedBooks = await res.json();

      const alreadyBorrowed =
        Array.isArray(borrowedBooks) &&
        borrowedBooks.some(
          (item: { bookId: string }) =>
            String(item.bookId) === String(book._id),
        );

      if (alreadyBorrowed) {
        setIsAlreadyBorrowed(true);
        toast.warning("You have already borrowed this book!");
        return; // not to open modal
      }

      // Only open modal if borrowing is allowed
      setOpen(true);
    } catch (error) {
      console.error("Borrow status error:", error);
      toast.error("Could not check borrowing status. Please try again.");
    }
  };

  // Borrowing book
  const handleBorrowBook = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!userEmail) {
      toast.error("Please login first!");
      return;
    }

    try {
      setIsBorrowing(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrow-books`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bookId: book._id,
            userEmail: userEmail,
          }),
        },
      );

      const data = await res.json();

      // Handling unsuccessful borrowing
      if (!res.ok || data.message?.toLowerCase().includes("already borrowed")) {
        if (data.message?.toLowerCase().includes("already borrowed")) {
          setIsAlreadyBorrowed(true);
          setOpen(false);
        }

        toast.error(data.message || "Something went wrong!");
        return;
      }

      // Updating button and copies after successful borrowing

      setIsAlreadyBorrowed(true);

      setCurrentCopies((prev) => Math.max(prev - 1, 0));

      toast.success(
        "Book borrowed successfully! Please return it within 7 days.",
      );

      //  modal close
      setOpen(false);

      // Refreshing server data
      router.refresh();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsBorrowing(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Borrow Button */}

      <button
        type="button"
        onClick={handleBorrowClick}
        disabled={isPending || isBorrowing}
        className={`group flex h-11 w-full items-center rounded-lg border px-4 shadow-sm transition-all duration-300 
          ${
            isAlreadyBorrowed
            ? "cursor-pointer border-[#85896B]/40 bg-[#A9B49A]/20 text-dark-olive  opacity-70 hover:bg-[#A9B49A]/30 dark:border-[#A9B49A]/30 dark:bg-[#A9B49A]/10 dark:text-warm-ivory dark:hover:bg-[#A9B49A]/20"

            : book.AvailableCopies <= 0

              ? "cursor-pointer border-[#C58B75]/40 bg-[#E8BFA5]/20 text-[#A56E58]/70 opacity-75 hover:bg-[#E8BFA5]/30 dark:border-[#C58B75]/30 dark:bg-[#49372D]/40 dark:text[#E8BFA5]/70"
              : "border-[#85896B] bg-[#85896B] text-[#FAF0DF] hover:-translate-y-0.5 hover:bg-[#74795C] hover:shadow-md dark:border-[#A9B49A] dark:bg-[#A9B49A] dark:text-muted-sage-olive dark:hover:bg-[#BCC6AC]"
          }`}
      >
        <BookOpen size={18} className="mr-2" />

        {book.AvailableCopies <= 0
          ? "Not Available"
          : isAlreadyBorrowed
            ? "Already Borrowed"
            : "Borrow This Book"}

        <span className="ml-auto text-lg">→</span>
      </button>

      {/* Borrow Confirmation Modal */}
      <DialogContent className="w-[calc(100%-2rem)] rounded-2xl border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold ">
            Borrow This Book
          </DialogTitle>

          <DialogDescription>
            Confirm your borrowing request for{" "}
            <span className="font-semibold text-foreground">{book.Title}</span>.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleBorrowBook} className="space-y-5 pt-3">
          {/* User Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium">User Name</label>

            <div className="relative">
              <UserRound
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                value={session?.user?.name || ""}
                readOnly
                className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
              />
            </div>
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="email"
                value={userEmail || ""}
                readOnly
                className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
              />
            </div>
          </div>

          {/* Confirm Borrow Button */}
          <Button
            type="submit"
            disabled={isPending || isBorrowing || !userEmail}
            className="h-12 w-full rounded-xl bg-primary text-primary-foreground hover:opacity-90"
          >
            {isBorrowing ? "Borrowing..." : "Confirm Borrow"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookBorrowModal;
