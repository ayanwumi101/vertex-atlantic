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
            <Text textAlign='justify'>
              We offer comprehensive construction, architecture, renovation, interior design, project management, and consultation services. Our dedicated team ensures exceptional quality, innovative design, and seamless project execution, transforming your visions into reality with professionalism and precision.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box>
        <Flex justifyContent={['center','space-between']} flexWrap='wrap' rowGap='24px'>
          <ServiceCard  
            title='Construction Services'
            description='Comprehensive construction solutions, from planning to execution, ensuring timely and quality delivery of projects.'
            image='/assets/hero-image3.jpg'
            icon={LuConstruction}
          />
          <ServiceCard  
            title='Project Management Consultancy'
            description='Expert guidance and management of projects to ensure efficient and successful completion.'
            image='/assets/service9.jpg'
            icon={GrUserManager}
          />
          <ServiceCard  
            title='Preparation of feasibility studies'
            description='Detailed feasibility studies to assess project viability, risks, and potential outcomes.'
            image='/assets/service7.jpg'
            icon={TbReportAnalytics}
          />
          <ServiceCard  
            title='Landscape design'
            description="Creating functional and aesthetically pleasing outdoor spaces that enhance your property's value."
            image='/assets/landscape.jpeg'
            icon={MdConstruction}
          />
          <ServiceCard  
            title='Real Estate & Residential development'
            description="Development services for residential and real estate projects, delivering innovative and sustainable solutions."
            image='/assets/real-estate.jpeg'
            icon={MdRealEstateAgent}
          />
          <ServiceCard  
            title='Physical planning'
            description='Strategic planning to optimize land use and development, ensuring orderly and sustainable growth.'
            image='/assets/physical-planning.jpeg'
            icon={LuConstruction}
          />
          <ServiceCard  
            title='Architectural Design'
            description='Innovative architectural solutions tailored to your specific needs and preferences.'
            image='/assets/architecture.jpg'
            icon={MdArchitecture}
          />
          <ServiceCard  
            title='Interior Design'
            description='Transforming interiors with stylish and functional designs that reflect your unique taste.'
            image='/assets/service11.jpg'
            icon={MdDesignServices}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default Services