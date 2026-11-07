// reusable component for books card
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { TBook } from "@/lib/dataType";

type BookCardProps = {
  book: TBook;
};

const BooksCard = ({ book }: BookCardProps) => {

  return (
    
    <div className="group overflow-hidden rounded-2xl border border-[#D8C8A9] bg-[#FFF9F0] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#626B50] dark:bg-[#3F4A3A]">
      {/* Book Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-linear-to-br from-[#E8DFC9] via-[#F3EBDD] to-[#D9DCC5] p-5 dark:from-[#46513F] dark:via-[#3F4A3A] dark:to-[#30392F]">
        {/* Decorative Circle */}
        <div className="absolute h-52 w-52 rounded-full bg-[#A9B49A]/25 blur-2xl dark:bg-[#85896B]/20" />

        {book.Image ? (
          <img
            src={book.Image}
            alt={book.Title}
            loading="lazy"
            className="relative z-10 h-full w-auto max-w-full rounded-sm object-contain shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <BookOpen size={64} className="relative z-10 text-[#85896B]" />
        )}

        {/* Category Badge */}
        <span className="absolute left-4 top-4 z-20 rounded-full border border-[#D8C8A9]/70 bg-[#FAF0DF]/95 px-3 py-1.5 text-xs font-semibold text-[#49372D] shadow-sm backdrop-blur-sm dark:border-[#69745D] dark:bg-[#30392F]/90 dark:text-[#EFCF83]">
          {book.Category}
        </span>
      </div>

      {/* Book Information */}
      <div className="flex min-h-61.25 flex-col bg-[#F5EBDD] p-5 dark:bg-[#46513F]">
        <div className="space-y-2">
          <h2 className="line-clamp-1  text-xl font-bold text-[#49372D] dark:text-[#FAF0DF]">
            {book.Title}
          </h2>

          <p className="text-sm font-medium text-[#85896B] dark:text-[#D5D8C7]">
            By {book.Author}
          </p>

          <p className="line-clamp-2 pt-1 text-sm leading-6 text-[#756456] dark:text-[#FAF0DF]/75">
            {book.Description}
          </p>
        </div>

        {/* View Details Button */}
        <Link
          href={`/book-details/${book._id}`}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-[#85896B] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#69745D] hover:shadow-md dark:bg-[#EFCF83] dark:text-[#49372D] dark:hover:bg-[#DDBE70]"
        >
          View Details
          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
