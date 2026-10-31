

// Authentication guard user

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import DashboardShell from "@/components/dashboard-compo/DashboardShell";



export default async function DashboardLayout({ children }: LayoutProps<"/">) {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     redirect("/login");
//   }

  return (
    <DashboardShell>
      {children}
    </DashboardShell>
  );
}


