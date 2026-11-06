


import Link from "next/link";

import { BookOpen, ArrowLeft } from "lucide-react";


import { TBook } from "@/lib/dataType";
import BooksCard from "@/components/shared/BooksCard";

const categoryNames: Record<string, string> = {
  fiction: "Fiction",
  science: "Science",
  history: "History",
  technology: "Technology",
  biography: "Biography",
  mystery: "Mystery",
  romance: "Romance",
  "art-design": "Art & Design",
};

const CategoryPage = async ({ params }: 
    { params: Promise<{ category: string }> }) => {
    
   const { category } = await params;

    const categoryName = categoryNames[category.toLowerCase()];

    if (!categoryName) {
        return <div className="py-20 text-center">Category not found.</div>;
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/books/category/${category}`,
        {
        cache: "no-store",
        }
    );

    const BooksData: TBook[] = await res.json();

  return (
           <section className="min-h-screen bg-[#FAF0DF] px-4 py-12 text-[#49372D] dark:bg-[#202820] dark:text-[#FAF0DF]">
      <div className="container mx-auto">

        {/* Page Heading */}
        <div className="mb-12 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A9B49A]/30 text-[#69745D]">
            <BookOpen size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {categoryName} Books
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#85896B] sm:text-base">
            Explore our collection of {categoryName.toLowerCase()} books.
          </p>

          <Link
            href="/"
            className="mt-2 inline-flex w-fit items-center gap-2 rounded-xl border border-[#D8C8A9] px-4 py-2.5 text-sm font-medium text-[#49372D] transition hover:bg-[#F0E2D4] dark:border-[#626B50] dark:text-[#FAF0DF] dark:hover:bg-[#46513F]"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>

        {/* Book Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            {categoryName} Collection
          </h2>

          <p className="text-sm text-[#85896B]">
            {BooksData.length} books available
          </p>
        </div>

        {/* Books Grid */}
        {BooksData.length === 0 ? (
          <div className="py-20 text-center">
            <BookOpen className="mx-auto mb-4 h-12 w-12 text-[#85896B]" />

            <h3 className="text-xl font-semibold">
              No Books Available
            </h3>

            <p className="mt-2 text-sm text-[#85896B]">
              No books have been added to this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BooksData.map((book) => (
              <BooksCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
    );
};

export default CategoryPage;