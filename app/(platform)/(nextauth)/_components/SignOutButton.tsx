import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <Button
      variant="contained"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
      sx={{
        px: 2, 
        py: 1,
        color: "white", 
        bgcolor: "grey",
        '&:hover': {
          bgcolor: "grey.500",
        }
      }}
    >
      {"Sign out"}
    </Button>
  );
};

export default SignOutButton;