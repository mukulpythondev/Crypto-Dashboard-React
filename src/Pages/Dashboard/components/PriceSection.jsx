
import React from 'react'
import {CustomCard} from '../../../Chakra/CustomCard'
import { Button, Flex, HStack,Icon,Stack, Text,Image, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'
import {BsArrowUpRight} from 'react-icons/bs'
import {AiFillPlusCircle, AiOutlineMinusCircle}  from 'react-icons/ai'


const PriceSection = () => {

    const timestamps=["8:00 AM","9:00 AM","10:00 AM","11:00 AM","1:00 PM"]
  return (
    <CustomCard w={{
      base:'72',
      xl:'full'
    }}>
 
     <Flex  alignItems={'start'} justifyContent="space-between" >
     <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"14px"}>Current Price </Text>
        </HStack>
      <HStack spacing={4} flexDir={{
        base:'column',
        sm:'row'
      }}  alignItems={{
        base:'flex-start',
        sm:'center'
       }} >
      <HStack>
        <Text fontWeight={'medium'} textStyle={"h2"}>26,345.34</Text>
       <HStack fontWeight={'medium'} color={'green.500 '}>
        <Icon  as={BsArrowUpRight} />

     
       <Text  fontSize={'sm'}>22%</Text>
       </HStack>
        </HStack>
        
      </HStack>

    
      </Stack>
      <HStack flexDir={{
        base:'column',
        sm:'row'
      }} >
        <Button leftIcon={
         <Icon as ={AiFillPlusCircle} /> }>   Buy </Button>
        <Button leftIcon={
         <Icon as ={AiOutlineMinusCircle} /> }> Sell </Button>
      </HStack>
     </Flex>
     <Tabs variant='soft-rounded' >
  <Flex justify={{
    base:'flex-start',
    xl:'flex-end'
  }} >
  <TabList bg={'black.5'} p={'6px'} >
   {
    ['1H','1D','1W', '1M'].map((timer,i)=>{
       return(

           <Tab _selected={{
            bg:'white'
           }} fontSize={'sm'} key={i} p={'4px'} borderRadius={2} >{timer}</Tab>
       )
       
    })
   }
    
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
    <Image mt={'3rem'} w={'100%'} src="Graph.svg" />
   <HStack justify={'space-between'} >
    {
        timestamps.map((time)=>{
            return(
                <Text  key={time} >{time}</Text>
            )
        })
    }
   </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
   
    
     
    </CustomCard>
  )
}

export default PriceSection