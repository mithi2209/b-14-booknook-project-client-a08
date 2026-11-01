

import type { Metadata } from "next";
import NewArrivals from "@/components/homepage/NewArrivals";
import BannerSlider from "@/components/homepage/BannerSlider";
import TopCategories from "@/components/homepage/TopCategories";
import HowBorrowingBooks from "@/components/homepage/HowBorrowingBooks";



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
    </>
  );
}