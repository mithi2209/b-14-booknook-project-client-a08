


"use client";

import { toast } from "sonner";
import Loading from "@/app/loading";
import MyBooksEmpty from "./MyBooksEmpty";
import { useEffect, useState } from "react";
import type { TBook } from "@/lib/dataType";
import MyBooksHeader from "./MyBooksHeader";
import { authClient } from "@/lib/auth-client";
import MyBookCardHeading from "./MyBookCardHeading";


const MyBooksSection = () => {

  const { data: session, isPending } = authClient.useSession();

  const userEmail = session?.user?.email;

  const [myBooks, setMyBooks] = useState<TBook[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isPending) return;

    if (!userEmail) {
      setMyBooks([]);
      setLoading(false);
      return;
    }

    const getMyBooks = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/my-books/${encodeURIComponent(userEmail)}`,
        );

        const data = await res.json();

        if (!res.ok) {
          toast.error("Failed to fetch your books");
          return;
        }

        setMyBooks(data);
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    getMyBooks();
  }, [userEmail, isPending]);


    // update a book
    const handleBookUpdated = (updatedBook: TBook) => {
      setMyBooks((prevBooks) =>
        prevBooks.map((item) =>
          item._id === updatedBook._id ? updatedBook : item
        )
      );
    };

    // delete a book 
    const handleBookDeleted = (bookId: string) => {
      setMyBooks((prevBooks) =>
        prevBooks.filter((book) => book._id !== bookId)
      );
    };

    if (isPending || loading) return <Loading />;

  return (
   <section className="min-h-screen bg-background text-foreground">
    <div className="mx-auto container space-y-6 p-4 sm:p-6 lg:p-8">

      {/* Main Section Header */}
      <MyBooksHeader />

      {myBooks.length === 0 ? (
        <MyBooksEmpty />
      ) : (
        <MyBookCardHeading   books={myBooks}
            onBookUpdated={handleBookUpdated} 
            onBookDeleted={handleBookDeleted}/>
      )}

    </div>
  </section>
  );
};

export default MyBooksSection;
