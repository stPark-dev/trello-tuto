"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import { Medal } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Box } from "@mui/material";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2"
})

const textFont = Poppins({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900"
  ],
});

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className={cn("flex items-center justify-center flex-col", headingFont.className)}>
        <div className="mb-4 flex items-center justify-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="h-6 w-6 mr-2" />
          No.1 Asset management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          TeamVolt assists in
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r text-center from-sky-600 to-indigo-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          building asset management.
        </div>
      </div>
      <div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
        Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with TeamVolt.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Get TeamVolt for free
        </Link>
      </Button>

      <Box className={cn("mx-auto mt-20 mb-20 flex max-w-5xl flex-col gap-20 sm:mt-40 sm:gap-40", headingFont.className)}>
        {/* Intro */}
        <Box>
          <Box className="mb-6 px-6 lg:px-8">
            <Box className="mx-auto max-w-2xl sm:text-center">
              <h2 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
                Start your Cooperation with your co-workers
              </h2>
              <Box className={cn("mt-4 text-lg text-gray-600", textFont.className)}>
                Follow these steps to cooperate with your co-workers
              </Box>
            </Box>
          </Box>
          {/* steps */}

          <ol className="my-2 space-y-4 pt-2 md:flex md:space-x-6 md:space-y-0 md:px-8">
            <li className="md:flex-1">
              <Box className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 1
                </span>
                <span className="text-xl font-semibold">
                  Sign up for a Free Account
                </span>
              </Box>
            </li>
            <li className="md:flex-1">
              <Box className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 2
                </span>
                <span className="text-xl font-semibold">
                  Make a <span className="text-blue-600">Assets</span> &{" "}
                  <span className="text-blue-600">Users</span>
                </span>
              </Box>
            </li>
            <li className="md:flex-1">
              <Box className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
                <span className="text-sm font-medium text-blue-600">
                  Step 3
                </span>
                <span className="text-xl font-semibold">
                  Start Your coorperation
                </span>
              </Box>
            </li>
          </ol>
        </Box>
      </Box>
      <Image
        alt="Mask"
        src="/v1-mask-dark.png"
        width={1440}
        height={173}
        style={{
          opacity: 0.8,
          zIndex: 0,
          width: "100vw",
          height: "auto",
          bottom: "0px",
        }}
      />
    </div>
  );
};


export default MarketingPage;