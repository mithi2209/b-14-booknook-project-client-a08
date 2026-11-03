"use client";

import Link from "next/link";
import { useState } from "react";
import { TUser } from "@/lib/dataType";
import { ArrowLeft, UserRound, Mail, Save } from "lucide-react";

type UpdateProfileFormProps = {
  user: TUser;
};

const UpdateProfileForm = ({ user }: UpdateProfileFormProps) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedUser = {
      name,
      email,
    };

    console.log(updatedUser);

    // Connect your Better Auth update logic here.
  };

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      {/* PAGE HEADING */}
      <div className="pt-8">
        <Link
          href="/my-profile"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#85896B] transition hover:text-[#49372D] dark:hover:text-[#FAF0DF]"
        >
          <ArrowLeft size={16} />
          Back to Profile
        </Link>

        <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-[#85896B]">
          Account Settings
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-[#49372D] dark:text-[#FAF0DF]">
          Update Profile
        </h1>

        <p className="mt-2 text-sm text-[#49372D]/70 dark:text-[#FAF0DF]/70">
          Keep your personal information up to date.
        </p>
      </div>

      {/* UPDATE FORM */}
      <form
        onSubmit={handleSubmit}
        className="overflow-hidden rounded-2xl border border-[#E8BFA5] bg-[#FFF9F0] shadow-sm dark:border-[#69745D] dark:bg-[#3F4A3A]"
      >
        {/* FORM INTRO */}
        <div className="border-b border-[#E8BFA5] px-6 py-5 dark:border-[#69745D] sm:px-8">
          <h2 className="text-lg font-semibold text-[#49372D] dark:text-[#FAF0DF]">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-[#49372D]/60 dark:text-[#FAF0DF]/60">
            Edit the details associated with your BookNook account.
          </p>
        </div>

        {/* FORM FIELDS */}
        <div className="space-y-6 px-6 py-7 sm:px-8">
          {/* NAME FIELD */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-[#49372D] dark:text-[#FAF0DF]"
            >
              Full Name
            </label>

            <div className="relative">
              <UserRound
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#85896B]"
              />

              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                required
                className="w-full rounded-xl border border-[#E8BFA5] bg-white/50 py-3.5 pl-11 pr-4 text-sm text-[#49372D] outline-none transition placeholder:text-[#49372D]/40 focus:border-[#85896B] focus:ring-2 focus:ring-[#85896B]/20 dark:border-[#69745D] dark:bg-[#30392F]/50 dark:text-[#FAF0DF] dark:placeholder:text-[#FAF0DF]/40"
              />
            </div>
          </div>

          {/* EMAIL FIELD */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#49372D] dark:text-[#FAF0DF]"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#85896B]"
              />

              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full rounded-xl border border-[#E8BFA5] bg-white/50 py-3.5 pl-11 pr-4 text-sm text-[#49372D] outline-none transition placeholder:text-[#49372D]/40 focus:border-[#85896B] focus:ring-2 focus:ring-[#85896B]/20 dark:border-[#69745D] dark:bg-[#30392F]/50 dark:text-[#FAF0DF] dark:placeholder:text-[#FAF0DF]/40"
              />
            </div>
          </div>
        </div>

        {/* FORM FOOTER */}
        <div className="flex flex-col-reverse gap-3 border-t border-[#E8BFA5] bg-[#F0E2D4]/40 px-6 py-5 dark:border-[#69745D] dark:bg-[#30392F]/30 sm:flex-row sm:justify-end sm:px-8">
          <Link
            href="/my-profile"
            className="inline-flex items-center justify-center rounded-xl border border-[#E8BFA5] px-5 py-3 text-sm font-medium text-[#49372D] transition hover:bg-[#F0E2D4] dark:border-[#69745D] dark:text-[#FAF0DF] dark:hover:bg-[#3F4A3A]"
          >
            Cancel
          </Link>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#49372D] px-6 py-3 text-sm font-medium text-[#FAF0DF] transition hover:bg-[#625044] dark:bg-[#EFCF83] dark:text-[#49372D] dark:hover:bg-[#f4d998]"
          >
            <Save size={16} />
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;
