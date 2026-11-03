// my profile update

import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "BookNook | Update your profile",
  description: "Update your profile information at BookNook.",
};

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import UpdateProfileForm from '../../_Components/my-profile-ui/UpdateProfileForm';

const UpdateYourProfile = async() => {
   const session = await auth.api.getSession({
        headers: await headers(),
    });

  if (!session) {
    return <div>Please log in to update your profile.</div>;
  }

  const user = session.user;

  return <UpdateProfileForm user={user} />;
};

export default UpdateYourProfile;