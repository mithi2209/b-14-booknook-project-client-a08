

"use client";


import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Loading from "@/app/loading";
import BorrowedBooksHeader from "./BorrowedBooksHeader";
import BorrowedBooksCard from "./BorrowedBooksCard";



const MyBorrowedBooks = () => {

        const { data: session, isPending } = authClient.useSession();

        const userEmail = session?.user?.email;
    
        const [borrowedBooks, setBorrowedBooks] = useState([]);

         const [loading, setLoading] = useState(true);

        // const getBorrowedBooks = async () => {
        //     if (!userEmail) return;

        //     const response = await fetch(
        //     `${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`
        //     );

        //     const data = await response.json();

        //     setBorrowedBooks(data);
        // };

        useEffect(() => {

            if(!userEmail) return;

            const getBorrowedBooks = async () =>{

                const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_API_URL}/borrowed-books/${encodeURIComponent(userEmail)}`);

                const data = await res.json() ;

                setBorrowedBooks(data);
                setLoading(false);
            }

            getBorrowedBooks()

        },[userEmail])

        if(isPending){
            return <Loading/>
        }

    return (
        <div className="space-y-7">

            <BorrowedBooksHeader/>

            <BorrowedBooksCard
               books={borrowedBooks}
               loading={loading}
            />
        </div>
    );
};

export default MyBorrowedBooks;