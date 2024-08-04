import { Box, Heading, Image, useMediaQuery, Text } from '@chakra-ui/react'
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


const SingleProjectCard = ({image}: {image: string}) => {
  return (
    <Box w='350px' h='430px' boxShadow='lg'>
      <Image src={image} w='100%' h='100%' objectFit='cover' borderRadius={[0,'12px']} boxShadow='xl' />
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

      <Box w='90%' mb='7' mx='auto'>
        <Text lineHeight='30px' textAlign='justify'>
          At Vertex Atlantic Architects, we take pride in delivering exceptional projects across residential, commercial, and renovation sectors. Our portfolio reflects our commitment to quality and innovation, showcasing stunning residential homes, efficient commercial spaces, and transformative renovation projects. Each project is a testament to our meticulous attention to detail and our ability to bring our clients' visions to life. From beautiful interior designs to harmonious landscape creations, our work demonstrates our dedication to excellence and customer satisfaction. Explore our diverse range of projects and see how we turn ideas into reality.
        </Text>
      </Box>

      <Box as='section' w='95%' mx='auto'>
      <Swiper
            pagination={{ clickable: true }}
            modules={[Autoplay]}
            className="mySwiper"
            slidesPerView={isMobile ? 1.1 : 3.5}
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