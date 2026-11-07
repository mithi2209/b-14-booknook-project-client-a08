

import type { Metadata } from "next";
import NewArrivals from "@/components/homepage/NewArrivals";
import BannerSlider from "@/components/homepage/BannerSlider";
import TopCategories from "@/components/homepage/TopCategories";
import ReadersReviews from "@/components/homepage/ReadersReviews";
import FeaturedAuthors from "@/components/homepage/FeaturedAuthors";
import HowBorrowingBooks from "@/components/homepage/HowBorrowingBooks";




export const metadata: Metadata = {
  title: "Home | BookNook ",
  description: "Welcome to BookNook, your online library.",
};

export default function HomePage() {
  return (
    <>
      <BannerSlider />
      <NewArrivals />
      <TopCategories />
      <HowBorrowingBooks/>
      <FeaturedAuthors/>
      <ReadersReviews/>
      
    </>
  );
}