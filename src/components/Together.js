import React from 'react'
import { Button, ExplorePage, FeatureHeading, FeatureSpan, Title, TradeBorder, TradeBox, TradeCount, TradeText } from '../style/styles'

const Together = () => {
  return (
    <ExplorePage><br /><br /><br /><br /><br /><br />
        <FeatureHeading>Trade Together. <FeatureSpan>Thrive Together.</FeatureSpan></FeatureHeading>
        <Title>Join the fun-filled community on our platform.</Title>
        <TradeCount>
            <TradeBox><TradeText>10,000+</TradeText>Traders</TradeBox>
            <TradeBorder />
            <TradeBox><TradeText>100Mn</TradeText>Daily Volume Traded</TradeBox>
            <TradeBorder /> 
            <TradeBox><TradeText>Daily</TradeText>Trade Analysis</TradeBox>
            <TradeBorder />   
          <TradeBox><TradeText>Live</TradeText>Signals</TradeBox><br /><br />
        </TradeCount><br /><br /><br /><br />
        <Button>JOIN COMMUNITY</Button><br /><br /><br /><br />
    </ExplorePage>
  )
}

export default Together