

"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

type Props = {
  variant?: "navbar" | "full";
};

const BookSearch = ({ variant = "full" }: Props) => {

  const router = useRouter();
  const [searchBook, setSearchBook] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const search = searchBook.trim();

    if (!search) {
      router.push("/all-books");
      return;
    }

    router.push(`/all-books?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="ml-0 lg:ml-3">

      <form

        onSubmit={handleSearch}
        className={`flex h-9 min-w-0 items-center gap-1.5 rounded-lg border border-border bg-background px-2 transition-all duration-200 focus-within:border-[#85896B]focus-within:ring-1 focus-within:ring-[#85896B]/20 ${
            variant === "navbar"
                ? "w-full sm:w-36 md:w-40 lg:w-40 xl:w-44 2xl:w-48"
                : "w-full"
            }
        `}>

        <Search size={15} className="shrink-0 text-muted-foreground" />

        <input
          type="search"
          value={searchBook}
          onChange={(e) => setSearchBook(e.target.value)}
          placeholder="Search books..."
          aria-label="Search books by title or category"
          className="min-w-0 flex-1 bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"/>

        <button
          type="submit"
          aria-label="Search"
          className="shrink-0 rounded-md px-1.5 py-1 text-xs font-semibold text-[#85896B] transition-colors hover:bg-[#85896B]/10 hover:text-[#A46A4F] dark:text-[#EFCF83] dark:hover:bg-[#85896B]/20">
          Search
        </button>
      </form>
    </div>
  );
};

export default BookSearch;
