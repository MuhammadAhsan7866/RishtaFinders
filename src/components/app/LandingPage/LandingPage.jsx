import React from 'react'
import HomeBanner from './HomeBanner'
import ProcessSlider from './ProcessSlider'
import { Box } from '@chakra-ui/react'
import ComplimentCard from './ServicesArea'
import AllServices from './AllServices'
import CardDisplay from './PricingCard'
import Pricing from './PricingCard'
import UpgradeSection from './CTA'
import SignupSteps from './ProcessSlider'
import RishtaSection from './GetRishta'




const Home = () => {
  return (
    <>
    <HomeBanner/>
    <Box bg={'black'}
    py={{
      base: "70px",
      sm: "70px",
      md: "50px",
      lg: "150px",
      xxl: "200px",
      xxxl: "200px",
    }}
    px={{
      base: "20px",
      sm: "20px",
      md: "20px",
      lg: "0px",
      xxl: "0px",
      xxxl: "0px",
    }}
    >
    <SignupSteps/>
    </Box>
      <Box>
        <AllServices/>
      </Box>
      <Box>
        <RishtaSection/>
      </Box>
      <Box >
      <Pricing/>
      </Box>
      <Box>
        <UpgradeSection/>
      </Box>
    </>
  )
}

export default Home