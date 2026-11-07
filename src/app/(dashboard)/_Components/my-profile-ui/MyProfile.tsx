

"use client";

import Link from "next/link";
import { TUser } from "@/lib/dataType";
import { Pencil, Mail, UserRound, ShieldCheck, House } from "lucide-react";

type MyProfileProps = {
  user: TUser;
};

const MyProfilePage = ({ user }: MyProfileProps) => {
  return (
    <div className="space-y-8">

      {/* PAGE HEADING */}
      
      <div className="pt-8">
        {/* BACK TO HOME */}
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-[#49372D]/70 transition hover:bg-[#F0E2D4] hover:text-[#49372D] dark:text-[#FAF0DF]/70 dark:hover:bg-[#3F4A3A] dark:hover:text-[#FAF0DF]"
        >
          <House size={16} />
          Back to Home
        </Link>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#85896B]">
          Account Settings
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-[#49372D] dark:text-[#FAF0DF]">
          My Profile
        </h1>

        <p className="mt-2 text-sm text-[#49372D]/70 dark:text-[#FAF0DF]/70">
          Manage your personal information and account details.
        </p>
      </div>

      {/* PROFILE CONTENT */}
      <div className="mx-auto w-full max-w-3xl space-y-5 py-6">
        {/* MAIN PROFILE CARD */}
        <div className="rounded-2xl border border-[#E8BFA5] bg-[#FFF9F0] p-6 shadow-sm dark:border-[#69745D] dark:bg-[#3F4A3A] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            
            {/* SMALL AVATAR */}
            {user.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-[#F0E2D4] dark:ring-[#69745D]"
              />
            ) : (
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#E8BFA5] text-3xl font-semibold text-[#49372D] ring-4 ring-[#F0E2D4] dark:bg-[#69745D] dark:text-[#FAF0DF] dark:ring-[#85896B]">

                {user.name?.charAt(0).toUpperCase() || "BK"}

              </div>
            )}

            {/* USER INFORMATION */}
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-[#85896B]">
                BookNook Member
              </p>

              <h2 className="mt-1 truncate text-2xl font-semibold text-[#49372D] dark:text-[#FAF0DF]">
                {user.name}
              </h2>

              <p className="mt-1 break-all text-sm text-[#49372D]/65 dark:text-[#FAF0DF]/65">
                {user.email}
              </p>
            </div>

            {/* EDIT BUTTON */}
            <Link
              href="/my-profile/profile-update"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#49372D] px-6 py-2.5 text-sm font-medium text-[#FAF0DF] transition hover:bg-[#625044] dark:bg-[#EFCF83] dark:text-[#49372D] dark:hover:bg-[#f4d998]"
            >
              <Pencil size={16} />
              Edit Profile
            </Link>
          </div>
        </div>

        {/* PERSONAL DETAILS */}
        <div className="rounded-2xl border border-[#E8BFA5] bg-[#FFF9F0] p-6 shadow-sm dark:border-[#69745D] dark:bg-[#3F4A3A] sm:p-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-[#49372D] dark:text-[#FAF0DF]">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-[#49372D]/60 dark:text-[#FAF0DF]/60">
              Your account details at a glance.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* NAME */}
            <div className="flex items-start gap-3 rounded-xl bg-[#F0E2D4]/70 p-4 dark:bg-[#30392F]">
              <UserRound size={19} className="mt-1 shrink-0 text-[#85896B]" />

              <div className="min-w-0">
                <p className="text-xs text-[#85896B]">Full Name</p>
                <p className="mt-1 wrap-break-word font-medium text-[#49372D] dark:text-[#FAF0DF]">
                  {user.name}
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-3 rounded-xl bg-[#F0E2D4]/70 p-4 dark:bg-[#30392F]">
              <Mail size={19} className="mt-1 shrink-0 text-[#85896B]" />

              <div className="min-w-0">
                <p className="text-xs text-[#85896B]">Email Address</p>
                <p className="mt-1 break-all font-medium text-[#49372D] dark:text-[#FAF0DF]">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* ACCOUNT STATUS */}
          <div className="mt-5 flex items-center gap-3 border-t border-[#E8BFA5] pt-5 dark:border-[#69745D]">
            <ShieldCheck size={19} className="text-[#85896B]" />
            <p className="text-sm text-[#49372D]/70 dark:text-[#FAF0DF]/70">
              Your BookNook account information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
