"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";


const QrCodeScanner = ({ onScanSuccess }: { onScanSuccess: (decodedText: string) => void }) => {
    const router = useRouter()
    const qrRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [decodedUrl, setDecodedUrl] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    const handleConfirm = () => {
        router.replace(decodedUrl);
        setOpen(false);
    };

    useEffect(() => {
        let html5QrCodeScanner: Html5QrcodeScanner;

        const onScanSuccess = (decodedText: string) => {
            console.info(`QR Code decoded: ${decodedText}`);
            let finalUrl = decodedText;
            if (decodedText.startsWith('www')) {
                finalUrl = `https://${decodedText}`;
            }
            if (isValidHttpUrl(finalUrl)) {
                setDecodedUrl(finalUrl);
                setOpen(true);
            }
        };
        if (qrRef.current) {
            html5QrCodeScanner = new Html5QrcodeScanner(
                qrRef.current.id,
                { fps: 10, qrbox: 250 },
                false
            );
            html5QrCodeScanner.render(onScanSuccess, onScanError);
        }
        return () => {
            if (html5QrCodeScanner) {
                html5QrCodeScanner.clear().catch((err) => console.error("Error stopping QR Scanner", err));
            }
        };
    }, [onScanSuccess, router]);


    const isValidHttpUrl = (string: string) => {
        let url;

        try {
            url = new URL(string);
        } catch (_) {
            return false;
        }

        return url.protocol === "http:" || url.protocol === "https:";
    };

    const onScanError = (error: any) => {
        console.error(`QR Error: ${error}`);
    };

    return (
        <>
            <div id="qr-reader" ref={qrRef} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>QR 코드 인식</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        QR 코드에서 URL을 인식했습니다. 해당 URL로 이동하시겠습니까? : {decodedUrl}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>취소</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        확인
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default QrCodeScanner;