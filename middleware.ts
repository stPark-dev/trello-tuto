// import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

import type { NextAuthMiddlewareOptions } from "next-auth/middleware";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextResponse } from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//     publicRoutes: ["/", "/pricing"],
//     afterAuth(auth, req) {
//       if(auth.userId && auth.isPublicRoute) {
//         let path = "/select-org";
//         if(auth.orgId){
//           path = `/organization/${auth.orgId}`
//         }
//         console.info(req.url)
//         const orgSelection = new URL(path, req.url);
//         return NextResponse.redirect(new URL("/main", req.url));
//       }
//       if(!auth.userId && !auth.isPublicRoute) {
//         return redirectToSignIn({ returnBackUrl: req.url });
//       }
//       if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/select-org") {
//         const orgSelection = new URL("/select-org", req.url);
//         return NextResponse.redirect(orgSelection);
//       }
//     }
// });
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
 
export { default } from "next-auth/middleware"

export const config = { matcher: ["/main/:path*"] };