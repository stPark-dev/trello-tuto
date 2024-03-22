"use client"
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { CheckSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { RecoilRoot, RecoilEnv } from "recoil";
import ThemeProvider from '@/components/mui/ThemeProvider';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <RecoilRoot>
            <ThemeProvider>
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
            </ThemeProvider>
        </RecoilRoot>
    )
}

export default PlatformLayout;