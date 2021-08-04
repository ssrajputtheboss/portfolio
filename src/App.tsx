import { 
  ChakraProvider ,
  Box ,
  } from '@chakra-ui/react';
import { Footer } from './Components/Footer';
import Header  from './Components/Header';
import Main from './Components/Main';

export default function App() {
  return (
    <ChakraProvider>
      <Box
      textAlign="center"
      alignItems="center"
      p="4"
      w="100px"
      >
      </Box>
      <Main/>
      <Header/>
      <Footer/>
    </ChakraProvider>
  );
}

