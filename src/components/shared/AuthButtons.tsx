// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { UserRound, ChevronDown, LogOut, Pencil, BookOpen } from "lucide-react";

// type AuthButtonsProps = {
//   onNavigate?: () => void;
// };

// import { toast } from "sonner"; 

// import { Button } from "@/components/ui/button";

// import { authClient } from "@/lib/auth-client";



// const AuthButtons = ({ onNavigate }: AuthButtonsProps) => {

//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();

//   // Get logged-in user
//   const { data: session, isPending } = authClient.useSession();

//   const user = session?.user;

//   // Sign out
//   const handleSignOut = async () => {
//     await authClient.signOut();
//     toast.info("Sign out successfully");
//     setIsOpen(false);
//     onNavigate?.();
//     router.push("/");
//     router.refresh();
//   };

//   // Loading
//   if (isPending) {
//     return <div className="h-10 w-24 animate-pulse rounded-full bg-muted" />;
//   }
//   // Logged out: Login and Register
//   if (!user) {
//     return (
//       <div className="flex items-center gap-3">
//         <Link href="/login" onClick={() => router.push("/login")}>
//           <Button
//             variant="outline"
//             className="border-coffee-brown bg-transparent text-coffee-brown hover:bg-terracotta hover:text-coffee-brown dark:border-warm-ivory dark:text-warm-ivory dark:hover:bg-muted-sage dark:hover:text-coffee-brown"
//           >
//             Login
//           </Button>
//         </Link>

//         <Link href="/register" onClick={() => router.push("/register")}>
//           <Button className="bg-coffee-brown text-warm-ivory hover:bg-deep-olive dark:bg-sunny-yellow dark:text-coffee-brown dark:hover:bg-terracotta">
//             Register
//           </Button>
//         </Link>
//       </div>
//     );
//   }

//   // profile
//   return (
//     <div className={`relative ${onNavigate ? "w-full" : "w-fit"}`}>
//       {/* ================= PROFILE TRIGGER ================= */}

//       <Button
//         variant="outline"
//         type="button"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Open profile menu"
//         aria-expanded={isOpen}
//         aria-haspopup="menu"
//         className={`
//           h-auto rounded-lg border border-terracotta/70
//           bg-[#FFF9F0] py-1 pl-1.5 pr-3
//           text-coffee-brown shadow-sm
//           transition-all duration-300
//           hover:border-muted-sage hover:bg-[#F0E2D4]
//           dark:border-[#69745D] dark:bg-[#3F4A3A]
//           dark:text-warm-ivory dark:hover:border-sunny-yellow/60
//           dark:hover:bg-[#485440]
//           ${onNavigate ? "w-full justify-between" : ""}
//         `}
//       >
//         <div className="flex items-center gap-2.5">
//           {/* Avatar */}
//           <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-terracotta bg-terracotta text-coffee-brown dark:border-sunny-yellow/70 dark:bg-sunny-yellow dark:text-coffee-brown">
//             {user.image ? (
//               <img
//                 src={user.image}
//                 alt={user.name || "User"}
//                 className="h-full w-full object-cover"
//               />
//             ) : (
//               <UserRound size={20} strokeWidth={1.8} />
//             )}
//           </div>

//           {/* User Information */}
//           <div
//             className={`min-w-0 text-left ${
//               onNavigate ? "block" : "hidden xl:block"
//             }`}
//           >
//             <p className="max-w-32 truncate text-sm font-semibold leading-5 text-coffee-brown dark:text-warm-ivory">
//               {user.name || "BookNook Reader"}
//             </p>

//             <p className="max-w-32 truncate text-[11px] leading-4 text-[#857264] dark:text-[#C5CBB8]">
//               {user.email}
//             </p>
//           </div>
//         </div>

//         <ChevronDown
//           size={16}
//           className={`shrink-0 transition-transform duration-300 ${
//             isOpen ? "rotate-180" : ""
//           }`}
//         />
//       </Button>

//       {/* ================= DROPDOWN ================= */}

//       {isOpen && (
//         <>
//           {/* Outside Click - Desktop Only */}
//           {!onNavigate && (
//             <button
//               type="button"
//               onClick={() => setIsOpen(false)}
//               aria-label="Close profile menu"
//               className="fixed inset-0 z-40 cursor-default"
//             />
//           )}
//           {/* profile dropdown menu */}
//           <div
//             role="menu"
//             className={`
//               z-50 mt-3 overflow-hidden rounded-2xl
//               border border-terracotta/70
//               bg-[#FFF9F0] p-2
//               text-coffee-brown
//               shadow-[0_12px_40px_rgba(73,55,45,0.16)]
//               dark:border-[#69745D]
//               dark:bg-[#3F4A3A]
//               dark:text-warm-ivory
//               dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
//             ${
//               onNavigate
//                 ? "relative w-full"
//                 : "absolute right-0 top-full w-[min(18rem,calc(100vw-2rem))]"
//             }
//           `}
//           >
//             {/* Profile Identity Section */}
//             <div className="rounded-xl bg-[#F0E2D4] p-4 dark:bg-[#30392F]">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-terracotta bg-terracotta text-coffee-brown dark:border-sunny-yellow/70 dark:bg-sunny-yellow">
//                   {user.image ? (
//                     <img
//                       src={user.image}
//                       alt={user.name || "User"}
//                       className="h-full w-full object-cover"
//                     />
//                   ) : (
//                     <UserRound size={23} />
//                   )}
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <p className="truncate text-sm font-bold">
//                     {user.name || "BookNook Reader"}
//                   </p>

