import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface InsightCardProps {
    title: string,
    color: string,
    data: number,
    ratio: number
}

const InsightCard: React.FC<InsightCardProps> = (props) => {
    return (
        <Card sx={{ maxWidth: 345, borderRadius: '16px', backgroundColor: props.color }}>
            <CardContent>
                <Typography sx={{ fontSize: 14, color: 'gray', fontWeight: 'bold' }} gutterBottom>
                    {props.title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" component="div">
                        {Number(props.data).toLocaleString()}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                            {props.ratio > 0 ? `+${props.ratio}%` : `${props.ratio}%`}
                        </Typography>
                        <Box component="span" sx={{ ml: 0.5 }}>
                            {props.ratio > 0 ? <TrendingUpIcon sx={{ color: 'green' }} /> : <TrendingDownIcon sx={{ color: 'red' }} />}
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default InsightCard;
