import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook } from 'react-icons/fa';
import {Button, Center, Stack, Text } from '@chakra-ui/react';
import auth from '../firebase.init';
import Loading from './shared/Loading';
const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  console.log(googleUser)
  if(googleLoading){
    return <Loading/>
  }
  return (
    <>
    <Center p={8}>
    <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
      {/* Facebook */}
      <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>

      {/* Google */}
      <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />}>
        <Center>
          <Text onClick={() => signInWithGoogle()}>Sign in with Google</Text>
        </Center>
      </Button>
    </Stack>
  </Center>
    </>
  )
}

export default SocialLogin