import { Box, Heading, Flex, Text, Stack, Button } from "@chakra-ui/react"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'


const Contact = () => {
  return (
    <Box py='10' id='contact'>
      <Box w='90%' mx='auto'>
        <Box textAlign='center' mb='10'>
          <Heading fontSize={[35,55]}>Contact Us</Heading>
        </Box>
        <Box>
          <Flex alignItems='center' justifyContent='space-between' flexWrap='wrap'>
              <Box maxW='600px' mb={[5, 0]}>
                <Text textAlign='justify' lineHeight='30px'>
                Ready to bring your vision to life? Our team is here to help you every step of the way. Whether you have questions about our services or want to discuss your project in detail, we’d love to hear from you. Fill out our online contact form, and one of our representatives will get back to you promptly. Follow us on social media for the latest updates and inspiration. We are committed to providing exceptional service and look forward to partnering with you to create something extraordinary. Let’s make your dream project a reality together!
                </Text>
              </Box>
              <Box w='500px' bg='gray.200' borderRadius='18px' minH='400px' py='8' px='8'>
                <Heading fontWeight={700} fontSize={18} mb='5'>Contact Info</Heading>
                <Stack spacing={4}>
                  <Box>
                    <Heading fontSize={16} mb='1' fontWeight={600}>Our Office</Heading>
                    <Text fontSize={15}>
                      Office Address: Office B6 Nipco Plaza Kuchigoro Airport road Abuja
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize={16} mb='1' fontWeight={600}>Quick Contact</Heading>
                    <Text fontSize={15} mb='1'>
                      Email: Info@vertexatlanticarchitects.com
                    </Text>
                    <Text fontSize={15}>
                      Tel: +2348035014495
                    </Text>
                  </Box>
                  <Box>
                    <Heading fontSize={16} mb='1' fontWeight={600}>Opening Hours</Heading>
                    <Text fontSize={15} mb='1'>
                      Monday - Saturday
                    </Text>
                    <Text fontSize={15}>
                      8:00am - 5:00pm
                    </Text>
                  </Box>
                  <Box mb='4'>
                    <Heading fontSize={16} mb='5' fontWeight={600}>Social Media handles</Heading>
                    <Flex alignItems='center' gap='15px'>
                      <FaInstagram fontSize={20} />
                      <FaXTwitter fontSize={20} />
                      <FaFacebook fontSize={20} />
                      <FaLinkedin fontSize={20} />
                    </Flex>
                  </Box>
                  <Button as='a' href="mailto:info@vertexatlanticarchitects.com" py='7' bg='blue.600' color='white' boxShadow='lg' w='100%' fontWeight={500}>Contact Us</Button>
                </Stack>
              </Box>
          </Flex>
        </Box>
      </Box> 
    </Box>
  )
}

export default Contact