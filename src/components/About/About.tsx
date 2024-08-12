import { Box, Flex, Heading, Text, Stack, Image, UnorderedList, ListItem, List, ListIcon } from '@chakra-ui/react'
import { MdCheckCircle } from 'react-icons/md';


const About = () => {
  return (
    <Box w="100%" py="10" px={[5, "10"]} bg="gray.100" id="about">
      <Box mt="3" mb="6">
        <Heading textAlign="center" fontSize={[35, 55]}>
          About Us
        </Heading>
      </Box>
      <Flex alignItems="center" gap="40px" flexWrap={["wrap", "nowrap"]}>
        <Box w={["100%", "50%"]}>
          <Stack spacing={3}>
            <Text lineHeight="30px" textAlign="justify">
              Vertex Atlantic Architects Ltd. is a registered company
              incorporated in 2009 under the laws of the Federal Republic of
              Nigeria with the Corporate Affairs Commission. We leverage the
              extensive experience of our dedicated and committed key personnel,
              who bring several years of practical experience, as well as the
              expertise of our professional and technical staff. Our services
              encompass design and building, effective project cost control,
              schedule management, and efficient post-contract services for a
              diverse range of development projects. To meet the complex demands
              of today's construction industry, our team prioritizes client
              satisfaction. We are flexible and responsive to the unique needs
              of each client, tailoring our approach as required.
            </Text>
            <List spacing={2}>
              Our specific services include:
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Construction Project Management
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Architectural Consultancy
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Preparation of Feasibility Studies
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Preparation of Pre-Contract Designs and Drawings
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Contract Administration
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Supervision, and Cost Control
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Landscape Design
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Interior Design
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Rehabilitation/Modification of Facilities
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                Real Estate & Residential Development
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.400" />
                 Physical Planning and Industrial Facilities
              </ListItem>
            </List>
          </Stack>
        </Box>
        <Box w={["100%", "50%"]}>
          <Image
            src="/assets/hero-image2.jpg"
            boxShadow="xl"
            borderRadius="24"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default About