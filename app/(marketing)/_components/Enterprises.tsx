
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Box, Card, CardActions, CardContent, Grid, IconButton, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

interface ImageInterface {
    key: string;
    url: string;
}

interface CardInterface {
    key: string
    url: string;
    content: string;
    corp: string;
    name: string;
}

const EnterprisesComponent = () => {

    const [logoImgs, setLogoImgs] = useState<ImageInterface[]>([
        {
            key: uuidv4(),
            url: '/landing/Corp/empas.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/cocacola.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/kakao.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/lycos.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/msi.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/nate.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/naver.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/NHK.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/sega.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/sonymusic.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/taco.svg',
        },
        {
            key: uuidv4(),
            url: '/landing/Corp/versace.svg',
        },
    ]);

    const [cards, setCards] = useState<CardInterface[]>([
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "A 컴퍼니",
            name: "홍길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "B 컴퍼니",
            name: "박길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "C 컴퍼니",
            name: "김길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "D 컴퍼니",
            name: "이길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "E 컴퍼니",
            name: "심길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "F 컴퍼니",
            name: "최길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "G 컴퍼니",
            name: "곽길동"
        },
        {
            key: uuidv4(),
            url: 'https://source.unsplash.com/1600x900/?nature',
            content: 'Lorem ipsum dolor sit amet consectetur. Sem sagittis vitae laoreet blandit eget leo sit egestas orci. Sollicitudin elit non amet in condimentum quis luctus quis.',
            corp: "H 컴퍼니",
            name: "송길동"
        },
    ]);
    return (
        <>
            <Box sx={{ width: "80vw", margin: "auto" }}>
                <Box
                    sx={{
                        mb: { sm: 2 },
                        color: "rgb(38, 38, 38)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>이미 많은 기업들이 팀볼트와 함께하고 있습니다</Typography>
                </Box>
                <Box
                    sx={{
                        mb: { sm: 3 },
                        color: "rgb(38, 38, 38)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ color: "text.secondary" }}>나의 자산을 효율적으로 관리하여 더 많은 가치를 창조 해보세요.</Typography>
                </Box>
                <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {logoImgs.map((img, index) => (
                        <Grid item xs={12} md={3} key={`image-${index}`}>
                            <Image src={img.url} width={300} height={200} alt={`image-${index}`} />
                        </Grid>
                    ))}
                </Grid>
                <Box id="card" sx={{ display: "flex", flexDirection: "row", my: 10 }}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.key}>
                                <Card variant="outlined" sx={{ mx: 5 }}>
                                    <CardContent>
                                        <Typography sx={{ fontSize: { xs: 10, md: 16 } }}>{card.content}</Typography>
                                    </CardContent>
                                    <CardActions sx={{ justifyContent: "end" }}>
                                        <Typography>{`${card.corp} | ${card.name}`}</Typography>
                                    </CardActions>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </>
    )
}

export default EnterprisesComponent;