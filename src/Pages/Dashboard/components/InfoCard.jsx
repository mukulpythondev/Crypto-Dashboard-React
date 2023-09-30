import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({imgurl,text,tagtext,inverted}) => {
  return (
    <CustomCard w={{
      base:'72',
      xl:'full'
    }} bgColor={inverted? 'white':"p.purple"} bgImage={imgurl} bgSize={'cover'} bgRepeat={'no-repeat'} >
        <Tag mb={'8px'} bg={inverted? 'p.purple':"white"} color={inverted? 'white':'p.purple'} >
            {tagtext}
        </Tag>
        <Text color={inverted? 'black':'white'} fontWeight={'medium'} textStyle={'h5'} >
         {text}
        </Text>
    </CustomCard>
  )
}

export default InfoCard