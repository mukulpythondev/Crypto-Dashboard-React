import { Grid, GridItem } from "@chakra-ui/react"
import LayoutDashboard from "../../Components/LayoutDashboard"
import PortfolioSection from "./components/PortfolioSection"
import PriceSection from "./components/PriceSection"
import Transaction from "./components/Transaction"
import InfoCard from "./components/InfoCard"


const Dashboard = () => {
  return (
    <>
   <LayoutDashboard title={'Dashboard'} >
    <Grid gap={4}
    gridTemplateColumns={{
      base: "repeat(1,1fr)",
      xl:"repeat(2,1fr)"
    }}
    >
      <GridItem colSpan={{
        base:1,
        xl:2
      }} >  <PortfolioSection/></GridItem>
      <GridItem colSpan={1} ><PriceSection/></GridItem>
      <GridItem colSpan={1} ><Transaction/></GridItem>
      <GridItem colSpan={1} ><InfoCard inverted  tagtext={'Loan'} imgurl={'dot_bg.svg'}  text={" Learn more about Loans - Keep your Bitcoin, access it's value without selling it "} /></GridItem>
      <GridItem colSpan={1} ><InfoCard  text={"Learn more about Loans - Keep your Bitcoin, access it's value without selling it"} tagtext={'Contact'} imgurl={'grid_bg.svg'} /></GridItem>
    </Grid>
  
    
    </LayoutDashboard>
    
    </>
  )
}

export default Dashboard