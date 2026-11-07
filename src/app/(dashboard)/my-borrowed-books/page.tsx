



import type { Metadata } from "next";

import MyBorrowedBooks from "../_Components/my-borrowed-books-designs/MyBorrowedBooks";

import { retrieveTokenFromServer } from "@/lib/retrieveTokenFromServer";


export const metadata: Metadata = {
  title: "BookNook | My Borrowed Books ",
  description: "Explore your borrowed books at BookNook.",
};



const MyBorrowedBooksPage = async() => {
     
    // token from server
      const token = await retrieveTokenFromServer() ;

    return (
        <div>
            <MyBorrowedBooks token={token} />
        </div>
    );
};

export default MyBorrowedBooksPage;