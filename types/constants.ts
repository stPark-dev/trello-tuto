export const SUPPORTED_HTTP_METHODS: Array<string> = ["GET", "HEAD", "OPTIONS", "POST", "PUT", "DELETE", "PATCH"];
export const BODY_HTTP_METHODS: Array<string> = ["POST", "PUT", "PATCH"];
export const LOGGING_HEADERS: Array<string> = ["content-type", "referer", "from", "size", "sort"];

export const THEMES: Array<string> = ["light", "dark"];

export const NEXTAUTH_PAGES: Record<string, string> = {
  signIn: "/sign-in2",
  signOut: "/sign-out2",
};

export type AuthProvider = 'github' | 'google' | 'kakao' | 'naver';
export const NEXTAUTH_PROVIDERS: AuthProvider[] = ["github", "google", "kakao", "naver"];

export const NEXTAUTH_SECRET_KEY: Uint8Array = new TextEncoder().encode(process.env.NEXTAUTH_SECRET);