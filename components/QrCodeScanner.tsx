"use client";

import React, { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const CustomQrScanner: React.FC = () => {
    const qrRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let html5QrcodeScanner: Html5Qrcode | null = null;
        
        if (qrRef.current) {
            html5QrcodeScanner = new Html5Qrcode(qrRef.current.id);

            const config = { fps: 10, qrbox: { width: 250, height: 250 } };
            html5QrcodeScanner.start(
                { facingMode: "environment" }, 
                config,
                (decodedText: string) => {
                    alert(`QR Code detected: ${decodedText}`);
                    // Optionally, you can stop the camera after a successful scan.
                    if (html5QrcodeScanner) {
                        html5QrcodeScanner.stop();
                    }
                },
                (errorMessage: string) => {
                    // Log errors, if needed.
                    console.log(`QR Code no longer in front of camera: ${errorMessage}`);
                }
            ).catch((err: Error) => {
                console.error(`Unable to start QR scanner: ${err}`);
            });
        }

        return () => {
            if (html5QrcodeScanner) {
                html5QrcodeScanner.stop().then(() => {
                    console.log("QR Scanner stopped.");
                }).catch((err: Error) => {
                    console.error("Unable to stop QR scanner.", err);
                });
            }
        };
    }, []);

    return <div ref={qrRef} id="qr-scanner" style={{width: "600px", height: "300px"}}></div>;
};

export default CustomQrScanner;
