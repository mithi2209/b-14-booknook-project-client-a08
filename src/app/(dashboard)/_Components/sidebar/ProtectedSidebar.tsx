

"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";

import {Library,BookPlus, ClipboardList,Bookmark,ChevronRight,
  UserRound,
  House,
  Sun,
  Moon,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    href: "/",
    icon: House,
  },
  {
    title: "My Books",
    href: "/my-books",
    icon: Library,
  },
  {
    title: "Add Books",
    href: "/add-books",
    icon: BookPlus,
  },
  {
    title: "My Borrowed",
    href: "/my-borrowed-books",
    icon: ClipboardList,
  },
  {
    title: "My Profile",
    href: "/my-profile",
    icon: UserRound,
  },
];

const ProtectedSidebar = () => {

  const pathname = usePathname();
  const router = useRouter();

 
  const { data: session } = authClient.useSession();
  const user = session?.user;


  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Sign Out
  const handleSignOut = async () => {
    try {
      await authClient.signOut();

      toast.info("Sign out successfully");

      router.push("/");
      router.refresh();
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  // User initials
  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "U";

  return (

    <aside className="flex w-full shrink-0 flex-col border-b border-border bg-card p-4 lg:min-h-screen lg:w-64 lg:border-r lg:border-b-0 lg:p-6">

      {/* Logo */}
      <Link href="/" className="mb-8 flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-[#85896B] text-[#FAF0DF]">
          <Bookmark size={23} />
        </div>

        <div>
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            BookNook
          </h2>

          <p className="text-xs text-muted-foreground">
            Your little reading corner
          </p>
        </div>
      </Link>

      {/* Menu Heading */}
      <div className="mb-4">
        <p className="px-3 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Workspace
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:overflow-visible">
        {menuItems.map((item) => {
          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex shrink-0 items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#85896B] text-[#FAF0DF] shadow-sm dark:bg-[#A9B49A] dark:text-[#30392F]"
                  : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground"
              }`}
            >
              <Icon
                size={19}
                className={`shrink-0 transition-transform duration-200 ${
                  isActive ? "" : "group-hover:scale-110"
                }`}
              />

              <span>{item.title}</span>

              {isActive && (
                <ChevronRight size={16} className="ml-auto" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Account & Appearance Section */}
      <div className="mt-6 border-t border-border pt-4">

        {/* Appearance / Theme Toggle */}
        <div className="mb-3 flex items-center justify-between rounded-xl px-3 py-2">
          <div className="flex items-center gap-2.5">
            {mounted && resolvedTheme === "dark" ? (
              <Moon
                size={17}
                className="text-[#85896B] dark:text-[#EFCF83]"
              />
            ) : (
              <Sun
                size={17}
                className="text-[#85896B] dark:text-[#EFCF83]"
              />
            )}

            <span className="text-sm font-medium text-muted-foreground">
              Appearance
            </span>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title="Toggle theme"
            className="flex size-8 items-center justify-center rounded-full text-[#85896B] transition-colors hover:bg-[#E8DFC9] dark:text-[#EFCF83] dark:hover:bg-[#46513F]"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
        </div>

        {/* Account Section */}
        <div className="flex items-center gap-2 rounded-xl bg-[#E8DFC9]/50 p-2 dark:bg-[#46513F]/50">

          {/* Profile Photo and Name */}
          <Link
            href="/my-profile"
            className="flex min-w-0 flex-1 items-center gap-2.5 rounded-lg p-1 transition-colors hover:bg-[#85896B]/10"
          >
            {/* Avatar */}
            <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#85896B] bg-[#E8DFC9] text-sm font-bold text-[#50573D] dark:border-[#A9B49A] dark:bg-[#46513F] dark:text-[#FAF0DF]">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user.name || "User"}
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>

            {/* User Information */}
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">
                {user?.name || "BookNook Reader"}
              </p>

              <p className="truncate text-[11px] text-muted-foreground">
                {user?.email || "Welcome back"}
              </p>
            </div>
          </Link>

          {/* Logout */}
          <button
            type="button"
            onClick={handleSignOut}
            aria-label="Log out"
            title="Log out"
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-[#B94A48] transition-colors hover:bg-[#B94A48]/10 dark:text-[#EF9992] dark:hover:bg-[#EF7773]/10"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Note - Original Design */}
      <div className="mt-auto hidden rounded-2xl bg-[#E8DFC9]/60 p-4 dark:bg-[#46513F]/60 lg:block">
        <BookPlus
          size={22}
          className="mb-3 text-[#85896B] dark:text-[#EFCF83]"
        />

        <p className="text-sm font-semibold text-foreground">
          Every book has a story.
        </p>

        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Keep exploring, collecting, and sharing your favorite reads.
        </p>
      </div>

    </aside>
  );
};

export default ProtectedSidebar;
