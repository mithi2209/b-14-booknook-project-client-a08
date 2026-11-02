



import BookDetails from "../../_Components/book-detail-card/BookDetails";





const BooksDetailPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const {id} = await params ;

    
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/books-detail/${id}`);
     
        
    
        const data = await res.json();

        return (
            <div>
                <BookDetails key={data.id || data._id} book={data} />
            </div>
        );
  
};

export default BooksDetailPage;