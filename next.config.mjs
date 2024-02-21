/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "placehold.co"
          },
          {
            protocol: "https",
            hostname: "avatars.githubusercontent.com"
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.co"
          },
          {
            protocol: "https",
            hostname: "lh3.googleusercontent.com"
          },
          {
            protocol: "https",
            hostname: "phinf.pstatic.net"
          },
          {
            protocol: "http",
            hostname: "k.kakaocdn.net"
          },
          {
            protocol: "https",
            hostname: "source.unsplash.com"
          }
        ]
      },
};

export default nextConfig;
