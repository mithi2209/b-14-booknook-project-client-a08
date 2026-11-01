

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

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
} from "@/components/ui/card";






const RegisterForm = () => {
   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (value: string) => {
    if (value.length < 6) return "Password must be at least 6 characters.";
    if (!/[A-Z]/.test(value)) return "Add at least one uppercase letter.";
    if (!/[a-z]/.test(value)) return "Add at least one lowercase letter.";
    return "";
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validatePassword(password);

    if (error) {
      setPasswordError(error);
      return;
    }

    setPasswordError("");

    // Connect your registration API/authentication here.
    console.log({ name, email, password, photoURL, photoFile });
  };

    return (

   <section className="flex min-h-screen items-center justify-center bg-[#FAF0DF] px-4  py-6  text-[#49372D] transition-colors dark:bg-[#30392F] dark:text-[#FAF0DF]">
      <div className="w-full max-w-md ">

        {/* Logo and Heading */}
        <div className="mb-5 text-center">
          <Link href="/" className="mb-3 inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#85896B] text-[#FAF0DF] dark:bg-[#EFCF83] dark:text-[#49372D]">
              <BookOpen size={22} />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              BookNook
            </span>
          </Link>

          <h1 className="text-2xl font-bold">Register Your Account</h1>
          <p className="mt-1 text-sm text-[#6D584A] dark:text-[#D8DCCF]">
            Join BookNook and discover your next favorite book.
          </p>
        </div>

        {/* Register Card */}
        <Card className="gap-0 border-[#E8BFA5] bg-[#FFF9F0] py-5 pt-2 lg:mt-8 shadow-md dark:border-[#69745D] dark:bg-[#3F4A3A]">
          <CardContent className="px-5 sm:px-6 py-5">
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">

              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
                  />
                </div>
              </div>

              {/* Profile Photo */}
              <div className="space-y-1.5">
                <Label>
                  Profile Photo{" "}
                  <span className="font-normal text-[#85896B]"></span>
                </Label>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="relative flex-1">

                    <ImageIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                    <Input
                      type="url"
                      placeholder="Paste photo URL"
                      value={photoURL}
                      onChange={(e) => {
                        setPhotoURL(e.target.value);
                        setPhotoFile(null);
                      }}
                      className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
                    />
                  </div>

                  <label className="flex min-h-9 cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-[#85896B] bg-[#A9B49A]/20 px-3 text-sm font-medium text-[#49372D] transition hover:bg-[#A9B49A]/40 dark:text-[#FAF0DF] sm:max-w-[145px]">
                    <Upload className="h-4 w-4" />
                    <span className="max-w-[105px] truncate">
                      {photoFile ? photoFile.name : "Upload Photo"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setPhotoFile(file);
                        if (file) setPhotoURL("");
                      }}
                    />
                  </label>
                </div>
                <p className="text-xs text-[#85896B] dark:text-[#A9B49A]">
                  Use a photo URL or upload an image from your device.
                </p>
              </div>

              {/* Password */}
              <div className="space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setPasswordError("");
                    }}
                    required
                    className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 pr-11 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#85896B]"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <p className="text-xs text-[#85896B] dark:text-[#A9B49A]">
                  At least 6 characters, one uppercase and one lowercase letter.
                </p>

                {passwordError && (
                  <p className="text-xs font-medium text-red-600 dark:text-red-400">
                    {passwordError}
                  </p>
                )}
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full  font-semibold bg-coffee-brown text-warm-ivory hover:bg-deep-olive dark:bg-sunny-yellow dark:text-coffee-brown dark:hover:bg-terracotta"
              >
                Register Account
              </Button>
            </form>

            {/* Divider */}
            <div className="my-3 flex items-center gap-3">
              <div className="h-px flex-1 bg-[#D5C6A9] dark:bg-[#69745D]" />
              <span className="text-xs text-[#85896B]">OR CONTINUE WITH</span>
              <div className="h-px flex-1 bg-[#D5C6A9] dark:bg-[#69745D]" />
            </div>

            {/* Google Signup */}
            <Button
              type="button"
              variant="outline"
              className="w-full border-[#D5C6A9] bg-transparent hover:bg-[#A9B49A]/20 dark:border-[#69745D] dark:hover:bg-[#85896B]/20"
            >
              <FcGoogle className="h-5 w-5" />
              Sign up with Google
            </Button>

            {/* Login Link */}
            <p className="mt-4 text-center text-sm text-[#6D584A] dark:text-[#D8DCCF]">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#73785C] underline-offset-4 hover:underline dark:text-[#EFCF83]"
              >
                Login
              </Link>
            </p>
          </CardContent>
        </Card>

        {/* Back to Home - Moved to Bottom */}
        <div className="mt-5 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#73785C] transition hover:text-[#49372D] dark:text-[#A9B49A] dark:hover:text-[#EFCF83]"
          >
            <ArrowLeft size={15} />
            Back to Home
          </Link>
        </div>
      </div>
    </section>
    );
};

export default RegisterForm;