import React from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FaFacebook } from 'react-icons/fa';
import {Button, Center, Stack, Text } from '@chakra-ui/react';
import auth from '../firebase.init';
import Loading from './shared/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const from = location.state?.from?.pathname || "/"
  if(googleLoading){
    return <Loading/>
  }
  if(googleUser){
    navigate(from, {replace: true})
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