"use client";

import { signIn } from "next-auth/react";
import { AuthProvider } from "@/types/constants";

interface SignInButtonProps {
  provider: AuthProvider;
}

const SignInButton: React.FC<SignInButtonProps> = ({ provider }) => {
  // 각 인증 제공자별 버튼 스타일
  const providerStyles: Record<string, string> = {
    github: "bg-gray-800",
    google: "bg-red-500",
    kakao: "bg-yellow-300",
    naver: "bg-green-600",
  };

  // 인증 제공자별 버튼 텍스트
  const buttonText: Record<string, string> = {
    github: "Sign In With GitHub",
    google: "Sign In With Google",
    kakao: "Sign In With Kakao",
    naver: "Sign In With Naver",
  };
  
  return (
    <button
      className={`px-4 py-2 text-white ${providerStyles[provider]}`}
      onClick={() => signIn(provider, { callbackUrl: "/profile2" })}
      type="button"
    >
      {buttonText[provider]}
    </button>
  );
};

export default SignInButton;