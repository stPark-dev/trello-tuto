"use client"
import { ClerkProvider } from '@clerk/nextjs'
import { RecoilRoot, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
        // <ClerkProvider>
        //     {children}
        // </ClerkProvider>
    )
}

export default PlatformLayout;