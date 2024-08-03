import { Box, Image, Text, Heading, Stack, Icon } from "@chakra-ui/react"


export const ServiceCard = ({image, title, description, icon}: {image: string, title: string, description: string, icon: any}) => {
    return (
        <Box w='300px' h='auto' borderRadius='4px' border='none' boxShadow='md'>
            <Box w='100%' h='150px' borderBottom='2px solid' borderColor='blue.500'>
                <Image src={image} w='100%' h='100%' objectFit='cover' borderTopLeftRadius='4px' borderTopRightRadius='4px' />
            </Box>
            <Box p='3' pb='6'>
                <Stack spacing={4}>
                    <Icon as={icon} fontSize={30} />
                    <Heading fontSize={20} fontWeight={700}>{title}</Heading>
                    <Text fontSize={15}>{description}</Text>
                </Stack>
            </Box>
        </Box>
    )
}