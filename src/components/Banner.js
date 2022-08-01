import React from 'react'
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    vertical: true,
    dots: false,
    arrows: false,
    centerPadding: "0px",
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Read Quotes
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Get Motivation
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          "I always like walking in the rain, so no one can see me crying"
            <p>Charlie Chaplin</p>
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
             See Quotes
            </Button>
            <Button 
            rounded={'full'}    
            _hover={{ bg: 'blue.400', color: "white"}}
             color={'black'}
              >Post A quote</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
      <div>
      <Image
          alt={'Login Image'}
          height={'90%'}
          src={
            'https://www.goalcast.com/wp-content/uploads/2017/07/Stephen-Hawking1-copy.jpg'
          }
        />
      </div>
      </Flex>
    </Stack>
  );
}

export default Banner