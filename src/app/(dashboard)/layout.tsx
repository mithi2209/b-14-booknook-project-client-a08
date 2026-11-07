


import ProtectedSidebar from "./_Components/sidebar/ProtectedSidebar";






export default async function DashboardLayout({ children }: LayoutProps<"/">) {
 

  return (
     <div className="flex min-h-screen flex-col bg-background lg:flex-row">


      
      <ProtectedSidebar/>

      <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
    
        {children}
      </main>
    </div>
  );
}


