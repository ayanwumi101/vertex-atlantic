import { Box, Text, Flex, Button, VStack, } from '@chakra-ui/react'
import { Link,} from 'react-scroll';
import { MdClose } from "react-icons/md";
import { motion } from 'framer-motion';


const MotionBox = motion(Box);


const Sidenav = ({ setOpenSideNav }: {setOpenSideNav: (value: boolean) => void}) => {
    const links = [
        {
            name: 'About Us',
            link: 'about'
        },
        {
            name: 'Our Clients',
            link: 'clients'
        },
        {
            name: 'Services',
            link: 'services'
        },
        {
            name: 'Projects',
            link: 'projects'
        },
        {
            name: 'Contact Us',
            link: 'contact'
        }
    ]
    return (
        <MotionBox
            width='100%'
            height='100%'
            backdropFilter='blur(8px)' 
            bg='rgba(0, 36, 71, 0.5)'
            position='fixed'
            zIndex='2'
            top='0'
            right='0'
            overflow='hidden'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4 }}
            // onClick={() => setOpenSideNav(false)}
        >
            <MotionBox
                w='70%'
                h='100%'
                bg='blue.700'
                py='60px'
                px='20px'
                position='absolute'
                right='0'
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.6 }}
            >
                <Button bg='none' p='0' mb='10' _hover={{ bg: 'none', p: 0 }} onClick={() => setOpenSideNav(false)}><MdClose color='white' size={35} /></Button>
                <Flex flexDir='column' color='white'>
                    <VStack color='white' spacing='25px'>
                        {links.map((link) => (
                            <Link
                                activeClass="active"
                                to={link.link}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}
                            >
                                <Text onClick={() => setOpenSideNav(false)} fontSize={16} cursor='pointer' fontWeight={500}>{link.name}</Text>
                            </Link>
                        ))}
                    </VStack>
                </Flex>
            </MotionBox>
        </MotionBox>
    )
}

export default Sidenav