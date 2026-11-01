

import type { Metadata } from "next";
import AddBooksForm from "../_Components/addBooksForm/AddBooksForm";



export const metadata: Metadata = {
  title: "BookNook | Add Books",
  description: "Add your books  at BookNook.",
};

const AddBooks = () => {
  
    return (
        <div>
            <AddBooksForm/>
        </div>
    );
};

export default AddBooks;