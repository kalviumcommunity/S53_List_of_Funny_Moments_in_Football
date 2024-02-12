import { ChakraProvider, Card as ChakraCard, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';

const CustomCard = () => {
  return (
    <ChakraCard maxW='sm' style={{margin: "10vw",fontFamily: "",boxShadow: "5px 0px 15px 0px black"}}>
      <CardBody>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dH_8viSOIJI?si=fwf-KGv4mZ0bGL7L&amp;start=21" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{width: "100%",borderRadius: "10px"}}></iframe>
        <Stack mt='1' spacing='1'>
        <Heading color='blue.600' style={{ fontSize: "20px", margin: "0", padding: "20px 0", fontFamily: "'Poppins', sans-serif" }}>Zlatan Bicycle Kick Fail</Heading>

          <Text>
            November 2013
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            Champions League
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='green'>
            Update
          </Button>
          <Button variant='ghost' colorScheme='red'>
            Delete
          </Button>
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
  );
};

export default CustomCard;
