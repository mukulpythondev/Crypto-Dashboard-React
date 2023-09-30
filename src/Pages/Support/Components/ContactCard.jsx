import {Stack, Input, Textarea,Box, Button, Card, Checkbox,FormControl, FormLabel, HStack, Text, } from '@chakra-ui/react'
import React from 'react'

const ContactCard = () => {
  return (
    <Card   p={6} borderRadius={'1rem'} >
    <Text fontSize={'sm'}>
    You will receive response within 24 hours of time of submit.
    </Text>
    <HStack py={2} flexDir={{
    base:'column',
    md :'row'
}} >
    <FormControl >
  <FormLabel>Name</FormLabel>
  <Input placeholder='Enter Your Name'   />
  </FormControl>
     <FormControl>
     <FormLabel>Surname</FormLabel>
  <Input placeholder='Enter Your Surname'   />
     </FormControl>
    </HStack>
    <FormLabel>Email</FormLabel>
  <Input  type='email' placeholder='Enter Your Email'   />
  <FormLabel py={2}>Message</FormLabel>
  <Textarea  placeholder='Write Message..'   />
  <Checkbox py={2} defaultChecked >I agree <Box as='span' color={'p.purple'} > Terms & Conditions </Box> </Checkbox>
  <Stack>
    <Button fontSize={'sm'} >Send a Message</Button>
    <Button fontSize={'sm'} colorScheme='gray' >Book a Meeting</Button>
  </Stack>
    </Card>
  )
}

export default ContactCard