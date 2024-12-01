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
    <Box bg={'black'} py={'150px'}>
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