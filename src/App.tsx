import { 
  ChakraProvider ,
  Box ,
  } from '@chakra-ui/react';
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
    </ChakraProvider>
  );
}

