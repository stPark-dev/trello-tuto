"use client";

import { useTheme, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Box, Button } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useRef, useState } from 'react';

const MainPage = () => {
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
        <Box sx={{ p: 5, overflow: 'auto' }}>
            메인 페이지
        </Box>
    );
};

export default MainPage;