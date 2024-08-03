import { Box, Heading, Text } from '@chakra-ui/react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SingleHeroCard = ({title, description, image}: {image: string, description: string, title: string}) => {
    return (
        <Box
            bgImage={image}
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            width='100%'
            height='550px'
            backgroundPosition='center'
        >
            <Box
                w='100%'
                h='100%'
                backgroundColor='rgba(0, 0, 0, 0.7)'
                display='flex'
                alignItems='center'
                justifyContent='center'
                px={[2,0]}
            >
                <Box 
                    textAlign='center'
                    color='white'
                >
                    <Heading fontSize={[35,55]} mb='2'>{title}</Heading>
                    <Text fontSize={25}>{description}</Text>
                </Box>
            </Box>
        </Box>
    )
}



const Hero = () => {
  return (
    <Box
        w='100%'
        h="550px"
        alignItems="center"
        justifyContent="center"
    >
        <Swiper
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            style={{ height: '100%', width: '100%' }}
        >
            <SwiperSlide>
                <SingleHeroCard 
                      title='Build Your Dreams With Us'
                      description='Modern construction and architecture company'
                      image='/assets/hero-image1.jpg'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Your Productivity Begins Here'
                      description='Rejoice Spaces'
                      image='/assets/hero-image2.jpg'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Ready to Level up?'
                      description='Build with vertex atlantic architects'
                      image='/assets/hero-image3.jpg'
                />
            </SwiperSlide>
            <SwiperSlide>
                <SingleHeroCard 
                      title='Ready to Level up?'
                      description='Build with vertex atlantic architects'
                      image='/assets/hero-image4.jpg'
                />
            </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default Hero