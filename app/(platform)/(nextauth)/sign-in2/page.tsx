import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignInButton from "../_components/SignInButton";
import { NEXTAUTH_PROVIDERS } from "@/types/constants";
import { Box } from "@mui/material";

const SignInPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/main/works/all");
  } else {
    return (
      <Box
        sx={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "cneter", justifyContent: "center", textAlign: "center" }}
      >
        <Box sx={{ fontSize: "50px", mb: 5 }}>NextAuth.js Sign In Page</Box>
        {NEXTAUTH_PROVIDERS.map(provider => (
          <SignInButton key={provider} provider={provider} />
        ))}
      </Box>
    );
  }
};

export default SignInPage;
