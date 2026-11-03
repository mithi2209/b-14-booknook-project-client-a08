"use client";

import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import ProfileTrigger from "../ProfileDesigns/ProfileTrigger";
import ProfileDropdown from "../ProfileDesigns/ProfileDropdown";

type ProfileUser = {
  name?: string | null;
  email: string;
  image?: string | null;
};

type ProfileProps = {
  user: ProfileUser;
  onNavigate?: () => void;
};

const ProfilePage = ({ user, onNavigate }: ProfileProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Sign Out
  const handleSignOut = async () => {
    await authClient.signOut();

    toast.info("Sign out successfully");

    setIsOpen(false);
    onNavigate?.();

    router.push("/");
    router.refresh();
  };

  return (
    
    <div className={`relative ${onNavigate ? "w-full" : "w-fit"}`}>
      {/* Profile Trigger */}
      <ProfileTrigger
        user={user}
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        onNavigate={onNavigate}
      />

      {/* Profile Dropdown */}
      {isOpen && (
        <ProfileDropdown
          user={user}
          onClose={() => setIsOpen(false)}
          onNavigate={onNavigate}
          onSignOut={handleSignOut}
        />
      )}
    </div>
  );
};

export default ProfilePage;
