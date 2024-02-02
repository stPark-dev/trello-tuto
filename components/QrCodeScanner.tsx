"use client";

import React, { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrCodeScanner = ({ onScanSuccess }: { onScanSuccess: (decodedText: string) => void }) => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current) {
      const html5QrCode = new Html5QrcodeScanner(
        qrRef.current.id,
        { fps: 10, qrbox: 250 },
        /* verbose= */ false
      );
      html5QrCode.render(onScanSuccess, onScanError);
    }

    return () => {
        // html5QrCode.clear().catch((err: any) => console.log("Error stopping QR Scanner", err));
    };
  }, [onScanSuccess]);

  const onScanError = (error: any) => {
    console.log(`QR Error: ${error}`);
  };

  return <div id="qr-reader" ref={qrRef} />;
};

export default QrCodeScanner;