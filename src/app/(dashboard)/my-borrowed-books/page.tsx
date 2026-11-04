



import type { Metadata } from "next";
import MyBorrowedBooks from "../_Components/my-borrowed-books-designs/MyBorrowedBooks";


export const metadata: Metadata = {
  title: "BookNook | My Borrowed Books ",
  description: "Explore your borrowed books at BookNook.",
};



const MyBorrowedBooksPage = () => {
     



    return (
        <div>
            <MyBorrowedBooks/>
        </div>
    );
};

export default MyBorrowedBooksPage;