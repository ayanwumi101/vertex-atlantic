import { Box, Flex, Button, Image } from '@chakra-ui/react'
import React from 'react'


const Header = () => {
  return (
    <Box as='header' borderBottom='1px solid lightgray'>
        <Box as='nav' w='95%' mx='auto' py='2'>
            <Flex alignItems='center' justifyContent='space-between'>
                <Box w='250px' h='60px'>
                    <Image src='/assets/logo.png' w='100%' h='100%' objectFit='contain' />
                </Box>
                <Box fontWeight={500}>
                    <Flex alignItems='center' gap='40px'>
                        <Box as='a'>About Us</Box>
                        <Box as='a'>Our Clients</Box>
                        <Box as='a'>Services</Box>
                        <Box as='a'>Projects</Box>
                    </Flex>
                </Box>
                <Box>
                    <Button bg='blue.400' color='white' borderRadius='4px' py='5' fontWeight={500}>Contact Us</Button>
                </Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Header