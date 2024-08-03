import { Box, Flex, Image, Heading, Text, Stack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'



const Footer = () => {
  return (
    <Box as='footer' w='100%' py='6' bg='blue.900'>
      <Box w='95%' mx='auto'>
        <Box mb='3'>
          <Image mb='1' src='/assets/logo.png' w='200px' h='100px' objectFit='contain' />
        </Box>
        <Flex justifyContent='space-between'>
            <Box w='350px'>
              <Box color='gray.200'>
                <Heading mb='2' fontSize={18}>About Us</Heading>
                <Text color='gray.300' mb='5'>
                  Vertex Atlantic Architects Ltd. is a registered company that was incorporated in 2009 under the laws of the Federal Republic of Nigeria with the Corporate Affairs Commission.
                </Text>
                <Flex alignItems='center' gap='15px'>
                  <FaInstagram fontSize={23} />
                  <FaXTwitter fontSize={23} />
                  <FaFacebook fontSize={23} />
                  <FaLinkedin fontSize={23} />
                </Flex>
              </Box>
            </Box>
            <Box w='350px' color='gray.200'>
              <Heading mb='2' fontSize={18}>Contact Address</Heading>
              <Stack spacing={2}>
                <Text>
                  Office Address: Office B6 Nipco Plaza Kuchigoro Airport road Abuja
                </Text>
                <Text>Email: Info@vertexatlanticarchitects.com</Text>
                <Text>Tel: +2348035014495</Text>
              </Stack>
            </Box>
            <Box w='350px' color='gray.200'>
              <Heading mb='2' fontSize={18}>Quick Links</Heading>
              <Stack spacing={2} color='gray.300'>
                <Text>Home</Text>
                <Text>About Us</Text>
                <Text>Services</Text>
                <Text>Projects</Text>
                <Text>Contact</Text>
              </Stack>
            </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default Footer