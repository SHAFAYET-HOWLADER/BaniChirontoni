import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  ChakraProvider,
} from '@chakra-ui/react';
import theme from '../../fonts/Fonts';
import { Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import DisplayAllQuotes from './DisplayAllQuotes';
const AllQuotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(()=>{
    const url = "http://localhost:5000/getQuotes"
    fetch(url,{
      method: "GET"
    })
    .then(response=> response.json())
    .then(data=> {
      setQuotes(data)
    })
    
  },[])
  return (
    <ChakraProvider theme={theme}>
      <Box my={16}>
      <Box textAlign={"center"}>
      <Heading fontSize='4xl'>Famous Quotes</Heading> 
        <Text fontSize='xl' mb={10}>Read popula quotes written by Philoshper</Text>
      </Box>
     <Box>
      <Grid templateColumns='repeat(4, 1fr)'>
      {
          quotes.map(quote=> <DisplayAllQuotes id={quote.id}
           quote={quote}
          ></DisplayAllQuotes>)
        }
      </Grid>
     </Box>
    </Box>
    </ChakraProvider>
  )
}

export default AllQuotes