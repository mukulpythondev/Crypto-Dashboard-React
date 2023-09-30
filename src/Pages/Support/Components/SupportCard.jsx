import {  Box, Flex,  Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'


const SupportCard = ({leftcard,icon,title,text}) => {
  return (
    <Flex gap={8} flexDir={{
        base:'column',
        xl :'row'
    }}  >
        <Stack maxWidth={'380px'}  >
            <Icon boxSize={6} fontWeight={'extrabold'} color={'p.purple'} as={icon} />
<Text textSty  le={'h1'} fontWeight={'medium'} >{title}</Text>
<Text fontSize={'sm'} color={'black.60'} >{text}</Text>
        </Stack>
     <Box w={'full'} maxW={'550px'}>
     {leftcard}
     </Box>
    </Flex>
   
  )
}

export default SupportCard 