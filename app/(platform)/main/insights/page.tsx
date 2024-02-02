"use client";

import { Box } from "@mui/material"
import QrCodeGenerator from "@/components/QrCodeGenerator";
import QrCodeScanner from "@/components/QrCodeScanner";

const MainInsight = () => {
    const handleScanSuccess = (decodedText: string) => {
        console.log(`QR Code decoded: ${decodedText}`);
    };
    return (
        <>
            <Box sx={{ p: 5, height: "100vh", overflow: "auto" }}>
                인사이트
                <div>
                    <QrCodeGenerator />
                    <QrCodeScanner onScanSuccess={handleScanSuccess} />
                </div>
            </Box>
        </>
    )
}

export default MainInsight;