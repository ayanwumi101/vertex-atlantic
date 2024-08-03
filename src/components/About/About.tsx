import { Box, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react'
import React from 'react'


const About = () => {
  return (
    <Box w='100%' py='8' px='10'>
      <Box mt='3' mb='6'>
        <Heading textAlign='center' fontSize={55}>About Us</Heading>
      </Box>
      <Flex alignItems='center' gap='40px' flexWrap={['wrap', 'nowrap']}>
        <Box w='50%'>
          <Stack spacing={3}>
            <Text lineHeight='30px' textAlign='justify'>
              Vertex Atlantic Architects Ltd. is a registered company that was incorporated in 2009 under the laws of the Federal Republic of Nigeria with the Corporate Affairs Commission.
              We seek to take advantage of the vast experience of its experienced, energetic, dedicated and committed key personnel with several years of practical experience, and the exposure of other professional and technical staff, in the provision of design and building services, as well as in the effective control of project costs, schedules, and efficient post-contract services, for a wide range of physical development projects.  In order to meet the complex demands of today’s construction industry, our team takes pride in client satisfaction; hence we are flexible and prepared to respond readily to the ever increasing individual clients needs to be tailored to its own unique situation and as our name infers.
              Some specific services provided by our firm are;  Construction
                Project Management Consultancy   Preparation of feasibility studies   Preparation of Pre-contract services designs and drawings.   Contract Administration, Supervision and Cost control   Landscape design   Interior Design   Rehabilitation / Modification of facilities 
              Our proficiency spans the following areas of physical development:    Physical planning   Industrial facilities   Healthcare facilities   Education & Vocation   Commercial development   Real Estate & Residential development   Hospitality   Corporate facilities, etc.   
            </Text>
          </Stack>
        </Box>
        <Box w='50%'>
          <Image src='/assets/hero-image2.jpg' boxShadow='xl' borderRadius='24' />
        </Box>
      </Flex>
    </Box>
  )
}

export default About