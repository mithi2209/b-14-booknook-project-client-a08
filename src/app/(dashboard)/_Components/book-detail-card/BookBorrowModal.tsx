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
};

const BookBorrowModal = ({ book }: Props) => {
  
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isBorrowing, setIsBorrowing] = useState(false);
    const [isAlreadyBorrowed, setIsAlreadyBorrowed] = useState(false);
   
    const { data: session, isPending } = authClient.useSession();
    const userEmail = session?.user?.email;
    
    // checking if already borrow a book
      const handleBorrowStats = async () => {
        if (!userEmail) return;

        try{
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`
          );

           const borrowedBooks = await res.json();

            const alreadyBorrowed = Array.isArray(borrowedBooks) &&
            borrowedBooks.some((item: { bookId: string }) =>
            String(item.bookId) === String(book._id));

            setIsAlreadyBorrowed(alreadyBorrowed);

            if (alreadyBorrowed) {
            setOpen(false);
            toast.warning("You have already borrowed this book!");}
    
        }
        catch (error) {
          console.error("Borrow status error:", error);
        }

      };

     


    // borrowing book
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
            }
          );

          const data = await res.json();

          //  borrowing even if the server returns a 200 status
          if (!res.ok ||
            data.message?.toLowerCase().includes("already borrowed")) {
            if (data.message?.toLowerCase().includes("already borrowed")) {
              setIsAlreadyBorrowed(true);
              setOpen(false);
            }

            toast.error(data.message || "Something went wrong!");
            return;
          }

          // Update button immediately after successful borrowing
          setIsAlreadyBorrowed(true);

          toast.success(data.message || "Book borrowed successfully!");
          setOpen(false);
          router.push("/my-borrowed-books");
        } 
        catch (error) {
          toast.error("Something went wrong. Please try again.");
        } finally {
          setIsBorrowing(false);
        }
      };



  return (

    <Dialog open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);

        if (isOpen) {
          handleBorrowStats();
        }
      }}>

      <DialogTrigger
        
        disabled={isAlreadyBorrowed}
        

        className="group flex h-9 w-full items-center rounded-lg border border-[#85896B] px-3  shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#74795C] hover:shadow-md dark:border-[#A9B49A] dark:bg-[#A9B49A]dark:text-[#30392F]dark:hover:bg-[#BCC6AC] bg-[#85896B]  text-[#FAF0DF]

        disabled:border-[#A3A58F] disabled:bg-[#E5E5DC]
         disabled:text-[#77796B] 
          disabled:hover:bg-[#E5E5DC]  dark:bg-[#A9B49A] dark:text-[#30392F] dark:hover:bg-[#BCC6AC] dark:disabled:border-[#596452] dark:disabled:bg-[#394336] dark:disabled:text-[#B8C1AE]">

        <BookOpen
          size={18}
          className="mr-2 transition-transform duration-300 group-hover:-rotate-6"
        />
         { isAlreadyBorrowed
            ? "Already Borrowed " 
            : "Borrow This Book"
          }

        <span className="ml-auto text-lg transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
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

        <form onSubmit={handleBorrowBook} className="space-y-5 pt-3">
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

          <Button
            type="submit"
            disabled={isPending || isBorrowing || !userEmail}
            className="h-12 w-full rounded-xl bg-primary text-primary-foreground hover:opacity-90"
          >
            {isBorrowing?
                 "Borrowing..."
                :"Confirm Borrow"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookBorrowModal;
