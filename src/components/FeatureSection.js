import React from 'react'
import { FeatureDescription, FeatureHeading, FeaturePage, FeatureSpan, Title } from '../style/styles'
import densityframe from "../images/densityframe.png"
const FeatureSection = () => {
  return (
    <FeaturePage>
        <FeatureHeading>Trade More.<FeatureSpan> Pay Less.</FeatureSpan></FeatureHeading>
        <Title>Our low Fees Supercharge Your Profits</Title><br />
        <img src={densityframe} alt='DensityFrame' width={'100%'} />
        <FeatureDescription>*Upto 50% Discount - using our best in class referral and rebate program</FeatureDescription>
    </FeaturePage>
  )
}

export default FeatureSection