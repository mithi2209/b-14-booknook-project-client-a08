



import MyBookCard from "./MyBookCard";
import { TBook } from "@/lib/dataType";



type Props = {
  books: TBook[];
  onBookUpdated: (updatedBook: TBook) => void;
  onBookDeleted: (bookId: string) => void;
};

const MyBookCardsSection = ({ books , onBookUpdated , onBookDeleted}: Props) => {
    return (
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 mt-9">

        {books.map((book) => (
        <MyBookCard
          key={book._id}
          book={book}
          onBookUpdated={onBookUpdated}
          onBookDeleted={onBookDeleted}
        />
      ))}


    </div>
    );
};

export default MyBookCardsSection;


