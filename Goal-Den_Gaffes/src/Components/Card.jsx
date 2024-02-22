import { useState } from 'react';
import { ChakraProvider, Card as ChakraCard, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CustomCard = ({title, video, year, league}) => {
  // const navigate = useNavigate()
  console.log(video )
  const API_URL = 'https://goal-den-gaffes.onrender.com/posts/';
  const deleteData = { title };
  const [showUpdateForm, setShowUpdateForm] = useState(false);



  const handleDelete = () => {
    axios.delete(API_URL, { data: deleteData })
      .then(response => {
        toast.success('Post Deleted Successfully!!. Reload to get the new updated data.', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
        });
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  };



  return (
    <ChakraCard maxW='sm' style={{fontFamily: "", boxShadow: "5px 0px 15px 0px black", height: "70vh", margin: "6%"}}>
      <CardBody>
        <video
          width="560"
          height="315"
          controls
          style={{ width: "100%", borderRadius: "10px", height: "50%" }}
        >
          <source src={video} type="video/mp4" />
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
            <Link to={"/update"}>
            <Button variant='solid' colorScheme='green' >
              Update
            </Button>
            </Link>
            <Button variant='ghost' colorScheme='red' onClick={handleDelete}>
              Delete
            </Button>
          </ButtonGroup>
      </CardFooter>
      {/* <Update title={title} league={league} year={year} video={video} handleUpdate={handleUpdate} /> */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{width: "40vw"}}
      />
    </ChakraCard>
  );
};

export default CustomCard;
