import React, { Fragment } from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Flex, Icon, Stack, Text,Grid, Divider, Button } from '@chakra-ui/react'
import {BsCurrencyRupee} from 'react-icons/bs'
import { FaBtc } from 'react-icons/fa'
const Transaction = () => {
   const transactions=[{
       icon: BsCurrencyRupee,
       text:"INR Deposit",
       amount:"₹82,3432.50",
       timestamp:'22-9-2023 10:30 AM '
   },{
    icon:FaBtc,
    text:"BTC Sell",
    amount:"-21.56153521 BTC",
    timestamp:'26-9-2023 7:30 PM '
},{
    icon:BsCurrencyRupee,
    text:"INR Deposit",
    amount:"₹82,3432.50",
    timestamp:'22-9-2023 8:55 PM '
},

]

  return (
    <CustomCard w={{
        base:'72',
        xl:'full'
      }} h={'full'} >
        <Text fontSize={'sm'} mb={6} color={'black.80'}  >
            Recent Transactions
        </Text>
   <Stack gap={4} >
   {
    transactions.map((trans,i)=>{
        return(
           <Fragment  key={trans.timestamp} >
            {i!==0 && <Divider  /> }
             <Flex gap={4} >
            <Grid placeItems={'center'} bg={'black.5'} boxSize={10} borderRadius={'full'} >
          <Icon as={trans.icon} />
            </Grid>
            <Flex justifyContent={'space-between'} w={'full'}  >
                <Stack spacing={0} >
                    <Text textStyle={'h6'} color={'black.80'} >{trans.text}</Text>
                    <Text color={'black.40'} >{trans.timestamp}</Text>
                </Stack>
                <Text textStyle={'h6'} fontWeight={'semibold'} color={'black.80'} >{trans.amount}</Text>
            </Flex>
          </Flex>
           </Fragment>
        )
        
    })
   }
   </Stack>
<Button width={'full'} colorScheme='gray' mt={6} >
    View All
</Button>
    </CustomCard>
  )
}

export default Transaction