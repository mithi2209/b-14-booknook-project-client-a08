


import { TBook } from "@/lib/dataType";

import MyBookCardsSection from "./MyBookCardsSection";

import { BookOpen, LibraryBig, Sparkles } from "lucide-react";

type Props = {
  books: TBook[];
};

const MyBookCardHeading = ({ books }: Props) => {
  return (
    //  <section className="mt-10 space-y-7 sm:mt-16">

    //       {/* Section Heading */}
    //       <div className="flex flex-wrap items-end justify-between gap-4">
    //         <div>
    //           <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-coffee-brown">
    //             <Sparkles size={14} />
    //             Your Reading Space
    //           </div>

    //           <h2 className="flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
    //             <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-terracotta/15">
    //               <BookOpen size={23} className="text-terracotta" />
    //             </span>
    //             Your Collection
    //           </h2>

    //           <p className="mt-2 text-sm text-muted-foreground">
    //             Every book has a story. Keep your collection organized.
    //           </p>
    //         </div>

    //         <div className="flex items-center gap-2 rounded-2xl border border-terracotta/25 bg-terracotta/10 px-4 py-3">
    //           <Library size={19} className="text-terracotta" />
    //           <span className="text-sm font-bold text-foreground">
    //             {books.length}
    //           </span>
    //           <span className="text-sm text-muted-foreground">
    //             {books.length === 1 ? "Book" : "Books"}
    //           </span>
    //         </div>
    //       </div>

    //       {/* Book Cards */}
    //       <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
    //         {books.map((book) => (
    //           <article
    //             key={book._id}
    //             className="group relative overflow-hidden rounded-3xl border border-terracotta/20 bg-linear-to-br from-warm-ivory via-card to-dusty-rose/20 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-terracotta/40 hover:shadow-xl"
    //           >
    //             {/* Decorative Background */}
    //             <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-terracotta/10 blur-3xl transition-all duration-500 group-hover:bg-terracotta/20" />

    //             {/* Main Content */}
    //             <div className="relative flex gap-4 p-4 sm:gap-6 sm:p-6">

    //               {/* Book Cover */}
    //               <div className="relative h-44 w-28 shrink-0 overflow-hidden rounded-2xl bg-secondary shadow-md sm:h-52 sm:w-36">
    //                 {book.Image ? (
    //                   <img
    //                     src={book.Image}
    //                     alt={book.Title}
    //                     className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
    //                   />
    //                 ) : (
    //                   <div className="flex h-full flex-col items-center justify-center gap-2">
    //                     <BookOpen size={38} className="text-muted-foreground" />
    //                     <span className="text-[10px] text-muted-foreground">
    //                       No Cover
    //                     </span>
    //                   </div>
    //                 )}

    //                 <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

    //                 <div className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-black/35 px-2.5 py-1 text-[10px] font-semibold tracking-wider text-white backdrop-blur-sm">
    //                   BOOKNOOK
    //                 </div>
    //               </div>

    //               {/* Book Information */}
    //               <div className="flex min-w-0 flex-1 flex-col">

    //                 <span className="w-fit rounded-full border border-terracotta/25 bg-terracotta/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
    //                   {book.Category}
    //                 </span>

    //                 <h3 className="mt-3 line-clamp-2 text-lg font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-terracotta sm:text-xl">
    //                   {book.Title}
    //                 </h3>

    //                 <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
    //                   <UserRound size={15} className="shrink-0 text-terracotta" />
    //                   <span className="truncate">{book.Author}</span>
    //                 </p>

    //                 <div className="my-4 h-px bg-linear-to-r from-terracotta/40 via-border to-transparent" />

    //                 {/* Copies */}
    //                 <div className="grid grid-cols-2 gap-2">
    //                   <div className="rounded-xl border border-terracotta/20 bg-background/70 p-3">
    //                     <div className="flex items-center gap-1.5 text-muted-foreground">
    //                       <Library size={14} className="text-terracotta" />
    //                       <span className="text-[10px] font-semibold sm:text-xs">
    //                         Total Copies
    //                       </span>
    //                     </div>
    //                     <p className="mt-1.5 text-xl font-bold text-foreground">
    //                       {book.TotalCopies}
    //                     </p>
    //                   </div>

    //                   <div className="rounded-xl border border-muted-sage/30 bg-muted-sage/15 p-3">
    //                     <div className="flex items-center gap-1.5 text-muted-foreground">
    //                       <BookOpen size={14} className="text-muted-sage" />
    //                       <span className="text-[10px] font-semibold sm:text-xs">
    //                         Available
    //                       </span>
    //                     </div>
    //                     <p className="mt-1.5 text-xl font-bold text-foreground">
    //                       {book.AvailableCopies}
    //                     </p>
    //                   </div>
    //                 </div>

    //                 {/* Added Date */}
    //                 {book.createdAt && (
    //                   <p className="mt-auto flex items-center gap-1.5 pt-3 text-xs text-muted-foreground">
    //                     <CalendarDays size={13} className="text-terracotta" />
    //                     Added{" "}
    //                     {new Date(book.createdAt).toLocaleDateString("en-US", {
    //                       month: "short",
    //                       day: "2-digit",
    //                       year: "numeric",
    //                     })}
    //                   </p>
    //                 )}
    //               </div>
    //             </div>

    //             {/* Card Footer */}
    //             <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-terracotta/20 bg-linear-to-r from-terracotta/5 via-dusty-rose/15 to-warm-ivory/70 px-4 py-4 sm:px-6">

    //               <span className="text-xs font-semibold tracking-wide text-muted-foreground">
    //                 Manage your book
    //               </span>

    //               <div className="flex items-center gap-2">

    //                 {/* Edit Button */}
    //                 <button
    //                   type="button"
    //                   className="inline-flex items-center gap-2 rounded-xl border border-terracotta/50 bg-linear-to-br from-terracotta/25 to-dusty-rose/35 px-4 py-2.5 text-sm font-bold text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:from-terracotta hover:to-terracotta/80 hover:text-white hover:shadow-md hover:shadow-terracotta/20 active:translate-y-0"
    //                 >
    //                   <Edit3 size={16} />
    //                   Edit
    //                 </button>

    //                 {/* Delete Button */}
    //                 <button
    //                   type="button"
    //                   className="inline-flex items-center gap-2 rounded-xl border border-rose-400/50 bg-linear-to-br from-rose-100 to-rose-200/70 px-4 py-2.5 text-sm font-bold text-rose-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-rose-600 hover:from-rose-600 hover:to-rose-700 hover:text-white hover:shadow-md hover:shadow-rose-500/20 active:translate-y-0"
    //                 >
    //                   <Trash2 size={16} />
    //                   Delete
    //                 </button>

    //               </div>
    //             </div>
    //           </article>
    //         ))}
    //       </div>
    //     </section>

    // <section className="space-y-7 mt-10 sm:mt-16">
    //   {/* Card Section Heading */}

    //   <div className="flex flex-wrap items-center justify-between gap-5">
    //     {/* Heading Content */}
    //     <div className="flex items-center gap-4">
    //       {/* Icon */}
    //       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-deep-olive/20 bg-deep-olive/10 text-deep-olive shadow-sm dark:border-terracotta/25 dark:bg-terracotta/15 dark:text-terracotta">
    //         <LibraryBig size={24} strokeWidth={1.8} />
    //       </div>

    //       {/* Text */}
    //       <div>
    //         <div className="mb-1 flex items-center gap-2">
    //           <Sparkles
    //             size={13}
    //             className="text-deep-olive dark:text-terracotta"
    //           />

    //           <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-deep-olive dark:text-terracotta">
    //             Your Books Library
    //           </span>
    //         </div>

    //         <h3 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
    //           Your Bookshelf
    //         </h3>

    //         <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
    //           Every book, all in one place.
    //         </p>
    //       </div>
    //     </div>

    //     {/* Book Count */}
    //     <div className="group flex items-center gap-3 rounded-2xl border border-deep-olive/25 bg-linear-to-br from-[#FFFDF7] to-[#E9EBDD]/70 px-4 py-3 shadow-sm transition-all duration-300 hover:border-deep-olive/40 hover:shadow-md dark:border-terracotta/25 dark:from-card dark:to-dusty-rose/15">
    //       {/* Book Icon */}
    //       <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep-olive text-white shadow-sm transition-transform duration-300 group-hover:scale-105 dark:bg-terracotta dark:text-coffee-brown">
    //         <BookOpen size={20} />
    //       </div>

    //       {/* Count */}
    //       <div className="flex flex-col">
    //         <span className="text-xl font-bold leading-none text-deep-olive dark:text-foreground">
    //           {books.length}
    //         </span>

    //         <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
    //           {books.length === 1 ? "Book" : "Books"}
    //         </span>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Book Cards */}
    //   <MyBookCardsSection books={books} />
    // </section>


<section className="mt-12 space-y-6 sm:mt-12 sm:space-y-7 lg:mt-16">

  {/* Card Section Heading */}
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">

    {/* Heading Content */}
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">

      {/* Icon */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-deep-olive/20 bg-deep-olive/10 text-deep-olive shadow-sm sm:h-12 sm:w-12 sm:rounded-2xl dark:border-terracotta/25 dark:bg-terracotta/15 dark:text-terracotta">
        <LibraryBig size={24} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="mb-1 flex items-center gap-2">
          <Sparkles
            size={13}
            className="shrink-0 text-deep-olive dark:text-terracotta"
          />

          <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-deep-olive dark:text-terracotta sm:text-[10px] sm:tracking-[0.2em]">
            Your Books Library
          </span>
        </div>

        <h3 className="text-lg font-bold tracking-tight text-foreground sm:text-2xl">
          Your Bookshelf
        </h3>

        <p className="mt-1 text-[11px] text-muted-foreground sm:text-sm">
          Every book, all in one place.
        </p>
      </div>
    </div>

    {/* Book Count */}
    <div className="flex w-full justify-end sm:w-auto sm:shrink-0">

      <div className="group flex items-center gap-3 rounded-2xl border border-deep-olive/25 bg-linear-to-br from-[#FFFDF7] to-[#E9EBDD]/70 px-3 py-2.5 shadow-sm transition-all duration-300 hover:border-deep-olive/40 hover:shadow-md sm:px-4 sm:py-3 dark:border-terracotta/25 dark:from-card dark:to-dusty-rose/15">

        {/* Book Icon */}
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-deep-olive text-white shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10 dark:bg-terracotta dark:text-coffee-brown">
          <BookOpen size={20} />
        </div>

        {/* Count */}
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-none text-deep-olive dark:text-foreground">
            {books.length}
          </span>

          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            {books.length === 1 ? "Book" : "Books"}
          </span>
        </div>

      </div>
    </div>

  </div>

  {/* Book Cards */}
  <MyBookCardsSection books={books} />

</section>


  );
};

export default MyBookCardHeading;
