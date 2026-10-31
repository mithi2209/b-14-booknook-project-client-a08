import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';

const nunitoSans= Nunito_Sans({
 
  subsets: ["latin"],
});



export const metadata: Metadata = {
   title: {
    default: "BookNook | Your Online Library",
    template: "%s | BookNook",
  },
  description:
    "Discover books, borrow your favorites, and build your personal reading journey with BookNook.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}  
        <ToastContainer/>  
      </body>
    </html>
  );
}
