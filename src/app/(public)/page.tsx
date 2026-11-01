

import type { Metadata } from "next";
import NewArrivals from "@/components/homepage/NewArrivals";
import BannerSlider from "@/components/homepage/BannerSlider";
import TopCategories from "@/components/homepage/TopCategories";
import HowBorrowingBooks from "@/components/homepage/HowBorrowingBooks";
import FeaturedAuthors from "@/components/homepage/FeaturedAuthors";
import ReadersReviews from "@/components/homepage/ReadersReviews";



export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to BookNook, your online library.",
};

export default function HomePage() {
  return (
    <>
      <BannerSlider />

      <HowBorrowingBooks/>

      <NewArrivals />

      <TopCategories />
      <FeaturedAuthors/>
      <ReadersReviews/>
    </>
  );
}