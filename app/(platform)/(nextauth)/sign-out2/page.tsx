import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import SignOutButton from "../_components/SignOutButton";

const SignOutPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/");
  } else {
    return (
      <div>
        <h1>Sign Out Page</h1>

        <SignOutButton />
      </div>
    );
  }
};

export default SignOutPage;