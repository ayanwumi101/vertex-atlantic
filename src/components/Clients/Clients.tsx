import { Box, Image, Heading } from '@chakra-ui/react'
import Ticker from 'framer-motion-ticker'
import React from 'react'



const SingleClientImage = ({src}:{src: string}) => {
  return (
    <Box w='200px' h='150px' boxShadow='md' borderRadius='12px' mr='5' p='3'>
      <Image src={src} w='100%' h='100%' objectFit='contain' />
    </Box>
  )
}

const Clients = () => {
  const clients = [
    '/assets/client1.jpeg',
    '/assets/client2.jpeg',
    '/assets/client3.jpeg', 
    '/assets/client4.jpeg',
    '/assets/client5.jpeg',
  ]
  return (
    <Box py='12'>
      <Box mb='12'>
        <Heading fontSize={55} textAlign='center'>Our Clients</Heading>
      </Box>
      <Box>
        <Ticker duration={25}>
          {clients.map((client, index) => (
            <SingleClientImage src={client as string} key={index} />
          ))}
        </Ticker>
      </Box>
    </Box>
  )
}

export default Clients