
import DashboardHeaders from "./DashboardHeaders";
import DashboardSidebar from "./DashboardSidebar";



const DashboardShell = ({children,}: {children: React.ReactNode;}) => {
    return (
       <div className="min-h-screen bg-muted/40">
      <DashboardSidebar/>

      <div className="md:pl-64">
        <DashboardHeaders />

        <main className="p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
    );
};

export default DashboardShell;