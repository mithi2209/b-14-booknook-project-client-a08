




import { BookOpen, Sparkles } from "lucide-react";





const BorrowedBooksHeader = () => {
  return (
    <div className="my-14">
      <div className="mb-3 flex items-center gap-2 text-primary">
        <BookOpen size={20} />
        <span className="text-sm font-semibold tracking-wider uppercase">
          Your Reading Collection
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            My Borrowed Books
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
            Keep track of the books you have borrowed and their return dates.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <Sparkles size={16} className="text-primary" />
          Your reading journey
        </div>
      </div>
    </div>
  );
};

export default BorrowedBooksHeader;
