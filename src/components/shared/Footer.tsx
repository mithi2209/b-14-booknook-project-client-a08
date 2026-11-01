import Link from "next/link";

import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import footerLight from "@/assets/images/footer-image-1.jpg";
import footerDark from "@/assets/images/footer-img-dark-.jpg";
import { LibraryBig, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    // <footer
    //   className="footer-bg bg-[#FAF0DF]  text-[#49372D] dark:bg-[#30392F] dark:text-[#FAF0DF] border-t border-border  "
    //   style={
    //     {
    //       "--footer-light": `url("${footerLight.src}")`,
    //       "--footer-dark": `url("${footerDark.src}")`,
    //     } as React.CSSProperties
    //   }
    // >
    //   <div className="mx-auto container px-6 pb-8 pt-14 md:px-10 lg:px-0 ">
    //     {/* Main Footer Content */}
    //     <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3   lg:items-start items-center justify-center lg:justify-start text-center lg:text-left">
    //       {/* Logo and Description */}
    //       <div className="space-y-2">
    //         <Link href="/" className="inline-flex items-center gap-4">
    //           <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#49372D] text-[#FAF0DF] dark:bg-[#FAF0DF] dark:text-[#49372D]">
    //             <LibraryBig size={34} />
    //           </div>

    //           <span className=" text-4xl font-bold tracking-tight">
    //             BookNook
    //           </span>
    //         </Link>

    //         <div className="space-y-2">
    //           <h3 className=" text-lg font-semibold">
    //             Borrow. Share. Read. Together.
    //           </h3>

    //           <p className="max-w-sm text-sm leading-7 text-[#756456] dark:text-[#D5D8C7]">
    //             A cozy community for book lovers. Discover new stories, share
    //             your favorite books, and make reading a part of everyday life.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Contact Information */}
    //       <div className="space-y-3 ">
    //         <h3 className=" text-2xl font-bold">Contact Us</h3>

    //         <div className=" justify-center lg:justify-start text-center lg:text-center space-y-5 text-sm text-[#756456] dark:text-[#D5D8C7] ">
    //           <a
    //             href="mailto:hello@booknook.com"
    //             className="flex items-center gap-3 transition hover:text-[#85896B] dark:hover:text-[#EFCF83]"
    //           >
    //             <Mail size={20} className="shrink-0" />
    //             <span>hello@booknook.com</span>
    //           </a>

    //           <a
    //             href="tel:+8801234567890"
    //             className="flex items-center gap-3 transition hover:text-[#85896B] dark:hover:text-[#EFCF83]"
    //           >
    //             <Phone size={20} className="shrink-0" />
    //             <span>+880 1234-567890</span>
    //           </a>

    //           <div className="flex items-start gap-3">
    //             <MapPin size={20} className="mt-0.5 shrink-0" />
    //             <span>Dhaka, Bangladesh</span>
    //           </div>
    //         </div>
    //       </div>

    //       {/* Social Links */}
    //       <div className="space-y-3">
    //         <h3 className=" text-2xl font-bold">Social Links</h3>

    //         <div className="flex items-center gap-3 pt-2">
    //           <a
    //             href="https://facebook.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Facebook"
    //             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
    //           >
    //             <FaFacebook size={19} />
    //           </a>

    //           <a
    //             href="https://instagram.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="Instagram"
    //             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
    //           >
    //             <GrInstagram size={19} />
    //           </a>

    //           <a
    //             href="https://github.com"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             aria-label="GitHub"
    //             className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
    //           >
    //             <FaGithub size={19} />
    //           </a>
    //         </div>
    //       </div>

    //     </div>

    //     {/* Copyright */}
    //     <div className="mt-8 border-t border-[#B9A98D] pt-6 text-center dark:border-[#626B50]">
    //       <p className="font-serif text-sm text-[#756456] dark:text-[#D5D8C7]">
    //         © {new Date().getFullYear()} BookNook. All rights reserved.
    //         <span className="ml-2 font-medium text-[#85896B] dark:text-[#EFCF83]">
    //           Read More. Live More.
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    
<footer
  className="footer-bg border-t border-border bg-[#FAF0DF] text-[#49372D] dark:bg-[#30392F] dark:text-[#FAF0DF]"
  style={
    {
      "--footer-light": `url("${footerLight.src}")`,
      "--footer-dark": `url("${footerDark.src}")`,
    } as React.CSSProperties
  }
>
  <div className="container mx-auto px-5 pb-8 pt-4 sm:px-8 sm:pb-10 sm:pt-10 lg:px-6">
    {/* Main Footer Content */}
    <div className="grid grid-cols-1 items-center justify-items-center gap-10 text-center md:grid-cols-2 md:items-start md:justify-items-center md:gap-12 lg:grid-cols-3 lg:justify-items-start lg:text-left ">

      {/* Logo and Description */}
      <div className="w-full space-y-4">
        <Link href="/" className="inline-flex items-center gap-4">
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

      {/* Contact Information */}
      <div className="w-full space-y-4">
        <h3 className="text-2xl font-bold text-center md:text-left">Contact Us</h3>

        <div className="flex flex-col items-center space-y-5 text-sm text-[#756456] dark:text-[#D5D8C7] md:items-start">
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
      <div className="w-full space-y-4 md:col-span-2 lg:col-span-1">
        <h3 className="text-2xl font-bold">Social Links</h3>

        <div className="flex items-center justify-center gap-3 pt-2 lg:justify-start">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
          >
            <FaFacebook size={19} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
          >
            <GrInstagram size={19} />
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#85896B]/20 transition hover:bg-[#85896B] hover:text-white"
          >
            <FaGithub size={19} />
          </a>
        </div>
      </div>

    </div>

    {/* Copyright */}
    <div className="mt-10 border-t border-[#B9A98D] pt-4  dark:border-[#626B50] text-center ">
      <p className="text-sm mx-9 md:mx-auto leading-7 text-[#756456] dark:text-[#D5D8C7]">
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
