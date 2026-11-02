
"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  CalendarDays,
  Globe,
  Star,
  Barcode,
  Building2,
  Tag,
  UserRound,
  Mail,
  X,
} from "lucide-react";

import { TBook } from "@/lib/dataType";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";


type TBookDetailsProps = {
  book: TBook;
//   currentUser: TCurrentUser;
};


const BooksDetailCard = ({book}: TBookDetailsProps) => {

const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBorrow = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Borrow functionality will be added later.
    setIsModalOpen(false);
  };
 

    return (
    //     <section className="min-h-screen bg-background px-4 py-10 text-foreground sm:px-6 lg:px-8">
    //   <div className="mx-auto max-w-6xl">
    //     {/* Back Button */}
    //     <Link
    //       href="/all-books"
    //       className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
    //     >
    //       <ArrowLeft size={18} />
    //       Back to Books
    //     </Link>

    //     {/* Book Details */}
    //     <div className="grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
    //       {/* Book Cover */}
    //       <div className="relative flex min-h-87.5 items-center justify-center overflow-hidden bg-[#E8DFC9] p-8 dark:bg-[#46513F] sm:p-12">
    //         <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#85896B]/20" />

    //         <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-[#E8BFA5]/30" />

    //         <div className="relative h-80 w-55 overflow-hidden rounded-xl shadow-2xl transition duration-300 hover:-translate-y-2 hover:rotate-1 sm:h-95 sm:w-65">
    //           <Image
    //             src={book.Image}
    //             alt={book.Title}
    //             fill
    //             sizes="(max-width: 640px) 220px, 260px"
    //             className="object-cover"
    //             priority
    //           />
    //         </div>
    //       </div>

    //       {/* Book Information */}
    //       <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
    //         <Badge className="mb-5 w-fit border-0 bg-[#A9B49A]/30 px-4 py-1.5 text-[#49372D] dark:bg-[#A9B49A]/20 dark:text-[#FAF0DF]">
    //           {book.Category}
    //         </Badge>

    //         <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
    //           {book.Title}
    //         </h1>

    //         <p className="mt-4 text-base text-muted-foreground sm:text-lg">
    //           by{" "}
    //           <span className="font-semibold text-foreground">
    //             {book.Author}
    //           </span>
    //         </p>

    //         <div className="my-7 h-px w-full bg-border" />

    //         <div>
    //           <h2 className="mb-3 text-lg font-semibold">
    //             About This Book
    //           </h2>

    //           <p className="text-sm leading-7 text-muted-foreground sm:text-base">
    //             {book.Description}
    //           </p>
    //         </div>

    //         {/* Added By */}
    //         <div className="mt-8 flex items-center gap-3 rounded-xl border border-border bg-muted/50 p-4">
    //           <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#85896B]/20 text-[#85896B] dark:text-[#EFCF83]">
    //             <UserRound size={22} />
    //           </div>

    //           <div className="min-w-0">
    //             <p className="text-xs text-muted-foreground">
    //               Added to BookNook by
    //             </p>

    //             <p className="mt-1 truncate font-semibold">
    //               {book.addedBy.name}
    //             </p>
    //           </div>
    //         </div>

    //         {/* Borrow Button and Modal */}
    //         <Dialog>
    //           <DialogTrigger >
    //             <Button
    //               className="mt-8 h-12 w-full rounded-xl bg-primary text-primary-foreground transition hover:opacity-90"
    //             >
    //               <BookOpen size={18} className="mr-2" />
    //               Borrow This Book
    //             </Button>
    //           </DialogTrigger>

    //           <DialogContent className="w-[calc(100%-2rem)] rounded-2xl border-border bg-card sm:max-w-md">
    //             <DialogHeader>
    //               <DialogTitle className="text-xl font-bold">
    //                 Borrow This Book
    //               </DialogTitle>

    //               <DialogDescription>
    //                 Confirm your borrowing request for{" "}
    //                 <span className="font-semibold text-foreground">
    //                   {book.Title}
    //                 </span>
    //                 .
    //               </DialogDescription>
    //             </DialogHeader>

    //             <form onSubmit={handleBorrow} className="space-y-5 pt-3">
    //               {/* User Name */}
    //               <div className="space-y-2">
    //                 <label className="text-sm font-medium">
    //                   User Name
    //                 </label>

    //                 <div className="relative">
    //                   <UserRound
    //                     size={17}
    //                     className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
    //                   />

    //                   <input
    //                     type="text"
    //                     // value={currentUser.name}
    //                     value="name"
    //                     readOnly
    //                     className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
    //                   />
    //                 </div>
    //               </div>

    //               {/* User Email */}
    //               <div className="space-y-2">
    //                 <label className="text-sm font-medium">
    //                   Email Address
    //                 </label>

    //                 <div className="relative">
    //                   <Mail
    //                     size={17}
    //                     className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
    //                   />

    //                   <input
    //                     type="email"
    //                     // value={currentUser.email}
    //                     value="email"
    //                     readOnly
    //                     className="h-11 w-full rounded-lg border border-input bg-muted/50 pl-10 pr-4 text-sm outline-none"
    //                   />
    //                 </div>
    //               </div>

    //               <Button
    //                 type="submit"
    //                 className="h-11 w-full rounded-lg bg-primary text-primary-foreground hover:opacity-90"
    //               >
    //                 Confirm Borrow
    //               </Button>
    //             </form>
    //           </DialogContent>
    //         </Dialog>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div></div>
    );
};

