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
                px={[3,0]}
            >
                <Box 
                    textAlign='center'
                    color='white'
                    maxW='700px'
                >
                    <Heading fontSize={[35,55]} mb='2'>{title}</Heading>
                    <Text fontSize={[20,25]}>{description}</Text>
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
                      title='Comprehensive Project Management'
                      description='From concept to completion, our project management consultancy ensures smooth and efficient execution of your projects.'
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
                      title='Innovative Architecture'
                      description='Our architectural designs blend creativity with functionality, providing innovative solutions tailored to your needs.'
                      image='/assets/hero-image4.jpg'
                />
            </SwiperSlide>
        </Swiper>
    </Box>
  )
}

export default Hero