

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








