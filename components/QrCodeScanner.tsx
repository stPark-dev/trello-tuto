"use client";

import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const CustomQrScanner: React.FC = () => {
    const qrRef = useRef<HTMLDivElement>(null);
    const [detectedUrl, setDetectedUrl] = useState<string | null>(null);

    // 스캐너 실행 상태를 추적하는 상태 변수 추가
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        let html5QrcodeScanner: Html5Qrcode | null = null;

        if (qrRef.current) {
            html5QrcodeScanner = new Html5Qrcode(qrRef.current.id);

            const config = { fps: 10, qrbox: { width: 250, height: 250 } };
            html5QrcodeScanner.start(
                { facingMode: "environment" },
                config,
                (decodedText: string) => {
                    setDetectedUrl(decodedText);
                    // 스캔 성공 후 스캐너 중지
                    // if (html5QrcodeScanner) {
                    //     html5QrcodeScanner.stop().then(() => {
                    //         setIsScanning(false);
                    //     }).catch((err: Error) => {
                    //         console.error("Unable to stop QR scanner.", err);
                    //     });
                    // }
                },
                (errorMessage: string) => {
                    console.log(`QR Code no longer in front of camera: ${errorMessage}`);
                }
            ).then(() => {
                setIsScanning(true); // 스캐너가 성공적으로 시작되면 상태 업데이트
            }).catch((err: Error) => {
                console.error(`Unable to start QR scanner: ${err}`);
            });
        }

        return () => {
            // 컴포넌트가 언마운트될 때 스캐너가 실행 중이면 중지
            if (html5QrcodeScanner && isScanning) {
                html5QrcodeScanner.stop().then(() => {
                    console.log("QR Scanner stopped.");
                }).catch((err: Error) => {
                    console.error("Unable to stop QR scanner.", err);
                });
            }
        };
    }, []);

    const handleClose = () => {
        setDetectedUrl(null); // Close dialog
    };

    const handleConfirm = () => {
        if (detectedUrl) {
            window.location.href = detectedUrl; // Navigate to the detected URL
        }
    };

    return (
        <Box>
            <div ref={qrRef} id="qr-scanner" style={{ width: "300px", height: "300px" }}></div>
            <Dialog
                open={Boolean(detectedUrl)}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Open URL"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {`QR Code detected: ${detectedUrl}. Do you want to open this URL?`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CustomQrScanner;