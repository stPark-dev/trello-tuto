"use client"
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";
import { useSession } from "next-auth/react";
import { Box } from "@mui/material";
import { NEXTAUTH_PROVIDERS } from "@/types/constants";
import SignOutButton from "../_components/SignOutButton";

const happy = Happy_Monkey({
  subsets: ["latin"],
  weight: "400"
});

const ProfilePage = () => {
  const { data: sessionData } = useSession();

  console.info("쎄에에에에에에에에션", sessionData)

  return (
    <Box sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
      <Box className={happy.className} sx={{ fontSize: "80px" }}>Profile Page</Box>

      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", }}>
        {sessionData?.user?.name ? <h2>Hello😄 {sessionData.user.name}!</h2> : null}

        {sessionData?.user?.image ? (
          <>
            <Image
              src={sessionData.user.image}
              width={200}
              height={200}
              alt={`Profile Pic for ${sessionData.user.name}`}
              priority={true}
            />
            <Box sx={{ my: 2 }}>
              <SignOutButton />
            </Box>
          </>
        ) : <Box sx={{ my: 2 }}>
          <SignOutButton />
        </Box>}
      </Box>
    </Box>
  );
};

export default ProfilePage;