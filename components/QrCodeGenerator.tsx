"use client";

import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Button, TextField, Box } from '@mui/material';

const QrCodeGenerator = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [inputText, setInputText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const url = await QRCode.toDataURL(inputText);
            setQrCodeUrl(url);
        } catch (error) {
            console.error(error);
        }
    };

    const downloadQRCode = () => {
        const anchor = document.createElement('a');
        anchor.href = qrCodeUrl;
        anchor.download = 'QRCode.png';
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

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
        <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                my: 2
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "row", gap: 2}}>
                <TextField
                    id="input-text"
                    label="Enter text for QR code"
                    variant="outlined"
                    value={inputText}
                    size="small"
                    onChange={handleChange}
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Generate
                </Button>
            </Box>
            {qrCodeUrl && (
                <>
                    <img src={qrCodeUrl} alt="Generated QR Code" />
                    <Button variant="contained" color="primary" onClick={downloadQRCode}>
                        Download QR Code
                    </Button>
                </>
            )}
        </Box>
    );
};

export default QrCodeGenerator;