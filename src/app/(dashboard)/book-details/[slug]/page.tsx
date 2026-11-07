


import { TBook } from "@/lib/dataType";
import BookDetails from "../../_Components/book-detail-card/BookDetails";
import { retrieveTokenFromServer } from "@/lib/retrieveTokenFromServer";



const BookDetailsPage = async (

    { params }: { params: Promise<{ slug: string }> }) => {

    const { slug } = await params;


    // token from server
    const token = await retrieveTokenFromServer();
    

    const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/book-details/${slug}`
   

    const res = await fetch(apiUrl, {
      cache: "no-store",
      headers: {
      Authorization: `Bearer ${token}`,
    },
    
    });


  const book: TBook = await res.json();



  return (
    <div>
      <BookDetails book={book} />
    </div>
  );
};
export default BookDetailsPage;