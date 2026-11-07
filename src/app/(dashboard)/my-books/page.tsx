// my books

import type { Metadata } from "next";
import MyBooksSection from "../_Components/my-books-ui/MyBooksSection";
import { retrieveTokenFromServer } from "@/lib/retrieveTokenFromServer";

export const metadata: Metadata = {
  title: "BookNook | My Books",
  description: "Explore your books at BookNook.",
};




const MyBooksPage = async () => {

   // token retrieving from server
    const token = await retrieveTokenFromServer();


    
    return (
        <div>
            <MyBooksSection token={token} />
            
        </div>
    );
};

export default MyBooksPage;