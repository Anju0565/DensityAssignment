import React from 'react'
import { Button, FlexBox, Heading, HomePage, Span, Title } from '../style/styles'
import trade from "../images/Trade.png"
import feature from "../images/feature.png"
import TradeSection from '../components/TradeSection'
import FeatureSection from '../components/FeatureSection'
import Footer from '../components/Footer'
import Explore from '../components/Explore'
import Earning from '../components/Earning'
import Steps from '../components/Steps'
import Together from '../components/Together'
import Vision from '../components/Vision'
const Home = () => {
  return (
    <HomePage>
        <br /><br /><br /><br /><br /><br />
        <Heading>It's time to trade,<br /> the <Span>future.</Span></Heading>
        <Title>Trade Bitcoin, Ethereum Futures With 125x Leverage And Earn Rewards.</Title>
        <FlexBox><Button>TRADE NOW</Button><Button>Download Now</Button></FlexBox>
        <img src={trade} alt='trade' />
        <TradeSection />
        <img src={feature} alt='feature' height={'60%'} width={'100%'}/>
        <FeatureSection/>
        <Explore />
        <Earning />
        <Steps />
        <Together />
        <Vision />
        <Footer />
    </HomePage>
  )
}

export default Home