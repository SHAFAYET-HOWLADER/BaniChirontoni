import React from 'react'
import {signOut } from 'firebase/auth';
import auth from '../firebase.init';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CustomLink from './CustomLink';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
import { useAuthState } from 'react-firebase-hooks/auth';
const NavLink = ({ children }) => (
    <Link
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Link>
  );
const Navbar = () => {
  const [user] = useAuthState(auth)
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const logout = () => {
      signOut(auth);
    };
  return (
    <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={20}>
      <Flex h={14} alignItems={'center'} justifyContent={'space-between'}>
        <Box>
           <CustomLink to="/home"> BaniChirontoni </CustomLink>
        </Box>
        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
          <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box  pl={8}>
                     <CustomLink to="/allQuotes">All Quotes</CustomLink>
                </Box>
                <Box  pl={8}>
                   <CustomLink to="/postQuotes">  Post A quote</CustomLink>
                </Box>
                <Box  pl={8}>
                    <CustomLink to="/books">
                     Books
                    </CustomLink>
                </Box>
                <Box  pl={8}>
                      <CustomLink to="/dailyQuotes">
                          Daily Quotes
                      </CustomLink>
                </Box>
                <Box  pl={8}>
                      <CustomLink to="/authors">
                        Authors
                      </CustomLink>
                </Box>
                <Box  pl={8}>
                    <CustomLink to='/login'>
                       Login
                    </CustomLink>
                </Box>
            </Flex>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={user?.photoURL}
                />
              </MenuButton>
              <MenuList alignItems={'center'}>
                <br />
                <Center>
                  <Avatar
                    size={'2xl'}
                    src={user?.photoURL}
                  />
                </Center>
                <br />
                <Center>
                  <p>{user?.displayName}</p>
                </Center>
                <br />
                <MenuDivider />
                <MenuItem onClick={logout}>
                  {user&& <>
                    Logout
                  </>}
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </>
  )
}

export default Navbar