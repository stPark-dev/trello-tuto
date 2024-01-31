"use client";

import { useTheme, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRef, useState } from 'react';


const MainOrganisation = () => {
    const theme = useTheme();
    const [uploadedFiles, setUploadedFiles] = useState<Array<{ name: string; url?: string }>>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const Item = styled(Paper)(({ theme }) => ({
        // 기본 스타일
        height: 120,
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        margin: 'auto',

        [theme.breakpoints.up('md')]: {
            width: 480,
        },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    }));
    
    

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const filesArray = Array.from(files).map(file => {
                if (file.type.startsWith('image/')) {
                    return { name: file.name, url: URL.createObjectURL(file) };
                }
                return { name: file.name };
            });
            setUploadedFiles(filesArray);
        }
    };


    return (
        <Box sx={{ backgroundColor: theme.palette.grey[100], p: 5, height: '100vh', overflow: 'auto' }}>
            <Button
                component="label"
                variant="outlined"
                color="warning"
                startIcon={<CameraAltIcon />}
                sx={{ mb: 3 }}
            >
                이미지 업로드
                <VisuallyHiddenInput
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    accept="image/*, .pdf"
                />
            </Button>
            {uploadedFiles.map((file, index) => (
                <Box key={index} mb={5}>
                    {file.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={file.url} alt={file.name} style={{ width: 'auto', height: 'auto' }} />
                    ) : (
                        <span>{file.name}</span>
                    )}
                </Box>
            ))}
            <Grid container spacing={2}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
                    <Grid item xs={12} md={4} key={val}>
                        <Item>{`Building ${val}`}</Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default MainOrganisation;