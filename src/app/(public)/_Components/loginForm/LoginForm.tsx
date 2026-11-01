
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
} from "lucide-react";

import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
Card,
CardContent,
} from "@/components/ui/card";

const LoginForm = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault();

// Connect your Better Auth login function here.
console.log({ email, password });

};
 
    return (
        <section className="flex min-h-screen items-center justify-center bg-[#FAF0DF] px-4 py-6 text-[#49372D] transition-colors dark:bg-[#30392F] dark:text-[#FAF0DF]">
<div className="w-full max-w-md">

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

      <h1 className="text-2xl font-bold">
        Login to Your Account
      </h1>

      <p className="mt-1 text-sm text-[#6D584A] dark:text-[#D8DCCF]">
        Welcome back! Continue your reading journey.
      </p>
    </div>

    {/* Login Card */}
    <Card className="gap-0 border-[#E8BFA5] bg-[#FFF9F0] py-5 lg:py-7 pt-2 shadow-md dark:border-[#69745D] dark:bg-[#3F4A3A]">
      <CardContent className="px-5 py-5  sm:px-6">

        <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">

          {/* Email */}
          <div className="space-y-1.5">
            <Label htmlFor="email">
              Email Address
            </Label>

            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />

              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">
                Password
              </Label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-[#73785C] underline-offset-4 hover:underline dark:text-[#EFCF83]"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#85896B]" />

              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="border-[#D5C6A9] bg-[#FAF0DF] pl-10 pr-11 focus-visible:ring-[#85896B] dark:border-[#69745D] dark:bg-[#30392F]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#85896B]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            className="w-full font-semibold bg-coffee-brown text-warm-ivory hover:bg-deep-olive dark:bg-sunny-yellow dark:text-coffee-brown dark:hover:bg-terracotta"
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="my-3 flex items-center gap-3">
          <div className="h-px flex-1 bg-[#D5C6A9] dark:bg-[#69745D]" />

          <span className="text-xs text-[#85896B]">
            OR CONTINUE WITH
          </span>

          <div className="h-px flex-1 bg-[#D5C6A9] dark:bg-[#69745D]" />
        </div>

        {/* Google Login */}
        <Button
          type="button"
          variant="outline"
          className="w-full border-[#D5C6A9] bg-transparent hover:bg-[#A9B49A]/20 dark:border-[#69745D] dark:hover:bg-[#85896B]/20"
        >
          <FcGoogle className="h-5 w-5" />
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="mt-4 text-center text-sm text-[#6D584A] dark:text-[#D8DCCF]">
          Don't have an account?{" "}

          <Link
            href="/register"
            className="font-semibold text-[#73785C] underline-offset-4 hover:underline dark:text-[#EFCF83]"
          >
            Register
          </Link>
        </p>
      </CardContent>
    </Card>

    {/* Back to Home */}
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

export default LoginForm;