import { Box, Text, Flex, Button, VStack, } from '@chakra-ui/react'
import { Link,} from 'react-scroll';
import { MdClose } from "react-icons/md";

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
        <Box
            width='100%'
            height='100%'
            bg='rgba(0, 36, 71, 0.5)'
            position='fixed'
            zIndex='2'
            top='0'
            right='0'
            overflow='hidden'
            // onClick={() => setOpenSideNav(false)}
        >
            <Box
                w='70%'
                h='100%'
                bg='blue.700'
                py='60px'
                px='20px'
                position='absolute'
                right='0'
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
            </Box>
        </Box>
    )
}

export default Sidenav