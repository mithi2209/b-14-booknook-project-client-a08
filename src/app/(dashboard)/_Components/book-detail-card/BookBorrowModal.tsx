"use client";

import { useState } from "react";
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

type Props = {
  book: TBook;
};

const BookBorrowModal = ({ book }: Props) => {
  const [open, setOpen] = useState(false);

  const handleBorrow = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Add borrowing API later.
    setOpen(false);
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          className="group h-8 w-full rounded-xl border border-[#85896B] 
          bg-[#85896B] text-[#FAF0DF] shadow-sm transition-all duration-300
          hover:-translate-y-0.5 hover:bg-[#74795C] hover:shadow-md
          dark:border-[#A9B49A] dark:bg-[#A9B49A] dark:text-[#30392F]
          dark:hover:bg-[#BCC6AC]"
        >
          <BookOpen
            size={18}
            className="mr-2 transition-transform duration-300 group-hover:-rotate-6"
          />
          Borrow This Book
          <span className="ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-2rem)] rounded-2xl border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Borrow This Book
          </DialogTitle>

          <DialogDescription>
            Confirm your borrowing request for{" "}
            <span className="font-semibold text-foreground">{book.Title}</span>.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleBorrow} className="space-y-5 pt-3">
          <div className="space-y-2">
            <label className="text-sm font-medium">User Name</label>

            <div className="relative">
              <UserRound
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="text"
                value="John Doe"
                readOnly
                className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>

            <div className="relative">
              <Mail
                size={17}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              />

              <input
                type="email"
                value="john@example.com"
                readOnly
                className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="h-12 w-full rounded-xl bg-primary text-primary-foreground hover:opacity-90"
          >
            Confirm Borrow
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookBorrowModal;
