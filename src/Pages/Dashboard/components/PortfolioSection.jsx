import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack w={{
      base:'72',
      xl:'full'
    }} flexDir={{
      base:'column',
      xl:'row'
    }} spacing={{
      base:'4',
      xl:'0'
    }} justifyContent={"space-between"}  alignItems={{
      base:'flex-start',
      lg:'center'
     }}  bg={"white"} p={"4"} borderRadius={"xl"}>
     <HStack spacing={{
      base:'2',
      xl:'16'
     }} flexDir={{
      base:'column',
      xl:'row'
    }} alignItems={{
      base:'flex-start',
      lg:'center'
     }} >
     <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"13px"}>Total Portfolio Value</Text>

          <Icon as={AiOutlineInfoCircle}> </Icon>
        </HStack>
        <Text fontWeight={'medium'} textStyle={"h2"}>₹15,345,343</Text>
      </Stack>
      <Stack>
        <HStack color={"black.80"}>
          <Text fontSize={"14px"}>Wallet Balance </Text>
        </HStack>
      <HStack spacing={4} flexDir={{
        base:'column',
        sm:'row'
      }}  alignItems={{
        base:'flex-start',
        sm:'center'
       }} >
      <HStack>
        <Text fontWeight={'medium'} textStyle={"h2"}>23.49392495</Text> <Tag colorScheme="gray" >BTC</Tag>
        </HStack>
        <HStack>
        <Text fontWeight={'medium'} textStyle={"h2"}>₹12,454,934</Text> <Tag colorScheme="gray">INR</Tag>
        </HStack>
      </HStack>
      </Stack>
     </HStack>
      <HStack>
        <Button leftIcon={
         <Icon as ={AiOutlineArrowDown} /> }>   Deposit </Button>
        <Button leftIcon={
         <Icon as ={AiOutlineArrowUp} /> }> Withdraw </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
