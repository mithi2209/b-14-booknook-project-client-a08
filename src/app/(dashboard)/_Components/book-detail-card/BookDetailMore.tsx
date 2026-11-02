import { Building2, Barcode, Tag } from "lucide-react";

import { TBook } from "@/lib/dataType";
import { Badge } from "@/components/ui/badge";

type Props = {
  book: TBook;
};

const BookDetailMainContent = ({ book }: Props) => {
  return (
     <div className="mt-5 rounded-2xl border border-border bg-card p-6 sm:p-8">

      <h2 className="mb-6 text-xl font-bold">
        Book Information
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Publisher */}
        <div className="flex items-start gap-3">
          <Building2 className="mt-1 shrink-0 text-[#85896B] dark:text-[#EFCF83]" />

          <div>
            <p className="text-sm text-muted-foreground">
              Publisher
            </p>
            <p className="mt-1 font-semibold">{book.Publisher}</p>
          </div>
        </div>

        {/* ISBN */}
        <div className="flex items-start gap-3">
          <Barcode className="mt-1 shrink-0 text-[#85896B] dark:text-[#EFCF83]" />

          <div>
            <p className="text-sm text-muted-foreground">ISBN</p>
            <p className="mt-1 break-all font-semibold">{book.ISBN}</p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex items-start gap-3">
          <Tag className="mt-1 shrink-0 text-[#85896B] dark:text-[#EFCF83]" />

          <div>
            <p className="text-sm text-muted-foreground">Tags</p>

            <div className="mt-2 flex flex-wrap gap-2">
              {book.Tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-[#A9B49A]/30 text-[#49372D] dark:text-[#FAF0DF]"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookDetailMainContent;
