import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin';
import React, { useRef } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../shared/Loading';
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
} from '@chakra-ui/react';
const LogIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()
  const navigateToRegister = ()=>{
    navigate("/register")
  }
  const singInHandler = (event)=>{
    event.preventDefault()
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
  }
  const [
    signInWithEmailAndPassword,
    SignInuser,
    SignInloading,
    SingInerror,
  ] = useSignInWithEmailAndPassword(auth);
  console.log(SignInuser)
  if(SignInuser){
    navigate("/home")
  }
  let signInError;
   if(SingInerror){
    return signInError = <p color={'red'}>Error: {SingInerror.message}</p>
   }
  if (SignInloading) {
    return <Loading/>;
  }
  return (
    <div>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our favourite  <Link color={'blue.400'}>quotes</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input ref={emailRef} type="email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input  ref={passwordRef} type="password" />
            </FormControl>
            <Stack spacing={10}>
             <form onSubmit={singInHandler}>
             <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Text my={2}>
                New To BaniChorontoni? <Link onClick={navigateToRegister} color={'blue.400'}>Register</Link>
              </Text>
              <Button
                type='submit'
                bg={'blue.400'}
                color={'white'}
                width={"100%"}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
             </form>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
      <SocialLogin/>
    </div>
  )
}

export default LogIn;