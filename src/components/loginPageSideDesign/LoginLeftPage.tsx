


"use client";


import Link from "next/link";
import { useState } from "react";

import {
  ArrowLeft,
  BookOpen,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  Image as ImageIcon,
  Upload,
} from "lucide-react";



const LoginLeftPage = () => {
    return (

        
        <div className="relative hidden flex-col justify-between overflow-hidden bg-deep-olive p-10 text-warm-ivory md:flex">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sunny-yellow/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-terracotta/20 blur-3xl" />
            
            <Link href="/" className="relative z-10 flex items-center gap-2">
            <BookOpen size={30} />
            <span className="text-2xl font-bold tracking-wide">
              BookNook
            </span>
          </Link>

          <div className="relative z-10 my-12">
            <p className="mb-4 text-xs font-bold tracking-[0.3em] text-sunny-yellow">
              JOIN OUR COMMUNITY
            </p>

            <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
              Your next chapter starts here.
            </h1>

            <p className="mt-5 max-w-sm text-sm leading-7 text-warm-ivory/80">
              Create your BookNook account and discover a world of stories,
              knowledge, and endless reading possibilities.
            </p>
          </div>

          <p className="relative z-10 text-xs tracking-widest text-warm-ivory/60">
            YOUR NEXT CHAPTER AWAITS
          </p>
        </div>
     

        

    );
};

export default LoginLeftPage;