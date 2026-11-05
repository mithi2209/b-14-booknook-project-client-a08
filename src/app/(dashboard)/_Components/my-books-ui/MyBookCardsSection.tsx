



import MyBookCard from "./MyBookCard";
import { TBook } from "@/lib/dataType";



type Props = {
  books: TBook[];
};


const MyBookCardsSection = ({ books }: Props) => {
    return (
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 mt-9">

      {books.map((book) => (
        <MyBookCard key={book._id} book={book} />
      ))}

    </div>
    );
};

export default MyBookCardsSection;


