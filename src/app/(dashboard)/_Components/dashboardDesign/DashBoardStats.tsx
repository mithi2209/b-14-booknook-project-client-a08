


import { BookOpen, Bookmark, Users, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Total Books",
    value: "128",
    description: "Books in your library",
    icon: BookOpen,
  },
  {
    title: "My Books",
    value: "24",
    description: "Books you contributed",
    icon: Bookmark,
  },
  {
    title: "Books Borrowed",
    value: "12",
    description: "Currently borrowed",
    icon: Users,
  },
  {
    title: "Reading Progress",
    value: "68%",
    description: "Your reading journey",
    icon: TrendingUp,
  },
];
const DashBoardStats = () => {
  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2
      xl:grid-cols-4"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-border
              bg-card p-5 transition hover:-translate-y-1
              hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div
                className="flex h-11 w-11 items-center
                justify-center rounded-xl bg-secondary
                text-secondary-foreground"
              >
                <Icon size={21} />
              </div>

              <span
                className="rounded-full bg-secondary/50
                px-2.5 py-1 text-xs font-medium
                text-secondary-foreground"
              >
                +12%
              </span>
            </div>

            <p className="mt-5 text-sm text-muted-foreground">{stat.title}</p>

            <h3 className="mt-1 text-3xl font-bold tracking-tight">
              {stat.value}
            </h3>

            <p className="mt-2 text-xs text-muted-foreground">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DashBoardStats;
