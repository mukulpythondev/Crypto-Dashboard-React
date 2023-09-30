import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import LayoutDashboard from "../../Components/LayoutDashboard"
import {AiOutlineDownload} from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Tables from './Components/Tables'
import { BsSearch } from 'react-icons/bs'
const Transaction = () => {

  const tabs=[{
    name:"All",
    count:142
  },{
    name:"Deposit",
    count:52
  },{
    name:"Withdraw",
    count:88
  },{
    name:"Trade",
    count:237
  },


]
  return (
   
      <LayoutDashboard title={'Transactions'}>
        <Flex justify={{
          base:'center',
          xl:'end'
        }} mb={2}  mt={2}>
          <Button leftIcon={<Icon as={AiOutlineDownload} />} >
              Export as CSV
          </Button>
        </Flex>
     <Card>
     <Tabs  >
  <TabList pt={2} display={'flex'} justifyContent={'space-between'}  >
 <HStack display={{
      base:'none',
      lg:'flex'
     }}>
 {
      tabs.map((tab)=>{
       return(
        <Tab  display={'flex'} key={tab.name} gap={2} > {tab.name}
         <Tag borderRadius={'full'} colorScheme='gray' >{tab.count}</Tag> </Tab>
       )
      })
    }
 </HStack>

<InputGroup display={{
      base:'none',
      xl:'block'
     }} maxW={'200px'} pr={6} >
    <InputLeftElement pointerEvents='none'>
     <Icon as={BsSearch} />
    </InputLeftElement>
    <Input placeholder='Search...' />
  </InputGroup>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Tables/>
    </TabPanel>
    <TabPanel>
    <Tables/>
    </TabPanel>
    <TabPanel>
    <Tables/>
    </TabPanel>
    <TabPanel>
    <Tables/>
    </TabPanel>
  </TabPanels>
  
</Tabs>
     </Card>
      </LayoutDashboard>
  
  )
}

export default Transaction