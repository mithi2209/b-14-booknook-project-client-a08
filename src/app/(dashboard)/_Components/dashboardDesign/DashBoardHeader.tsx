

import Link from "next/link";
import { Search, Bell, Menu, ChevronDown } from "lucide-react";

const DashBoardHeader = () => {
  return (
    <section
      className="sticky top-0 z-20 border-b border-border
      bg-background/95 backdrop-blur"
    >
      <div
        className="flex h-16 items-center justify-between
        gap-4 px-4 sm:px-6 lg:px-8"
      >
        {/* Mobile Menu Icon */}
        <button
          type="button"
          className="rounded-lg p-2 hover:bg-muted md:hidden"
          aria-label="Menu"
        >
          <Menu size={21} />
        </button>

        {/* Search */}
        <div className="relative hidden max-w-md flex-1 sm:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2
              -translate-y-1/2 text-muted-foreground"
          />

          <input
            type="search"
            placeholder="Search your library..."
            className="h-10 w-full rounded-xl border border-input
              bg-card pl-10 pr-4 text-sm outline-none
              transition focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* User Area */}
        <div className="ml-auto flex items-center gap-3">
          {/* <button
            type="button"
            aria-label="Notifications"
            className="relative rounded-xl p-2.5
              text-muted-foreground transition hover:bg-muted
              hover:text-foreground"
          >
            <Bell size={20} />

            <span
              className="absolute right-2 top-2 h-2 w-2
              rounded-full bg-primary"
            />
          </button> */}

          <div className="hidden h-8 w-px bg-border sm:block" />

          <Link
            href="/profile"
            className="flex items-center gap-3 rounded-xl
              px-2 py-1.5 transition hover:bg-muted"
          >
            <div
              className="flex h-9 w-9 items-center
              justify-center rounded-full bg-secondary
              text-sm font-bold text-secondary-foreground"
            >
              M
            </div>

            <div className="hidden text-left sm:block">
              <p className="text-sm font-semibold">Mithila Akter</p>

              <p className="text-xs text-muted-foreground">Book Contributor</p>
            </div>

            <ChevronDown
              size={16}
              className="hidden text-muted-foreground sm:block"
            />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default DashBoardHeader;
