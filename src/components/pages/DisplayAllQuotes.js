// import { extendTheme } from '@chakra-ui/react'
import {
    Flex,
    Box,
    Container ,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
  } from '@chakra-ui/react';
import React from 'react'
import { CgProfile } from "react-icons/cg";
const DisplayAllQuotes = ({quote}) => {
    const { id, author, quotes, img } = quote;
  return (
    <Container>
    <Box mb={6} borderRadius={8} border='1px' borderColor='gray.200' bg={"#f5e1da"} py={2} px={4} boxShadow='Base' width={"300px"} height="350px">
            <img style={{
                height: "100px",
                width: "100px",
                objectFit: "cover",
                margin: "10px auto",
                borderRadius: "50px"
            }} src={img} alt="img" />
            <Box><q>{quotes}</q></Box>
            <Flex alignItems='center' justifyContent="flex-end"><CgProfile/>&nbsp;<strong>{author}</strong></Flex>
        </Box>
    </Container>
  )
}

export default DisplayAllQuotes