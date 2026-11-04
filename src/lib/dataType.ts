

export type TBook = {
  _id: string;
  Image: string;
  Title: string;
  Author: string;
  Category: string;
  Description: string;
  userName: string;
  userEmail: string;

  // Optional additional information
  Publisher?: string;
  ISBN?: string;
  Tags?: string[];
  Rating?: number;
  Pages?: number;
  PublicationYear?: number;
  Language?: string;
  Price?: number;
  Currency?: string;

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
  returnDate: string;
  status: "borrowed" | "returned";
};





