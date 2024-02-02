"use client";

import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrCodeScanner = ({ onScanSuccess }: { onScanSuccess: (decodedText: string) => void }) => {
    const qrRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let html5QrCodeScanner: Html5QrcodeScanner;

        const onScanSuccess = (decodedText: string) => {
            console.log(`QR Code decoded: ${decodedText}`);
            // URL 주소인지 확인
            if (isValidHttpUrl(decodedText)) {
                window.location.href = decodedText; // URL로 리다이렉트
            }
        };
        if (qrRef.current) {
            html5QrCodeScanner = new Html5QrcodeScanner(
                qrRef.current.id,
                { fps: 10, qrbox: 250 },
        /* verbose= */ false
            );
            html5QrCodeScanner.render(onScanSuccess, onScanError);
        }
        return () => {
            if (html5QrCodeScanner) {
                html5QrCodeScanner.clear().catch((err) => console.log("Error stopping QR Scanner", err));
            }
        };
    }, [onScanSuccess]);

    // 주어진 문자열이 유효한 URL인지 확인하는 함수
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
        console.log(`QR Error: ${error}`);
    };

    return <div id="qr-reader" ref={qrRef} />;
};

export default QrCodeScanner;