

import BannerSlider from "@/components/homepage/BannerSlider";
import Categories from "@/components/homepage/Categories";
import NewArrivals from "@/components/homepage/NewArrivals";
import type { Metadata } from "next";



export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to BookNook, your online library.",
};

export default function HomePage() {
  return (
    <>
      <BannerSlider />

      <NewArrivals />

      <Categories />
    </>
  );
}