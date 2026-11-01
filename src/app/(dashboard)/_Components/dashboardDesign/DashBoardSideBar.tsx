

import {
  LayoutDashboard,
  House,
  BookOpen,
  PlusCircle,
  Bookmark,
  BookMarked,
  UserRound,
  Link,
  LibraryBig,
} from "lucide-react";

const navItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    label: "All Books",
    href: "/books",
    icon: BookOpen,
  },
  {
    label: "Add Book",
    href: "/add-books",
    icon: PlusCircle,
  },
  {
    label: "My Books",
    href: "/my-books",
    icon: Bookmark,
  },
  {
    label: "My Borrows",
    href: "/my-borrows",
    icon: BookMarked,
  },
  {
    label: "My Profile",
    href: "/profile",
    icon: UserRound,
  },
];

const DashBoardSideBar = () => {
    return (
    <aside className="flex h-full flex-col border-r border-border
      bg-card px-5 py-6">

      
        {/* Logo */}
        <Link href="/" className="mb-10 flex items-center gap-3">
            <span
                className="
                flex h-11 w-11 items-center justify-center
                rounded-xl bg-primary text-primary-foreground
                "
            >
            <LibraryBig size={23} />
            </span>

            <span className="text-xl font-bold">BookNook</span>
        </Link>

      {/* Navigation */}
      <div className="mb-3 px-3 text-xs font-semibold uppercase
        tracking-widest text-muted-foreground">
        Menu
      </div>

      <div className="space-y-2">
        {navItems.map((item) => {
                    const Icon = item.icon;

          return (
           
                <Link
                key={item.label}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3
                    text-sm font-medium transition
                        ${item.href === "/dashboard"
                            ? "bg-primary text-primary-foreground shadow-sm"
                            : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                            
                        }
                    `}>
                <Icon size={19} />
                {item.label}
                </Link>
            );
        })}
      </div>

      {/* Bottom Note */}
      <div className="mt-auto rounded-2xl bg-secondary/50 p-4">
        <BookOpen size={22} className="mb-3 text-primary" />

        <p className="text-sm font-semibold">
          Keep turning pages
        </p>

        <p className="mt-1 text-xs leading-5 text-muted-foreground">
          Every book opens a new world.
        </p>
      </div>
    </aside>



    );
};

export default DashBoardSideBar;