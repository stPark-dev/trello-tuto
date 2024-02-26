"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';
import { AuthProvider } from '@/types/constants';

interface SignInButtonProps {
  provider: AuthProvider;
}

const SignInButton: React.FC<SignInButtonProps> = ({ provider }) => {
  // 각 인증 제공자별 버튼 스타일
  const providerStyles: Record<string, any> = {
    github: { backgroundColor: '#2d333b', '&:hover': { backgroundColor: '#4b5563' } },
    google: { backgroundColor: '#ea4335', '&:hover': { backgroundColor: '#d93025' } },
    kakao: { backgroundColor: '#fee500', color: '#000', '&:hover': { backgroundColor: '#fcd200' } },
    naver: { backgroundColor: '#03c75a', '&:hover': { backgroundColor: '#029e47' } },
  };

  // 인증 제공자별 버튼 텍스트
  const buttonText: Record<string, string> = {
    github: "Sign In With GitHub",
    google: "Sign In With Google",
    kakao: "Sign In With Kakao",
    naver: "Sign In With Naver",
  };

  return (
    <Button
      sx={{ px: 2, py: 1, color: 'white', ...providerStyles[provider] }}
      onClick={() => signIn(provider, { callbackUrl: '/main' })}
    >
      {buttonText[provider]}
    </Button>
  );
};

export default SignInButton;