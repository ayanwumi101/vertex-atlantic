import { Box, Heading, Text, Flex } from '@chakra-ui/react'
import { ServiceCard } from '../Cards'
import {LuConstruction} from 'react-icons/lu'
import { MdArchitecture, MdDesignServices, MdConstruction, MdRealEstateAgent } from 'react-icons/md'
import { GrUserManager } from 'react-icons/gr'
import { TbReportAnalytics } from 'react-icons/tb'



const Services = () => {
  return (
    <Box py='12' px='8' bg='gray.50' id='services'>
      <Box mb='10'>
        <Flex justifyContent={['center','space-between']} flexWrap='wrap'>
          <Heading fontSize={[35,55]} textAlign='center' fontWeight={700} mb={[5,0]}>Services we offer</Heading>
          <Box maxW='500px'>
            <Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dicta inventore doloribus, aliquid eveniet maiores sint debitis nemo neque sed enim similique esse possimus asperiores, unde molestiae vero explicabo! Error.
            </Text>
          </Box>
        </Flex>
      </Box>

      <Box>
        <Flex justifyContent={['center','space-between']} flexWrap='wrap' rowGap='24px'>
          <ServiceCard  
            title='Construction Services'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/hero-image3.jpg'
            icon={LuConstruction}
          />
          <ServiceCard  
            title='Project Management Consultancy'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service9.jpg'
            icon={GrUserManager}
          />
          <ServiceCard  
            title='Preparation of feasibility studies'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service7.jpg'
            icon={TbReportAnalytics}
          />
          <ServiceCard  
            title='Landscape design'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service1.jpg'
            icon={MdConstruction}
          />
          <ServiceCard  
            title=' Real Estate & Residential development'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service2.jpg'
            icon={MdRealEstateAgent}
          />
          <ServiceCard  
            title='Physical planning'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service10.jpg'
            icon={LuConstruction}
          />
          <ServiceCard  
            title='Architectural Design'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service5.jpg'
            icon={MdArchitecture}
          />
          <ServiceCard  
            title='Interior Design'
            description='lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            image='/assets/service11.jpg'
            icon={MdDesignServices}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default Services