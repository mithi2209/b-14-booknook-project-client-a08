
"use client";

import { UserRound, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProfileUser = {
  name?: string | null;
  email: string;
  image?: string | null;
};

type ProfileTriggerProps = {
  user: ProfileUser;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
};

const ProfileTrigger = ({
  user,
  isOpen,
  onToggle,
  onNavigate,
}: ProfileTriggerProps) => {

  return (

    <Button
    
      variant="outline"
      type="button"
      onClick={onToggle}
      aria-label="Open profile menu"
      aria-expanded={isOpen}
      aria-haspopup="menu"
      className={`
        h-auto rounded-lg border border-terracotta/70
        bg-[#FFF9F0] py-1 pl-1.5 pr-3
        text-coffee-brown shadow-sm
        transition-all duration-300
        hover:border-muted-sage hover:bg-[#F0E2D4]
        dark:border-[#69745D] dark:bg-[#3F4A3A]
        dark:text-warm-ivory dark:hover:border-sunny-yellow/60
        dark:hover:bg-[#485440]
        ${onNavigate ? "w-full justify-between" : ""}
      `}
    >
      <div className="flex items-center gap-2.5">
        {/* Avatar */}
        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-terracotta bg-terracotta text-coffee-brown dark:border-sunny-yellow/70 dark:bg-sunny-yellow dark:text-coffee-brown">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="h-full w-full object-cover"
            />
          ) : (
            <UserRound size={20} strokeWidth={1.8} />
          )}
        </div>

        {/* User Information */}
        <div
          className={`min-w-0 text-left ${
            onNavigate ? "block" : "hidden xl:block"
          }`}
        >
          <p className="max-w-32 truncate text-sm font-semibold leading-5 text-coffee-brown dark:text-warm-ivory">
            {user.name || "BookNook Reader"}
          </p>

          <p className="max-w-32 truncate text-[11px] leading-4 text-[#857264] dark:text-[#C5CBB8]">
            {user.email}
          </p>
        </div>
      </div>

      {/* Chevron */}
      <ChevronDown
        size={16}
        className={`shrink-0 transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </Button>
  );
};

export default ProfileTrigger;
