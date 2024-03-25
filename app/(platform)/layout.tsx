"use client"
import { SnackbarProvider, closeSnackbar } from 'notistack'
import { CheckSharp } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const PlatformLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
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
        >
            {children}
        </SnackbarProvider>
    )
}

export default PlatformLayout;