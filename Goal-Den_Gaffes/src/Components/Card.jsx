import { ChakraProvider, Card as ChakraCard, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import React from 'react';

const CustomCard = ({title,video,year,league}) => {
  return (
    <ChakraCard maxW='sm' style={{fontFamily: "",boxShadow: "5px 0px 15px 0px black",height: "70vh",margin: "6%"}}>
    <CardBody>
    <video
  width="560"
  height="315"
  controls
  style={{ width: "100%", borderRadius: "10px" }}
>
  <source src={video} type="video/mp4" />
  {/* Your browser does not support the video tag. */}
</video>
  <Stack mt='1' spacing='1'>
    <Heading color='blue.600' style={{ fontSize: "20px", margin: "0", padding: "20px 0", fontFamily: "'Poppins', sans-serif" }}>{title}</Heading>
    <Text>
      {year}
    </Text>
    <Text color='blue.600' fontSize='2xl'>
      {league}
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
