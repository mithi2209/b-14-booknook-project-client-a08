
"use client";

import { toast } from "sonner";
import Loading from "@/app/loading";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import type { TBorrowedBook } from "@/lib/dataType";
import BorrowedBooksCard from "./BorrowedBooksCard";
import EmptyBorrowedBooks from "./EmptyBorrowedBooks";
import BorrowedBooksHeader from "./BorrowedBooksHeader";

type Props = {
   token: string | null;
}; 
const MyBorrowedBooks = ({ token }:Props) => {

  const { data: session, isPending } = authClient.useSession();

  const userEmail = session?.user?.email;

  const [borrowedBooks, setBorrowedBooks] = useState<TBorrowedBook[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (isPending) return;

  if (!userEmail) {
    setBorrowedBooks([]);
    setLoading(false);
    return;
  }

  const getBorrowedBooks = async () => {
    try {
      
      setLoading(true);

      // token error
        if(!token){
          toast.error("Token Authentication failed. Please login again.");
          return;
        }

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}` , {
          headers:{
            authorization : `Bearer ${token}`,
          }
        }
      );

      const data = await res.json();

      

      if (!res.ok) {
        toast.error("Failed to fetch borrowed books");
        return;
      }

      // Show only books that have not been returned
      const activeBooks = data.filter(
        (book: TBorrowedBook) => book.status === "borrowed"
      );

      setBorrowedBooks(activeBooks);
    } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    } 
    finally {
      setLoading(false);
    }
  };

  getBorrowedBooks();
  }, [userEmail, isPending , token]);
  

  if (isPending || loading) {
    return <Loading />;
  }

  return (
    <div className="space-y-7">
      <BorrowedBooksHeader />

      {borrowedBooks.length === 0 ? (
        <EmptyBorrowedBooks />
      ) : (
        <BorrowedBooksCard books={borrowedBooks} />
      )}
    </div>
  );
};

export default MyBorrowedBooks;