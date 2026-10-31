
// Dashboard overview


import type { Metadata } from "next";
import DashboardStats from "@/components/dashboard-compo/DashboardStats";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage your BookNook library.",

};




const DashboardPage = () => {
    return (
         <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-2 text-muted-foreground">
          Welcome to your BookNook dashboard.
          Manage your books and borrowing activity here.
        </p>
      </div>

      <DashboardStats />

      <section className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-semibold">
          Welcome to BookNook
        </h2>

        <p className="mt-2 text-muted-foreground">
          Start by adding a book to your library or
          explore the books available to borrow.
        </p>
      </section>
    </div>
    );
};

export default DashboardPage;