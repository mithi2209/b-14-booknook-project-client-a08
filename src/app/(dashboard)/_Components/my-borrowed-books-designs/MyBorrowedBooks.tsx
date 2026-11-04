
"use client";

import Loading from "@/app/loading";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import type { TBorrowedBook } from "@/lib/dataType";
import BorrowedBooksCard from "./BorrowedBooksCard";
import EmptyBorrowedBooks from "./EmptyBorrowedBooks";
import BorrowedBooksHeader from "./BorrowedBooksHeader";

const MyBorrowedBooks = () => {
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

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch borrowed books");
        }

        const data = await res.json();

        setBorrowedBooks(data);
      } catch (error) {
        console.error("Get borrowed books error:", error);
        setBorrowedBooks([]);
      } finally {
        setLoading(false);
      }
    };

    getBorrowedBooks();
  }, [userEmail, isPending]);
  

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