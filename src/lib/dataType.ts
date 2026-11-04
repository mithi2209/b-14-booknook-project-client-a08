

export type TBook = {
  _id: string;
  Image: string;
  Title: string;
  Author: string;
  Category: string;
  Description: string;
  userName: string;
  userEmail: string;
  TotalCopies: number;
  createdAt?: string;
};


export type TUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
};


export type TBorrowedBook = {
  _id: string;
  bookId: string;
  bookTitle: string;
  bookImage: string;
  userEmail: string;
  borrowDate: string;
  expectedReturnDate: string;
  actualReturnDate: string | null;
  status: "borrowed" | "returned";
};





