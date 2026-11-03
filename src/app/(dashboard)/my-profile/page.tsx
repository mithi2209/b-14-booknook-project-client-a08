// my profile



import type { Metadata } from "next";
import MyProfilePage from "../_Components/my-profile-ui/MyProfile";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";


export const metadata: Metadata = {
  title: "BookNook | My Profile",
  description: "Explore your profile information at BookNook.",
};


const MyProfile = async() => {

      const session = await auth.api.getSession({
        headers: await headers(),
    });

        if (!session) {
            return <div>Please log in to view your profile.</div>;
        }

        const user = session?.user;

        return <MyProfilePage user={user} />;



};

export default MyProfile;