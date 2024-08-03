import { Box, Heading, Image, useMediaQuery } from '@chakra-ui/react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SingleProjectCard = ({image}: {image: string}) => {
  return (
    <Box w='350px' h='430px' boxShadow='lg'>
      <Image src={image} w='100%' h='100%' objectFit='cover' borderRadius='12px' boxShadow='xl' />
    </Box>
  )
}

const Projects = () => {
  const projects = [
    '/assets/project1.jpeg',
    '/assets/project2.jpeg',
    '/assets/project3.jpeg',
    '/assets/project4.jpeg',
    '/assets/project5.jpeg',
    '/assets/project6.jpeg',
    '/assets/project7.jpg',
  ]
  const [isMobile] = useMediaQuery('(max-width: 762px)')
  return (
    <Box py='10' id='projects'>
      <Box mb='12'>
        <Heading fontSize={[35,55]} textAlign='center'>Projects</Heading>
      </Box>

      <Box as='section' w='95%' mx='auto'>
      <Swiper
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerView={isMobile ? 1.2 : 3.5}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            style={{ height: '100%', width: '100%' }}
        >
          {projects.map((item: string) => <SwiperSlide>
            <SingleProjectCard image={item} />
          </SwiperSlide>)}
        </Swiper>
      </Box>

    </Box>
  )
}

export default Projects