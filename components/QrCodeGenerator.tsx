"use client";

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

const QrCodeGenerator = () => {
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  useEffect(() => {
    generateQrCode("https://example.com");
  }, []);

  const generateQrCode = async (text: string) => {
    try {
      const url = await QRCode.toDataURL(text);
      setQrCodeUrl(url);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {qrCodeUrl && <img src={qrCodeUrl} alt="Generated QR Code" />}
    </div>
  );
};

export default QrCodeGenerator;