import { Box, Flex, Image, Heading, Text, Stack } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-scroll'



const Footer = () => {
  return (
    <Box>
    <Box as='footer' w='100%' py='6' bg='blue.700'>
      <Box w='95%' mx='auto'>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
        <Box mb='3'>
          <Image mb='1' src='/assets/logo.png' w='200px' h='100px' objectFit='contain' />
        </Box>
        </Link>
        <Flex justifyContent={['center','space-between']} mb='5' flexWrap='wrap' rowGap={[12,0]}>
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
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href='#'>Home</a>
                </Link>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href='#'>About Us</a>
                </Link>
                <Link
                  activeClass="active"
                  to="clients"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href='#'>Our Clients</a>
                </Link>
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href='#'>Services</a>
                </Link>
                <Link
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <a href='#'>Projects</a>
                </Link>
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                >
                  <a href='#'>Contact</a>
                </Link>
              </Stack>
            </Box>
        </Flex>
      </Box>
    </Box>
    <Box color='gray.300' bg='blue.900' textAlign='center' fontSize={14} py='5'>
      <Text>Copyright &copy; 2023 Vertex Atlantic Arcitects. All rights reserved</Text>
    </Box>
    </Box>
  )
}

export default Footer
