

import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import footerLight from "@/assets/images/footer-image-1.jpg";
import footerDark from "@/assets/images/footer-img-dark-.jpg";
import { LibraryBig, Mail, Phone, MapPin } from "lucide-react";


const Footer = () => {

  return (

    <footer

      className="footer-bg border-t border-border bg-[#FAF0DF] text-[#49372D] dark:bg-[#30392F] dark:text-[#FAF0DF]"
      style={
        {
          "--footer-light": `url("${footerLight.src}")`,
          "--footer-dark": `url("${footerDark.src}")`,
        } as React.CSSProperties
      }
    >
      <div className="container mx-auto px-5 py-10 sm:px-8 sm:py-12 lg:px-6">

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 items-start justify-items-start gap-5  text-center md:grid-cols-2 md:items-start md:gap-8 lg:grid-cols-4 lg:gap-8 lg:text-left divide-y-0 divide-[#B9A98D]/70 md:divide-y-0  lg:divide-x lg:divide-y-0 dark:divide-[#626B50] lg:items-stretch">


          {/* Logo and Description */}
          <div className="w-full space-y-4 pb-0 lg:pr-6 col-span-2 lg:col-span-1 ">

            <Link href="/" className="inline-flex items-center gap-4
            ">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#49372D] text-[#FAF0DF] dark:bg-[#FAF0DF] dark:text-[#49372D]">
                <LibraryBig size={34} />
              </div>

              <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                BookNook
              </span>
            </Link>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold">
                Borrow. Share. Read. Together.
              </h3>

              <p className="mx-auto max-w-sm text-sm leading-7 text-[#756456] dark:text-[#D5D8C7] lg:mx-0">
                A cozy community for book lovers. Discover new stories, share
                your favorite books, and make reading a part of everyday life.
              </p>
            </div>
          </div>

         

          {/* Stay Updated */}
          <div className="w-full space-y-3  py-8 md:col-span-2 md:mt-4 lg:col-span-1 lg:mt-0  lg:py-2 lg:px-9 col-span-2  ">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#85896B] dark:text-[#EFCF83]">
                A little note for book lovers
              </p>

              <h3 className=" text-2xl font-bold">
                Stay Updated with BookNook
              </h3>

              <p className="text-sm leading-6 text-[#756456] dark:text-[#D5D8C7]">
                Get cozy reading recommendations, new arrivals, and little
                updates from our book-loving community.
              </p>
            </div>

            <form className="flex w-full flex-col gap-2  sm:flex-row lg:flex-col xl:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                required
                className="w-full min-w-0 flex-1 rounded-lg border border-[#B9A98D] bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-[#9A8977] focus:border-[#85896B] dark:border-[#626B50] dark:placeholder:text-[#B6B9A6]"
              />

              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[#85896B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6F7658]"
              >
                Subscribe
              </button>
            </form>
          </div>

           {/* Contact Information */}
          <div className="w-full space-y-2 py-0 md:py-0 lg:px-6 ">
            <h3 className="text-2xl font-bold mr-6  ">
              Contact Us
            </h3>

            <div className="flex flex-col space-y-2 md:space-y-5 text-sm text-[#756456] dark:text-[#D5D8C7] ">
              <a
                href="mailto:hello@booknook.com"
                className="flex items-center gap-3 transition hover:text-[#85896B] dark:hover:text-[#EFCF83]"
              >
                <Mail size={20} className="shrink-0" />
                <span>hello@booknook.com</span>
              </a>

              <a
                href="tel:+8801234567890"
                className="flex items-center gap-3 transition hover:text-[#85896B] dark:hover:text-[#EFCF83]"
              >
                <Phone size={20} className="shrink-0" />
                <span>+880 1234-567890</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-0.5 shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="w-full space-y-2 md:space-y-4  md:col-span-2 md:py-0 lg:col-span-1 lg:px-6  ">
            <h3 className="text-2xl font-bold">Social Links</h3>

            <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full  transition bg-[#85896B] text-white"
              >
                <FaFacebook size={19} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full  transition bg-[#85896B] text-white"
              >
                <GrInstagram size={19} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full  transition bg-[#85896B] text-white"
              >
                <FaGithub size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-[#B9A98D] pt-6 text-center dark:border-[#626B50]">
          <p className="mx-9 text-sm leading-7 text-[#756456] dark:text-[#D5D8C7]">
            © {new Date().getFullYear()} BookNook. All rights reserved.
            <span className="ml-2 font-medium text-[#85896B] dark:text-[#EFCF83]">
              Read More. Live More.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
