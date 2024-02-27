import { useState } from 'react';
import { ChakraProvider, Card as ChakraCard, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from '@chakra-ui/react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Update from './Update';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const CustomCard = ({title, video, year, league,user,id}) => {
  const API_URL = 'https://goal-den-gaffes.onrender.com/posts/';
  const deleteData = { title };
  const navigate = useNavigate();
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleDelete = () => {
    if(Cookies.get("User") == user || Cookies.get("User") == "Developer"){
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
    }else{
      toast.error('Only the user who created can delete', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
  };

  const handleUpdateClick = () => {

    if(Cookies.get("User") == user || Cookies.get("User") == "Developer"){
      setShowUpdateForm(true)
    }
    else{
      toast.error('Only the user who created can update!!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored'
      })
    }
    // navigate('/update');
    // console.log(user)
    // console.log(title)
  };

  return (
    <>
      {!showUpdateForm ? (
        <ChakraCard  style={{fontFamily: "", boxShadow: "5px 0px 15px 0px black", height: "70vh", margin: "8%",width: "24vw",marginTop: ""}}>
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
              <Button variant='solid' colorScheme='green' onClick={handleUpdateClick}>
                Update
              </Button>
              <Button variant='ghost' colorScheme='red' onClick={handleDelete}>
                Delete
              </Button>
            </ButtonGroup>
          </CardFooter>
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
      ) : 
      
      (
        <Update
          title={title}
          video={video}
          year={year}
          league={league}
          user={user}
          id = {id}
        />
      )
      }

    </>
  );
};

export default CustomCard;
