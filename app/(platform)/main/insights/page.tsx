"use client";
import { Box, Button } from "@mui/material"
import QrCodeGenerator from "@/components/QrCodeGenerator";
import QrCodeScanner from "@/components/QrCodeScanner";


const MainInsight = () => {
    const handleScanSuccess = (decodedText: string) => {
        console.log(`QR Code decoded: ${decodedText}`);
    };
    const handleClickOpenSearch = async () => {
        const headers = new Headers({ "Content-Type": "application/json" });
        const response = await fetch("/api/opensearch/search", {
            method: "GET",
            headers,
        })
        console.info(response);
    }
    return (
        <>
            <Box sx={{ p: 5, height: "100vh", overflow: "auto" }}>
                인사이트
                <div>
                    <QrCodeGenerator />
                    <QrCodeScanner onScanSuccess={handleScanSuccess} />
                </div>
                <Button variant="outlined" onClick={handleClickOpenSearch} sx={{mt: 4}}>
                    버어어어어어튼
                </Button>
            </Box>
        </>
    )
}

export default MainInsight;