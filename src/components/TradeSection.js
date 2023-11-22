import React from 'react'
import { TradeBorder, TradeBox, TradeCount, TradeText } from '../style/styles'

const TradeSection = () => {
  return (
    <TradeCount>
            <TradeBox><TradeText>00%</TradeText>Conversion Fee</TradeBox>
            <TradeBorder />
            <TradeBox><TradeText>500 Mn+</TradeText>Lifetime Volume Traded</TradeBox>
            <TradeBorder /> 
            <TradeBox><TradeText>250+</TradeText>Total Tradable Pairs</TradeBox>
            <TradeBorder />   
          <TradeBox><TradeText>15,000+</TradeText>Traders</TradeBox>
        </TradeCount>
  )
}

export default TradeSection