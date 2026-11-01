


import Link from "next/link";
import {
  Plus,
  ArrowUpRight,
  BookOpen,
  Clock3,
} from "lucide-react";

import DashBoardStats from "../_Components/dashboardDesign/DashBoardStats";

const recentBooks = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Fiction",
    status: "Available",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "Science",
    status: "Borrowed",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    status: "Available",
  },
];

const activities = [
  {
    title: "The Silent Patient",
    description: "You added a new book to your library.",
    time: "Today, 10:30 AM",
  },
  {
    title: "A Brief History of Time",
    description: "A book was borrowed from your library.",
    time: "Yesterday, 4:20 PM",
  },
  {
    title: "The Alchemist",
    description: "You returned a borrowed book.",
    time: "Oct 29, 2026",
  },
];
const DashboardPage = () => {
    return (
        <div className="space-y-8">

      {/* Welcome Section */}
      <section className="flex flex-col justify-between gap-5
        sm:flex-row sm:items-center">

        <div>
          <p className="text-sm font-medium text-primary">
            Sunday, November 1, 2026
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight
            sm:text-4xl">
            Good evening, Mithila!
          </h1>

          <p className="mt-2 max-w-xl text-sm leading-6
            text-muted-foreground">
            Your little library is growing. Keep sharing the
            stories you love.
          </p>
        </div>

        <Link
          href="/add-books"
          className="inline-flex h-11 shrink-0 items-center
            justify-center gap-2 rounded-xl bg-primary
            px-5 text-sm font-semibold
            text-primary-foreground shadow-sm transition
            hover:opacity-90"
        >
          <Plus size={18} />
          Add New Book
        </Link>
      </section>

      {/* Statistics */}
      <DashBoardStats />

      {/* Recent Books */}
      <section className="rounded-2xl border border-border
        bg-card">

        <div className="flex items-center justify-between
          gap-3 border-b border-border p-5 sm:p-6">

          <div>
            <h2 className="text-lg font-semibold">
              Recent Books
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Your latest library additions.
            </p>
          </div>

          <Link
            href="/my-books"
            className="inline-flex items-center gap-1
              text-sm font-medium text-primary
              transition hover:opacity-80"
          >
            View all
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left">
            <thead>
              <tr className="border-b border-border
                bg-muted/40 text-xs uppercase
                tracking-wider text-muted-foreground">
                <th className="px-6 py-4 font-medium">
                  Book
                </th>
                <th className="px-6 py-4 font-medium">
                  Category
                </th>
                <th className="px-6 py-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {recentBooks.map((book) => (
                <tr
                  key={book.title}
                  className="border-b border-border
                    last:border-0 transition
                    hover:bg-muted/30"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11
                        shrink-0 items-center justify-center
                        rounded-xl bg-secondary
                        text-secondary-foreground">
                        <BookOpen size={20} />
                      </div>

                      <div>
                        <p className="text-sm font-semibold">
                          {book.title}
                        </p>

                        <p className="mt-1 text-xs
                          text-muted-foreground">
                          {book.author}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full
                      bg-secondary/50 px-3 py-1.5
                      text-xs font-medium
                      text-secondary-foreground">
                      {book.category}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1.5
                        text-xs font-medium ${
                        book.status === "Available"
                          ? "bg-secondary/50 text-secondary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {book.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="rounded-2xl border border-border
        bg-card p-5 sm:p-6">

        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            What has been happening in your library.
          </p>
        </div>

        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={activity.title}
              className="flex gap-4">

              <div className="relative flex h-10 w-10
                shrink-0 items-center justify-center
                rounded-full bg-secondary
                text-secondary-foreground">

                <Clock3 size={18} />

                {index !== activities.length - 1 && (
                  <div className="absolute left-1/2
                    top-10 h-6 w-px -translate-x-1/2
                    bg-border" />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">
                  {activity.title}
                </p>

                <p className="mt-1 text-sm
                  text-muted-foreground">
                  {activity.description}
                </p>

                <p className="mt-2 text-xs
                  text-muted-foreground">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
    );
};

export default DashboardPage;