
import { Box, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/styles/swiper.css';

interface SliderImage {
    content: string;
}

const CarouselComponent = () => {
    const [images, setImages] = useState<SliderImage[]>([
        {
            content: 'https://source.unsplash.com/1600x900/?nature',
        },
        {
            content: 'https://source.unsplash.com/1600x900/?city',
        },
        {
            content: 'https://source.unsplash.com/1600x900/?food',
        },
    ]);

    return (
        <>
            {/* Carousel */}
            <Box
                sx={{
                    alignItems: "center",
                    my: 5,
                }}>
                <Box
                    sx={{
                        color: "rgb(38, 38, 38)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>효율적인 협업 시스템으로 완성하는</Typography>
                </Box>
                <Box
                    sx={{
                        mb: { sm: 2 },
                        color: "rgb(38, 38, 38)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: "bold" }}>스마트 자산 관리 솔루션</Typography>
                </Box>
                <Box
                    sx={{
                        mb: { sm: 3 },
                        color: "rgb(38, 38, 38)",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" sx={{ color: "text.secondary" }}>팀볼트는 나의 자산을 효율적으로 관리 할 수 있도록 보다 나은 관리 프로세스를 만들어 갑니다.</Typography>
                </Box>
                <Box sx={{ justifyContent: "center", position: "relative" }}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        loop={true}
                        slidesPerView={1}
                        coverflowEffect={{
                            rotate: 5,
                            stretch: 10,
                            depth: 100,
                            modifier: 12,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                                centeredSlides: true
                            },
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={`image-${index}`}>
                                <Image src={image.content} width={800} height={450} alt={`image-${index}`} loading="lazy" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <IconButton className="swiper-button-prev-custom" sx={{
                        position: 'absolute',
                        top: '50%',
                        left: { xs: '5%', md: '30%' },
                        transform: 'translateY(-50%)',
                        backgroundColor: "#F1D773",
                        color: "#FFFFFF",
                        borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: "#e6c065",
                        },
                        zIndex: 100
                    }}><ChevronLeftIcon /></IconButton>
                    <IconButton className="swiper-button-next-custom" sx={{
                        position: 'absolute',
                        top: '50%',
                        right: { xs: '5%', md: '30%' },
                        transform: 'translateY(-50%)',
                        backgroundColor: "#F1D773",
                        color: "#FFFFFF",
                        borderRadius: '100%',
                        '&:hover': {
                            backgroundColor: "#e6c065",
                        },
                        zIndex: 100
                    }}><ChevronRightIcon /></IconButton>
                </Box>
            </Box>
        </>
    )
}

export default CarouselComponent;