//                   <p className="mt-1 truncate text-xs text-[#857264] dark:text-[#C5CBB8]">
//                     {user.email}
//                   </p>
//                 </div>
//               </div>

//               <div className="mt-3 flex items-center gap-2 border-t border-terracotta/60 pt-3 dark:border-[#69745D]">
//                 <BookOpen
//                   size={14}
//                   className="text-deep-olive dark:text-sunny-yellow"
//                 />

//                 <span className="text-[11px] font-medium tracking-wide text-[#756253] dark:text-[#D8DCCB]">
//                   YOUR LITTLE CORNER OF BOOKS
//                 </span>
//               </div>
//             </div>

//             {/* Menu Items */}
//             <div className="space-y-1 py-2">
//               <button
//                 type="button"
//                 role="menuitem"
//                 onClick={() => {
//                   setIsOpen(false);
//                   onNavigate?.();
//                   router.push("/profile");
//                 }}
//                 className="
//                   flex w-full items-center gap-3 rounded-xl
//                   px-3 py-3 text-sm font-medium
//                   transition-colors duration-200
//                   hover:bg-terracotta/30
//                   dark:hover:bg-[#85896B]/35
//                 "
//               >
//                 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0E2D4] text-deep-olive dark:bg-[#30392F] dark:text-sunny-yellow">
//                   <UserRound size={18} />
//                 </span>

//                 <span className="flex-1 text-left">My Profile</span>

//                 <ChevronDown size={15} className="-rotate-90 text-[#A08D7B]" />
//               </button>

//               <button
//                 type="button"
//                 role="menuitem"
//                 onClick={() => {
//                   setIsOpen(false);
//                   onNavigate?.();
//                   router.push("/profile/edit");
//                 }}
//                 className="
//                   flex w-full items-center gap-3 rounded-xl
//                   px-3 py-3 text-sm font-medium
//                   transition-colors duration-200
//                   hover:bg-terracotta/30
//                   dark:hover:bg-[#85896B]/35
//                 "
//               >
//                 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F0E2D4] text-deep-olive dark:bg-[#30392F] dark:text-sunny-yellow">
//                   <Pencil size={17} />
//                 </span>

//                 <span className="flex-1 text-left">Update Profile</span>

//                 <ChevronDown size={15} className="-rotate-90 text-[#A08D7B]" />
//               </button>
//             </div>

//             {/* Divider */}
//             <div className="mx-2 border-t border-terracotta/60 dark:border-[#69745D]" />

//             {/* Sign Out */}
//             <div className="pt-2">
//               <button
//                 type="button"
//                 role="menuitem"
//                 onClick={handleSignOut}
//                 className="
//                   flex w-full items-center gap-3 rounded-xl
//                   px-3 py-3 text-sm font-semibold
//                   text-[#B94A48]
//                   transition-colors duration-200
//                   hover:bg-[#B94A48]/10
//                   dark:text-[#EF9992]
//                   dark:hover:bg-[#EF7773]/10
//                 "
//               >
//                 <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#B94A48]/10 dark:bg-[#EF7773]/10">
//                   <LogOut size={17} />
//                 </span>
//                 Sign Out
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default AuthButtons;




"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

import ProfilePage from "@/app/(public)/_Components/profile/page";

type AuthButtonsProps = {
  onNavigate?: () => void;
};

const AuthButtons = ({ onNavigate }: AuthButtonsProps) => {
 

  // Get logged-in user
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  // Loading
  if (isPending) {
    return <div className="h-10 w-24 animate-pulse rounded-full bg-muted" />;
  }

  // Logged out: Login and Register
  if (!user) {
    return (
      <div className="flex items-center gap-3">
        <Link href="/login" onClick={onNavigate}>
          <Button
            variant="outline"
            className="border-coffee-brown bg-transparent text-coffee-brown hover:bg-terracotta hover:text-coffee-brown dark:border-warm-ivory dark:text-warm-ivory dark:hover:bg-muted-sage dark:hover:text-coffee-brown"
          >
            Login
          </Button>
        </Link>

        <Link href="/register" onClick={onNavigate}>
          <Button className="bg-coffee-brown text-warm-ivory hover:bg-deep-olive dark:bg-sunny-yellow dark:text-coffee-brown dark:hover:bg-terracotta">
            Register
          </Button>
        </Link>
      </div>
    );
  }

  // Logged-in user: Profile
  return (
    <ProfilePage
      user={user}
      onNavigate={onNavigate}
    />
  );
};

export default AuthButtons;








