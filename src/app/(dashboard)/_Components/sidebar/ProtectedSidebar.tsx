"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Library,
  BookPlus,
  ClipboardList,
  Bookmark,
  ChevronRight,
  UserRound,
  House,
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
    title: "My Borrowed ",
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
            pathname === item.href || pathname.startsWith(`${item.href}/`);

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

              {isActive && <ChevronRight size={16} className="ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Note */}
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
