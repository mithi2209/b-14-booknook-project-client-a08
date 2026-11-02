
"use client";

import "swiper/css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules";

import book1 from "@/assets/images/images.jpg";
import book2 from "@/assets/images/book2 (2).jpg";
import book3 from "@/assets/images/adventure.jpg";
import book4 from "@/assets/images/adventure2.jpg";
import book5 from "@/assets/images/book5.jpg";
import book6 from "@/assets/images/book6.jpg";


const slides = [
  {
    subtitle: "✦ A LITTLE CORNER FOR BOOK LOVERS",
    title: "Every Book Holds a Little Magic.",
    description:
      "Discover beautiful stories, revisit timeless classics, and find your next favorite read.",
    image: book1,
    image2: book2,
  },
  {
    subtitle: "✦ YOUR NEXT ADVENTURE STARTS HERE",
    title: "Find Stories That Stay With You.",
    description:
      "From heartwarming fiction to exciting adventures, there is always another world waiting to be explored.",
    image: book3,
    image2: book4,
  },
  {
    subtitle: "✦ TURN THE PAGE TO SOMETHING NEW",
    title: "A New Chapter Awaits You.",
    description:
      "Explore our collection, discover hidden gems, and let every book take you somewhere wonderful.",
    image: book5,
    image2: book6,
  },
];


// animation
const textVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const firstImageVariants = {
  hidden: { opacity: 0, x: -50, rotate: -12 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: -6,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const secondImageVariants = {
  hidden: { opacity: 0, x: 50, rotate: 12 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 6,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const },
  },
};


const BannerSlider = () => {
  return (
 
     <section className="w-full py-6 lg:py-14">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="booknook-swiper overflow-hidden rounded-3xl"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative grid min-h-130 grid-cols-1 items-center gap-8 overflow-hidden bg-hero px-6 py-12 text-warm-ivory sm:px-10 md:grid-cols-2 md:px-12 lg:px-16">

                {/* Left Side - Text Content */}
                <motion.div
                  key={`text-${index}`}
                  initial="hidden"
                  animate="visible"
                  className="relative z-10 space-y-5 pb-8 md:pb-10"
                >
                  <motion.p
                    variants={textVariants}
                    className="text-xs font-bold tracking-[0.2em] text-sunny-yellow sm:text-sm"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.h1
                    variants={textVariants}
                    transition={{ delay: 0.15 }}
                    className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    variants={textVariants}
                    transition={{ delay: 0.3 }}
                    className="max-w-lg text-sm leading-7 text-warm-ivory/90 sm:text-base lg:text-lg"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    variants={textVariants}
                    transition={{ delay: 0.45 }}
                  >
                    <Button
                      
                      size="lg"
                      className="mt-3 bg-coffee-brown px-7 py-5 text-warm-ivory hover:bg-terracotta hover:text-coffee-brown dark:bg-sunny-yellow dark:text-coffee-brown dark:hover:bg-terracotta lg:py-6"
                    >
                      <Link href="/books">
                        Browse Books
                        <span className="ml-2">→</span>
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Right Side - Book Images */}
                <div className="relative mx-auto flex h-100 w-full max-w-130 items-center justify-center">

                  {/* First Image */}
                  <motion.div
                    key={`first-image-${index}`}
                    variants={firstImageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.04, rotate: -3 }}
                    className="relative z-10 w-[55%] -rotate-6 overflow-hidden rounded-2xl border-4 border-warm-ivory/30 shadow-2xl"
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={500}
                      height={650}
                      priority={index === 0}
                      className="block h-auto w-full"
                    />
                  </motion.div>

                  {/* Second Image */}
                  <motion.div
                    key={`second-image-${index}`}
                    variants={secondImageVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.04, rotate: 3 }}
                    className="relative z-20 -ml-6 mt-6 h-64 w-[50%] rotate-6 overflow-hidden rounded-2xl border-4 border-warm-ivory/30 shadow-2xl sm:-ml-8 sm:mt-5 sm:h-72 sm:w-[52%] md:-ml-10 md:mt-10 md:h-68 md:w-[55%] lg:h-110 lg:w-[55%]"
                  >
                    <Image
                      src={slide.image2}
                      alt="Another book cover"
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 1024px) 52vw, 340px"
                      className="object-cover"
                    />
                  </motion.div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BannerSlider;
