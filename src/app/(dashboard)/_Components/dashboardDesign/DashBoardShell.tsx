

import type { ReactNode } from "react";
import DashBoardSideBar from "./DashBoardSideBar";
import DashBoardHeader from './DashBoardHeader';


const DashBoardShell = ({children}: {children: ReactNode;}) => {
    
  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 z-30 hidden
        w-64 md:block">
        <DashBoardSideBar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen md:pl-64">
        <DashBoardHeader />

        <main className="mx-auto max-w-[1600px] px-4 py-6
          sm:px-6 lg:px-8 lg:py-8">
          {children}
        </main>
      </div>
    </div>
    );
};

export default DashBoardShell;