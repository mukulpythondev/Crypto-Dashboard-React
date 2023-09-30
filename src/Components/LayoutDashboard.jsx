import { Box, Container, Flex, calc, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import Sidenav from './Sidenav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const LayoutDashboard = ({title,children}) => {
   const {isOpen, onClose,onOpen}=useDisclosure() 
  return (
    <Box>
<Flex>
   
   <Box  display={{
      base:"none",
      lg:"flex"
     }}>
<Sidenav  />
   </Box>
   <SideDrawer isOpen={isOpen} onClose={onClose} />
   <Box w={'full'} flexGrow={1}>
   <TopNav title={title} onOpen={onOpen} /> 
   <Container maxW={'70rem'} overflowX={'hidden'} overflowY={'auto'} height="calc(100vh - 70px)"  mt={5} px={{
      base:'2',
      xl:'16'
   }} >
{children}
   </Container>
   </Box>
   </Flex>



    </Box>
  )
}

export default LayoutDashboard