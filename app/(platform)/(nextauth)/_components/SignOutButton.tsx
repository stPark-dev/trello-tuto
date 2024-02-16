"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="px-4 py-2 text-white bg-gray-500"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      {"Sign out"}
    </button>
  );
};

export default SignOutButton;