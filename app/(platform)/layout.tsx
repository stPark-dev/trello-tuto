"use client"
// import { ClerkProvider } from '@clerk/nextjs'
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { CheckSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { RecoilRoot, RecoilEnv } from "recoil";

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <RecoilRoot>
            <SnackbarProvider
                autoHideDuration={7000}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                hideIconVariant
                action={(key) => (
                    <IconButton onClick={() => closeSnackbar(key)}>
                        <CheckSharp />
                    </IconButton>
                )}
            ></SnackbarProvider>
            {children}
        </RecoilRoot>
        // <ClerkProvider>
        //     {children}
        // </ClerkProvider>
    )
}

export default PlatformLayout;