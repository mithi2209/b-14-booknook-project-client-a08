// reusable component for books card
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { TBook } from "@/lib/dataType";
import Image from "next/image";

type BookCardProps = {
  book: TBook;
};

const BooksCard = ({ book }: BookCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-[#D5C6A9] bg-white/70 transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-[#69745D] dark:bg-[#30392F]">
      {/* Book Image */}
      <div className="h-64 overflow-hidden bg-[#E9DFC9]">
        {book.Image ? (
          <img
            src={book.Image}
            alt={book.Title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <BookOpen size={60} className="text-[#85896B]" />
          </div>
        )}
      </div>

      {/* Book Information */}
      <div className="space-y-3 p-5">
        <span className="inline-block rounded-full bg-[#A9B49A]/30 px-3 py-1 text-xs font-medium text-[#69745D]">
          {book.Category}
        </span>

        <h2 className="line-clamp-1 text-lg font-bold">{book.Title}</h2>

        <p className="text-sm text-[#85896B]">By {book.Author}</p>

        <p className="line-clamp-2 text-sm leading-6 text-[#85896B]">
          {book.Description}
        </p>

        <Link
          href={`/books/${book._id}`}
          className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#69745D] hover:gap-3"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default BooksCard;
