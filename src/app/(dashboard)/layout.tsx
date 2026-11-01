

// Authentication guard user

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import DashBoardShell from "./_Components/dashboardDesign/DashBoardShell";




export default async function DashboardLayout({ children }: LayoutProps<"/">) {
//   const session = await auth.api.getSession({
//     headers: await headers(),
//   });

//   if (!session) {
//     redirect("/login");
//   }

  return (
    <DashBoardShell>
      {children}
    </DashBoardShell>
  );
}


