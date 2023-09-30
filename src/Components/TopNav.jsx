import {  Heading,Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
  } from '@chakra-ui/react'
  import { FaBars } from 'react-icons/fa'
import React from 'react'
import {FaUserTie} from 'react-icons/fa'
const TopNav = ({title,onOpen }) => {
  return (
    <Box px={'4'}  bg={'white'}  >
      <HStack maxW={'70rem'} px={{
        base:'2',
        xl:'16'
      }} mx={'auto'} justifyContent={'space-between'}  h={'50px'} >
       <Icon as={FaBars} onClick={onOpen}
       display={{
        base:"block",
        lg:"none"
       }}
       />
        <Heading fontWeight={'medium'} fontSize={'28px'} >
          {title} </Heading>
        <Menu>
  <MenuButton as={Button} >
    <Icon fontSize={'24px'} as={FaUserTie} />
  
    
  </MenuButton>
  <MenuList>
    <MenuItem>Login</MenuItem>
    <MenuItem>Support</MenuItem>
    
  </MenuList>
</Menu>
     
    </HStack>
    </Box>
  )
}

export default TopNav