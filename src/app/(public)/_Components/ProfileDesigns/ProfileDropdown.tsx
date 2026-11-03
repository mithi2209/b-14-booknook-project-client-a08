"use client";

import { UserRound, ChevronDown, LogOut, Pencil, BookOpen } from "lucide-react";
import { useRouter } from "next/navigation";

type ProfileUser = {
  name?: string | null;
  email: string;
  image?: string | null;
};

type ProfileDropdownProps = {
  user: ProfileUser;
  onClose: () => void;
  onNavigate?: () => void;
  onSignOut: () => void;
};

const ProfileDropdown = ({
  user,
  onClose,
  onNavigate,
  onSignOut,
}: ProfileDropdownProps) => {

  const router = useRouter();

  return (
    <>
      {/* Outside Click - Desktop Only */}
      {!onNavigate && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close profile menu"
          className="fixed inset-0 z-40 cursor-default"
        />
      )}

      {/* Profile Dropdown Menu */}
      <div
        role="menu"
        className={`
          z-50 mt-3 overflow-hidden rounded-2xl
          border border-terracotta/70
          bg-[#FFF9F0] p-2
          text-coffee-brown
          shadow-[0_12px_40px_rgba(73,55,45,0.16)]
          dark:border-[#69745D]
          dark:bg-[#3F4A3A]
          dark:text-warm-ivory
          dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
          ${
            onNavigate
              ? "relative w-full"
              : "absolute right-0 top-full w-[min(18rem,calc(100vw-2rem))]"
          }
        `}
      >
        {/* Profile Identity Section */}
        <div className="rounded-xl bg-[#F0E2D4] p-4 dark:bg-[#30392F]">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-terracotta bg-terracotta text-coffee-brown dark:border-sunny-yellow/70 dark:bg-sunny-yellow">
              {user.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserRound size={23} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold">
                {user.name || "BookNook Reader"}
              </p>

              <p className="mt-1 truncate text-xs text-[#857264] dark:text-[#C5CBB8]">
                {user.email}
              </p>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 border-t border-terracotta/60 pt-3 dark:border-[#69745D]">
            <BookOpen
              size={14}
              className="text-deep-olive dark:text-sunny-yellow"
            />

            <span className="text-[11px] font-medium tracking-wide text-[#756253] dark:text-[#D8DCCB]">
              YOUR LITTLE CORNER OF BOOKS
            </span>
          </div>
        </div>

        {/* Menu Items */}
        <div className="space-y-1 py-2">
          {/* My Profile */}
          <button
            onClick={() => {
              onClose();
              onNavigate?.();
              router.push("/my-profile");
            }}
            className="
              flex w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-medium
              transition-colors duration-200
              hover:bg-terracotta/30
              dark:hover:bg-[#85896B]/35
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0E2D4] text-deep-olive dark:bg-[#30392F] dark:text-sunny-yellow">
              <UserRound size={18} />
            </span>

            <span className="flex-1 text-left">My Profile</span>

            <ChevronDown size={15} className="-rotate-90 text-[#A08D7B]" />
          </button>

          {/* Update Profile */}
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onClose();
              onNavigate?.();
              router.push("/my-profile/profile-update")
            }}
            className="
              flex w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-medium
              transition-colors duration-200
              hover:bg-terracotta/30
              dark:hover:bg-[#85896B]/35
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0E2D4] text-deep-olive dark:bg-[#30392F] dark:text-sunny-yellow">
              <Pencil size={17} />
            </span>

            <span className="flex-1 text-left">Update Profile</span>

            <ChevronDown size={15} className="-rotate-90 text-[#A08D7B]" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-2 border-t border-terracotta/60 dark:border-[#69745D]" />

        {/* Sign Out */}
        <div className="pt-2">
          <button
            type="button"
            role="menuitem"
            onClick={onSignOut}
            className="
              flex w-full items-center gap-3 rounded-xl
              px-3 py-3 text-sm font-semibold
              text-[#B94A48]
              transition-colors duration-200
              hover:bg-[#B94A48]/10
              dark:text-[#EF9992]
              dark:hover:bg-[#EF7773]/10
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B94A48]/10 dark:bg-[#EF7773]/10">
              <LogOut size={17} />
            </span>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
