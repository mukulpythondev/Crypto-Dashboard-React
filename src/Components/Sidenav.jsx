import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { RxDashboard  } from 'react-icons/rx';
import {BsArrowDownUp } from 'react-icons/bs';
import {BiSupport } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';

const Sidenav = () => {

  const location=useLocation()
  const islinkactive=(link)=>{
          return location.pathname==link;
  }
  const navlinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: '/',
    },
    {
      icon:BsArrowDownUp,
      text: "Transaction",
      link: '/transactions',
    },
  ];

  return (
    <Stack bg={'white'} justifyContent={'space-between'} boxShadow={{
      base:"none",
      lg:"lg"
    }} w={{
      base:"full",
      lg:"16rem"
    }} 
     h={"100vh"} 
    
     
     >
   <Box>

   <Heading textAlign={'center'} as={'h1'} fontSize={'3xl'} pt={12} >
      MukulDev
     </Heading>
      <Box mx={4} mt={6} >
      {navlinks.map((nav) => (
        <Link key={nav.text} to={nav.link} >
        <HStack color={islinkactive(`${nav.link}`)?'#171717':"black.60"} bg={islinkactive('/support')?'#F3F3F7':"transparent"} borderRadius={'10px'}    _hover={
         { bg:'#F3F3F7',
           color:'#171717'
        }
        } >
          <Icon as={nav.icon} />
          <Text fontSize={'14px'}  fontWeight={'semibold'} py={3} px={4} >{nav.text}</Text>
        </HStack>
        </Link>
      ))}
       </Box>
   </Box>
<Box mx={4} mb={{
  base:'60px',
  xl:'5'
}}>
<Link to={'/support'} >
<HStack color={islinkactive('/support')?'#171717':"black.60"} bg={islinkactive('/support')?'#F3F3F7':"transparent"} borderRadius={'10px'}   _hover={
         { bg:'#F3F3F7',
           color:'#171717'
        }
        
        } >
          <Icon as={BiSupport} />
          <Text fontSize={'14px'}  fontWeight={'semibold'} py={3} px={4} >Support</Text>
        </HStack></Link>

</Box>

    </Stack>
  );
};

export default Sidenav;
