import React from 'react'
import LayoutDashboard from "../../Components/LayoutDashboard"
import { Card, Stack } from '@chakra-ui/react'
import SupportCard from './Components/SupportCard'
import ContactCard from './Components/ContactCard'
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai'
import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <Card>
      <LayoutDashboard title={'Support'} >
          <Stack spacing={'18px'} >
          <SupportCard title={'Contact Us'}
           text={'Have a question or just want to know more? Feel free  to reach out to us.'}
            icon={AiOutlineMail}
             leftcard={<ContactCard/>} />
               <SupportCard title={'Live Chat '}
           text={'Don’t have time to wait for the answer? Chat with us now.'}
            icon={AiOutlineMessage}
             leftcard={<InfoCard  text={"Learn more about Loans - Keep your Bitcoin, access it's value without selling it"} tagtext={'Contact'} imgurl={'grid_bg.svg'} />} />
          </Stack>
      </LayoutDashboard>
    </Card>
  )
}

export default Support