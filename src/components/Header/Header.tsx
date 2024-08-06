import { Box, Flex, Button, Image, Text, useMediaQuery } from '@chakra-ui/react'
import { Link } from 'react-scroll';
import { HiBars3BottomRight } from "react-icons/hi2";
import Sidenav from './Sidenav';
import { useState } from 'react';


const Header = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [openSideNav, setOpenSideNav] = useState(false);
  return (
    <Box as='header' borderBottom='1px solid lightgray' bg='white' zIndex='10' id='home' position={['sticky', 'static']} top='10px'>
        {!isMobile ? 
            <Box as='nav' w='95%' mx='auto' py='2'>
                <Flex alignItems='center' justifyContent='space-between'>
                    <Box w='250px' h='60px'>
                        <Image src='/assets/logo.png' w='100%' h='100%' objectFit='contain' />
                    </Box>
                    <Box fontWeight={500}>
                        <Flex alignItems='center' gap='40px'>
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <Box as='a' cursor='pointer'>About Us</Box>
                            </Link>
                            <Link
                                activeClass="active"
                                to="clients"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} 
                            >
                                <Box as='a' cursor='pointer'>Our Clients</Box>
                            </Link>
                            <Link
                                activeClass="active"
                                to="services"
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500} 
                            >
                                <Box cursor='pointer'>Services</Box>
                            </Link>
                            <Link
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}                        
                        >
                            <Text cursor='pointer' fontWeight={500}>Projects</Text>
                        </Link>
                        </Flex>
                    </Box>
                    <Box>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <Button bg='blue.400' color='white' borderRadius='4px' py='5' fontWeight={500}>Contact Us</Button>
                        </Link>
                    </Box>
                </Flex>
            </Box>
            : 
            <Box>
                <Flex alignItems='center' justifyContent='space-between' w='95%' mx='auto' py='2'>
                    <Box w='150px' h='55px'>
                        <Image src='/assets/logo.png' w='100%' h='100%' objectFit='contain' />
                    </Box>
                    <Box>
                        <Button onClick={() => setOpenSideNav(true)}>
                            <HiBars3BottomRight fontSize={30} />
                        </Button>
                    </Box>
                </Flex>
            </Box>
        }
        {openSideNav && <Sidenav setOpenSideNav={setOpenSideNav} />}
    </Box>
  )
}

export default Header