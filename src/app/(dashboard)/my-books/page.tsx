// my books

import type { Metadata } from "next";
import MyBooksSection from "../_Components/my-books-ui/MyBooksSection";

export const metadata: Metadata = {
  title: "BookNook | My Books",
  description: "Explore your books at BookNook.",
};

const MyBooksPage = () => {
    return (
        <div>
            <MyBooksSection/>
            
        </div>
    );
};

export default MyBooksPage;